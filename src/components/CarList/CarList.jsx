import PropTypes from 'prop-types';
import { CarCard } from '../CarCard/CarCard';
import styles from './CarList.module.css';

export const CarList = ({ cars, onToggleLike, favorite = false }) => {
  return (
    <ul className={styles.card_list}>
      {cars.map(car => (
        <li
          className={`${styles.card_item} ${
            favorite ? styles.card_item_favorite : ''
          }`}
          key={car.id}
        >
          <CarCard data={car} onToggleLike={onToggleLike} />
        </li>
      ))}
    </ul>
  );
};
CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  onToggleLike: PropTypes.func,
  favorite: PropTypes.bool,
};
