import { Field, Form, Formik } from 'formik';
import styles from './FilterForm.module.css';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { useState } from 'react';
import { useData } from '../../hooks/useData';
import { createSelectOptions } from '../../helpers/selectOptions';
import PropTypes from 'prop-types';

const initialValue = {
  brand: 'Select the brand',
  price: 'To $',
};

export const FilterForm = ({ onSubmit }) => {
  const { cars } = useData();

  const prices = cars.map(car => parseFloat(car.rentalPrice.replace('$', '')));
  const optionsPrice = createSelectOptions(prices);
  const brands = cars.map(car => car.make);
  const optionsBrand = ['All', ...new Set(brands)];

  const [selectedOptionBrand, setSelectedOptionBrand] = useState(
    initialValue.brand
  );
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(
    initialValue.price
  );
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);

  const toggleSelectBrand = () => {
    setIsOpenBrand(!isOpenBrand);
    setIsOpenPrice(false);
  };

  const toggleSelectPrice = () => {
    setIsOpenPrice(!isOpenPrice);
    setIsOpenBrand(false);
  };

  const handleSelectChangeBrand = newValue => {
    setSelectedOptionBrand(newValue);
  };
  const handleSelectChangePrice = newValue => {
    setSelectedOptionPrice(newValue);
  };
  const handleSubmit = (value, action) => {
    onSubmit(selectedOptionBrand, selectedOptionPrice, value, action);
    setSelectedOptionBrand(initialValue.brand);
    setSelectedOptionPrice(initialValue.price);
  };

  return (
    <div className={styles.form_wrapper}>
      <Formik initialValues={{ from: '', to: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={styles.form_filter}>
            <div className={styles.select_group}>
              <h3>Car Brand</h3>
              <CustomSelect
                options={optionsBrand}
                value={selectedOptionBrand}
                onChange={handleSelectChangeBrand}
                isOpen={isOpenBrand}
                toggle={toggleSelectBrand}
              />
            </div>
            <div className={styles.select_group}>
              <h3>Price/ 1 hour</h3>
              <CustomSelect
                options={optionsPrice}
                value={selectedOptionPrice}
                onChange={handleSelectChangePrice}
                isOpen={isOpenPrice}
                toggle={toggleSelectPrice}
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
  onSubmit: PropTypes.func.isRequired,
};
