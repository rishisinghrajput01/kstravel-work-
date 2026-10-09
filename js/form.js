// Declarative form: one list describes every input, which document it applies to,
// and where its value lives. buildForm() makes the DOM; sync() shows/hides fields.
import { TOUR_LIST, TOURS, getTour } from './tours/index.js';
import { DEMO_SETTINGS, COMPANY_SETTINGS_DEFAULT } from './config.js';

const isQ = (s) => s.docType === 'quotation';
const isI = (s) => s.docType === 'invoice';

const hotelFields = Object.values(TOURS).flatMap((t) => t.hotels.map((h, i) => ({
  k: `hotelName_${t.id}_${i}`, t: 'text', label: `Hotel ${i + 1}: ${h.place} (${h.nights} night${h.nights === 1 ? '' : 's'})`,
  ph: h.name, when: (s) => isQ(s) && s.tour === t.id,
})));

export const SECTIONS = [
  { title: 'Document', fields: [
    { k: 'docType', t: 'seg', label: 'What do you want to create?', opts: [['quotation', 'Quotation'], ['invoice', 'Invoice']] },
    { k: 'tour', t: 'select', label: 'Tour', opts: TOUR_LIST.map((x) => [x.id, x.name]) },
    { k: 'sample', t: 'check', label: 'Mark as SAMPLE (shows a "SAMPLE" tag on the document)' },
  ] },
  { title: 'Guest & trip', fields: [
    { k: 'guestName', t: 'text', label: 'Guest name', ph: 'e.g. Rahul Sharma' },
    { k: 'adults', t: 'number', label: 'Number of adults', min: 1, max: 20, step: 1 },
    { k: 'startDate', t: 'date', label: 'Travel start date', hint: 'trip' },
    { k: 'coordinator', t: 'text', label: 'Trip coordinator name', when: isQ },
    { k: 'coordinatorPhone', t: 'text', label: 'Coordinator phone', when: isQ },
  ] },
  { title: 'Reference numbers', fields: [
    { k: 'quoteNo', t: 'text', label: 'Quote number' },
    { k: 'tripId', t: 'text', label: 'Trip ID' },
    { k: 'packageId', t: 'text', label: 'Package ID', when: isQ },
    { k: 'invoiceNo', t: 'text', label: 'Invoice number', when: isI, hint: 'Must be unique. Never reuse a number.' },
  ] },
  { title: 'Hotels', when: isQ, hint: 'Leave blank to use the name shown in grey.', fields: hotelFields },
  { title: 'Price', fields: [
    { k: 'perAdult', t: 'number', label: 'Price per adult (INR)', min: 0, step: 500, hint: 'price' },
    { k: 'gstMode', t: 'select', label: 'GST on the quotation', when: isQ,
      opts: [['tbc', 'To be confirmed'], ['included', 'Included in the price'], ['extra', 'Added on top of the price']] },
    { k: 'gstRate', t: 'number', label: 'GST rate (%)', min: 0, max: 40, step: 0.5,
      when: (s) => isI(s) || s.gstMode === 'extra', hint: 'Placeholder 5%. Confirm the correct rate with your accountant.' },
  ] },
  { title: 'Booking details', when: isQ, fields: [
    { k: 'deposit', t: 'number', label: 'Booking deposit (INR)', min: 0, step: 500 },
    { k: 'validUntil', t: 'date', label: 'Quote valid until' },
  ] },
  { title: 'Invoice details', when: isI, fields: [
    { k: 'invoiceDate', t: 'date', label: 'Invoice date' },
    { k: 'dueDate', t: 'date', label: 'Due date (optional)' },
    { k: 'billName', t: 'text', label: 'Billed to (leave blank to use guest name)' },
    { k: 'billAddress', t: 'textarea', label: 'Billing address' },
    { k: 'custGstin', t: 'text', label: 'Customer GSTIN (optional)' },
    { k: 'supply', t: 'select', label: 'Place of supply', opts: [['intra', 'Gujarat: CGST + SGST'], ['inter', 'Another state: IGST']] },
    { k: 'supplyState', t: 'text', label: 'State of supply', ph: 'e.g. Maharashtra (27)', when: (s) => s.supply === 'inter' },
    { k: 'sac', t: 'text', label: 'SAC code', ph: 'Confirm with accountant' },
    { k: 'itemDesc', t: 'textarea', label: 'Line item note (optional)', ph: 'Leave blank for the standard wording' },
    { k: 'advance', t: 'number', label: 'Advance received (INR)', min: 0, step: 500 },
    { k: 'advanceDate', t: 'date', label: 'Advance received on' },
    { k: 'advanceMode', t: 'text', label: 'Payment mode', ph: 'UPI / bank transfer' },
    { k: 'gstConfirmed', t: 'check', label: 'The accountant has confirmed the GST rate and SAC code' },
  ] },
];

export const SETTINGS_FIELDS = [
  { h: 'Bank & UPI (printed large and bold on the price page and the invoice)' },
  { k: 'accountName', label: 'Account name' }, { k: 'bankName', label: 'Bank & branch' },
  { k: 'accountNumber', label: 'Account number' }, { k: 'ifsc', label: 'IFSC' }, { k: 'upi', label: 'UPI ID' },
  { qr: true },
  { h: 'Booking policy (appears in the terms)' },
  { k: 'balanceDays', label: 'Balance due, days before travel', num: true },
  { row: [['cancelDays1', 'Cancel: days or more before'], ['cancelPct1', '% charged']] },
  { row: [['cancelDays2', 'Next tier from (days)'], ['cancelPct2', '% charged']] },
  { k: 'cancelPct3', label: 'Less than that, or no-show: % charged', num: true },
  { row: [['reschedDays', 'Reschedule: days or more before'], ['reschedCharge', 'Charge (e.g. no charge)']] },
];

const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') n.className = v; else if (v !== undefined && v !== false) n.setAttribute(k, v === true ? '' : v);
  }
  kids.flat().forEach((c) => n.append(c));
  return n;
};
const uid = (() => { let i = 0; return (p) => `${p}-${++i}`; })();

/** Resize an uploaded photo so the page stays light (max 1600px wide, JPEG). */
export function fileToDataUrl(file, maxW = 1600, q = 0.86) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const sc = Math.min(1, maxW / img.width);
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL('image/jpeg', q));
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not read that image')); };
    img.src = url;
  });
}

export function buildForm(root, ctx) {
  const { state, photos, onInput, onPhotos } = ctx;
  const bindings = [];   // {node, field, wrap}
  root.innerHTML = '';

  const makeField = (f) => {
    const id = uid('f');
    const wrap = el('div', { class: 'field' });
    let input;
    if (f.t === 'seg') {
      wrap.append(el('span', { class: 'lab' }, f.label));
      const seg = el('div', { class: 'seg', role: 'group', 'aria-label': f.label });
      f.opts.forEach(([v, text]) => {
        const b = el('button', { type: 'button', 'data-v': v }, text);
        b.addEventListener('click', () => { state[f.k] = v; onInput(f.k); });
        seg.append(b);
      });
      wrap.append(seg);
      bindings.push({ f, wrap, seg });
      return wrap;
    }
    if (f.t === 'check') {
      input = el('input', { type: 'checkbox', id });
      wrap.append(el('div', { class: 'check' }, input, el('label', { for: id }, f.label)));
      input.addEventListener('input', () => { state[f.k] = input.checked; onInput(f.k); });
    } else {
      wrap.append(el('label', { for: id }, f.label));
      if (f.t === 'select') {
        input = el('select', { id }, f.opts.map(([v, t]) => el('option', { value: v }, t)));
      } else if (f.t === 'textarea') {
        input = el('textarea', { id, placeholder: f.ph });
      } else {
        input = el('input', { id, type: f.t, placeholder: f.ph, min: f.min, max: f.max, step: f.step, inputmode: f.t === 'number' ? 'decimal' : undefined });
      }
      input.addEventListener('input', () => { state[f.k] = input.value; onInput(f.k); });
      wrap.append(input);
    }
    const hint = el('div', { class: 'hint' });
    wrap.append(hint);
    bindings.push({ f, wrap, input, hint });
    return wrap;
  };

  SECTIONS.forEach((sec) => {
    const fs = el('fieldset', {}, el('legend', {}, sec.title));
    if (sec.hint) fs.append(el('p', { class: 'hint', style: 'margin:0 0 10px' }, sec.hint));
    sec.fields.forEach((f) => fs.append(makeField(f)));
    bindings.push({ section: sec, wrap: fs });
    root.append(fs);
  });

  // optional photo uploads
  const tour = getTour(state.tour);
  const photoKeys = [['cover', 'Cover photo'], ...tour.hotels.map((h, i) => [`hotel${i + 1}`, `Photo of ${h.name}`])];
  const pf = el('fieldset', {}, el('legend', {}, 'Photos (optional)'));
  pf.append(el('p', { class: 'hint', style: 'margin:0 0 10px' }, 'Uploads replace the default pictures and stay in this browser only. Use real hotel photos for real quotes.'));
  const photoUi = [];
  photoKeys.forEach(([key, label]) => {
    const id = uid('p');
    const file = el('input', { type: 'file', id, accept: 'image/*' });
    const status = el('span', { class: 'ok' });
    const rm = el('button', { type: 'button', class: 'btn btn--small' }, 'Remove');
    const row = el('div', { class: 'photo-row' }, file, status, rm);
    file.addEventListener('change', async () => {
      if (!file.files[0]) return;
      try { photos[key] = await fileToDataUrl(file.files[0]); onPhotos(); } catch (e) { status.textContent = e.message; }
    });
    rm.addEventListener('click', () => { delete photos[key]; file.value = ''; onPhotos(); });
    const paint = () => { status.textContent = photos[key] ? '✓ uploaded' : ''; rm.hidden = !photos[key]; };
    paint();
    photoUi.push(paint);
    pf.append(el('div', { class: 'field', 'data-doc': 'quotation' }, el('label', { for: id }, label), row));
  });
  bindings.push({ section: { when: isQ }, wrap: pf });
  root.append(pf);

  return {
    /** Push state into the inputs and apply show/hide rules. `info` carries computed hints. */
    sync(info) {
      bindings.forEach((b) => {
        if (b.section) { b.wrap.hidden = b.section.when ? !b.section.when(state) : false; return; }
        const { f } = b;
        b.wrap.hidden = f.when ? !f.when(state) : false;
        if (b.seg) { [...b.seg.children].forEach((x) => x.setAttribute('aria-pressed', String(state[f.k] === x.dataset.v))); return; }
        if (f.t === 'check') { if (b.input.checked !== !!state[f.k]) b.input.checked = !!state[f.k]; }
        else if (document.activeElement !== b.input && b.input.value !== String(state[f.k] ?? '')) b.input.value = state[f.k] ?? '';
        if (b.hint) {
          let h = '';
          if (f.hint === 'trip') h = info.tripText;
          else if (f.hint === 'price') h = info.priceText;
          else if (typeof f.hint === 'string') h = f.hint;
          b.hint.textContent = h; b.hint.hidden = !h;
        }
      });
      photoUi.forEach((p) => p());
    },
  };
}

export function buildSettings(root, settings, onChange) {
  root.innerHTML = '';
  const inputs = [];
  const add = (k, label, num) => {
    const id = uid('s');
    const input = el('input', { id, type: 'text', inputmode: num ? 'decimal' : undefined });
    input.value = settings[k] ?? '';
    input.addEventListener('input', () => { settings[k] = input.value; onChange(); });
    inputs.push([k, input]);
    return el('div', { class: 'field' }, el('label', { for: id }, label), input);
  };
  SETTINGS_FIELDS.forEach((f) => {
    if (f.h) root.append(el('h4', {}, f.h));
    else if (f.row) root.append(el('div', { class: 'row2' }, f.row.map(([k, l]) => add(k, l, k !== 'reschedCharge'))));
    else if (f.qr) {
      const id = uid('s');
      const file = el('input', { type: 'file', id, accept: 'image/*' });
      const st = el('span', { class: 'ok' });
      const rm = el('button', { type: 'button', class: 'btn btn--small' }, 'Remove');
      const paint = () => { st.textContent = settings.qrDataUrl ? '✓ QR saved' : ''; rm.hidden = !settings.qrDataUrl; };
      file.addEventListener('change', async () => {
        if (!file.files[0]) return;
        try { settings.qrDataUrl = await fileToDataUrl(file.files[0], 600, 0.92); paint(); onChange(); } catch (e) { st.textContent = e.message; }
      });
      rm.addEventListener('click', () => { settings.qrDataUrl = ''; file.value = ''; paint(); onChange(); });
      paint();
      root.append(el('div', { class: 'field' }, el('label', { for: id }, 'UPI QR image (prints large on the quotation and invoice)'), el('div', { class: 'photo-row' }, file, st, rm)));
    } else root.append(add(f.k, f.label, f.num));
  });
  const apply = (src) => { Object.assign(settings, src); inputs.forEach(([k, i]) => { i.value = settings[k] ?? ''; }); onChange(true); };
  root.append(el('div', { class: 'actions' },
    el('button', { type: 'button', class: 'btn btn--small', id: 'btn-demo' }, 'Fill demo values'),
    el('button', { type: 'button', class: 'btn btn--small', id: 'btn-clear' }, 'Clear all')));
  root.querySelector('#btn-demo').addEventListener('click', () => apply(DEMO_SETTINGS));
  root.querySelector('#btn-clear').addEventListener('click', () => apply({ ...COMPANY_SETTINGS_DEFAULT, accountName: COMPANY_SETTINGS_DEFAULT.accountName }));
  root.append(el('p', { class: 'hint', style: 'margin-top:10px' }, 'Demo values are obviously fake (account 0000 0000 0000). Replace them with the real details before sending anything to a customer.'));
}
