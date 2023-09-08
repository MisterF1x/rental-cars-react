import { routes } from '../../constant/routes';
import { FilterForm } from '../FilterForm/FilterForm';
import styles from './BlockForm.module.css';
import PropTypes from 'prop-types';
import { createSearchParams } from 'react-router-dom';

export const BlockForm = ({ navigate }) => {
  const handleFilterSubmit = (brand, price, values, action) => {
    if (brand === 'Select the brand') {
      brand = '';
    }
    if (typeof price === 'string') {
      price = '';
    }
    action.setSubmitting(false);
    const params = { brand, price, from: values.from, to: values.to };

    navigate({
      pathname: routes.CATALOG,
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div className="container">
      <div className={styles.form_container}>
        <FilterForm page={'home'} onSubmit={handleFilterSubmit} />
      </div>
    </div>
  );
};

BlockForm.propTypes = {
  navigate: PropTypes.func.isRequired,
};
