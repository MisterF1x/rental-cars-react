import PropTypes from 'prop-types';
import styles from './WidgetCarCard.module.css';

export const WidgetCarCard = ({
  make,
  model,
  type,
  img,
  rentalPrice,
  onClick,
}) => {
  return (
    <div className={styles.widget_car_card_wrapper} onClick={onClick}>
      <div className={styles.widget_car_card_img}>
        <img src={img} alt={`${make} ${model}`} width={250} />
      </div>
      <p className={styles.widget_car_card_type}>{type}</p>
      <h2 className={styles.widget_car_card_title}>
        {make} <span>{model}</span>
      </h2>
      <div className={styles.line}></div>
      <div className={styles.widget_car_card_price}>
        <p>Day from</p>
        <h3>{rentalPrice}</h3>
      </div>
    </div>
  );
};

WidgetCarCard.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
