import { useEffect, useState } from 'react';
import { CarList } from '../components/CarList/CarList';
import { useFetchCars } from '../hooks/usefetchCars';

const Catalog = () => {
  const { cars, error, isLoading } = useFetchCars();
  const [displayedCars, setDisplayedCars] = useState([]);
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(2);

  const loadMoreItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newDisplayedItems = [
      ...displayedCars,
      ...cars.slice(startIndex, endIndex),
    ];
    setDisplayedCars(newDisplayedItems);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const initialItems = cars.slice(0, itemsPerPage);
    setDisplayedCars(initialItems);
  }, [cars]);

  if (error) {
    return <div>Something went wrong!!! Try again later.</div>;
  }
  return (
    <section style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      {isLoading ? <div>Loading...</div> : <CarList cars={displayedCars} />}
      {cars.length > displayedCars.length && (
        <button onClick={loadMoreItems}>Load More</button>
      )}
    </section>
  );
};
export default Catalog;
