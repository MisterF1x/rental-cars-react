export const createSelectOptions = prices => {
  const minPrice = Math.min(...prices) - 5;
  const maxPrice = Math.max(...prices) + 5;

  const options = [];
  for (let price = minPrice; price <= maxPrice; price += 10) {
    options.push(price);
  }

  return options;
};
