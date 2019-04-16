console.log(c); // -> ReferenceError: c is not defined
const c;        // -> SyntaxError: Missing initializer
const d = 1;
console.log(d); // -> 1
d = 2;          // -> TypeError: Assignment to constant
                //    variable.

function readA () {
  return a;
}
const a = 'a';
console.log(readA());

const condition = true;
if (condition) {
  const l = 1;
}
console.log(l); // -> ReferenceError: l is not defined
