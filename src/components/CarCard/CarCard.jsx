import PropTypes from 'prop-types';
import styles from './CarCard.module.css';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CardMoreInfo } from '../CardMoreInfo/CardMoreInfo';
import { LikeButton } from '../LikeButton/LikeButton';
const style = {
  borderRight: '1px solid var(--line-color)',
  height: '16px',
  marginLeft: '6px',
  marginRight: '6px',
};

export const CarCard = ({ data, onToggleLike }) => {
  const { year, make, model, img, rentalPrice, tags } = data;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = () => {
    toggleModal();
  };

  return (
    <div className={styles.card}>
      <LikeButton car={data} onToggleLike={onToggleLike} />
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
          <h2 className={styles.title}>
            {make} <span className={styles.model}>{model}</span>, {year}
          </h2>
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
      <Button onClick={handleClick}>Learn More</Button>
      {showModal ? (
        <Modal onClose={toggleModal} isModalOpen={showModal}>
          <CardMoreInfo car={data} />
        </Modal>
      ) : (
        ''
      )}
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
  onToggleLike: PropTypes.func,
};
