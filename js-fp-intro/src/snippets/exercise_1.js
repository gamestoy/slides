        function update(arr, i, e) {
          //TODO
        }















[1,2,3,4].slice(1,3); // [2,3]
[1,2,3,4].slice(1);   // [2,3,4]
function update(arr, i, e) {
  //TODO
}





















function update(arr, i, e) {
  return [
    ...arr.slice(0, i),
    e,
    ...arr.slice(i + 1)
  ];
}
