export const determineFilterOption = (brand, price, values) => {
  if (brand && !price && (!values.from || !values.to)) {
    return 'brand';
  } else if (price && !brand && (!values.from || !values.to)) {
    return 'price';
  } else if (!brand && !price && (values.from || values.to)) {
    return 'mileage';
  } else if (brand && price && (!values.from || !values.to)) {
    return 'priceAndBrand';
  } else if (brand && !price && (values.from || values.to)) {
    return 'mileageAndBrand';
  } else if (price && !brand && (values.from || values.to)) {
    return 'priceAndMileage';
  } else {
    return 'all';
  }
};
