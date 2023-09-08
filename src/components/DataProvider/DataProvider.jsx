import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { transformCarsData } from '../../helpers';
const BASE_URL = 'https://6462d7bc7a9eead6fad7d94b.mockapi.io/api/v1/cars';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const cars = transformCarsData(data);

        setCars(cars);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ cars, error, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
