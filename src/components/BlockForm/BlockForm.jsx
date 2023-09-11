import toast from 'react-hot-toast';
import { routes } from '../../constant/routes';
import { FilterForm } from '../FilterForm/FilterForm';
import styles from './BlockForm.module.css';
import PropTypes from 'prop-types';
import { createSearchParams } from 'react-router-dom';
import { errorMessage } from '../../constant/errorMessage';

export const BlockForm = ({ navigate }) => {
  const handleFilterSubmit = (brand, price, values, action) => {
    action.resetForm();
    action.setSubmitting(false);

    if (parseInt(values.from) >= parseInt(values.to)) {
      return toast.error(errorMessage.mileage);
    }
    if (!parseInt(values.from) || !parseInt(values.to)) {
      return toast.error(errorMessage.number);
    }
    if (!brand && !price && !values.from && !values.from) {
      return toast.error(errorMessage.all);
    }
    if (brand === 'Select the brand') {
      brand = '';
    }
    if (typeof price === 'string') {
      price = '';
    }

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
