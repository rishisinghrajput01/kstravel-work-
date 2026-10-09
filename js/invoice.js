import { html } from './html.js';
import { logo } from './logo.js';
import { payBlock } from './pay.js';
import { num2, amountInWords, fmtFull, parseDate } from './format.js';

const ph = (t) => html`<span class="ph">[${t}]</span>`;

// Layout follows the approved "Tax Invoice v2" design; the bank / UPI / QR block is enlarged on request.
export function renderInvoice(m) {
  const s = m.state, c = m.company, v = m.inv, t = m.tour;
  const half = v.rate / 2;
  const invDate = parseDate(s.invoiceDate), dueDate = parseDate(s.dueDate);
  const billName = (s.billName || '').trim() || m.guestShown;
  const addr = (s.billAddress || '').trim();
  const gstin = (s.custGstin || '').trim();
  const place = v.inter ? ((s.supplyState || '').trim() || '[State]') : `${c.stateName} - ${c.stateCode}`;
  const pct = (n) => `${Number.isInteger(n) ? n : +n.toFixed(2)}%`;
  const note = (s.itemDesc || '').trim() || `land arrangements for ${m.adultsLabel}`;
  const short = `${t.nights}N/${t.dayCount}D`;
  const advLine = [s.advanceDate && parseDate(s.advanceDate) ? fmtFull(parseDate(s.advanceDate)) : '', (s.advanceMode || '').trim()].filter(Boolean).join(' · ');

  const taxRows = v.inter
    ? html`<div class="iv__tr"><span>IGST ${pct(v.rate)}</span><span>${num2(v.igst)}</span></div>`
    : html`<div class="iv__tr"><span>CGST ${pct(half)}</span><span>${num2(v.cgst)}</span></div><div class="iv__tr"><span>SGST ${pct(half)}</span><span>${num2(v.sgst)}</span></div>`;

  return [html`<section class="page page--invoice"><div class="iv">
    <div class="iv__head">
      ${logo('color', 38)}
      <div class="iv__title"><h1>Tax Invoice</h1>${s.sample ? html`<span class="iv__tag">SAMPLE</span>` : ''}</div>
    </div>

    <div class="iv__seller"><b>${c.legalName}</b><span>${c.address}</span><span>GSTIN ${c.gstin}</span></div>

    <div class="iv__cols">
      <div><span class="iv__k">Billed to</span><b>${billName}</b>${addr ? html`<span class="iv__pre">${addr}</span>` : ''}
        <span class="iv__mut">${gstin ? `GSTIN: ${gstin.toUpperCase()}` : 'GSTIN: Unregistered'}</span></div>
      <div><span class="iv__k">Invoice</span><b>${s.invoiceNo || '—'}</b><span>Date ${invDate ? fmtFull(invDate) : '—'}</span>
        <span>Due ${dueDate ? fmtFull(dueDate) : 'on receipt'}</span><span class="iv__mut">Place of supply: ${place}</span></div>
      <div><span class="iv__k">Trip</span><b>${t.name}, ${short}</b><span>${m.dateRange} · ${m.adultsLabel}</span>
        <span class="iv__mut">Trip ID ${s.tripId || '—'}</span></div>
    </div>

    <table class="iv__table"><thead><tr>
      <th class="l" style="width:6%">#</th><th class="l">Description</th><th class="l" style="width:11%">SAC</th>
      <th style="width:7%">Qty</th><th style="width:15%">Rate</th><th style="width:18%">Amount (INR)</th></tr></thead>
      <tbody><tr><td class="l">1</td><td class="l">${t.name} tour package, ${short} — ${note}</td>
        <td class="l mut">${(s.sac || '').trim() || ph('SAC')}</td><td>${m.adults}</td><td>${num2(m.perAdult)}</td><td>${num2(v.taxable)}</td></tr></tbody></table>

    <div class="iv__totwrap"><div class="iv__tot">
      <div class="iv__tr"><span>Taxable value</span><span>${num2(v.taxable)}</span></div>
      ${taxRows}
      ${v.roundOff ? html`<div class="iv__tr"><span>Round off</span><span>${v.roundOff > 0 ? '+' : '−'}${num2(Math.abs(v.roundOff))}</span></div>` : ''}
      <div class="iv__grand"><span>Total</span><span>₹ ${num2(v.total)}</span></div>
      <div class="iv__tr iv__tr--adv"><span>Advance received${advLine ? html`<small>${advLine}</small>` : ''}</span><span>– ${num2(v.advance)}</span></div>
      <div class="iv__tr iv__tr--bal"><span>Balance due</span><span>${num2(v.balance)}</span></div>
    </div></div>

    <div class="iv__words">${amountInWords(v.total)}</div>

    <div class="iv__bottom">
      ${payBlock(m, 'PAY TO')}
      <div class="iv__sign"><span>For ${c.legalName}</span><div class="iv__space"></div><span class="iv__mut iv__sigline">Authorised signatory</span></div>
    </div>

    <div class="iv__foot">Computer-generated invoice · Subject to Ahmedabad jurisdiction · ${c.phone} · ${c.email} · ${c.website}</div>
  </div></section>`];
}
