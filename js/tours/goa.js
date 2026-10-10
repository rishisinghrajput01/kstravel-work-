// Tour definition: Goa, Two Coastlines, 3 Nights / 4 Days.
// Same shape as andaman.js.

const IMG = 'img/goa/';

export default {
  id: 'goa',
  name: 'Goa',
  destinationLine: 'North and South Goa, India',
  durationLabel: '3 Nights / 4 Days',
  nights: 3,
  dayCount: 4,
  packageId: 'GA-3N4D-STD',
  tripIdPrefix: 'KST-GA-',
  defaultPerAdult: 14999,
  mealPlan: 'Breakfast',
  routeLine: 'Goa airport · North Goa · South Goa · Goa airport',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Ravi Dwivedi / Wikimedia Commons' },

  glance: {
    headline: 'Three nights between two coastlines',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Goa: the forts and beaches of the north, the old churches and quiet sands of the south, with a beach-side hotel, airport transfers and two guided sightseeing days arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Airport pickup and drop, sightseeing by vehicle',
  },

  route: [
    { place: 'Beach-side hotel', nights: 3, from: 1, to: 4, end: ' · airport drop' },
  ],

  hotels: [
    { name: 'GTDC Calangute Residency', category: 'Beach-side hotel', place: 'North Goa', room: 'Standard room', nights: 3, inDay: 1, outDay: 4,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Sri Chinnu / Wikimedia Commons' } },
  ],
  staysIntro: 'Three nights in a beach-side hotel on twin sharing, with daily breakfast. Room upgrades can be quoted on request.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Arrival and North Goa', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Old Goa and the southern coast', days: [3, 4], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Goa',
      photo: { src: IMG + 'day1.jpg', credit: 'Nikhilb239 / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Airport pickup and hotel transfer', 'Private', 'On arrival · approx. 1 to 1.5 hrs',
          'Your driver meets you at the airport and takes you to the hotel. Check in and rest.'],
        ['Evening on Baga and Calangute beach', 'Private', 'Free time',
          'A relaxed first evening on the sand, with beach shacks for dinner. Water sports are optional, at extra cost.'],
      ] },
    { n: 2, title: 'North Goa sightseeing',
      photo: { src: IMG + 'day2.jpg', credit: 'Nikhilb239 / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 3', note: 'No hotel change today' },
      items: [
        ['Fort Aguada and the lighthouse', 'Private', 'Pickup 10:00 · approx. 1.5 hrs',
          'A 17th-century Portuguese fort on a headland, with sea views from the ramparts. Entry is free.'],
        ['Candolim, Calangute and Baga beaches', 'Private', 'Late morning · approx. 3 hrs',
          "Goa's best-known stretch of sand, with markets and cafés. Time to swim or shop."],
        ['Anjuna and Chapora Fort at sunset', 'Private', 'From 16:00 · approx. 2.5 hrs',
          'The cliffs and flea-market beach of Anjuna, then the hilltop fort at Chapora for the sunset.'],
      ] },
    { n: 3, title: 'South Goa sightseeing',
      photo: { src: IMG + 'day3.jpg', credit: 'iMahesh / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 3 OF 3', note: 'No hotel change today' },
      items: [
        ['Old Goa churches', 'Private', 'Pickup 09:30 · approx. 2 hrs',
          'The Basilica of Bom Jesus and the Se Cathedral, both UNESCO World Heritage buildings. Modest dress is needed.'],
        ['Fontainhas, the Latin Quarter of Panjim', 'Private', 'Late morning · approx. 1.5 hrs',
          'A walk through the painted Portuguese-era lanes of the old quarter.'],
        ['Colva Beach', 'Private', 'Afternoon · approx. 3 hrs',
          'A long, quieter beach in the south, good for a swim or a walk, with shacks for lunch at your own cost.'],
      ] },
    { n: 4, title: 'Departure', last: true,
      photo: { src: IMG + 'day4.jpg', credit: 'Jennifer Rose Stankowski / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 0, note: 'After breakfast · by 11:00' },
      items: [
        ['Airport drop', 'Private', 'Timed to your flight · approx. 1 to 1.5 hrs',
          'Transfer to the airport for your onward journey. Allow extra time for traffic.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID for hotel registration.',
    'Beach conditions and water sports follow the season; most shacks and sports close in the monsoon (June to September).',
    'Swim only in flagged areas and follow the lifeguards.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '3 nights in a beach-side hotel, twin sharing',
      'Daily breakfast'] },
    { head: 'Private vehicle', sub: 'your party only', items: [
      'Airport pickup and drop',
      'North Goa sightseeing tour',
      'South Goa sightseeing tour'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Goa',
    'Lunches, dinners and drinks',
    'Entry tickets, water sports, cruises and other optional activities',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as shopping, tips and phone calls',
    'Extra costs caused by weather or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Goa · 3 Nights / 4 Days',
    sub: 'Land package per adult, twin sharing, breakfast included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Peak season (late December and New Year) books out early and rates change; rooms are held only after the deposit is paid.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],
};
