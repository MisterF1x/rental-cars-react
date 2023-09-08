import PropTypes from 'prop-types';
import styles from './CustomSelect.module.css';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

export const CustomSelect = ({ options, value, onChange, isOpen, toggle }) => {
  const handleOptionClick = optionValue => {
    onChange(optionValue);
    toggle();
  };

  return (
    <div className={styles.select}>
      <div
        className={`${styles.select_header} ${isOpen ? styles.open : ''}`}
        onClick={toggle}
      >
        {value}
      </div>
      <ul className={`${styles.options} ${isOpen ? styles.open : ''}`}>
        {options.map(option => (
          <li key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      {isOpen ? <BiChevronDown /> : <BiChevronUp />}
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.any.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
