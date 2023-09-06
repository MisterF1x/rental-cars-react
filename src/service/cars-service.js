import axios from 'axios';
import { transformCarsData } from '../helpers/transformCarsData';

axios.defaults.baseURL = 'https://6462d7bc7a9eead6fad7d94b.mockapi.io/api/v1';

export const getCars = async () => {
  const { data } = await axios('/cars');
  const cars = transformCarsData(data);
  return cars;
};
