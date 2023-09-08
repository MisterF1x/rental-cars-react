import { useEffect, useState } from 'react';
import { CarList } from '../components/CarList/CarList';
import { Section } from '../layout/Section/Section';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
};

const Favorite = () => {
  const [likedCars, setLikedCars] = useState([]);

  const removeFromFavorites = updatedLikedCars => {
    setLikedCars(updatedLikedCars);
  };

  useEffect(() => {
    try {
      const storedLikedCars =
        JSON.parse(localStorage.getItem('likedCars')) || [];
      setLikedCars(storedLikedCars);
    } catch (error) {
      console.error('Error parsing liked cars:', error);
      localStorage.removeItem('likedCars');
      setLikedCars([]);
    }
  }, []);

  if (!likedCars.length) {
    return <h2 style={style}>Add your preferred vehicle to the list.</h2>;
  }

  return (
    <>
      <Section>
        <div className="wrapper">
          <CarList cars={likedCars} onToggleLike={removeFromFavorites} />
          <side className="sidebar"></side>
        </div>
      </Section>
    </>
  );
};
export default Favorite;
