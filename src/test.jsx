import React from 'react';

function toggleLike(car) {
  const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];

  const isLiked = likedCars.some(likedCar => likedCar.id === car.id);

  if (isLiked) {
    // Remove the car from liked cars
    const updatedLikedCars = likedCars.filter(
      likedCar => likedCar.id !== car.id
    );
    localStorage.setItem('likedCars', JSON.stringify(updatedLikedCars));
  } else {
    // Add the car to liked cars
    likedCars.push(car);
    localStorage.setItem('likedCars', JSON.stringify(likedCars));
  }
}

function Car({ car }) {
  const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
  const isLiked = likedCars.some(likedCar => likedCar.id === car.id);

  const toggleLike = () => {
    // Call the toggleLike function to handle liking/unliking the car
    toggleLike(car);
  };

  return (
    <div className="car">
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <button
        onClick={toggleLike}
        className={isLiked ? 'liked' : ''} // Add a class for styling when the car is liked
      >
        Like
      </button>
    </div>
  );
}

export default Car;
