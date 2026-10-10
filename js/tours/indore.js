// Tour definition: Indore & Mandu, 2 Nights / 3 Days.
// Same shape as andaman.js. The day-by-day plan is our standard plan for this trip.

const IMG = 'img/indore/';

export default {
  id: 'indore',
  name: 'Indore & Mandu',
  destinationLine: 'Indore and Mandu, Madhya Pradesh, India',
  durationLabel: '2 Nights / 3 Days',
  nights: 2,
  dayCount: 3,
  packageId: 'IN-2N3D-STD',
  tripIdPrefix: 'KST-IN-',
  defaultPerAdult: 8499,
  mealPlan: 'Breakfast',
  routeLine: 'Indore · Mandu · Indore',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Dipan S / Wikimedia Commons' },

  glance: {
    headline: 'Two nights in the food capital',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Indore and Mandu: the palaces and street food of the city, and a day among the ruined palaces of the old hill capital, with hotel, transfers and sightseeing arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private vehicle throughout, from Indore airport or station and back',
  },

  route: [
    { place: 'Indore', nights: 2, from: 1, to: 3, end: ' · drop at airport or station' },
  ],

  hotels: [
    { name: 'Hotel Shreemaya', stars: 3, place: 'Indore', room: 'Standard', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Surendra 1999 / Wikimedia Commons' } },
  ],
  staysIntro: 'Two nights in a 3-star hotel in the heart of Indore, with daily breakfast. Room upgrades can be quoted on request.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Indore, then a day at Mandu', days: [1, 2] },
    { label: 'DAY 3', headline: 'A last taste of the city', days: [3], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Indore',
      photo: { src: IMG + 'day1.jpg', credit: 'Bernard Gagnon / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Pickup from Indore Airport or station', 'Private', 'On arrival · approx. 30 min',
          'Your driver meets you on arrival and takes you to the hotel. Check in and rest after the journey.'],
        ['Rajwada and Lalbagh Palace', 'Private', 'Afternoon · approx. 3 hrs',
          'Rajwada is the seven-storey Holkar palace in the old city; Lalbagh Palace is the Holkars\' riverside residence, with grand halls and gardens. Entry tickets are paid locally.'],
        ['Sarafa Bazaar night market', 'Private', 'Evening · approx. 2 hrs',
          'A jewellers\' lane that turns into a street-food market after dark, famous across India for its sweets and snacks.'],
      ] },
    { n: 2, title: 'Mandu day trip',
      photo: { src: IMG + 'day2.jpg', credit: 'Bernard Gagnon / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Drive from Indore to Mandu', 'Private', 'After breakfast · approx. 2.5 hrs each way',
          'A scenic drive up to the old hill capital of Mandu, with the plateau, baobab trees and lakes along the way.'],
        ['Jahaz Mahal and Hindola Mahal', 'Private', 'Late morning · approx. 3 hrs',
          'The "Ship Palace" stands between two lakes, and the Hindola Mahal has walls that slope like a swing. Entry tickets are paid locally.'],
        ["Roopmati Pavilion and Baz Bahadur's Palace", 'Private', 'Afternoon · approx. 1.5 hrs',
          'A hilltop pavilion with a long view over the Nimar plain, then the palace of the last sultan-poet, before the drive back to Indore.'],
      ] },
    { n: 3, title: 'Departure from Indore', last: true,
      photo: { src: IMG + 'day3.jpg', credit: 'आर्या जोशी / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 0, note: 'After breakfast' },
      items: [
        ['Chhappan Dukan', 'Private', 'Morning · approx. 1.5 hrs',
          'A lane of 56 small shops selling snacks, sweets and chaat. Time for a last taste of Indore, or some shopping, before you leave.'],
        ['Drop at Indore Airport or station', 'Private', 'Midday · approx. 30 min',
          'Your driver takes you to the airport or railway station in time for your onward journey.'],
      ] },
  ],

  goodToKnow: [
    'Indore is at its best from October to March; summers are hot.',
    'Mandu is best seen between July and March; the monsoon turns the plateau green.',
    'Wear comfortable shoes; Mandu involves walking on uneven ground.',
    'Timings may change for traffic, weather or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '2 nights in the hotel listed, room type as specified',
      'Daily breakfast at the hotel'] },
    { head: 'Private transfers', sub: 'AC vehicle, your party only', items: [
      'Airport or station pickup on arrival and drop on departure',
      'Indore sightseeing as listed: Rajwada, Lalbagh Palace, Sarafa Bazaar, Chhappan Dukan',
      'Day trip to Mandu and back'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Indore',
    'Lunches, dinners and drinks',
    'Entry tickets, camera fees and optional activities',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as shopping, tips and phone calls',
    'Extra costs caused by weather, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Indore & Mandu · 2 Nights / 3 Days',
    sub: 'Per adult, twin sharing, with breakfast and private transfers',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Hotel and vehicle availability is confirmed once the deposit is paid.',
    'The sightseeing order may be adjusted on the ground for traffic, weather or closures.',
  ],
};
