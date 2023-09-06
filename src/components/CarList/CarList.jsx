import PropTypes from 'prop-types';
import { CarCard } from '../CarCard/CarCard';
import styles from './CarList.module.css';

export const CarList = ({ cars }) => {
  return (
    <ul className={styles.cardList}>
      {cars.map(car => (
        <li className={styles.cardItem} key={car.id}>
          <CarCard data={car} />
        </li>
      ))}
    </ul>
  );
};
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};
