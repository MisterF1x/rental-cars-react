import { useEffect, useState } from 'react';
import styles from './LikeButton.module.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const LikeButton = ({ car, onToggleLike = null }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
    const isLikedStorage = likedCars.some(likedCar => likedCar.id === car.id);
    setIsLiked(isLikedStorage);
  }, [car.id]);

  const toggleLike = () => {
    const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
    const isLikedStorage = likedCars.some(likedCar => likedCar.id === car.id);
    const updatedLikedCars = isLikedStorage
      ? likedCars.filter(likedCar => likedCar.id !== car.id)
      : [...likedCars, car];

    localStorage.setItem('likedCars', JSON.stringify(updatedLikedCars));
    setIsLiked(!isLikedStorage);

    if (onToggleLike) {
      onToggleLike(updatedLikedCars);
    }
  };

  return (
    <button
      onClick={toggleLike}
      type="button"
      className={`${styles.like_btn} ${isLiked ? styles.liked : ''}`}
    >
      {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
};

LikeButton.propTypes = {
  car: PropTypes.object.isRequired,
  onToggleLike: PropTypes.func,
};
