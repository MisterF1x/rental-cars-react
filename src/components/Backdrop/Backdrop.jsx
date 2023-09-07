import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

export const Backdrop = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.overlay}>
      {children}
    </div>
  );
};
Backdrop.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};
