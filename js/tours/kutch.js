// Tour definition: Kutch, White Desert Weekender, 2 Nights / 3 Days.
// Same shape as andaman.js. The tent camp name is a placeholder: set the real one per quote under "Hotels".

const IMG = 'img/kutch/';

export default {
  id: 'kutch',
  name: 'Kutch (White Rann)',
  destinationLine: 'Bhuj and the Rann of Kutch, Gujarat, India',
  durationLabel: '2 Nights / 3 Days',
  nights: 2,
  dayCount: 3,
  packageId: 'KU-2N3D-STD',
  tripIdPrefix: 'KST-KU-',
  defaultPerAdult: 8999,
  mealPlan: 'All meals',
  routeLine: 'Ahmedabad · Bhuj · White Rann · Ahmedabad',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Prof Ranga Sai / Wikimedia Commons' },

  glance: {
    headline: 'A weekend on the white desert',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for a weekend in Kutch: a coach from Ahmedabad to Bhuj, the palaces of the old city, and two nights in an AC tent beside the White Rann, with Gujarati meals and the Rann permit arranged for you. Anything here can be adjusted before you confirm.`,
    routeNote: 'Return coach from Ahmedabad, local sightseeing by vehicle',
  },

  route: [
    { place: 'White Rann (Dhordo)', nights: 2, from: 1, to: 3, end: ' · coach to Ahmedabad' },
  ],

  hotels: [
    { name: '[Tent City name]', nameIsPlaceholder: true, category: 'AC tent city', place: 'Dhordo, near the White Rann', room: 'Deluxe AC tent', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Rannrider / Wikimedia Commons' } },
  ],
  staysIntro: 'Two nights in an AC tent beside the White Rann, with all meals in Gujarati thali style.',
  staysNote: 'All meals are served at the tent city. Please tell your coordinator about any dietary needs before you travel.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Bhuj, then the White Rann', days: [1, 2] },
    { label: 'DAY 3', headline: 'Sunrise on the salt, and home', days: [3], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Ahmedabad to Bhuj and the Rann',
      photo: { src: IMG + 'day1.jpg', credit: 'Amrita.saha / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Coach from Ahmedabad to Bhuj', 'Shared', 'Early morning departure · approx. 7 to 8 hrs',
          'A comfortable coach with breaks on the way. Your coordinator shares the exact boarding point and time before you travel.'],
        ['Aina Mahal and Prag Mahal, Bhuj', 'Private', 'Afternoon · approx. 2 hrs',
          "Two 18th and 19th-century palaces of the Kutch rulers, one with a hall of mirrors, one with a clock tower you can climb. Entry tickets are paid locally."],
        ['Sunset at the White Rann', 'Private', 'Evening · approx. 2 hrs',
          'Drive on to Dhordo, check in, and walk out onto the salt flat as the light goes. The Rann permit is arranged for you.'],
      ] },
    { n: 2, title: 'Kala Dungar and the Rann',
      photo: { src: IMG + 'day2.jpg', credit: 'Raman Patel / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No tent change today' },
      items: [
        ['Sunrise on the white salt', 'Private', 'Early morning · approx. 1.5 hrs',
          'The Rann at first light is pink, then white. Dress warmly; mornings are cold in winter.'],
        ['Kala Dungar viewpoint and craft villages', 'Private', 'After breakfast · approx. 4 hrs',
          "The highest point in Kutch, with a view over the salt desert, then the villages of Hodka and Nirona, known for embroidery, leather and copper bells."],
        ['Evening at the Rann', 'Private', 'Evening · approx. 2 hrs',
          'Back at the salt flat for sunset, with folk music and food stalls at the tent city after dark.'],
      ] },
    { n: 3, title: 'Return to Ahmedabad', last: true,
      photo: { src: IMG + 'day3.jpg', credit: 'Raman Patel / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 0, note: 'After breakfast' },
      items: [
        ['Coach back to Ahmedabad', 'Shared', 'After breakfast · approx. 7 to 8 hrs',
          'A last morning at the Rann if the schedule allows, then the coach back, with breaks on the way. Arrival in Ahmedabad is in the evening.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID; it is needed for the Rann permit and the tent check-in.',
    'Nights are very cold in winter and days are hot in summer. Pack accordingly.',
    'The White Rann is at its best from November to February; the tent city operates in season.',
    'Timings may change for road, weather or crowd conditions.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '2 nights in an AC tent at the tent city',
      'All meals, Gujarati thali style'] },
    { head: 'Transport', items: [
      'Return coach from Ahmedabad',
      'Local sightseeing in Bhuj and around the Rann by vehicle'] },
    { head: 'Permits', items: [
      'White Rann permit and local sightseeing as listed'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Personal travel to the coach boarding point',
    'Meals on the road and drinks',
    'Entry tickets to the palaces, camera fees and optional activities (camel ride, ATV, paramotoring)',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as shopping, tips and phone calls',
    'Extra costs caused by weather, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'White Desert Weekender · 2 Nights / 3 Days',
    sub: 'Per adult, twin sharing, all meals and return coach included',
    basis: 'Quoted per adult on twin sharing. The price may change if dates, the tent category or the number of guests change.',
  },

  availabilityNotes: [
    'The tent city runs in season and sells out around full-moon weekends; tents are held only after the deposit is paid.',
    'Timings may change for road, weather or crowd conditions.',
  ],
};
