console.log(b); // -> ReferenceError: b is not defined
let b;
console.log(b); // -> undefined
b = 1;
console.log(b); // -> 1
b = 2;
console.log(b); // -> 2

function readA () {
  return a;
}
let a = 'a';
console.log(readA()); // 'a' -> hoisting

for(let p = 0; p < 5; p++) {
  //p is visible to the block
}
console.log(p); // -> ReferenceError: p is not defined
