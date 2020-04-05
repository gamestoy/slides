const coffee = {cost: 1, ingredients: ["Coffee"]};

const withMilk = coffee => {
  return {
    cost: coffee.cost + 0.5,
    ingredients: [...coffee.ingredients, "Milk"]
  };
};

const withMocha = coffee => {
  return {
    cost: coffee.cost + 0.5,
    ingredients: [...coffee.ingredients, "Mocha"]
  };
};

const withCream = coffee => {
  return {
    cost: coffee.cost + 0.2,
    ingredients: [...coffee.ingredients, "Cream"]
  };
};

const withHazelnut = coffee => {
  return {
    cost: coffee.cost + 0.7,
    ingredients: [...coffee.ingredients, "Hazelnut"]
  };
};

const latte = withMilk(coffee);
//{cost: 1.5, ingredients: ["Coffee", "Milk"]}
const mocha =
  withHazelnut(withCream(withMocha(withMilk(coffee))));
//{cost: 2.9, ingredients: ["Coffee","Milk","Mocha", ...]}







const type2DiabetesGenerator =
  compose(withHazelnut, withCream, withMocha, withMilk);

type2DiabetesGenerator(coffee);
//{cost: 2.9, ingredients: ["Coffee","Milk","Mocha", ...]}









