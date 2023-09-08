import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

export const Sidebar = ({ children }) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};
Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
