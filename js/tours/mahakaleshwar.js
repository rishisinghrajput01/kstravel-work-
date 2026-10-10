// Tour definition: Mahakaleshwar Jyotirlinga with Omkareshwar, 3 Nights / 4 Days.
// Same shape as andaman.js. The day-by-day plan is our standard plan for this trip.

const IMG = 'img/mahakaleshwar/';

export default {
  id: 'mahakaleshwar',
  name: 'Mahakaleshwar & Omkareshwar',
  destinationLine: 'Ujjain and Omkareshwar, Madhya Pradesh, India',
  durationLabel: '3 Nights / 4 Days',
  nights: 3,
  dayCount: 4,
  packageId: 'MK-3N4D-STD',
  tripIdPrefix: 'KST-MK-',
  defaultPerAdult: 12999,
  mealPlan: 'Breakfast',
  routeLine: 'Indore · Ujjain · Omkareshwar · Indore',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Krishnakant / Wikimedia Commons' },

  glance: {
    headline: 'Two Jyotirlingas in four days',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for the Mahakaleshwar pilgrimage: the Bhasma Aarti and temples of Ujjain, then the island temple of Omkareshwar on the Narmada, with hotels, transfers and darshan support arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private vehicle throughout, from Indore airport or station and back',
  },

  route: [
    { place: 'Ujjain', nights: 2, from: 1, to: 3, leg: 'Road · approx. 3.5 to 4 h' },
    { place: 'Omkareshwar', nights: 1, from: 3, to: 4, end: ' · drive to Indore' },
  ],

  hotels: [
    { name: 'Hotel Abika Elite', stars: 3, place: 'Ujjain', room: 'Standard', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Bernard Gagnon / Wikimedia Commons' } },
    { name: 'MPT Temple View', stars: 3, place: 'Omkareshwar', room: 'Standard', nights: 1, inDay: 3, outDay: 4,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Jean-Pierre Dalbéra / Wikimedia Commons' } },
  ],
  staysIntro: 'Two 3-star hotels, with daily breakfast. Room upgrades can be quoted on request.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Ujjain, and the Bhasma Aarti', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Omkareshwar on the Narmada, and home', days: [3, 4], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Indore to Ujjain',
      photo: { src: IMG + 'day1.jpg', credit: 'Arian Zwegers / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Pickup from Indore Airport or station', 'Private', 'On arrival · drive approx. 1.5 to 2 hrs',
          'Your driver meets you on arrival and takes you to Ujjain. Check in and rest after the journey.'],
        ['Mahakal Lok corridor', 'Private', 'Evening · approx. 1.5 hrs',
          'The walkway leading to the temple, lined with statues and murals of stories of Shiva, lit up after dark.'],
        ['Ram Ghat and the Shipra aarti', 'Private', 'Evening · approx. 1 hr',
          'The main bathing ghat on the Shipra, where the evening aarti is held with lamps floated on the river.'],
      ] },
    { n: 2, title: 'Bhasma Aarti and the old temples',
      photo: { src: IMG + 'day2.jpg', credit: 'Gyanendrasinghchauhan / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Bhasma Aarti at Mahakaleshwar', 'Private', 'Before dawn · approx. 3 hrs',
          'The morning aarti the temple is known for. We help with the online registration; permission, fees and slots are set by the temple and are limited.'],
        ['Kal Bhairav and Harsiddhi temples', 'Private', 'After breakfast · approx. 2.5 hrs',
          'The guardian temple of the city, then the old Shakti temple with its two tall lamp towers.'],
        ['Sandipani Ashram and Mangalnath', 'Private', 'Afternoon · approx. 2.5 hrs',
          'The ashram where, according to tradition, Krishna studied, and the Mangalnath temple on the Shipra bank.'],
      ] },
    { n: 3, title: 'Ujjain to Omkareshwar',
      photo: { src: IMG + 'day3.jpg', credit: 'Arian Zwegers / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Drive to Omkareshwar', 'Private', 'After breakfast · approx. 3.5 to 4 hrs',
          'Through the Malwa countryside to the town on the Narmada. Check in on arrival.'],
        ['Omkareshwar Jyotirlinga darshan', 'Private', 'Afternoon · approx. 2 hrs',
          'The temple on Mandhata island, shaped like the Om symbol.'],
        ['Narmada aarti', 'Private', 'Evening · approx. 1 hr',
          'The evening aarti on the ghat, with lamps set afloat.'],
      ] },
    { n: 4, title: 'Return to Indore', last: true,
      photo: { src: IMG + 'day4.jpg', credit: 'Sudha Kulkarni / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 1, note: 'After breakfast' },
      items: [
        ['Narmada ghats and Mamleshwar', 'Private', 'Morning · approx. 2 hrs',
          'A last walk by the river, and darshan at Mamleshwar on the south bank.'],
        ['Drive to Indore, and drop', 'Private', 'Midday · approx. 2.5 to 3 hrs',
          'Drop at Indore Airport or station for your onward journey.'],
      ] },
  ],

  goodToKnow: [
    'The Bhasma Aarti has a dress code and limited entry. Your coordinator will confirm the rules.',
    'Temples may not allow phones or bags inside. Carry a government photo ID.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '3 nights in the hotels listed, room types as specified',
      'Daily breakfast at every hotel'] },
    { head: 'Private transfers', sub: 'AC vehicle, your party only', items: [
      'Pickup from Indore Airport or station, and drop on departure',
      'Ujjain sightseeing as listed',
      'Ujjain to Omkareshwar, and Omkareshwar to Indore'] },
    { head: 'Support', items: [
      'Help with Bhasma Aarti registration, subject to the temple\'s permission',
      'A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Indore',
    'Lunches, dinners and drinks',
    'Bhasma Aarti fees, special darshan tickets, pooja items and boat fares',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as shopping, tips and phone calls',
    'Extra costs caused by weather, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Mahakaleshwar & Omkareshwar · 3 Nights / 4 Days',
    sub: 'Per adult, twin sharing, with breakfast and private transfers',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Bhasma Aarti entry is limited and allotted by the temple; it cannot be guaranteed.',
    'Temple timings and darshan arrangements are set by the temple and may change at short notice.',
  ],
};
