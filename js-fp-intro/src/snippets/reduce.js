const values = [1,2,3,4,5];
values.reduce((acc, v) => acc + v);
// -> 15
values.reduce((acc, v) => isEven(v) ? [...acc,v] : acc, []);

values.reduceRight((acc, v) => [...acc, v], []);
// -> [5, 4, 3, 2, 1]

[].reduce((v1,v2) => v1 + v2);
//Uncaught TypeError: Reduce of empty array
// with no initial value
