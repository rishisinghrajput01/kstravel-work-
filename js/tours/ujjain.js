// Tour definition: Ujjain, City of Temples, 2 Nights / 3 Days.
// Same shape as andaman.js. The day-by-day plan is our standard plan for this trip.

const IMG = 'img/ujjain/';

export default {
  id: 'ujjain',
  name: 'Ujjain',
  destinationLine: 'Ujjain, Madhya Pradesh, India',
  durationLabel: '2 Nights / 3 Days',
  nights: 2,
  dayCount: 3,
  packageId: 'UJ-2N3D-STD',
  tripIdPrefix: 'KST-UJ-',
  defaultPerAdult: 8999,
  mealPlan: 'Breakfast',
  routeLine: 'Indore · Ujjain · Indore',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Ashverse / Wikimedia Commons' },

  glance: {
    headline: 'Two nights in the city of temples',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Ujjain: darshan at Mahakaleshwar, the ghats of the Shipra and the old temples and ashrams around the city, with hotel, transfers and sightseeing arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private vehicle throughout, from Indore airport or station and back',
  },

  route: [
    { place: 'Ujjain', nights: 2, from: 1, to: 3, end: ' · drive to Indore' },
  ],

  hotels: [
    { name: 'Hotel Abika Elite', stars: 3, place: 'Ujjain', room: 'Standard', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Bernard Gagnon / Wikimedia Commons' } },
  ],
  staysIntro: 'Two nights in a 3-star hotel in Ujjain, with daily breakfast. Room upgrades can be quoted on request.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'The Shipra ghats, and Mahakaleshwar', days: [1, 2] },
    { label: 'DAY 3', headline: 'Kal Bhairav, and the road to Indore', days: [3], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Indore to Ujjain',
      photo: { src: IMG + 'day1.jpg', credit: 'Bernard Gagnon / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Pickup from Indore Airport or station', 'Private', 'On arrival · drive approx. 1.5 to 2 hrs',
          'Your driver meets you on arrival and takes you to Ujjain. Check in and rest after the journey.'],
        ['Harsiddhi Temple', 'Private', 'Afternoon · approx. 1 hr',
          'An old Shakti temple known for its two tall lamp towers, which are lit in the evening.'],
        ['Ram Ghat and the Shipra aarti', 'Private', 'Evening · approx. 1.5 hrs',
          'The main bathing ghat on the Shipra, where the evening aarti is held with lamps floated on the river.'],
      ] },
    { n: 2, title: 'Mahakaleshwar and the old city',
      photo: { src: IMG + 'day2.jpg', credit: 'Bernard Gagnon / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Mahakaleshwar Temple darshan', 'Private', 'Morning · approx. 2 to 3 hrs',
          'Darshan at the Mahakaleshwar Jyotirlinga. Queue times vary by day and season; special darshan tickets, if wanted, are paid locally.'],
        ['Sandipani Ashram', 'Private', 'Late morning · approx. 1.5 hrs',
          'The ashram where, according to tradition, Krishna and Balarama studied under Guru Sandipani.'],
        ['Vedh Shala and Mangalnath Temple', 'Private', 'Afternoon · approx. 2.5 hrs',
          "Ujjain's 18th-century observatory built by Maharaja Jai Singh II, then the Mangalnath temple, a short drive away."],
      ] },
    { n: 3, title: 'Return to Indore', last: true,
      photo: { src: IMG + 'day3.jpg', credit: 'Utcursch / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 0, note: 'After breakfast' },
      items: [
        ['Kal Bhairav Temple and Bhartrihari Caves', 'Private', 'Morning · approx. 2 hrs',
          'The temple of Kal Bhairav, the guardian of the city, and the caves on the Shipra bank where the king-poet Bhartrihari is said to have meditated.'],
        ['Drive to Indore, and drop', 'Private', 'Midday · approx. 1.5 to 2 hrs',
          'Your driver takes you to Indore Airport or the railway station in time for your onward journey.'],
      ] },
  ],

  goodToKnow: [
    'Temples have dress codes and may not allow phones, cameras or bags inside. Your coordinator will confirm the current rules.',
    'Carry a government photo ID.',
    'Queues are longest on Mondays, festivals and weekends; early mornings are quieter.',
    'Timings may change for temple schedules, crowds or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '2 nights in the hotel listed, room type as specified',
      'Daily breakfast at the hotel'] },
    { head: 'Private transfers', sub: 'AC vehicle, your party only', items: [
      'Pickup from Indore Airport or station, and drop on departure',
      'Ujjain sightseeing as listed: Mahakaleshwar, Harsiddhi, Ram Ghat, Sandipani Ashram, Vedh Shala, Mangalnath, Kal Bhairav, Bhartrihari Caves'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Indore',
    'Lunches, dinners and drinks',
    'Entry tickets, special darshan tickets, pooja items and camera fees',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as shopping, tips and phone calls',
    'Extra costs caused by weather, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Ujjain · 2 Nights / 3 Days',
    sub: 'Per adult, twin sharing, with breakfast and private transfers',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Hotel and vehicle availability is confirmed once the deposit is paid.',
    'Temple timings and darshan arrangements are set by the temple and may change at short notice.',
  ],
};
