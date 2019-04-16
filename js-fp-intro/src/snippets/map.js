const usd = [2,6,9,11];
const ratio = Math.floor(Math.random()*(44-34+1)+34);
let pesosAcc = [];
for (let i = 0; i < usd.length; i++) {
  pesosAcc[i] = usd[i] * ratio;
}

const pesos = usd.map(v => v * ratio);

const accommodations = [
  {name: 'Sheraton Buenos Aires', stars: 5},
  {name: 'Che Argentina Hostel', stars: 1}
];
accommodations.map(h => h.name);
// -> ['Sheraton Buenos Aires', 'Che Argentina Hostel']
