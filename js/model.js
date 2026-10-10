// Turns raw form state into the numbers and strings both documents need.
// Every calculation lives here so the quotation and invoice can never disagree.
import { COMPANY } from './config.js';
import { getTour } from './tours/index.js';
import { parseDate, addDays, fmtLong, fmtShort, fmtFull, fmtRange, round2, clamp } from './format.js';

export const DEFAULT_START = '2026-11-11';

export function buildModel(state, settings) {
  const tour = getTour(state.tour);
  const start = parseDate(state.startDate) || parseDate(DEFAULT_START);
  const dayDate = (n) => addDays(start, n - 1);
  const adults = clamp(Math.round(Number(state.adults)) || 1, 1, 20);
  const perAdult = Math.max(0, Number(state.perAdult) || 0);
  const base = round2(perAdult * adults);
  const guest = (state.guestName || '').trim();

  // ---- quotation GST ----
  const qRate = clamp(Number(state.gstRate) || 0, 0, 40);
  const qGst = state.gstMode === 'extra' ? round2((base * qRate) / 100) : 0;
  const quote = { mode: state.gstMode, rate: qRate, gst: qGst, total: round2(base + qGst) };

  // ---- invoice GST (CGST+SGST inside Gujarat, IGST outside) ----
  const rate = clamp(Number(state.gstRate) || 0, 0, 40);
  const inter = state.supply === 'inter';
  let cgst = 0, sgst = 0, igst = 0;
  if (inter) igst = round2((base * rate) / 100);
  else { cgst = round2((base * rate) / 200); sgst = cgst; }
  const preRound = round2(base + cgst + sgst + igst);
  const grand = Math.round(preRound);
  const roundOff = round2(grand - preRound);
  const advance = clamp(Number(state.advance) || 0, 0, grand);
  const inv = { rate, inter, taxable: base, cgst, sgst, igst, roundOff, total: grand, advance, balance: round2(grand - advance) };

  return {
    tour, company: COMPANY, settings,
    start, end: dayDate(tour.dayCount),
    dayDate,
    dayLong: (n) => fmtLong(dayDate(n)),
    dayShort: (n) => fmtShort(dayDate(n)),
    dateRange: fmtRange(start, dayDate(tour.dayCount)),
    guest, guestShown: guest || '[Guest name]',
    adults, adultsLabel: `${adults} adult${adults === 1 ? '' : 's'}`,
    perAdult, base, quote, inv,
    fmtFull,
    state,
  };
}
