import PropTypes from 'prop-types';
import styles from './CardMoreInfo.module.css';
import { LinkButton } from '../LinkButton/LinkButton';
const style = {
  borderRight: '1px solid var(--line-color)',
  height: '16px',
  marginLeft: '6px',
  marginRight: '6px',
};

export const CardMoreInfo = ({ car }) => {
  const {
    accessories,
    description,
    detailedTags,
    functionalities,
    img,
    make,
    mileage,
    model,
    rentConditions,
    rentalPrice,
    year,
  } = car;

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={img}
          alt={`${make} ${model}`}
          width={800}
        />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            {make} <span className={styles.model}>{model}</span>, {year}
          </h2>
        </div>
        <ul className={styles.tagsList}>
          {detailedTags.map((tag, inx) => (
            <li className={styles.item} key={`${inx}-m`}>
              {tag} <span style={style}></span>
            </li>
          ))}
        </ul>
        <p className={styles.descriptionCar}>{description}</p>
        <div>
          <h3 className={styles.boxTitle}>Accessories and functionalities:</h3>
          <ul className={styles.tagsList}>
            {[...accessories, ...functionalities].map((tag, inx) => (
              <li className={styles.item} key={`${inx}-f`}>
                {tag} <span style={style}></span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.boxTitle}>Rental Conditions:</h3>
          <ul className={styles.conditionList}>
            {rentConditions.map((tag, inx) => (
              <li className={styles.conditionItem} key={`${inx}-c`}>
                {tag}
              </li>
            ))}
            <li className={styles.conditionItem}>
              Mileage: <span>{mileage.toLocaleString('en-US')}</span>
            </li>
            <li className={styles.conditionItem}>
              Price: <span>{rentalPrice}</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <LinkButton>Rental Car</LinkButton>
      </div>
    </div>
  );
};

CardMoreInfo.propTypes = {
  car: PropTypes.shape({
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    mileage: PropTypes.number.isRequired,
    rentConditions: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    detailedTags: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};
