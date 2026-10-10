// Tour definition: Kashmir, Valley in Full, 5 Nights / 6 Days.
// Same shape as andaman.js.

const IMG = 'img/kashmir/';

export default {
  id: 'kashmir',
  name: 'Kashmir',
  destinationLine: 'Srinagar, Pahalgam and Gulmarg, Kashmir, India',
  durationLabel: '5 Nights / 6 Days',
  nights: 5,
  dayCount: 6,
  packageId: 'KM-5N6D-STD',
  tripIdPrefix: 'KST-KM-',
  defaultPerAdult: 29999,
  mealPlan: 'Breakfast and dinner',
  routeLine: 'Srinagar · Pahalgam · Gulmarg · Srinagar',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA / CC0); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Harvinder Chandigarh / Wikimedia Commons' },

  glance: {
    headline: 'Five nights in the valley, from lake to meadow',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Kashmir: a night on a Dal Lake houseboat, the river valleys of Pahalgam, the meadows of Gulmarg and the Mughal gardens of Srinagar, with hotels, a private vehicle and a shikara ride arranged end to end. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private vehicle for all transfers and sightseeing',
  },

  route: [
    { place: 'Srinagar', nights: 1, from: 1, to: 2, leg: 'Road · approx. 3 h' },
    { place: 'Pahalgam', nights: 2, from: 2, to: 4, leg: 'Road · approx. 5.5 h' },
    { place: 'Gulmarg', nights: 1, from: 4, to: 5, leg: 'Road · approx. 2.5 h' },
    { place: 'Srinagar', nights: 1, from: 5, to: 6, end: ' · fly out' },
  ],

  hotels: [
    { name: 'Houseboat Young Bombay', category: 'Deluxe houseboat', place: 'Dal Lake, Srinagar', room: 'Private cabin', nights: 1, inDay: 1, outDay: 2,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Abid Sidiq Ahanger / Wikimedia Commons' } },
    { name: 'Hotel Heevan', stars: 3, place: 'Pahalgam', room: 'Standard', nights: 2, inDay: 2, outDay: 4,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Slyronit / Wikimedia Commons' } },
    { name: 'Hotel Highlands Park', stars: 3, place: 'Gulmarg', room: 'Standard', nights: 1, inDay: 4, outDay: 5,
      photo: { src: IMG + 'hotel3.jpg', credit: 'Poet Shankar Gurjar / Wikimedia Commons' } },
    { name: 'Hotel The Grand Mamta', stars: 3, place: 'Srinagar', room: 'Standard', nights: 1, inDay: 5, outDay: 6,
      photo: { src: IMG + 'hotel4.jpg', credit: 'Pradeepkjoshi / Wikimedia Commons' } },
  ],
  staysIntro: 'One night on a Dal Lake houseboat and three 3-star hotels, with breakfast and dinner included at each. Room upgrades can be quoted on request.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Dal Lake, then up to Pahalgam', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Pahalgam valleys, then to Gulmarg', days: [3, 4] },
    { label: 'DAYS 5–6', headline: 'Meadows, gardens and the way home', days: [5, 6], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Srinagar',
      photo: { src: IMG + 'day1.jpg', credit: 'Dashrathgoyal85 / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Airport pickup and shikara to the houseboat', 'Private', 'On arrival · approx. 1 hr',
          'Your driver meets you at Srinagar airport and takes you to the Dal Lake ghat, where a shikara carries you to the houseboat.'],
        ['Shikara ride on Dal Lake', 'Private', 'Afternoon · approx. 1.5 hrs · included',
          'A slow ride past floating gardens, lotus beds and the vegetable market boats, with the Zabarwan hills behind.'],
        ['Evening on the houseboat', 'Private', 'Free time',
          'Dinner and a quiet evening on board, with walnut-wood interiors and a deck over the water.'],
      ] },
    { n: 2, title: 'Srinagar to Pahalgam',
      photo: { src: IMG + 'day2.jpg', credit: 'KennyOMG / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Check-out and drive to Pahalgam', 'Private', 'After breakfast · approx. 3 hrs',
          'The road passes the saffron fields of Pampore (in bloom in late October and November) and the ruins of the Awantipora temples.'],
        ['Lidder river walk', 'Private', 'Afternoon · approx. 1.5 hrs',
          'A relaxed walk along the river that runs through the town. Check in and rest at the hotel.'],
      ] },
    { n: 3, title: 'Pahalgam valleys',
      photo: { src: IMG + 'day3.jpg', credit: 'Sauood07 / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 1, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Betaab Valley', 'Private', 'Pickup 09:30 · approx. 1.5 hrs',
          'A wide green valley of pines and a mountain stream, named after a film shot here.'],
        ['Aru Valley', 'Private', 'Late morning · approx. 2 hrs',
          'A short drive up to a meadow village below the snow peaks, popular for walks and photographs.'],
        ['Chandanwari, if the road is open', 'Private', 'Afternoon · approx. 1.5 hrs',
          'The start of the Amarnath path, with a snow bridge in early season. Local union taxis are used on these routes; see the notes under Not included.'],
      ] },
    { n: 4, title: 'Pahalgam to Gulmarg',
      photo: { src: IMG + 'day4.jpg', credit: 'Mr. Debapriya Hore / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 2 },
      items: [
        ['Check-out and drive to Gulmarg', 'Private', 'After breakfast · approx. 5.5 hrs',
          'A long mountain drive back through Srinagar and on towards Tangmarg. Lunch on the way is at your own cost.'],
        ['Gulmarg meadows', 'Private', 'Late afternoon · approx. 1.5 hrs',
          'A walk across the open meadow in the afternoon light, with the Maharani temple on a rise above.'],
      ] },
    { n: 5, title: 'Gulmarg to Srinagar',
      photo: { src: IMG + 'day5.jpg', credit: 'Vinayaraj / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 3 },
      items: [
        ['Gulmarg Gondola', 'Shared', 'Morning · approx. 2.5 hrs · ticket not included',
          'One of the highest cable cars in the world, with views over the Pir Panjal. Phase 2 depends on weather and season.'],
        ['Drive to Srinagar', 'Private', 'Late morning · approx. 2.5 hrs',
          'Back down the valley; lunch is at your own cost.'],
        ['Nishat Bagh and Shalimar Bagh', 'Private', 'Afternoon · approx. 2 hrs',
          'Two 17th-century Mughal terraced gardens facing the lake. Entry tickets are paid locally.'],
      ] },
    { n: 6, title: 'Departure', last: true,
      photo: { src: IMG + 'day6.jpg', credit: 'Suhail Skindar Sofi / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 3, note: 'After breakfast' },
      items: [
        ['Airport drop', 'Private', 'Timed to your flight · approx. 45 min',
          'Transfer to Srinagar airport. Plan to arrive well ahead of your flight: security checks are thorough, and it is wise to leave extra time.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID; it is checked at several points on the road and at the airport.',
    'Weather in the mountains changes quickly. Gondola, Aru and Chandanwari plans depend on it.',
    'Mobile networks can be limited on parts of the route. Postpaid SIMs work best.',
    'The sightseeing order may be adjusted on the ground for weather, road conditions or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '4 hotel nights: 2 in Pahalgam, 1 in Gulmarg, 1 in Srinagar',
      '1 night on a deluxe Dal Lake houseboat',
      'Daily breakfast and dinner'] },
    { head: 'Private vehicle', sub: 'your party only', items: [
      'Airport pickup and drop at Srinagar',
      'Srinagar to Pahalgam to Gulmarg and back to Srinagar',
      'All sightseeing in the itinerary'] },
    { head: 'Experiences', items: [
      'Shikara ride on Dal Lake'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights to and from Srinagar',
    'Lunches and drinks',
    'Gulmarg Gondola tickets, pony rides and local union taxis at Pahalgam and Gulmarg, where they apply',
    'Garden and monument entry tickets',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, landslides, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Kashmir · 5 Nights / 6 Days',
    sub: 'Land package per adult, twin sharing, breakfast and dinner included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Road and weather conditions in Kashmir can change at short notice; plans are confirmed with your coordinator the day before.',
    'The sightseeing order may be adjusted on the ground for weather, road conditions or closures.',
  ],
};
