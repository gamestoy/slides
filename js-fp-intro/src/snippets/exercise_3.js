const length = x => x.length;
const split = sep => s => s.split(sep);

const wordCount = compose(length, split(' '));















const length = x => x.length;
const split = sep => s => s.split(sep);

const compose = (...fns) => {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
};

const wordCount = compose(length, split(' '));

wordCount("Do not mutate state directly");
