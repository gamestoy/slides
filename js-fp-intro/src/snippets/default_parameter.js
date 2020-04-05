function calculatePoints(price, ratio = 1) {
  return price * ratio;
}

calculatePoints(1000, 1.5); // -> 1500
calculatePoints(1000);            // -> 1000
