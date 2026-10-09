import { COMPANY } from './config.js';
import { logo } from './logo.js';
import { buildModel } from './model.js';
import { renderQuotation } from './quotation.js';
import { renderInvoice } from './invoice.js';
import { computeChecks } from './checks.js';
import { buildForm, buildSettings } from './form.js';
import { getTour } from './tours/index.js';
import { loadState, loadSettings, saveState, saveSettings, clearAll, DEFAULT_STATE } from './state.js';
import { COMPANY_SETTINGS_DEFAULT } from './config.js';
import { fmtShort, fmtFull, inr0 } from './format.js';

const $ = (s) => document.querySelector(s);
const A4_PX = 793.7; // 210 mm at 96 dpi

let state = loadState();
let settings = loadSettings();
const photos = {};            // uploaded photos live in memory only
let form = null;
let checksOpen = true;

$('#brand').innerHTML = String(logo('color', 22));

// ---------- rendering ----------
function render() {
  const m = buildModel(state, settings);
  m.photos = photos;
  const pages = state.docType === 'invoice' ? renderInvoice(m) : renderQuotation(m);
  const preview = $('#preview');
  preview.innerHTML = pages.map((p) => `<div class="sheet">${p}</div>`).join('');
  fit();

  const overflow = [];
  preview.querySelectorAll('.sheet > .page').forEach((pg, i) => { if (pg.scrollHeight > pg.clientHeight + 2) overflow.push(i + 1); });
  paintChecks(computeChecks(state, settings, m, overflow));

  form.sync({
    tripText: `Trip runs ${fmtShort(m.start)} to ${fmtFull(m.end)} (${m.tour.dayCount} days).`,
    priceText: `Total for ${m.adultsLabel}: ${inr0(m.base)}`,
  });
}

function fit() {
  const w = $('.stage').clientWidth - 32;
  const z = Math.max(0.3, Math.min(1.25, w / A4_PX));
  $('#preview').style.setProperty('--z', z.toFixed(4));
}

function paintChecks(list) {
  const warns = list.filter((c) => c.level === 'warn').length;
  const box = $('#checks');
  box.innerHTML = '';
  const d = document.createElement('details');
  d.open = checksOpen;
  d.addEventListener('toggle', () => { checksOpen = d.open; });
  const s = document.createElement('summary');
  s.append('Before you send');
  const c = document.createElement('span');
  c.className = 'count ' + (warns ? 'count--warn' : 'count--ok');
  c.textContent = warns ? `${warns} to do` : 'All set';
  s.append(c);
  const ul = document.createElement('ul');
  list.forEach((x) => { const li = document.createElement('li'); li.className = 'ck-' + x.level; li.textContent = x.text; ul.append(li); });
  if (!list.length) { const li = document.createElement('li'); li.textContent = 'Nothing outstanding.'; ul.append(li); }
  d.append(s, ul);
  box.append(d);
}

let queued = false;
function schedule() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { queued = false; render(); saveState(state); saveSettings(settings); });
}

// ---------- form ----------
function onInput(key) {
  if (key === 'tour') {
    const next = getTour(state.tour);
    state.packageId = next.packageId;
    if (next.defaultPerAdult) state.perAdult = String(next.defaultPerAdult);
    const d = state.startDate ? new Date(`${state.startDate}T00:00:00`) : new Date();
    state.tripId = `${next.tripIdPrefix}${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}`;
    Object.keys(photos).forEach((k) => delete photos[k]);
    mountForm();
  }
  schedule();
}
function mountForm() {
  form = buildForm($('#form'), { state, photos, onInput, onPhotos: schedule });
}
mountForm();
buildSettings($('#settings-body'), settings, () => schedule());

// ---------- reset ----------
let resetArmed = false;
$('#btn-reset').addEventListener('click', (e) => {
  const b = e.currentTarget;
  if (!resetArmed) {
    resetArmed = true; b.textContent = 'Click again to confirm';
    setTimeout(() => { resetArmed = false; b.textContent = 'Reset'; }, 3500);
    return;
  }
  resetArmed = false; b.textContent = 'Reset';
  clearAll();
  state = Object.assign(state, DEFAULT_STATE());
  Object.keys(state).forEach((k) => { if (!(k in DEFAULT_STATE())) delete state[k]; });
  Object.assign(settings, { ...COMPANY_SETTINGS_DEFAULT });
  Object.keys(photos).forEach((k) => delete photos[k]);
  mountForm();
  buildSettings($('#settings-body'), settings, () => schedule());
  schedule();
});

// ---------- download (browser "Save as PDF") ----------
const clean = (s) => String(s || '').replace(/[^A-Za-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '');
function fileTitle() {
  const g = clean(state.guestName) || 'Guest';
  return state.docType === 'invoice'
    ? `Invoice-${clean(state.invoiceNo) || 'draft'}-${g}`
    : `Quotation-${clean(state.quoteNo) || 'draft'}-${g}`;
}
let savedTitle = document.title;
$('#btn-pdf').addEventListener('click', async () => {
  savedTitle = document.title;
  document.title = fileTitle();              // browsers use the page title as the PDF file name
  try {
    await document.fonts.ready;
    await Promise.all([...document.images].map((i) => (i.decode ? i.decode().catch(() => {}) : null)));
  } catch { /* print anyway */ }
  window.print();
});
window.addEventListener('afterprint', () => { document.title = savedTitle; });

// ---------- boot ----------
new ResizeObserver(fit).observe($('.stage'));
render();
window.__app = { state, settings, photos, render }; // handy for debugging in the console
console.info(`${COMPANY.shortName} generator ready`);
