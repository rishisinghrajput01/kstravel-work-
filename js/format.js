// Formatting helpers: Indian number grouping, dates, amount in words.

const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Parse 'YYYY-MM-DD' as a LOCAL date (avoids the UTC off-by-one problem). */
export function parseDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3]);
  return Number.isNaN(d.getTime()) ? null : d;
}
export const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
export const toISO = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const fmtLong = (d) => `${WD[d.getDay()]}, ${d.getDate()} ${MO[d.getMonth()]} ${d.getFullYear()}`; // Wed, 11 Nov 2026
export const fmtShort = (d) => `${d.getDate()} ${MO[d.getMonth()]}`;                                       // 11 Nov
export const fmtFull = (d) => `${d.getDate()} ${MO[d.getMonth()]} ${d.getFullYear()}`;                     // 11 Nov 2026

export function fmtRange(a, b) {
  return a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()
    ? `${a.getDate()} – ${b.getDate()} ${MO[b.getMonth()]} ${b.getFullYear()}`
    : `${a.getDate()} ${MO[a.getMonth()]} – ${b.getDate()} ${MO[b.getMonth()]} ${b.getFullYear()}`;
}

const inGroup = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });
const inGroup2 = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const inr0 = (n) => 'INR ' + inGroup.format(Math.round(n));   // INR 50,000
export const num2 = (n) => inGroup2.format(n);                       // 52,500.00
export const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
  'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function below100(n) { return n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : ''); }
function below1000(n) {
  const h = Math.floor(n / 100), r = n % 100;
  return (h ? ONES[h] + ' Hundred' + (r ? ' ' : '') : '') + (r ? below100(r) : '');
}
/** 52500 -> 'Fifty-Two Thousand Five Hundred' (Indian system: thousand, lakh, crore). */
export function wordsIndian(n) {
  n = Math.floor(n);
  if (n === 0) return 'Zero';
  const parts = [];
  const crore = Math.floor(n / 1e7); n %= 1e7;
  const lakh = Math.floor(n / 1e5); n %= 1e5;
  const thou = Math.floor(n / 1e3); n %= 1e3;
  if (crore) parts.push(below1000(crore) + ' Crore');
  if (lakh) parts.push(below100(lakh) + ' Lakh');
  if (thou) parts.push(below100(thou) + ' Thousand');
  if (n) parts.push(below1000(n));
  return parts.join(' ');
}
export function amountInWords(amount) {
  const total = round2(amount);
  const rupees = Math.floor(total);
  const paise = Math.round((total - rupees) * 100);
  let s = 'Indian Rupees ' + wordsIndian(rupees);
  if (paise) s += ' and ' + below100(paise) + ' Paise';
  return s + ' Only';
}

/** 'INR 50,000' or, when there are paise, 'INR 2,500.05'. */
export const inrAuto = (n) => (Number.isInteger(round2(n)) ? inr0(n) : 'INR ' + num2(n));
export const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
