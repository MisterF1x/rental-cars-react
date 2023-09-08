import PropTypes from 'prop-types';
import styles from './Offer.module.css';

export const Offer = ({ img, offer }) => {
  return (
    <a href="tel:+380730000000" className={styles.offer_link}>
      <div className={styles.offer_img_wrapper}>
        <img src={img} alt="Offer car" width={55} />
      </div>
      <p className={styles.offer_description}>{offer}</p>
    </a>
  );
};

Offer.propTypes = {
  img: PropTypes.string.isRequired,
  offer: PropTypes.string.isRequired,
};
