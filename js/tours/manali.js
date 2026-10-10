// Tour definition: Manali & Solang Valley, Snowline Escape, 4 Nights / 5 Days.
// Same shape as andaman.js.

const IMG = 'img/manali/';

export default {
  id: 'manali',
  name: 'Manali & Solang Valley',
  destinationLine: 'Manali and Solang Valley, Himachal Pradesh, India',
  durationLabel: '4 Nights / 5 Days',
  nights: 4,
  dayCount: 5,
  packageId: 'MN-4N5D-STD',
  tripIdPrefix: 'KST-MN-',
  defaultPerAdult: 18499,
  mealPlan: 'Breakfast and dinner',
  routeLine: 'Ahmedabad · Delhi · Manali · Solang · Delhi',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Vinayaraj / Wikimedia Commons' },

  glance: {
    headline: 'Four nights in the Beas valley',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Manali: Hadimba temple, Solang Valley, the Atal Tunnel to Lahaul and the lanes of Old Manali, with a 3-star hotel, a private cab for all sightseeing, and a Volvo coach from Ahmedabad via Delhi in both directions. Anything here can be adjusted before you confirm.`,
    routeNote: 'Volvo coach both ways, private cab in Manali',
  },

  route: [
    { place: 'Manali', nights: 4, from: 1, to: 5, end: ' · coach to Delhi' },
  ],

  hotels: [
    { name: 'Snow Valley Resorts', stars: 3, place: 'Manali', room: 'Standard', nights: 4, inDay: 1, outDay: 5,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Ajisi / Wikimedia Commons' } },
  ],
  staysIntro: 'Four nights in a 3-star hotel on twin sharing, with breakfast and dinner included. Room upgrades can be quoted on request.',
  staysNote: 'Dinner is served at the hotel. Please tell your coordinator about any dietary needs before you travel.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'Arrival, and the Solang Valley', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Atal Tunnel, Lahaul and Old Manali', days: [3, 4] },
    { label: 'DAY 5', headline: 'Down from the mountains', days: [5], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Arrival in Manali',
      photo: { src: IMG + 'day1.jpg', credit: 'Ganesh Mohan T / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Volvo coach arrival and hotel transfer', 'Shared', 'Morning arrival · timing set by the coach',
          'The overnight coach from Delhi reaches Manali in the morning; your driver meets you and takes you to the hotel. Early check-in depends on availability.'],
        ['Hadimba Devi Temple and Manu Temple', 'Private', 'Afternoon · approx. 2.5 hrs',
          'A wooden pagoda temple in a cedar forest, then the old temple of the sage Manu across the river. Entry is free.'],
        ['Mall Road in the evening', 'Private', 'Evening · approx. 2 hrs',
          "Manali's busy promenade with cafés, shops and Tibetan market stalls."],
      ] },
    { n: 2, title: 'Solang Valley',
      photo: { src: IMG + 'day2.jpg', credit: 'Harvinder Chandigarh / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 4', note: 'No hotel change today' },
      items: [
        ['Solang Valley', 'Private', 'Pickup 09:00 · approx. 5 hrs',
          'A wide valley with views of the glaciers, and snow in winter and spring. Paragliding, zorbing, the ropeway and horse rides are optional, at extra cost.'],
      ] },
    { n: 3, title: 'Atal Tunnel and Lahaul',
      photo: { src: IMG + 'day3.jpg', credit: 'Jagseer S Sidhu / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 3 OF 4', note: 'No hotel change today' },
      items: [
        ['Atal Tunnel to Sissu', 'Private', 'Pickup 08:30 · approx. 6 hrs',
          "Through one of the world's longest high-altitude tunnels to the Lahaul valley, with the Chandra river, Sissu waterfall and open mountain views on the far side."],
        ['Rohtang Pass, where open', 'Private', 'Subject to permit and weather',
          'The high pass above Manali opens only in season and needs a permit. If it is closed, the Lahaul side of the tunnel is the alternative.'],
      ] },
    { n: 4, title: 'Vashisht and Old Manali',
      photo: { src: IMG + 'day4.jpg', credit: 'In Transit / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 4 OF 4', note: 'No hotel change today' },
      items: [
        ['Vashisht hot springs and temples', 'Private', 'Pickup 09:30 · approx. 2 hrs',
          'A village on the hill above the Beas with natural hot sulphur springs and old stone temples.'],
        ['Nehru Kund and Old Manali', 'Private', 'Afternoon · approx. 3 hrs',
          'A spring by the roadside, then the old village across the river, with cafés, small shops and apple orchards.'],
      ] },
    { n: 5, title: 'Departure', last: true,
      photo: { src: IMG + 'day5.jpg', credit: 'Timothy Gonsalves / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 0, note: 'After breakfast · by 11:00' },
      items: [
        ['Hotel to coach point', 'Private', 'Afternoon or evening · timing set by the coach',
          'Check out and transfer to the Volvo coach for Delhi and on to Ahmedabad. The coach times are confirmed by your coordinator before you travel.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID for hotel registration and the coach.',
    'The coach legs between Ahmedabad, Delhi and Manali take many hours each way; your coordinator shares the boarding points and times.',
    'Snow, landslides and road closures can change the plan at short notice.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '4 nights in a 3-star hotel in Manali, twin sharing',
      'Daily breakfast and dinner at the hotel'] },
    { head: 'Transport', items: [
      'Volvo coach both ways, Ahmedabad to Delhi to Manali and back',
      'Private cab for all sightseeing and transfers in Manali'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Lunches and drinks',
    'Meals on the coach journey',
    'Rohtang Pass permit, Solang activities, ropeway and other optional activities',
    'Entry tickets and camera fees not listed as included',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, landslides, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Snowline Escape · 4 Nights / 5 Days',
    sub: 'Per adult, twin sharing, breakfast and dinner and Volvo coach included',
    basis: 'Quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Coach seats and hotel rooms are held only after the deposit is paid.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],
};
