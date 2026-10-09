import { html, raw } from './html.js';

// One big, bold "how to pay" block used by both the quotation (Confirm your booking)
// and the invoice (Pay to). Blank values stay visible as [TO BE ADDED].
const IMG_ICON = raw('<svg viewBox="0 0 24 24" fill="none" stroke="#59628F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><circle cx="9" cy="9" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>');

export function payBlock(m, heading = 'PAY TO') {
  const st = m.settings, c = m.company;
  const row = (label, val, cls = '', wide = false) =>
    html`<div class="pay__row ${wide ? 'pay__row--wide' : ''}"><span class="pay__k">${label}</span><span class="pay__v ${cls} ${val ? '' : 'ph'}">${val || '[TO BE ADDED]'}</span></div>`;
  return html`<div class="pay">
    <div class="pay__bank"><span class="pay__h">${heading} · BANK TRANSFER</span>
      ${row('ACCOUNT NAME', st.accountName || c.shortName, '', true)}
      ${row('BANK & BRANCH', st.bankName, '', true)}
      ${row('ACCOUNT NUMBER', st.accountNumber, 'pay__v--acct')}
      ${row('IFSC', st.ifsc, 'pay__v--ifsc')}
    </div>
    <div class="pay__upi"><span class="pay__h">OR PAY BY UPI</span>
      ${st.qrDataUrl
        ? html`<div class="pay__qr"><img src="${st.qrDataUrl}" alt="UPI QR code"></div>`
        : html`<div class="pay__qr pay__qr--empty">${IMG_ICON}<span>UPI QR</span></div>`}
      <span class="pay__k">UPI ID</span>
      <span class="pay__v pay__v--upi ${st.upi ? '' : 'ph'}">${st.upi || '[TO BE ADDED]'}</span>
    </div>
  </div>`;
}
