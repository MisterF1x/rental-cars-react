import { Field, Form, Formik } from 'formik';
import styles from './FilterForm.module.css';

export const FilterForm = () => {
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={{ brand: 'All', price: '', from: '', to: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <Form>
          <Field as="select" name="brand">
            <option value="All">All</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Ford">Ford</option>
            <option value="Buick">Buick</option>
          </Field>
          <Field as="select" name="price">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Field>
          <Field type="text" name="from" placeholder="From" />
          <Field type="text" name="to" placeholder="To" />

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
