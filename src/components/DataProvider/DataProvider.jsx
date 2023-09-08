import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCars } from '../../service/cars-service';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getCars();
        setCars(data);
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
