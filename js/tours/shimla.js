// Tour definition: Shimla, Kufri & Chail, Hill Station Classic, 3 Nights / 4 Days.
// Same shape as andaman.js. Hotel names are placeholders: set the real ones per quote under "Hotels".

const IMG = 'img/shimla/';

export default {
  id: 'shimla',
  name: 'Shimla, Kufri & Chail',
  destinationLine: 'Shimla, Kufri and Chail, Himachal Pradesh, India',
  durationLabel: '3 Nights / 4 Days',
  nights: 3,
  dayCount: 4,
  packageId: 'SH-3N4D-STD',
  tripIdPrefix: 'KST-SH-',
  defaultPerAdult: 15999,
  mealPlan: 'Breakfast and dinner',
  routeLine: 'Chandigarh · Kalka · Shimla · Kufri · Chail',

  // Photos: Wikimedia Commons (CC BY / CC BY-SA); credit chips must stay on the print.
  cover: { src: IMG + 'cover.jpg', credit: 'Sudarshan Sarkar / Wikimedia Commons' },

  glance: {
    headline: 'Three nights in the old summer capital',
    intro: (guest) =>
      `Dear ${guest}, thank you for considering KS Travel Hub. This is our proposed plan for Himachal: the toy train from Kalka to Shimla, the Mall Road and Ridge, Kufri and a quiet night in Chail, with 3-star hotels and a private cab for all transfers and sightseeing. Anything here can be adjusted before you confirm.`,
    routeNote: 'Private cab for all transfers and sightseeing',
  },

  route: [
    { place: 'Shimla', nights: 2, from: 1, to: 3, leg: 'Road · approx. 2.5 h via Kufri' },
    { place: 'Chail', nights: 1, from: 3, to: 4, end: ' · drive to Chandigarh' },
  ],

  hotels: [
    { name: '[Shimla hotel name]', nameIsPlaceholder: true, stars: 3, place: 'Shimla', room: 'Standard', nights: 2, inDay: 1, outDay: 3,
      photo: { src: IMG + 'hotel1.jpg', credit: 'Slyronit / Wikimedia Commons' } },
    { name: '[Chail hotel name]', nameIsPlaceholder: true, stars: 3, place: 'Chail', room: 'Standard', nights: 1, inDay: 3, outDay: 4,
      photo: { src: IMG + 'hotel2.jpg', credit: 'Sidnanda / Wikimedia Commons' } },
  ],
  staysIntro: 'Two 3-star hotels, with breakfast and dinner included at each. Room upgrades can be quoted on request.',
  staysNote: 'Dinner is served at the hotel. Please tell your coordinator about any dietary needs before you travel.',

  itineraryPages: [
    { label: 'DAYS 1–2', headline: 'The toy train, and Shimla town', days: [1, 2] },
    { label: 'DAYS 3–4', headline: 'Kufri, Chail, and the way home', days: [3, 4], goodToKnow: true },
  ],

  days: [
    { n: 1, title: 'Kalka to Shimla by toy train',
      photo: { src: IMG + 'day1.jpg', credit: 'Shubhankar Sakalkale / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 0 },
      items: [
        ['Pickup and transfer to Kalka station', 'Private', 'Early morning · approx. 1 hr from Chandigarh',
          'Your driver meets you at Chandigarh and takes you to Kalka for the morning narrow-gauge train.'],
        ['Kalka–Shimla toy train', 'Shared', 'Morning departure · approx. 5 to 6 hrs',
          'A UNESCO World Heritage line with over a hundred tunnels and hundreds of bridges, climbing to Shimla. Seats are reserved for you; the train time follows the railway timetable.'],
        ['Mall Road and the Ridge', 'Private', 'Evening · approx. 2 hrs',
          "A walk along Shimla's main promenade, past Christ Church and the colonial-era buildings."],
      ] },
    { n: 2, title: 'Shimla sightseeing',
      photo: { src: IMG + 'day2.jpg', credit: 'Philip Nalangan / Wikimedia Commons' },
      card: { kind: 'staying', hotel: 0, label: 'STAYING · NIGHT 2 OF 2', note: 'No hotel change today' },
      items: [
        ['Viceregal Lodge (Rashtrapati Niwas)', 'Private', 'Pickup 10:00 · approx. 1.5 hrs',
          'The former residence of the British Viceroy, now an institute, with a long lawn and a Scottish-style stone building. Entry ticket is paid locally.'],
        ['Jakhu Temple', 'Private', 'Late morning · approx. 2 hrs',
          'A Hanuman temple on the highest hill in Shimla, with a view over the town. Keep food and bags away from the monkeys.'],
        ['Christ Church and free time', 'Private', 'Afternoon',
          'The landmark church on the Ridge, then time for the shops of Mall Road and Lakkar Bazaar.'],
      ] },
    { n: 3, title: 'Shimla to Chail via Kufri',
      photo: { src: IMG + 'day3.jpg', credit: 'Slyronit / Wikimedia Commons' },
      card: { kind: 'checkin', hotel: 1 },
      items: [
        ['Kufri', 'Private', 'After breakfast · approx. 3 hrs',
          'A small hill resort in a pine forest, with viewpoints and a nature park. Pony rides and the fun park are optional, at extra cost.'],
        ['Drive to Chail', 'Private', 'Afternoon · approx. 2 hrs',
          'A forested road to Chail, the former summer capital of Patiala, set among deodar trees.'],
        ['Chail Palace and the cricket ground', 'Private', 'Evening · approx. 1.5 hrs',
          "A walk to the palace grounds and one of the world's highest cricket pitches. Palace entry is paid locally."],
      ] },
    { n: 4, title: 'Departure', last: true,
      photo: { src: IMG + 'day4.jpg', credit: 'Pinakpani / Wikimedia Commons' },
      card: { kind: 'checkout', hotel: 1, note: 'After breakfast' },
      items: [
        ['Drive to Chandigarh', 'Private', 'After breakfast · approx. 3.5 hrs',
          'Check out and drive down to Chandigarh airport or station. Book onward travel for the evening, to allow for the mountain road.'],
      ] },
  ],

  goodToKnow: [
    'Carry a government photo ID for hotel registration.',
    'The toy train runs to the railway timetable, and seats on it need advance booking.',
    'Winter nights are very cold, and snow can close roads; plans can change at short notice.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],

  inclusions: [
    { head: 'Stay and meals', items: [
      '3 nights in 3-star hotels: 2 in Shimla, 1 in Chail',
      'Daily breakfast and dinner at the hotel'] },
    { head: 'Private cab', sub: 'your party only', items: [
      'Pickup and drop at Chandigarh',
      'All transfers and sightseeing in the itinerary'] },
    { head: 'Experiences', items: [
      'Toy train ride on the Kalka–Shimla line'] },
    { head: 'Support', items: ['A dedicated coordinator, reachable throughout the trip'] },
  ],
  exclusions: [
    'Flights or train tickets to and from Chandigarh',
    'Lunches and drinks',
    'Entry tickets, camera fees, pony rides and the Kufri fun park',
    'Travel insurance',
    'Early check-in and late check-out',
    'Personal expenses such as laundry, tips and phone calls',
    'Extra costs caused by weather, landslides, road closures or other events outside our control',
    'Anything not listed under Included',
  ],

  price: {
    title: 'Hill Station Classic · 3 Nights / 4 Days',
    sub: 'Land package per adult, twin sharing, breakfast and dinner included',
    basis: 'Land arrangements only, quoted per adult on twin sharing. The price may change if dates, hotels or the number of guests change.',
  },

  availabilityNotes: [
    'Toy-train seats and hotel rooms are held only after the deposit is paid.',
    'The sightseeing order may be adjusted on the ground for weather, traffic or closures.',
  ],
};
