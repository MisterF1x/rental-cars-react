import { useContext } from 'react';
import { DataContext } from '../components/DataProvider/DataProvider';

export const useData = () => {
  return useContext(DataContext);
};
