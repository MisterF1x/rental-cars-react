import { useEffect, useState } from 'react';
import { CarList } from '../components/CarList/CarList';
import { Loading } from '../components/Loading/Loading';
import { LoadMore } from '../components/LoadMore/LoadMore';
import { Section } from '../layout/Section/Section';
import { FilterForm } from '../components/FilterForm/FilterForm';
import { useData } from '../hooks/useData';
import { determineFilterOption, filterCars } from '../helpers';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
const ITEMS_PER_PAGE = 8;

const Catalog = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const { cars, error, isLoading } = useData();

  const [displayedCars, setDisplayedCars] = useState(cars);
  const [displayedFilteredCars, setDisplayedFilteredCars] = useState([]);

  const loadMoreItems = (startIndex, endIndex) => {
    const newDisplayedItems = [
      ...displayedFilteredCars,
      ...displayedCars.slice(startIndex, endIndex),
    ];
    setDisplayedFilteredCars(newDisplayedItems);
  };

  useEffect(() => {
    const brand = searchParams.get('brand') || '';
    const price = searchParams.get('price') || '';
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';

    const option = determineFilterOption(brand, price, { from, to });
    const filteredCars = filterCars(cars, {
      by: option,
      brand,
      price,
      minMileage: from,
      maxMileage: to,
    });

    setDisplayedCars(filteredCars);
  }, [searchParams, cars]);

  useEffect(() => {
    if (!isLoading && cars.length) {
      const initialItems = displayedCars.slice(0, ITEMS_PER_PAGE);
      setDisplayedFilteredCars(initialItems);
    }
  }, [cars, isLoading, displayedCars]);

  const handleFilterSubmit = (brand, price, values, action) => {
    action.resetForm();
    action.setSubmitting(false);

    if (typeof price === 'string') {
      price = '';
    }
    if (brand === 'Select the brand') {
      brand = '';
    }
    if (brand === 'All') {
      setDisplayedCars(cars);
      return;
    }
    if (parseInt(values.from) >= parseInt(values.to)) {
      toast.error('Invalid mileage range');
      return;
    }
    if (!brand && !price && !values.from && !values.to) {
      toast.error('Missing filter criteria');
      return;
    }
    const option = determineFilterOption(brand, price, values);
    const filteredCars = filterCars(cars, {
      by: option,
      brand,
      price,
      minMileage: values.from,
      maxMileage: values.to,
    });

    if (filteredCars.length > 0) {
      const queryString = `?brand=${brand}&price=${price}&from=${values.from}&to=${values.to}`;
      navigate(`/catalog${queryString}`);
      setDisplayedCars(filteredCars);
    } else {
      toast.error('No results found due to filtering conditions.');
    }
  };

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
        <FilterForm onSubmit={handleFilterSubmit} />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <CarList cars={displayedFilteredCars} />
            {displayedCars.length > displayedFilteredCars.length && (
              <LoadMore onClick={loadMoreItems} itemsPerPage={ITEMS_PER_PAGE} />
            )}
          </>
        )}
      </Section>
      <Toaster position="top-right" />
    </>
  );
};
export default Catalog;
