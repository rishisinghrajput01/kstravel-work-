// Tour definition: Rishikesh & Mussoorie, Ganga & Mussoorie, 3 Nights / 4 Days.
// Same shape as andaman.js.

const IMG = 'img/rishikesh/';

export default {
  id: 'rishikesh',
  name: 'Rishikesh & Mussoorie',
  destinationLine: 'Rishikesh and Mussoorie, Uttarakhand, India',
  durationLabel: '3 Nights / 4 Days',
  nights: 3,
  dayCount: 4,
  packageId: 'RM-3N4D-STD',
  tripIdPrefix: 'KST-RM-',
  defaultPerAdult: 12499,
  mealPlan: 'Breakfast and dinner',
  routeLine: 'Dehradun · Rishikesh · Mussoorie · Dehradun',

  // Photos: Wikimedia Commons (CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Arpan Mahajan / Wikimedia Commons' },

  glance: {
    headline: 'Three nights from the river to the hills',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Rishikesh and Mussoorie: the evening aarti on the Ganga, a rafting session with certified guides, and a night in the hills above Dehradun, with hotels and a private cab arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private cab for the full circuit',
  },

  route: [
    { place: 'Rishikesh', nights: 2, from: 1, to: 3, leg: 'Road · approx. 3 h' },
    { place: 'Mussoorie', nights: 1, from: 3, to: 4, end: ' · drive to Dehradun' },
  ],

  hotels: [
    { name: 'Ganga Kinare Riverside Resort', category: 'Riverside', place: 'Rishikesh', room: 'Deluxe room', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Deepanshu Mittall / Wikimedia Commons' } },
    { name: 'Hotel Padmini Nivas', category: 'Hillside', place: 'Mussoorie', room: 'Deluxe room', nights: 1, inDay: 3, outDay: 4,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Harshanh / Wikimedia Commons' } },
  ],
  staysIntro: 'A riverside hotel in Rishikesh and a hillside hotel in Mussoorie, with breakfast and dinner included at each. Room upgrades can be quoted on request.',
  staysNote: 'Dinner is served at the hotel. Please tell your coordinator about any dietary needs before you travel.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Rishikesh, the Ganga and the rapids', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Up to Mussoorie, and home', days: [3, 4], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Rishikesh',
      photo: { src: IMG + 'day1.jpg', credit: 'ArmouredCyborg / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Airport or station pickup', 'Private', 'On arrival · approx. 1 hr',
          'Your driver meets you at Dehradun airport, Haridwar or Rishikesh and takes you to the hotel. Check in and rest.'],
        ['Lakshman Jhula and Ram Jhula', 'Private', 'Afternoon · approx. 2 hrs',
          'A walk across the two suspension bridges over the Ganga, with cafés and ashrams along the banks.'],
        ['Ganga aarti at Triveni Ghat', 'Private', 'Evening · approx. 1.5 hrs',
          'The evening prayer on the river steps, with lamps, bells and chanting. Arrive early for a good place on the ghat.'],
      ] },
    { n: 2, title: 'Rafting on the Ganga',
      photo: { src: IMG + 'day2.jpg', credit: 'Goutam1962 / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['White-water rafting', 'Shared', 'Pickup 08:00 · approx. 4 hrs',
          'A rafting session of about 16 km with certified guides, safety kayakers, helmets and life jackets. The rapids run from grade 2 to 3, and the plan is suited to first-timers.'],
        ['Free afternoon in Rishikesh', 'Private', 'Afternoon',
          'Time for a yoga class, the Beatles Ashram, a riverside café or the bazaar near Ram Jhula.'],
      ] },
    { n: 3, title: 'Rishikesh to Mussoorie',
      photo: { src: IMG + 'day3.jpg', credit: 'Inder S Kharayat / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Check-out and drive to Mussoorie', 'Private', 'After breakfast · approx. 3 hrs',
          'The road climbs through Dehradun and up into the lower Himalaya. Check in on arrival.'],
        ['Kempty Falls', 'Private', 'Afternoon · approx. 2 hrs',
          'A hill waterfall with pools below. Entry and the cable car are paid locally.'],
        ['Mall Road in the evening', 'Private', 'Evening · approx. 2 hrs',
          "Mussoorie's main promenade, with cafés and shops. A relaxed walk after the drive."],
      ] },
    { n: 4, title: 'Departure', last: true,
      photo: { src: IMG + 'day4.jpg', credit: 'Harshanh / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 1, note: 'After breakfast' },
      items: [
        ['Drive to Dehradun airport or Haridwar', 'Private', 'After breakfast · approx. 1.5 to 3 hrs',
          'Check out and drive down. Dehradun airport takes about 1.5 hours; Haridwar station about 3. Book onward travel for the afternoon.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID for hotel registration.',
    'Rafting depends on river levels and is usually closed from July to mid-September.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '3 nights: 2 in Rishikesh, 1 in Mussoorie',
      'Daily breakfast and dinner at the hotel'] },
    { head: 'Private cab', sub: 'your party only', items: [
      'Pickup and drop at Dehradun, Haridwar or Rishikesh',
      'Rishikesh to Mussoorie and on to Dehradun',
      'All sightseeing in the itinerary'] },
    { head: 'Experiences', items: [
      'White-water rafting session with certified guides'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Dehradun or Haridwar',
    'Lunches and drinks',
    'Entry tickets and cable-car tickets not listed as included, such as Kempty Falls',
    'Optional activities such as bungee, ziplining and cliff jumping',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, landslides, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Ganga & Mussoorie · 3 Nights / 4 Days',
    sub: 'Land package per adult, twin sharing, breakfast and dinner included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Rafting is paused in the monsoon; your coordinator confirms availability for your dates.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],
};
