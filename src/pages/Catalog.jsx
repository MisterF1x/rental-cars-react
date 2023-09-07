import { useEffect, useState } from 'react';
import { CarList } from '../components/CarList/CarList';
import { useFetchCars } from '../hooks/useFetchCars';
import { Loading } from '../components/Loading/Loading';
import { LoadMore } from '../components/LoadMore/LoadMore';
import { Section } from '../layout/Section/Section';
import { FilterForm } from '../components/FilterForm/FilterForm';

const Catalog = () => {
  const { cars, error, isLoading } = useFetchCars();

  const [displayedCars, setDisplayedCars] = useState([]);
  const itemsPerPage = 8;

  const loadMoreItems = (startIndex, endIndex) => {
    const newDisplayedItems = [
      ...displayedCars,
      ...cars.slice(startIndex, endIndex),
    ];
    setDisplayedCars(newDisplayedItems);
  };

  useEffect(() => {
    const initialItems = cars.slice(0, itemsPerPage);
    setDisplayedCars(initialItems);
  }, [cars]);

  if (error) {
    return (
      <div style={{ textAlign: 'center' }}>
        Something went wrong!!! Try again later.
      </div>
    );
  }
  return (
    <>
      <Section>
        <FilterForm />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <CarList cars={displayedCars} />
            {cars.length > displayedCars.length && (
              <LoadMore onClick={loadMoreItems} itemsPerPage={itemsPerPage} />
            )}
          </>
        )}
      </Section>
    </>
  );
};
export default Catalog;
