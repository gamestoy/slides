const accommodations = [
  {name: 'Sheraton Buenos Aires', hotelType: 'Hotel'},
  {name:'Che Argentina Hostel', hotelType: 'Hostel'},
  {name:'Urban 011', hotelType: 'Hostel'}
];
accommodations.find(h => h.hotelType === 'Hostel');
// -> {name:'Che Argentina Hostel', hotelType: 'Hostel'}
accommodations.find(h => h.hotelType === 'B&B');
// -> undefined
