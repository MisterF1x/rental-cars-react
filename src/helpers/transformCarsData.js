export const transformCarsData = data => {
  const isTwoOrThreeWord = string =>
    string.split(' ').length === 2 || string.split(' ').length === 3;

  return data.map(car => {
    const {
      id,
      year,
      make,
      model,
      type,
      img,
      accessories,
      description,
      fuelConsumption,
      engineSize,
      functionalities,
      rentalPrice,
      rentalCompany,
      address,
      mileage,
      rentalConditions,
    } = car;

    const [city, country] = address.split(',').slice(-2);

    const optionCar = [...functionalities, ...accessories].find(
      isTwoOrThreeWord
    );

    return {
      id,
      year,
      make,
      model,
      img,
      rentalPrice,
      mileage,
      tags: [
        city,
        country,
        rentalCompany,
        type,
        model,
        mileage.toLocaleString('en-US'),
        optionCar,
      ],
      detailedTags: [
        city,
        country,
        `Id: ${id}`,
        `Year: ${year}`,
        `Type: ${type}`,
        `Fuel Consumption: ${fuelConsumption}`,
        `Engine Size: ${engineSize}`,
      ],
      functionalities,
      accessories,
      description,
      rentConditions: rentalConditions.split('\n'),
    };
  });
};
