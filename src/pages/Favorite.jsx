import { useEffect, useState } from 'react';
import { CarList } from '../components/CarList/CarList';
import { Sidebar, Section } from '../layout';
import { Widget } from '../components/Widget/Widget';
import { OfferList } from '../components/OfferList/OfferList';
import { SliderCarListWidget } from '../components/SliderCarListWidget/SliderCarListWidget';

const style = {
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

  return (
    <>
      <Section>
        <div className="container">
          <div className="wrapper">
            {likedCars.length ? (
              <CarList
                cars={likedCars}
                onToggleLike={removeFromFavorites}
                favorite
              />
            ) : (
              <div>
                <h2 style={style}>Add your preferred vehicle to the list.</h2>
              </div>
            )}
            <Sidebar>
              <Widget title="Our Cars">
                <SliderCarListWidget />
              </Widget>
              <Widget title="Offers">
                <OfferList />
              </Widget>
            </Sidebar>
          </div>
        </div>
      </Section>
    </>
  );
};
export default Favorite;
