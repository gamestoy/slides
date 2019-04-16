function whatever(a) {
  console.log(a);
}
whatever(5);    // -> 5
whatever(5,6);  // -> 5
whatever();     // -> undefined

function max() {
  let large = arguments[0];
  for(let i = 1; i < arguments.length; i++) {
    if(arguments[i] > large) {
      large = arguments[i];
    }
  }
  return large;
}
max(4,6,2,1); // -> 6
