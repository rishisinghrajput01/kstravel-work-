// Tour definition: Andaman Islands, 5 Nights / 6 Days.
// Copied from the approved Claude Design quotation. To add another tour, copy this file,
// change the content, and register it in tours/index.js. The renderer needs no changes.

const IMG = 'img/andaman/';

export default {
  id: 'andaman',
  name: 'Andaman Islands',
  destinationLine: 'Andaman Islands, India',
  durationLabel: '5 Nights / 6 Days',
  nights: 5,
  dayCount: 6,
  packageId: 'AND-5N6D-STD',
  tripIdPrefix: 'KST-AND-',
  defaultPerAdult: 25000,
  routeLine: 'Port Blair · Havelock · Neil Island · Port Blair',

  cover: { src: IMG + 'cover.jpg', credit: 'Vyacheslav Argenberg / Wikimedia Commons' },

  glance: {
    headline: 'Five nights across three islands',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Port Blair, Havelock and Neil Island, with hotels, ferries, transfers and sightseeing arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'All inter-island crossings by scheduled ferry',
  },

  // Route strip: dayFrom/dayTo are day numbers; leg = crossing to the NEXT stop.
  route: [
    { place: 'Port Blair', nights: 1, from: 1, to: 2, leg: 'Ferry · approx. 2.5 h' },
    { place: 'Havelock', nights: 2, from: 2, to: 4, leg: 'Ferry · approx. 1 h' },
    { place: 'Neil Island', nights: 1, from: 4, to: 5, leg: 'Ferry · approx. 1.5 h' },
    { place: 'Port Blair', nights: 1, from: 5, to: 6, end: ' · fly out' },
  ],

  hotels: [
    { name: 'Hotel Shompen', stars: 3, place: 'Port Blair', room: 'Deluxe', nights: 1, inDay: 1, outDay: 2,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Voguru / Wikimedia Commons' } },
    { name: 'Hotel Vaikunt Havelock', stars: 3, place: 'Havelock (Swaraj Dweep)', room: 'Standard', nights: 2, inDay: 2, outDay: 4,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Vyacheslav Argenberg / Wikimedia Commons' } },
    { name: 'Hotel Neil Banjara', stars: 3, place: 'Neil Island (Shaheed Dweep)', room: 'Deluxe AC', nights: 1, inDay: 4, outDay: 5,
      photo: { src: IMG + 'hotel3.jpg', credit: 'Vyacheslav Argenberg / Wikimedia Commons' } },
    { name: 'Hotel Royal Palace', stars: 3, place: 'Port Blair', room: 'Standard', nights: 1, inDay: 5, outDay: 6,
      photo: { src: IMG + 'hotel4.jpg', credit: 'Yercaud-elango / Wikimedia Commons' } },
  ],
  staysIntro: 'Four 3-star hotels, breakfast included at each. Room upgrades can be quoted on request.',

  // Two days per itinerary page.
  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Port Blair, then across to Havelock', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Havelock beaches and Neil Island', days: [3, 4] },
    { label: 'DAYS 5–6', headline: 'Back to Port Blair, and home', days: [5, 6], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Port Blair',
      photo: { src: IMG + 'day1.jpg', credit: 'Biswajit Majumdar / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Airport arrival and hotel transfer', 'Private', 'On arrival · approx. 30 min',
          'Your driver meets you at Veer Savarkar International Airport and takes you to the hotel. Time to check in and rest before the afternoon.'],
        ["Corbyn's Cove Beach", 'Private', 'Pickup 14:30 · approx. 2 hrs',
          'A palm-lined crescent a short drive from town, good for an unhurried swim or a walk along the shore. Water sports on the beach are optional, at extra cost.'],
        ['Cellular Jail Light and Sound Show', 'Private', 'Pickup 17:15 · approx. 1.5 hrs · show ticket not included',
          'An evening show in the courtyard of the colonial-era prison, telling the story of the freedom fighters once held here. The jail is closed to visitors on Mondays; the show runs daily.'],
      ] },
    { n: 2, title: 'Port Blair to Havelock',
      photo: { src: IMG + 'day2.jpg', credit: 'Vyacheslav Argenberg / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Check-out and transfer to the jetty', 'Private', 'Pickup 06:30 · approx. 20 min',
          'Check out after an early breakfast and drive to the Port Blair harbour for ferry check-in.'],
        ['Ferry to Havelock (Swaraj Dweep)', 'Shared', 'Departs approx. 08:00 · 2 to 2.5 hrs',
          'A comfortable seated crossing over open sea. Departure times are set by the ferry operator and can change with the weather.'],
        ['Jetty to hotel, free afternoon', 'Private', 'On arrival · approx. 15 min',
          'Your driver meets you at Havelock jetty. The rest of the day is yours to settle in and enjoy the beach near the hotel.'],
      ] },
    { n: 3, title: 'Havelock',
      photo: { src: IMG + 'day3.jpg', credit: 'Vyacheslav Argenberg / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 1, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Elephant Beach by boat, with snorkelling', 'Shared', 'Pickup 07:30 · approx. 4 hrs',
          'A short boat ride to a reef-fringed beach with clear, shallow water. A guided snorkelling session over the coral is included; other water sports are optional.'],
        ['Kalapathar Beach', 'Private', 'Pickup 13:30 · approx. 1 hr',
          'A quiet stretch of pale sand edged with dark rocks, which give the beach its name. Ideal for photographs and a slow walk by the water.'],
        ['Radhanagar Beach until sunset', 'Private', 'From 15:00 · approx. 2.5 hrs',
          "Havelock's best-known beach: a long sweep of fine sand backed by forest, with calm water for swimming. Stay for the sunset before heading back."],
      ] },
    { n: 4, title: 'Havelock to Neil Island',
      photo: { src: IMG + 'day4.jpg', credit: 'Biswajit Majumdar / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 2 },
      items: [
        ['Hotel to jetty', 'Private', 'Pickup 08:45 · approx. 15 min',
          'Check out after breakfast and drive to Havelock jetty for the short crossing to Neil.'],
        ['Ferry to Neil Island (Shaheed Dweep)', 'Shared', 'Departs approx. 09:30 · approx. 1 hr',
          'Your driver meets you at Neil jetty and takes you to the hotel to drop your bags.'],
        ['Neil beaches: Bharatpur, Natural Rock, Laxmanpur', 'Private', 'Pickup 13:30 · approx. 4 hrs',
          "Start with the calm, shallow lagoon at Bharatpur, walk over the reef to the sea-carved Natural Rock arch at low tide, and end at Laxmanpur, the island's best sunset beach."],
      ] },
    { n: 5, title: 'Neil Island to Port Blair',
      photo: { src: IMG + 'day5.jpg', credit: 'Tejasi Vashishtha / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 3 },
      items: [
        ['Ferry to Port Blair', 'Shared', 'Departs approx. 07:00 · 1.5 to 2 hrs',
          "An early check-out and private transfer to Neil jetty. On arrival in Port Blair, your driver takes you straight to the harbour for the day's boat tour."],
        ['Ross Island and North Bay', 'Shared', 'Boat departs approx. 10:00 · approx. 5 hrs',
          'Ross Island holds the overgrown ruins of the former British headquarters, now home to deer and peacocks. North Bay follows, with clear water over the coral; glass-bottom boat and snorkelling are optional. Private transfer to the hotel afterwards.'],
      ] },
    { n: 6, title: 'Departure', last: true,
      photo: { src: IMG + 'day6.jpg', credit: 'Wikimedia Commons contributor / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 3, note: 'After breakfast · by 10:00' },
      items: [
        ['Airport drop', 'Private', 'Timed to your flight · approx. 30 min',
          'Transfer to Veer Savarkar International Airport for your onward flight. Please plan to reach the airport two hours before departure.'],
      ] },
  ],

  goodToKnow: [
    'Ferry times are fixed by the operators and can change with weather or sea conditions. Your coordinator confirms final timings the day before.',
    'Carry a government photo ID (passport, Aadhaar or driving licence) for ferry check-in and hotel registration.',
    'The Cellular Jail is closed to visitors on Mondays; the Light and Sound Show runs daily.',
    'Sightseeing order may be adjusted on the ground for tides, weather or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '5 nights in the hotels listed, room types as specified',
      'Daily breakfast at every hotel'] },
    { head: 'Private transfers', sub: 'AC vehicle, your party only', items: [
      'Airport pickup on arrival and drop on departure',
      'Hotel–jetty transfers in Port Blair, Havelock and Neil',
      "Port Blair: Corbyn's Cove and Cellular Jail show visit",
      'Havelock: Kalapathar and Radhanagar beaches',
      'Neil: Bharatpur, Natural Rock and Laxmanpur'] },
    { head: 'Shared transfers', sub: 'scheduled ferries and boats', items: [
      'Ferry: Port Blair to Havelock',
      'Ferry: Havelock to Neil Island',
      'Ferry: Neil Island to Port Blair',
      'Boat to Elephant Beach, with a guided snorkelling session',
      'Boat tour to Ross Island and North Bay'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights to and from Port Blair',
    'Cellular Jail Light and Sound Show ticket',
    'Lunches, dinners and drinks',
    'Optional activities such as scuba diving, sea walk, glass-bottom boat and jet ski',
    'Entry tickets, permits, camera and forest fees not listed as included',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, ferry cancellations or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Andaman Islands · 5 Nights / 6 Days',
    sub: 'Land package per adult, twin sharing, breakfast included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Ferry timings are set by the operators and may change at short notice due to weather or sea conditions.',
    'The sightseeing order may be adjusted on the ground for tides, weather or closures.',
  ],
};
