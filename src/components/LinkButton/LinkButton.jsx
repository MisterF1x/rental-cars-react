import PropTypes from 'prop-types';
import styles from './LinkButton.module.css';

export const LinkButton = ({ children, tel = '+3809789687566' }) => {
  return (
    <a className={styles.buttonLink} href={`tel:${tel}`}>
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  tel: PropTypes.string,
};
