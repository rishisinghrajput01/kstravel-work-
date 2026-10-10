// Tour definition: Kerala, Backwaters & Hills, 5 Nights / 6 Days.
// Same shape as andaman.js.

const IMG = 'img/kerala/';

export default {
  id: 'kerala',
  name: 'Kerala',
  destinationLine: 'Kerala, India',
  durationLabel: '5 Nights / 6 Days',
  nights: 5,
  dayCount: 6,
  packageId: 'KL-5N6D-STD',
  tripIdPrefix: 'KST-KL-',
  defaultPerAdult: 24999,
  mealPlan: 'Breakfast',
  routeLine: 'Kochi · Munnar · Thekkady · Alleppey · Kochi',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA / CC0); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Paul Arps / Wikimedia Commons' },

  glance: {
    headline: 'Five nights from the coast to the hills',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Kerala: Fort Kochi, the tea gardens of Munnar, the Periyar lake at Thekkady and a night on a private houseboat in the Alleppey backwaters, with hotels, a private cab and sightseeing arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private cab for the whole circuit',
  },

  route: [
    { place: 'Kochi', nights: 1, from: 1, to: 2, leg: 'Road · approx. 4 h' },
    { place: 'Munnar', nights: 2, from: 2, to: 4, leg: 'Road · approx. 4 h' },
    { place: 'Thekkady', nights: 1, from: 4, to: 5, leg: 'Road · approx. 4 h' },
    { place: 'Alleppey', nights: 1, from: 5, to: 6, end: ' · to Kochi' },
  ],

  hotels: [
    { name: 'Hotel Fort House', stars: 3, place: 'Fort Kochi', room: 'Standard', nights: 1, inDay: 1, outDay: 2,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Vis M / Wikimedia Commons' } },
    { name: 'KTDC Tea County', stars: 3, place: 'Munnar', room: 'Standard', nights: 2, inDay: 2, outDay: 4,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Ingo Mehling / Wikimedia Commons' } },
    { name: 'Treebo Trend Kumily Gate', stars: 3, place: 'Thekkady', room: 'Standard', nights: 1, inDay: 4, outDay: 5,
      photo: { src: IMG + 'hotel3.jpg', credit: 'Sreedevi512 / Wikimedia Commons' } },
    { name: 'Spice Routes Houseboat', category: 'Deluxe houseboat', place: 'Alleppey backwaters', room: 'Private AC cabin',
      meals: 'All meals', nights: 1, inDay: 5, outDay: 6,
      photo: { src: IMG + 'hotel4.jpg', credit: 'Paul Arps / Wikimedia Commons' } },
  ],
  staysIntro: 'Three 3-star hotels and one night on a deluxe houseboat. Breakfast daily, and all meals on the houseboat. Room upgrades can be quoted on request.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Fort Kochi, then up to Munnar', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Munnar tea hills, then to Thekkady', days: [3, 4] },
    { label: 'DAYS 5–6', headline: 'A night on the backwaters, and home', days: [5, 6], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Kochi',
      photo: { src: IMG + 'day1.jpg', credit: 'Ranjithsiji / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Airport arrival and hotel transfer', 'Private', 'On arrival · approx. 1 hr',
          'Your driver meets you at Cochin International Airport and takes you to the hotel in Fort Kochi. Time to check in and rest.'],
        ['Fort Kochi and the Chinese fishing nets', 'Private', 'Pickup 15:30 · approx. 2.5 hrs',
          'A walk through the old Portuguese and Dutch quarter, then the giant cantilevered fishing nets on the shore, best seen as the light softens towards sunset.'],
        ['Kathakali show', 'Private', 'Pickup 18:00 · approx. 1.5 hrs',
          "An evening performance of Kerala's classical dance-drama, with the elaborate make-up and costumes done in front of the audience."],
      ] },
    { n: 2, title: 'Kochi to Munnar',
      photo: { src: IMG + 'day2.jpg', credit: 'CookBooc / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Check-out and drive to Munnar', 'Private', 'After breakfast · approx. 4 to 4.5 hrs',
          'The road climbs from the coast into the Western Ghats, with stops for waterfalls and viewpoints on the way up. Lunch on the way is at your own cost.'],
        ['Tea gardens at Munnar', 'Private', 'Afternoon · approx. 2 hrs',
          'A first look at the rolling tea estates around town. Check in, then walk among the bushes or relax with a cup of fresh local tea.'],
      ] },
    { n: 3, title: 'Munnar',
      photo: { src: IMG + 'day3.jpg', credit: 'Ingo Mehling / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 1, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Mattupetty Dam and lake', 'Private', 'Pickup 09:00 · approx. 2 hrs',
          'A reservoir ringed by tea slopes and shola forest. Boating is optional, at extra cost.'],
        ['Tea Museum', 'Private', 'Late morning · approx. 1.5 hrs',
          'Explains how tea is grown, picked and processed in these hills, with old machinery on show. Entry is included.'],
        ['Echo Point and Eravikulam viewpoints', 'Private', 'Afternoon · approx. 3 hrs',
          'High viewpoints over the valley and the grasslands where the Nilgiri tahr lives. Eravikulam National Park can close for parts of the year; your coordinator will confirm.'],
      ] },
    { n: 4, title: 'Munnar to Thekkady',
      photo: { src: IMG + 'day4.jpg', credit: 'Sudipta sadhukhan / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 2 },
      items: [
        ['Check-out and drive to Thekkady', 'Private', 'After breakfast · approx. 4 hrs',
          'A scenic road down through cardamom and tea country towards the Periyar reserve.'],
        ['Spice plantation walk', 'Private', 'Afternoon · approx. 1.5 hrs',
          'A guided walk among cardamom, pepper, clove and vanilla, with the chance to buy fresh spices directly from the growers.'],
        ['Periyar Lake boat ride', 'Shared', 'Late afternoon · approx. 1.5 hrs · ticket not included',
          'A forest-department boat on the lake, where deer, bison and sometimes elephants come down to the water. Sightings are never guaranteed.'],
      ] },
    { n: 5, title: 'Thekkady to Alleppey',
      photo: { src: IMG + 'day5.jpg', credit: 'Paul Arps / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 3 },
      items: [
        ['Check-out and drive to Alleppey', 'Private', 'After breakfast · approx. 4 hrs',
          'Down from the hills to the backwater country. Your driver takes you to the houseboat jetty.'],
        ['Houseboat cruise', 'Private', 'Boards approx. 12:00 · until next morning',
          'A private houseboat with your own crew and cabin. It cruises the canals and lagoons, with lunch, tea, dinner and breakfast cooked on board, and moors for the night.'],
      ] },
    { n: 6, title: 'Departure', last: true,
      photo: { src: IMG + 'day6.jpg', credit: 'Ranjithsiji / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 3, note: 'After breakfast · approx. 09:00' },
      items: [
        ['Drive to Kochi Airport', 'Private', 'After breakfast · approx. 2 to 3 hrs',
          'Disembark after breakfast and drive to Cochin International Airport. Book flights from the afternoon, or ask us to add Mattancherry before you go.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID for hotel registration and houseboat check-in.',
    'Houseboat routes and timings follow canal and weather conditions.',
    'Wildlife sightings at Periyar are never guaranteed.',
    'The sightseeing order may be adjusted on the ground for weather, road conditions or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '4 hotel nights: 1 in Kochi, 2 in Munnar, 1 in Thekkady',
      '1 night on a deluxe houseboat in Alleppey',
      'Daily breakfast; all meals on the houseboat'] },
    { head: 'Private cab', sub: 'your party only', items: [
      'Airport pickup and drop at Kochi',
      'Kochi to Munnar to Thekkady to Alleppey and back to Kochi',
      'All sightseeing in the itinerary'] },
    { head: 'Experiences', items: [
      'Kathakali show in Kochi',
      'Munnar Tea Museum entry',
      'Spice plantation walk in Thekkady'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Kochi',
    'Lunches and dinners at the hotels, and drinks',
    'Periyar boat ticket, Eravikulam entry and other entry fees not listed as included',
    'Optional activities such as boating at Mattupetty, elephant rides and adventure sports',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, landslides, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Kerala · 5 Nights / 6 Days',
    sub: 'Land package per adult, twin sharing, breakfast daily and all meals on the houseboat',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Houseboat availability and timings depend on the season and canal conditions.',
    'The sightseeing order may be adjusted on the ground for weather, road conditions or closures.',
  ],
};
