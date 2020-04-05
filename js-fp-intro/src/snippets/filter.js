const accommodations = [
  {name:'Sheraton Buenos Aires', hotelType: 'Hotel'},
  {name:'Che Argentina Hostel', hotelType: 'Hostel'},
  {name:'Urban 011', hotelType: 'Hostel'}
];
accommodations.filter(h => h.hotelType === 'Hotel');
// -> [{name: 'Sheraton Buenos Aires', hotelType: 'Hotel'}]
