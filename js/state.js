import { toISO } from './format.js';
import { COMPANY_SETTINGS_DEFAULT } from './config.js';

export const DEFAULT_STATE = () => ({
  docType: 'quotation', tour: 'andaman', sample: true,
  guestName: 'Sample Guest', adults: '2', startDate: '2026-11-11',
  coordinator: '', coordinatorPhone: '+91 84015 90704',
  quoteNo: 'KST-Q-2026-0117', tripId: 'KST-AND-2611', packageId: 'AND-5N6D-STD',
  perAdult: '25000', gstMode: 'tbc', gstRate: '5',
  deposit: '', validUntil: '',
  invoiceNo: 'KSTH/2026-27/0001', invoiceDate: toISO(new Date()), dueDate: '',
  billName: '', billAddress: '', custGstin: '', supply: 'intra', supplyState: '',
  sac: '', itemDesc: '', advance: '20000', advanceDate: '', advanceMode: 'UPI', gstConfirmed: false,
});

const KEY_STATE = 'kst.state.v1';
const KEY_SET = 'kst.settings.v1';

function read(key, defaults) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? { ...defaults, ...parsed } : defaults;
  } catch { return defaults; }
}
function write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode / quota: app still works */ } }

export const loadState = () => read(KEY_STATE, DEFAULT_STATE());
export const loadSettings = () => read(KEY_SET, { ...COMPANY_SETTINGS_DEFAULT });
export const saveState = (s) => write(KEY_STATE, s);
export const saveSettings = (s) => write(KEY_SET, s);
export const clearAll = () => { try { localStorage.removeItem(KEY_STATE); localStorage.removeItem(KEY_SET); } catch { /* ignore */ } };
