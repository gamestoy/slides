const length = arr => arr.length;

const split = sep => s => s.split(sep);

const wordCounter = compose(length, split(' '));

wordCounter("Do not mutate state directly");
// -> 5
