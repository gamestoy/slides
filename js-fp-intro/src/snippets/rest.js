function sum(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(4,6,2,1)); // -> 13

function reverse([x, ...s]) {
  return x ? [...reverse(s), x] : [];
}
console.log(reverse([1,2,3,4])); // -> [4,3,2,1]

function fullName({firstName, lastName}) {
  return `${firstName} ${lastName}`;
}

const user = {firstName: 'Juan', lastName: 'Topo', age: 31};
fullName(user); // Juan Topo
