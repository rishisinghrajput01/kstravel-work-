// Tour definition: Meghalaya, Living Root Country, 4 Nights / 5 Days.
// Same shape as andaman.js.

const IMG = 'img/meghalaya/';

export default {
  id: 'meghalaya',
  name: 'Meghalaya',
  destinationLine: 'Shillong and Cherrapunji, Meghalaya, India',
  durationLabel: '4 Nights / 5 Days',
  nights: 4,
  dayCount: 5,
  packageId: 'MG-4N5D-STD',
  tripIdPrefix: 'KST-MG-',
  defaultPerAdult: 26999,
  mealPlan: 'Breakfast and dinner',
  routeLine: 'Guwahati · Shillong · Cherrapunji · Guwahati',

  // Photos: Wikimedia Commons (CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Madhumita Das / Wikimedia Commons' },

  glance: {
    headline: 'Four nights in the abode of the clouds',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Meghalaya: Shillong, the waterfalls of Cherrapunji, a boat ride on the clear Umngot river at Dawki and the village of Mawlynnong, with hotels, transfers and a private vehicle arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private vehicle from Guwahati airport and back',
  },

  route: [
    { place: 'Shillong', nights: 2, from: 1, to: 3, leg: 'Road · approx. 2.5 h' },
    { place: 'Cherrapunji', nights: 2, from: 3, to: 5, end: ' · drive to Guwahati' },
  ],

  hotels: [
    { name: 'Polo Towers', stars: 3, place: 'Shillong', room: 'Standard', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'ANKAN / Wikimedia Commons' } },
    { name: 'Polo Orchid Resort', stars: 3, place: 'Cherrapunji (Sohra)', room: 'Standard', nights: 2, inDay: 3, outDay: 5,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Chiranjeeb Baul / Wikimedia Commons' } },
  ],
  staysIntro: 'Two 3-star hotels, with breakfast and dinner included at each. Room upgrades can be quoted on request.',
  staysNote: 'Dinner is served at the hotel. Please tell your coordinator about any dietary needs before you travel.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Shillong and its lakes and falls', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Cherrapunji, Dawki and Mawlynnong', days: [3, 4] },
    { label: 'DAY 5', headline: 'The road back to Guwahati', days: [5], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Guwahati to Shillong',
      photo: { src: IMG + 'day1.jpg', credit: 'Prof. Vikramjit Kakati / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Airport pickup and drive to Shillong', 'Private', 'On arrival · approx. 3 to 3.5 hrs',
          'Your driver meets you at Guwahati airport and takes the hill road up to Shillong. Check in and rest at the hotel.'],
        ['Umiam Lake', 'Private', 'On the way · approx. 45 min',
          'A long reservoir ringed by pine hills, a short stop for photographs and a cup of tea. Water sports are optional, at extra cost.'],
        ["Ward's Lake and Police Bazar", 'Private', 'Evening · approx. 1.5 hrs',
          'A relaxed evening walk around the lake in the middle of town, then a stroll through the main market for local food and souvenirs.'],
      ] },
    { n: 2, title: 'Shillong sightseeing',
      photo: { src: IMG + 'day2.jpg', credit: 'Prasanta Kr Dutta / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Elephant Falls', 'Private', 'Pickup 09:00 · approx. 1.5 hrs',
          'A three-tiered waterfall in a fern-filled gorge, reached by a short flight of steps. Best after the rains, when the flow is strongest.'],
        ['Shillong Peak viewpoint', 'Private', 'Late morning · approx. 1 hr',
          'The highest point around, with a wide view over the city and the hills when the sky is clear.'],
        ['Don Bosco Museum or free time in town', 'Private', 'Afternoon · approx. 2 hrs',
          "A well-known museum of the culture of the north-eastern states, or a free afternoon for cafés and shopping. Museum ticket is not included."],
      ] },
    { n: 3, title: 'Shillong to Cherrapunji',
      photo: { src: IMG + 'day3.jpg', credit: 'Vikramjit Kakati / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Check-out and drive to Cherrapunji', 'Private', 'After breakfast · approx. 2.5 hrs',
          'The road climbs onto the Sohra plateau, one of the wettest places on earth, with wide views over the gorges.'],
        ['Mawsmai Cave and Nohkalikai Falls', 'Private', 'Late morning · approx. 3 hrs',
          "A walk through the limestone cave, then the viewpoint for Nohkalikai, one of India's tallest plunge waterfalls, which drops into a green pool."],
        ['Seven Sisters Falls viewpoint', 'Private', 'Late afternoon · approx. 1 hr',
          'A wide cliff-edge view of the falls spilling down the gorge wall.'],
      ] },
    { n: 4, title: 'Dawki and Mawlynnong',
      photo: { src: IMG + 'day4.jpg', credit: 'Jyotishkardey / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 1, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Dawki and the Umngot river boat ride', 'Shared', 'Pickup 07:30 · approx. 2.5 hrs each way',
          'A drive down to the border town, then a boat on the Umngot, clear enough to see the riverbed on a calm day. Boat ticket is paid locally.'],
        ['Mawlynnong village', 'Private', 'Afternoon · approx. 1.5 hrs',
          "A tidy Khasi village known as one of Asia's cleanest, with flower-lined paths, bamboo dustbins and a sky-walk in the trees."],
        ['Living root bridge at Riwai', 'Private', 'Late afternoon · approx. 1 hr',
          'A bridge grown from the roots of a rubber fig, shaped by the Khasi people over generations. A short, easy walk. The Nongriat double-decker bridge needs a long trek and is not included.'],
      ] },
    { n: 5, title: 'Departure', last: true,
      photo: { src: IMG + 'day5.jpg', credit: 'ANKAN / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 1, note: 'After early breakfast' },
      items: [
        ['Drive to Guwahati airport', 'Private', 'After breakfast · approx. 5 to 5.5 hrs',
          'Check out and drive back to Guwahati airport. Book onward flights for the evening, to allow for the road and any weather delays.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID for hotel registration.',
    'Meghalaya can be rainy at any time; pack a light raincoat and shoes with grip.',
    'Views at Nohkalikai and Seven Sisters depend on cloud cover.',
    'The sightseeing order may be adjusted on the ground for weather, road conditions or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '4 nights in the hotels listed: 2 in Shillong, 2 in Cherrapunji',
      'Daily breakfast and dinner at the hotel'] },
    { head: 'Private vehicle', sub: 'your party only', items: [
      'Guwahati airport pickup and drop',
      'Guwahati to Shillong, Shillong to Cherrapunji and back',
      'All sightseeing in the itinerary, including the Dawki and Mawlynnong day trip'] },
    { head: 'Experiences', items: [
      'Umngot river boat ride at Dawki (paid locally if not collected in advance)',
      'Visits to the waterfalls and viewpoints listed'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Guwahati',
    'Lunches and drinks',
    'Entry tickets, camera fees and parking not listed as included',
    'Optional activities such as water sports at Umiam, ziplining and trekking to the Nongriat bridges',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, landslides, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Meghalaya · 4 Nights / 5 Days',
    sub: 'Land package per adult, twin sharing, breakfast and dinner included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Roads in Meghalaya can be affected by heavy rain and landslides; timings may change at short notice.',
    'The sightseeing order may be adjusted on the ground for weather, road conditions or closures.',
  ],
};
