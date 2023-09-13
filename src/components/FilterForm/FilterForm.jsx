import { Field, Form, Formik } from 'formik';
import styles from './FilterForm.module.css';
import { useState } from 'react';
import { useData } from '../../hooks/useData';
import { createSelectOptions } from '../../helpers/selectOptions';
import PropTypes from 'prop-types';
import { Select } from '../Select/Select';

export const FilterForm = ({ onSubmit, page = null }) => {
  const { cars } = useData();

  const prices = cars.map(car => parseFloat(car.rentalPrice.replace('$', '')));
  const optionsPrice = createSelectOptions(prices);
  const brands = cars.map(car => car.make);
  const optionsBrand = ['All', ...new Set(brands)];

  const [selectedOptionBrand, setSelectedOptionBrand] = useState('');
  const [selectedOptionPrice, setSelectedOptionPrice] = useState('');

  const handleSelectChangeBrand = newValue => {
    setSelectedOptionBrand(newValue);
  };
  const handleSelectChangePrice = newValue => {
    setSelectedOptionPrice(newValue);
  };
  const handleSubmit = (value, action) => {
    onSubmit(selectedOptionBrand, selectedOptionPrice, value, action);
    setSelectedOptionBrand('');
    setSelectedOptionPrice('');
  };

  return (
    <div
      className={styles.form_wrapper}
      style={page ? { marginBottom: '0' } : { marginBottom: '50px' }}
    >
      <Formik initialValues={{ from: '', to: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={styles.form_filter}>
            <div className={styles.select_group}>
              <h3>Car Brand</h3>
              <Select
                options={optionsBrand}
                selected={selectedOptionBrand || null}
                onChange={handleSelectChangeBrand}
                placeholder="Select the brand"
              />
            </div>
            <div className={styles.select_group}>
              <h3>Price/ 1 hour</h3>
              <Select
                options={optionsPrice}
                selected={selectedOptionPrice || null}
                onChange={handleSelectChangePrice}
                placeholder="To $"
                mode="price"
              />
            </div>
            <div className={styles.group_wrapper}>
              <h3>Сar mileage / km</h3>
              <div className={styles.group_field}>
                <Field type="text" name="from" placeholder="From" />
                <Field type="text" name="to" placeholder="To" />
              </div>
            </div>

            <button
              disabled={isSubmitting}
              className={styles.search_btn}
              type="submit"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FilterForm.propTypes = {
  page: PropTypes.any,
  onSubmit: PropTypes.func.isRequired,
};
