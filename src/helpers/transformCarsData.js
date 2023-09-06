export const transformCarsData = data => {
  function isTwoWord(string) {
    return string.split(' ').length === 2;
  }
  function isThreeWord(string) {
    return string.split(' ').length === 3;
  }
  return data.map(
    ({
      id,
      year,
      make,
      model,
      type,
      img,
      accessories,
      functionalities,
      rentalPrice,
      rentalCompany,
      address,
      mileage,
    }) => {
      const optionCar = [...functionalities, ...accessories].find(
        option => isTwoWord(option) || isThreeWord(option)
      );
      const addr = address.split(',').slice(-2);
      return {
        id,
        year,
        make,
        model,
        img,
        rentalPrice,
        mileage,
        tags: [
          ...addr,
          rentalCompany,
          type,
          model,
          mileage.toLocaleString('en-US'),
          optionCar,
        ],
      };
    }
  );
};
