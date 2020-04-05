1 < 2 < 3;             // -> true
3 > 2 > 1;             // -> false

[4] * [4];             // -> 16
[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'

9007199254740992 + 1;  // -> 9007199254740992
0.2 + 0.1 === 0.3;     // -> false

typeof NaN;            // -> 'number'

var f = () => 10;
f();                   // -> 10
var f1 = () => {};
f1();                  // -> undefined

var user = {
  foo: function() {
    console.log(this === window);
  }
};

user.foo();            // false
var bar = user.foo;
bar();                 // true

let fn = function foo() {};       // in a variable
let obj = { foo : function(){} }; // in an object
arr.push(function foo() {});      // in an array
