const values = [1,2];
const values2 = [9,10];

console.log([...values, 3]);
// -> [1,2,3]
console.log([...values, ...values2]);
// -> [1,2,9,10]
console.log([...values, 3, ...values2]);
// -> [1,2,3,9,10]
console.log(values);
// -> [1,2]

const reservation = {
  airline: 'AA',
  from: 'EZE',
  to: 'LGW',
  depart: '2019-01-02'
};
console.log(reservation);
// -> {..., to: 'LGW'}
console.log({...reservation, to: 'LTN'});
// -> {..., to: 'LTN'}
console.log(reservation);
// -> {..., to: 'LGW'}

const [head, ...tail] = [1,2,3,4,5];
//head: 1 tail: [2,3,4,5]

const {airline, to} = reservation;
//airline: AA to: LGW

const {airline: a, to: t} = reservation;
