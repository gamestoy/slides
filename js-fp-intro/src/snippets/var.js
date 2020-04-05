console.log(j); // -> ReferenceError: j is not defined
console.log(i); // -> undefined
var i = 0;
console.log(i); // -> 0
i = 2;
console.log(i); // -> 2

//scope
for(var o = 0; o < 5; o++) {
  //o is visible to the whole function
}
console.log(o); // -> 5
