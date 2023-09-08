export const filterCars = (cars, filterOptions) => {
  return cars.filter(car => {
    const brandMatch =
      !filterOptions.brand ||
      car.make.toLowerCase() === filterOptions.brand.toLowerCase();

    const priceMatch =
      !filterOptions.price ||
      parseFloat(car.rentalPrice.replace('$', '')) <= filterOptions.price;

    const mileageMatch =
      (!filterOptions.minMileage || car.mileage >= filterOptions.minMileage) &&
      (!filterOptions.maxMileage || car.mileage <= filterOptions.maxMileage);

    if (filterOptions.by === 'brand') {
      return brandMatch;
    } else if (filterOptions.by === 'price') {
      return priceMatch;
    } else if (filterOptions.by === 'mileage') {
      return mileageMatch;
    } else if (filterOptions.by === 'priceAndBrand') {
      return priceMatch && brandMatch;
    } else if (filterOptions.by === 'priceAndMileage') {
      return priceMatch && mileageMatch;
    } else if (filterOptions.by === 'mileageAndBrand') {
      return mileageMatch && brandMatch;
    } else {
      return brandMatch && priceMatch && mileageMatch;
    }
  });
};
