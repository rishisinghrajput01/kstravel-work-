// Tour definition: Darjeeling & Gangtok ("Tea Country"), 5 Nights / 6 Days.
// Package details (price, nights, inclusions) come from the KS Travels Hub website catalogue.
// Day-by-day content is a standard plan for this circuit: confirm timings and sights with the
// operator before sending a real quotation.

const IMG = 'img/darjeeling-gangtok/';

export default {
  id: 'darjeeling-gangtok',
  name: 'Darjeeling & Gangtok',
  destinationLine: 'Darjeeling and Gangtok, India',
  durationLabel: '5 Nights / 6 Days',
  nights: 5,
  dayCount: 6,
  packageId: 'DG-5N6D-STD',
  tripIdPrefix: 'KST-DG-',
  defaultPerAdult: 22999,
  mealPlan: 'Breakfast and dinner',
  routeLine: 'Bagdogra · Darjeeling · Gangtok · Bagdogra',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Paramanu Sarkar / Wikimedia Commons' },

  glance: {
    headline: 'Five nights across two hill stations',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Darjeeling and Gangtok: sunrise over Kanchenjunga, tea gardens and mountain monasteries, with hotels, permits, transfers and a private vehicle arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private vehicle throughout, from Bagdogra and back',
  },

  route: [
    { place: 'Darjeeling', nights: 2, from: 1, to: 3, leg: 'Road · approx. 4 to 5 h' },
    { place: 'Gangtok', nights: 3, from: 3, to: 6, end: ' · drive to airport' },
  ],

  hotels: [
    { name: 'Hotel Seven Seventeen', stars: 3, place: 'Darjeeling', room: 'Standard', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Syed Sajidul Islam / Wikimedia Commons' } },
    { name: 'Hotel Tashi Delek', stars: 3, place: 'Gangtok', room: 'Standard', nights: 3, inDay: 3, outDay: 6,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Bernard Gagnon / Wikimedia Commons' } },
  ],
  staysIntro: 'Two 3-star hotels, with breakfast and dinner included at each. Room upgrades can be quoted on request.',
  staysNote: 'Dinner is served at the hotel. Please tell your coordinator about any dietary needs before you travel.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Darjeeling, and sunrise at Tiger Hill', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Across to Gangtok, and Tsomgo Lake', days: [3, 4] },
    { label: 'DAYS 5–6', headline: 'Gangtok monasteries, and the way home', days: [5, 6], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Darjeeling',
      photo: { src: IMG + 'day1.jpg', credit: 'Vyacheslav Argenberg / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Pickup from Bagdogra Airport or NJP station', 'Private', 'On arrival · drive approx. 3 to 3.5 hrs',
          'Your driver meets you at Bagdogra Airport or New Jalpaiguri station and takes you up through the foothills and tea country to Darjeeling. Check in and rest after the journey.'],
        ['Chowrasta and Mall Road', 'Private', 'Evening · approx. 1.5 hrs',
          "Darjeeling's open square and main promenade, lined with cafés and shops. On a clear evening it is the best first look at the town and the ranges beyond."],
      ] },
    { n: 2, title: 'Darjeeling sightseeing',
      photo: { src: IMG + 'day2.jpg', credit: 'K94t / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Tiger Hill sunrise', 'Private', 'Pickup before dawn · approx. 3 hrs',
          'A pre-dawn drive up to the viewpoint for first light on Kanchenjunga and, on clear mornings, the wider Himalayan range. Pickup time follows the season; carry warm layers.'],
        ['Ghoom Monastery and Batasia Loop', 'Private', 'After breakfast · approx. 2 hrs',
          'A visit to the Ghoom monastery, then Batasia Loop, a garden built around a spiral stretch of the Himalayan Railway, with mountain views.'],
        ['Tea estate visit', 'Private', 'Pickup 14:00 · approx. 1.5 hrs',
          'Walk between terraced tea gardens and see how the leaf is processed. Factory visits depend on the season and working hours.'],
      ] },
    { n: 3, title: 'Darjeeling to Gangtok',
      photo: { src: IMG + 'day3.jpg', credit: 'Yoghya / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Check-out and drive to Gangtok', 'Private', 'After breakfast · approx. 4 to 5 hrs',
          'A winding road down to the Teesta river valley and up again into Sikkim, with stops for photographs. Lunch on the way is at your own cost.'],
        ['MG Marg evening walk', 'Private', 'Evening · approx. 1.5 hrs',
          "Gangtok's vehicle-free promenade, lined with cafés and shops. An easy walk after the drive, and a good place to find dinner options for later days."],
      ] },
    { n: 4, title: 'Tsomgo Lake and Baba Mandir',
      photo: { src: IMG + 'day4.jpg', credit: 'Laluttam / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 1, label: 'STAYING · NIGHT 2 OF 3', note: 'No hotel change today' },
      items: [
        ['Tsomgo (Changu) Lake', 'Private', 'Pickup approx. 08:00 · approx. 3 hrs each way',
          'A high-altitude glacial lake above 3,700 m. Permits are arranged for you; please carry a government photo ID. Access depends on road and weather conditions.'],
        ['Baba Mandir', 'Private', 'Late morning · approx. 1 hr',
          'A well-known roadside shrine on the road towards Nathu La, dedicated to soldier Baba Harbhajan Singh. Most visitors stop for a short visit and a hot drink.'],
        ['Return to Gangtok', 'Private', 'Back by approx. 16:00',
          'Drive back to the hotel. The evening is free to rest or return to MG Marg.'],
      ] },
    { n: 5, title: 'Gangtok monasteries and viewpoints',
      photo: { src: IMG + 'day5.jpg', credit: 'Anjan Kumar Kundu / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 1, label: 'STAYING · NIGHT 3 OF 3', note: 'No hotel change today' },
      items: [
        ['Rumtek Monastery', 'Private', 'Pickup 09:00 · approx. 3 hrs',
          "One of Sikkim's most important monasteries, on a hillside about 24 km from Gangtok, with a large prayer hall and painted interiors."],
        ['Enchey Monastery and Ganesh Tok', 'Private', 'Pickup 13:30 · approx. 2 hrs',
          "A monastery on a ridge above town, followed by a small hilltop temple with a wide view over Gangtok."],
        ['Tashi View Point', 'Private', 'Late afternoon · approx. 1.5 hrs',
          'A viewpoint on the Nathu La road with a long outlook over the valley. On clear days Kanchenjunga stands on the skyline.'],
      ] },
    { n: 6, title: 'Departure', last: true,
      photo: { src: IMG + 'day6.jpg', credit: 'Subhrajyoti07 / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 1, note: 'After early breakfast' },
      items: [
        ['Drive to Bagdogra Airport or NJP station', 'Private', 'After breakfast · approx. 4 to 5 hrs',
          'Check out and drive down to Bagdogra Airport or NJP station. Book onward flights or trains for the afternoon, to allow for the road journey.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID for hotel registration and the Tsomgo Lake permit.',
    'Mountain views and the Tiger Hill sunrise depend on the weather.',
    'Nathu La needs a separate permit and is not part of this plan.',
    'The sightseeing order may be adjusted on the ground for weather, road conditions or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '5 nights in the hotels listed: 2 in Darjeeling, 3 in Gangtok',
      'Daily breakfast and dinner at the hotel'] },
    { head: 'Private vehicle', sub: 'your party only', items: [
      'Pickup and drop at Bagdogra Airport or NJP station',
      'Darjeeling to Gangtok transfer',
      'All sightseeing in Darjeeling and Gangtok, as per the itinerary',
      'Tiger Hill sunrise trip',
      'Tsomgo Lake and Baba Mandir excursion'] },
    { head: 'Experiences and permits', items: [
      'Tea-estate visit',
      'Permits for the places listed in the itinerary'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Bagdogra or NJP',
    'Lunches and drinks',
    'Entry tickets, camera fees and ropeway or toy-train tickets, unless listed as included',
    'Optional activities such as the Himalayan Railway joy ride, yak rides and adventure sports',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, landslides, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Darjeeling & Gangtok · 5 Nights / 6 Days',
    sub: 'Land package per adult, twin sharing, breakfast and dinner included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Hill roads can close at short notice because of weather or landslides, which may change the sightseeing order.',
    'Mountain views and sunrise at Tiger Hill depend on the weather on the day.',
  ],
};
