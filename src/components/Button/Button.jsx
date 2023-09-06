import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ children }) => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
