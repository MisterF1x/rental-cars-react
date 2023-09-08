import styles from './Widget.module.css';
import PropTypes from 'prop-types';

export const Widget = ({ title, children }) => {
  return (
    <div className={styles.widget_wrapper}>
      <h2 className={styles.widget_title}>{title}</h2>
      <div className={styles.widget_content}>{children}</div>
    </div>
  );
};

Widget.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
