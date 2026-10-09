// "Before you send" list: everything that is still a placeholder, sample or unconfirmed.
// Nothing here blocks the user; it just makes the gaps visible.
export function computeChecks(state, settings, m, overflow) {
  const out = [];
  const warn = (text) => out.push({ level: 'warn', text });
  const info = (text) => out.push({ level: 'info', text });
  const isQuote = state.docType === 'quotation';

  if (!state.guestName.trim()) warn('Enter the guest name.');
  if (!state.startDate) warn('Choose the travel start date.');
  if (!(Number(state.perAdult) > 0)) warn('Enter the price per adult.');

  if (isQuote) {
    if (!state.coordinator.trim()) warn('Add the trip coordinator name.');
    if (!(m.deposit > 0)) warn('Set the booking deposit.');
    if (!state.validUntil) warn('Set the "quote valid until" date.');
    if (state.gstMode === 'tbc') warn('GST is still "to be confirmed" on the price page.');
    const pol = ['balanceDays', 'cancelDays1', 'cancelPct1', 'cancelDays2', 'cancelPct2', 'cancelPct3', 'reschedDays', 'reschedCharge'];
    if (pol.some((k) => settings[k] === '' || settings[k] == null)) warn('Booking policy in Company settings is incomplete (shown as [__] in the terms).');
    if (m.tour.hotels.some((h) => h.nameIsPlaceholder)) warn('Hotel names are placeholders. Enter the real hotels under "Hotels".');
    if (m.tour.stopgapPhotos) warn('The pictures in this tour are stand-ins (crops of the website artwork). Add real photos before sending a real quote.');
    else info('Hotel photos are destination pictures, not the real hotels. Upload real hotel photos below before sending a real quote.');
  } else {
    if (!state.invoiceNo.trim()) warn('Enter the invoice number. Never reuse one.');
    if (!state.invoiceDate) warn('Set the invoice date.');
    if (!state.sac.trim()) warn('SAC code is blank. Confirm it with the accountant.');
    if (!state.gstConfirmed) warn('GST rate and SAC are not yet confirmed by the accountant.');
    if (state.supply === 'inter' && !state.supplyState.trim()) warn('Enter the state of supply for the IGST invoice.');
    if (!state.billAddress.trim()) info('No billing address entered.');
  }
  if (!settings.bankName || !settings.accountNumber || !settings.ifsc || !settings.upi)
    warn('Bank or UPI details in Company settings are incomplete.');
  if (!settings.qrDataUrl) warn('Upload your UPI QR image in Company settings. It prints large on the price page and the invoice.');
  if (state.sample) info('The document is marked SAMPLE. Untick it for a real one.');
  overflow.forEach((n) => warn(`Page ${n} has content running past the page edge. Shorten the text.`));
  return out;
}
