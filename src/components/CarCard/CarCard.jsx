import PropTypes from 'prop-types';
import styles from './CarCard.module.css';
import { Button } from '../Button/Button';
const style = {
  borderRight: '1px solid var(--line-color)',
  height: '16px',
  marginLeft: '6px',
  marginRight: '6px',
};

export const CarCard = ({ data }) => {
  const { year, make, model, img, rentalPrice, tags } = data;
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={img}
          alt={`${make} ${model}`}
          width={450}
        />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>
            {make} <span className={styles.model}>{model}</span>, {year}
          </h3>
          <p>{rentalPrice}</p>
        </div>
        <ul className={styles.tagsList}>
          {tags.map((tag, inx) => (
            <li className={styles.item} key={`${inx}-m`}>
              {tag} <span style={style}></span>
            </li>
          ))}
        </ul>
      </div>
      <Button>Learn More</Button>
    </div>
  );
};

CarCard.propTypes = {
  data: PropTypes.shape({
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};
