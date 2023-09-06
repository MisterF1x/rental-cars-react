import { useEffect, useState } from 'react';
import { getCars } from '../../service/cars-service';

export const useFetchCars = () => {
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

  return { cars, error, isLoading };
};
