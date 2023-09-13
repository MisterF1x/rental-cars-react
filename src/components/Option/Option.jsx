import PropTypes from 'prop-types';
import styles from './Option.module.css';
import { useEffect, useRef } from 'react';

export const Option = ({ option, onClick }) => {
  const optionRef = useRef(null);

  useEffect(() => {
    const opt = optionRef.current;
    if (!opt) return;

    const handleEnterPress = evt => {
      if (document.activeElement === opt && evt.key === 'Enter') {
        onClick(option);
      }
    };

    opt.addEventListener('keydown', handleEnterPress);

    return () => {
      opt.removeEventListener('keydown', handleEnterPress);
    };
  }, [option, onClick]);

  const handleClick = clickedValue => () => {
    onClick(clickedValue);
  };

  return (
    <li
      className={styles.option}
      onClick={handleClick(option)}
      tabIndex={0}
      value={option}
      ref={optionRef}
    >
      {option}
    </li>
  );
};

Option.propTypes = {
  option: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};
