// Tour definition: Ladakh, High Desert Circuit, 6 Nights / 7 Days.
// Same shape as andaman.js. Hotel names are placeholders: set the real ones per quote under "Hotels".

const IMG = 'img/ladakh/';

export default {
  id: 'ladakh',
  name: 'Ladakh',
  destinationLine: 'Leh, Nubra and Pangong, Ladakh, India',
  durationLabel: '6 Nights / 7 Days',
  nights: 6,
  dayCount: 7,
  packageId: 'LD-6N7D-STD',
  tripIdPrefix: 'KST-LD-',
  defaultPerAdult: 38999,
  mealPlan: 'Breakfast and dinner',
  routeLine: 'Leh · Nubra · Pangong · Leh',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Neek-Theri / Wikimedia Commons' },

  glance: {
    headline: 'Six nights across the high desert',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Ladakh: a gentle start in Leh to adjust to the altitude, then Khardung La, the Nubra sand dunes and a night by Pangong Tso, with hotels, a camp, inner-line permits, oxygen support and an SUV with an experienced mountain driver. Anything here can be adjusted before you confirm.`,
    routeNote: 'SUV with a mountain driver throughout',
  },

  route: [
    { place: 'Leh', nights: 2, from: 1, to: 3, leg: 'Road · approx. 6 h via Khardung La' },
    { place: 'Nubra', nights: 1, from: 3, to: 4, leg: 'Road · approx. 5.5 h' },
    { place: 'Pangong', nights: 1, from: 4, to: 5, leg: 'Road · approx. 5.5 h via Chang La' },
    { place: 'Leh', nights: 2, from: 5, to: 7, end: ' · fly out' },
  ],

  hotels: [
    { name: '[Leh hotel name]', nameIsPlaceholder: true, stars: 3, place: 'Leh', room: 'Standard', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Sumit Das / Wikimedia Commons' } },
    { name: '[Nubra camp or hotel name]', nameIsPlaceholder: true, category: 'Camp or hotel', place: 'Hunder, Nubra Valley', room: 'Deluxe tent or room', nights: 1, inDay: 3, outDay: 4,
      photo: { src: IMG + 'hotel2.jpg', credit: 'KennyOMG / Wikimedia Commons' } },
    { name: '[Pangong camp name]', nameIsPlaceholder: true, category: 'Lakeside camp', place: 'Pangong Tso', room: 'Deluxe tent', nights: 1, inDay: 4, outDay: 5,
      photo: { src: IMG + 'hotel3.jpg', credit: 'McKay Savage / Wikimedia Commons' } },
    { name: '[Leh hotel name]', nameIsPlaceholder: true, stars: 3, place: 'Leh', room: 'Standard', nights: 2, inDay: 5, outDay: 7,
      photo: { src: IMG + 'hotel4.jpg', credit: 'Didini Tochhawng / Wikimedia Commons' } },
  ],
  staysIntro: 'Two nights and two nights in Leh, one in the Nubra Valley and one in a lakeside camp at Pangong, with breakfast and dinner included. Rooms and tents can be upgraded on request.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Leh, and a slow start at altitude', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Khardung La, Nubra and Shyok', days: [3, 4] },
    { label: 'DAYS 5–6', headline: 'Pangong to Leh, and the monasteries', days: [5, 6] },
    { label: 'DAY 7', headline: 'Down from the high desert', days: [7], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Leh',
      photo: { src: IMG + 'day1.jpg', credit: 'CuriousZil / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Airport pickup and hotel transfer', 'Private', 'On arrival · approx. 30 min',
          "Your driver meets you at Kushok Bakula Rimpochee airport. The rest of the day is for rest: at 3,500 m, the first day is for adjusting to the altitude."],
        ['Short walk in the old town', 'Private', 'Late afternoon · optional',
          'A gentle stroll through the main bazaar if you feel well, with plenty of water and no exertion.'],
      ] },
    { n: 2, title: 'Leh sightseeing',
      photo: { src: IMG + 'day2.jpg', credit: 'Yann Forget / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Leh Palace and Namgyal Tsemo', 'Private', 'After breakfast · approx. 2.5 hrs',
          'The nine-storey former royal palace above the old town, then the hilltop gompa for a view over the whole valley. Entry tickets are paid locally.'],
        ['Shanti Stupa at sunset', 'Private', 'Late afternoon · approx. 1.5 hrs',
          'A white-domed peace pagoda on a ridge above Leh. There are steps up, so go slowly.'],
      ] },
    { n: 3, title: 'Leh to Nubra Valley',
      photo: { src: IMG + 'day3.jpg', credit: 'Lianguanlun / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Khardung La', 'Private', 'Pickup 08:00 · approx. 3 hrs to the pass',
          "One of the world's highest motorable passes, at about 5,350 m. Stay only briefly at the top."],
        ['Hunder sand dunes', 'Private', 'Afternoon · approx. 2 hrs',
          'Cold-desert dunes in the valley floor, home to double-humped Bactrian camels. The camel ride is optional, at extra cost.'],
      ] },
    { n: 4, title: 'Nubra to Pangong via Shyok',
      photo: { src: IMG + 'day4.jpg', credit: 'Rupak Sarkar / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 2 },
      items: [
        ['Diskit Monastery', 'Private', 'After breakfast · approx. 1 hr',
          'The oldest and largest monastery in Nubra, with a tall Maitreya statue above the valley.'],
        ['Drive to Pangong Tso via Shyok', 'Private', 'Late morning · approx. 5.5 hrs',
          'A remote road along the Shyok river and over open plains. Roads here can be rough; timings depend on conditions.'],
        ['Evening at the lake', 'Private', 'Free time',
          'Check in at the camp and watch the colour of the lake change at dusk. Nights are cold.'],
      ] },
    { n: 5, title: 'Pangong to Leh via Chang La',
      photo: { src: IMG + 'day5.jpg', credit: 'Ashwin Kumar / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 3 },
      items: [
        ['Sunrise at Pangong Tso', 'Private', 'Early morning · approx. 1 hr',
          'The lake, 134 km long, shifts from grey to turquoise as the sun rises. Dress warmly.'],
        ['Drive to Leh via Chang La', 'Private', 'After breakfast · approx. 5 hrs',
          'Back over the pass at about 5,300 m, with a stop at the Chang La temple for tea. Check in at the hotel in Leh.'],
      ] },
    { n: 6, title: 'Monasteries around Leh',
      photo: { src: IMG + 'day6.jpg', credit: 'Bernard Gagnon / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 3, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Thiksey Monastery', 'Private', 'Pickup 09:00 · approx. 2 hrs',
          'A twelve-storey monastery on a hill, with a large Maitreya statue and a morning prayer if you are early.'],
        ['Shey Palace and Hall of Fame', 'Private', 'Late morning · approx. 2.5 hrs',
          "The old summer palace of the Ladakhi kings, then the army museum on the road to Leh. Museum ticket is paid locally."],
        ['Indus and Zanskar confluence', 'Private', 'Afternoon · approx. 1.5 hrs',
          'Where the green Zanskar meets the grey Indus, a short drive from town.'],
      ] },
    { n: 7, title: 'Departure', last: true,
      photo: { src: IMG + 'day7.jpg', credit: 'Ingo Mehling / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 3, note: 'After early breakfast' },
      items: [
        ['Airport drop', 'Private', 'Timed to your flight · approx. 30 min',
          'Transfer to Leh airport for your flight. Morning flights are the norm, so check-out is early.'],
      ] },
  ],

  goodToKnow: [
    'Altitude sickness can affect anyone. Rest on Day 1, drink water and tell your driver at once if you feel unwell.',
    'Carry a government photo ID; inner-line permits are arranged by us from your ID details.',
    'Nights are cold even in summer, and the Pangong camp has limited power and basic facilities.',
    'The itinerary can change at short notice for road, weather or permit reasons.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '6 nights: 2 in Leh, 1 in Nubra, 1 at Pangong camp, 2 in Leh',
      'Daily breakfast and dinner'] },
    { head: 'Private SUV', sub: 'with an experienced mountain driver', items: [
      'Airport pickup and drop at Leh',
      'Leh to Nubra to Pangong and back to Leh',
      'All sightseeing in the itinerary'] },
    { head: 'Permits and safety', items: [
      'Inner-line permits for Nubra and Pangong',
      'Oxygen support during the trip'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights to and from Leh',
    'Lunches and drinks',
    'Monument and monastery entry tickets, camel rides and other optional activities',
    'Environment, wildlife and camera fees not listed as included',
    'Travel insurance, including medical and evacuation cover',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, landslides, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Ladakh · 6 Nights / 7 Days',
    sub: 'Land package per adult, twin sharing, breakfast and dinner included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'High passes and some roads open only from late spring to early autumn; plans are confirmed with your coordinator before you travel.',
    'The itinerary can change at short notice for road, weather or permit reasons.',
  ],
};
