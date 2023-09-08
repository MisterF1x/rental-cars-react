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
import { routes } from '../constant/routes';
import { errorMessage } from '../constant/errorMessage';
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

    if (!filteredCars.length) {
      navigate(routes.CATALOG);
      return setDisplayedCars(cars);
    }
    setDisplayedCars(filteredCars);
  }, [searchParams, cars, navigate]);

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
      return navigate(routes.CATALOG);
    }
    if (parseInt(values.from) >= parseInt(values.to)) {
      return toast.error(errorMessage.mileage);
    }
    if (!brand && !price && !values.from && !values.to) {
      return toast.error(errorMessage.criteria);
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
      navigate(`${routes.CATALOG}${queryString}`);
      setDisplayedCars(filteredCars);
    } else {
      toast.error(errorMessage.noResult);
    }
  };

  if (error) {
    return <div style={{ textAlign: 'center' }}>{errorMessage.error}</div>;
  }
  return (
    <>
      <Section>
        <div className="container">
          <FilterForm onSubmit={handleFilterSubmit} />
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <CarList cars={displayedFilteredCars} />
              {displayedCars.length > displayedFilteredCars.length && (
                <LoadMore
                  onClick={loadMoreItems}
                  itemsPerPage={ITEMS_PER_PAGE}
                />
              )}
            </>
          )}
        </div>
      </Section>
      <Toaster position="top-right" />
    </>
  );
};
export default Catalog;
