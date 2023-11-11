export const calcTotalPrice = (product) => {
  return product.reduce((acc, el) => {
    return (acc += el.subPrice);
  }, 0);
};

export const calcSubPrice = (product) => {
  return +product.count * product.item.price;
};
