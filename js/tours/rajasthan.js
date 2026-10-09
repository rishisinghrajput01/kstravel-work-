// Tour definition: Rajasthan, Royal Rajasthan Circuit, 6 Nights / 7 Days.
// Same shape as andaman.js. Hotel names are placeholders: set the real ones per quote under "Hotels".

const IMG = 'img/rajasthan/';

export default {
  id: 'rajasthan',
  name: 'Rajasthan',
  destinationLine: 'Jaipur, Jodhpur and Udaipur, Rajasthan, India',
  durationLabel: '6 Nights / 7 Days',
  nights: 6,
  dayCount: 7,
  packageId: 'RJ-6N7D-STD',
  tripIdPrefix: 'KST-RJ-',
  defaultPerAdult: 27999,
  mealPlan: 'Breakfast and dinner',
  routeLine: 'Jaipur · Jodhpur · Ranakpur · Udaipur',

  // Photos: Wikimedia Commons (CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Chainwit. / Wikimedia Commons' },

  glance: {
    headline: 'Six nights across three royal cities',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Rajasthan: the forts and palaces of Jaipur, the blue city of Jodhpur and the lakes of Udaipur, with heritage-style hotels, an air-conditioned car with driver, monument tickets and a local guide in each city. Anything here can be adjusted before you confirm.`,
    routeNote: 'Air-conditioned car with driver for all 7 days',
  },

  route: [
    { place: 'Jaipur', nights: 2, from: 1, to: 3, leg: 'Road · approx. 6 h' },
    { place: 'Jodhpur', nights: 2, from: 3, to: 5, leg: 'Road · approx. 5.5 h, via Ranakpur' },
    { place: 'Udaipur', nights: 2, from: 5, to: 7, end: ' · fly out' },
  ],

  hotels: [
    { name: '[Jaipur hotel name]', nameIsPlaceholder: true, category: 'Heritage-style', place: 'Jaipur', room: 'Deluxe room', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Jakub Hałun / Wikimedia Commons' } },
    { name: '[Jodhpur hotel name]', nameIsPlaceholder: true, category: 'Heritage-style', place: 'Jodhpur', room: 'Deluxe room', nights: 2, inDay: 3, outDay: 5,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Yann / Wikimedia Commons' } },
    { name: '[Udaipur hotel name]', nameIsPlaceholder: true, category: 'Heritage-style', place: 'Udaipur', room: 'Deluxe room', nights: 2, inDay: 5, outDay: 7,
      photo: { src: IMG + 'hotel3.jpg', credit: 'Jakub Hałun / Wikimedia Commons' } },
  ],
  staysIntro: 'Three heritage-style hotels, two nights in each, with breakfast and dinner included. Room upgrades can be quoted on request.',
  staysNote: 'Dinner is served at the hotel. Please tell your coordinator about any dietary needs before you travel.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Jaipur, the Pink City', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Across to Jodhpur, the blue city', days: [3, 4] },
    { label: 'DAYS 5–6', headline: 'Ranakpur and the lakes of Udaipur', days: [5, 6] },
    { label: 'DAY 7', headline: 'Farewell to Rajasthan', days: [7], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Jaipur',
      photo: { src: IMG + 'day1.jpg', credit: 'Jakub Hałun / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Airport or station pickup', 'Private', 'On arrival · approx. 45 min',
          'Your driver meets you and takes you to the hotel. Time to check in and rest.'],
        ['Jal Mahal photo stop and Johari Bazaar', 'Private', 'Afternoon · approx. 2.5 hrs',
          "A stop at the palace that seems to float in Man Sagar Lake, then a walk through the old city's jewellery and textile bazaar."],
      ] },
    { n: 2, title: 'Jaipur sightseeing',
      photo: { src: IMG + 'day2.jpg', credit: 'Jakub Hałun / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Amber Fort, with a local guide', 'Private', 'Pickup 09:00 · approx. 3 hrs',
          'The hilltop fort-palace of the Kachwaha rulers, with mirrored halls and wide courtyards. Entry ticket and guide are included.'],
        ['City Palace and Jantar Mantar', 'Private', 'Afternoon · approx. 3 hrs',
          'The royal residence with its museums, and next door the 18th-century observatory of giant stone instruments. Tickets are included.'],
        ['Hawa Mahal photo stop', 'Private', 'Late afternoon · approx. 30 min',
          'The honeycomb facade of the Palace of Winds, best photographed from the street opposite.'],
      ] },
    { n: 3, title: 'Jaipur to Jodhpur',
      photo: { src: IMG + 'day3.jpg', credit: 'Ishadave2204 / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Check-out and drive to Jodhpur', 'Private', 'After breakfast · approx. 6 hrs',
          'A long drive across the plains, with a lunch stop at your own cost. Check in at the hotel on arrival.'],
        ['Evening free in the old city', 'Private', 'Late afternoon · optional',
          "Walk up to the Clock Tower and Sardar Market for the first look at Jodhpur's blue lanes."],
      ] },
    { n: 4, title: 'Jodhpur sightseeing',
      photo: { src: IMG + 'day4.jpg', credit: 'Jakub Hałun / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 1, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Mehrangarh Fort, with a local guide', 'Private', 'Pickup 09:30 · approx. 3 hrs',
          'One of the largest forts in India, on a cliff above the blue city, with palaces, galleries and a view across the rooftops. Entry ticket and guide are included.'],
        ['Jaswant Thada and Umaid Bhawan Palace', 'Private', 'Afternoon · approx. 2.5 hrs',
          'A marble memorial of carved stone, then the outer view of the 20th-century palace. The museum there needs its own ticket.'],
      ] },
    { n: 5, title: 'Jodhpur to Udaipur via Ranakpur',
      photo: { src: IMG + 'day5.jpg', credit: 'Ingo Mehling / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 2 },
      items: [
        ['Ranakpur Jain Temple', 'Private', 'After breakfast · 3 hrs drive, then approx. 1.5 hrs',
          'Drive through the Aravalli hills to a 15th-century marble temple with over a thousand carved pillars, no two alike. Modest dress is needed.'],
        ['Drive on to Udaipur', 'Private', 'Afternoon · approx. 2 hrs',
          'Check in on arrival; the evening is free.'],
      ] },
    { n: 6, title: 'Udaipur, the city of lakes',
      photo: { src: IMG + 'day6.jpg', credit: 'UnpetitproleX / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 2, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['City Palace, with a local guide', 'Private', 'Pickup 10:00 · approx. 2.5 hrs',
          'A cluster of palaces above Lake Pichola, with courtyards, balconies and royal collections. Entry ticket and guide are included.'],
        ['Lake Pichola boat ride at sunset', 'Shared', 'From 17:00 · approx. 1 hr',
          'A boat past the ghats and the island palaces as the light turns gold. Boat ticket is paid locally.'],
      ] },
    { n: 7, title: 'Departure', last: true,
      photo: { src: IMG + 'day7.jpg', credit: 'Jakub Hałun / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 2, note: 'After breakfast · by 11:00' },
      items: [
        ['Airport or station drop', 'Private', 'Timed to your journey · approx. 45 min',
          'Transfer to Udaipur airport or railway station for your onward journey. Maharana Pratap Airport is about 40 minutes from the city.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID for hotel registration.',
    'Temples and palaces ask for modest dress, and shoes come off at some entrances.',
    'Monument opening hours and ticket prices are set by the sites and can change.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '6 nights in heritage-style hotels: 2 each in Jaipur, Jodhpur and Udaipur',
      'Daily breakfast and dinner at the hotel'] },
    { head: 'Private car', sub: 'air-conditioned, with driver, all 7 days', items: [
      'Pickup and drop at the arrival and departure points',
      'Jaipur to Jodhpur to Udaipur, via Ranakpur',
      'All sightseeing in the itinerary'] },
    { head: 'Monuments and guides', items: [
      'Entry tickets: Amber Fort, City Palace and Jantar Mantar in Jaipur, Mehrangarh in Jodhpur, City Palace in Udaipur',
      'A local guide in each of the three cities'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Jaipur and Udaipur',
    'Lunches and drinks',
    'Tickets not listed as included, such as the Ranakpur camera fee, the Umaid Bhawan museum and the Lake Pichola boat',
    'Camel or elephant rides, shows and other optional activities',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Rajasthan · 6 Nights / 7 Days',
    sub: 'Land package per adult, twin sharing, breakfast and dinner included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Peak season (October to March) books out early; rooms are held only after the deposit is paid.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],
};
