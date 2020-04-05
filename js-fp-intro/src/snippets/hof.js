const calculatePrice = (cart, discount) => {
  return cart.total - cart.total * (discount / 100);
};
calculatePrice({total: 100}, 10); //90

const calculatePriceCurr = discount => {
  return cart => calculatePrice(cart.total, discount);
};

const tenPercentDiscount = calculatePriceCurr(10);
tenPercentDiscount({total: 120}); // 108
tenPercentDiscount({total: 100}); // 90


const calculatePriceStr = (cart, discounter) => {
  return cart.total - Math.min(cart.total, discounter(cart));
};

const blackFridayDiscount = cart => 200 + cart.total * 0.10;

calculatePriceStr({total: 1000}, blackFridayDiscount);
//700
