// Company details that appear on every document. Edit here for the permanent defaults;
// the "Company settings" panel in the app lets the client override bank and policy
// values in their own browser without touching code.

export const COMPANY = {
  legalName: 'KS TRAVEL HUB (OPC) PRIVATE LIMITED',
  shortName: 'KS Travel Hub (OPC) Private Limited',
  tagline: 'Tours & Packages',
  address: '3rd Floor, 305, Swapnil Complex, Nr. Sardar Patel Colony, Naranpura Vistar, Ahmedabad - 380013, Gujarat',
  stateName: 'Gujarat',
  stateCode: '24',
  gstin: '24AAMCK9854F1Z4',
  email: 'kstravelshub@gmail.com',
  phone: '+91 84015 90704',
  website: 'kstravelshub.in',
};

// Values the company sets once. Blank = the document shows a [TO BE ADDED] placeholder
// instead of inventing anything.
export const COMPANY_SETTINGS_DEFAULT = {
  accountName: 'KS Travel Hub (OPC) Private Limited',
  bankName: '',
  accountNumber: '',
  ifsc: '',
  upi: '',
  qrDataUrl: '',          // uploaded UPI QR image (stored in the browser)
  balanceDays: '',        // balance due N days before travel
  cancelDays1: '', cancelPct1: '',   // "N days or more before travel: X% charged"
  cancelDays2: '', cancelPct2: '',   // "N to (N1-1) days before travel: X% charged"
  cancelPct3: '',                    // "less than N2 days / no-show: X% charged"
  reschedDays: '', reschedCharge: '', // "N days or more before travel: <charge>"
};

// Obviously fake values for demos. Applied only when the user presses "Fill demo values".
export const DEMO_SETTINGS = {
  accountName: 'KS Travel Hub (OPC) Private Limited',
  bankName: 'Sample Bank, Naranpura Branch, Ahmedabad',
  accountNumber: '0000 0000 0000',
  ifsc: 'SAMP0000000',
  upi: 'sample@upi',
  qrDataUrl: '',
  balanceDays: '15',
  cancelDays1: '30', cancelPct1: '10',
  cancelDays2: '15', cancelPct2: '50',
  cancelPct3: '100',
  reschedDays: '15', reschedCharge: 'no charge',
};

export const WHY_US = [
  ['A dedicated coordinator', 'One named person plans your trip and stays reachable by phone and WhatsApp from booking until you fly home.'],
  ['Transparent pricing', 'Every inclusion and exclusion is written down before you pay, so you know exactly what the price covers.'],
  ['A GST-registered company', 'You deal with a registered private limited company and receive a proper GST invoice for every payment.'],
  ['Secure payment', "Pay by bank transfer or UPI, always to the company's official account."],
];

// Generic hotel / booking terms shared by every tour.
export const TERMS_HOTELS = [
  'Check-in is usually from 12:00 and check-out by 10:00. Early check-in and late check-out are at the hotel\'s discretion.',
  'Rooms are twin sharing in the categories listed.',
  'If a listed hotel is unavailable, we offer a similar-category alternative for your approval.',
  'Valid photo ID is required at check-in for every guest.',
];
