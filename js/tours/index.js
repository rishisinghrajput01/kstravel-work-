import andaman from './andaman.js';
import darjeelingGangtok from './darjeeling-gangtok.js';
import kerala from './kerala.js';
import meghalaya from './meghalaya.js';
import rajasthan from './rajasthan.js';
import kashmir from './kashmir.js';
import ladakh from './ladakh.js';
import kutch from './kutch.js';
import rishikesh from './rishikesh.js';
import goa from './goa.js';
import shimla from './shimla.js';
import manali from './manali.js';

// Add new tours here. Each tour file follows the shape of andaman.js.
export const TOURS = { andaman, 'darjeeling-gangtok': darjeelingGangtok, kerala, meghalaya, rajasthan, kashmir, ladakh, kutch, rishikesh, goa, shimla, manali };
export const TOUR_LIST = Object.values(TOURS).map((t) => ({ id: t.id, name: t.name }));
export const getTour = (id) => TOURS[id] || TOURS.andaman;
