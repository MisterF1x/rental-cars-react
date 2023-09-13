import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';
import { BiChevronDown } from 'react-icons/bi';
import { Option } from '../Option/Option';

export const Select = ({
  options,
  placeholder,
  selected,
  onChange,
  mode = 'default',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const rootRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const placeholderEl = placeholderRef.current;
    if (!placeholderEl) return;

    const handleClick = evt => {
      if (evt.key === 'Enter') {
        setIsOpen(!isOpen);
      }
    };

    placeholderEl.addEventListener('keydown', handleClick);

    return () => {
      placeholderEl.removeEventListener('keydown', handleClick);
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    const handleClick = evt => {
      const { target } = evt;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [isOpen]);

  const handleOptionClick = value => {
    setIsOpen(false);
    onChange?.(value);
  };
  const handlePlaceHolderClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={rootRef}
      className={styles.select}
      data-is-active={isOpen}
      data-mode={mode}
    >
      <div className={styles.arrow} onClick={handlePlaceHolderClick}>
        <BiChevronDown />
      </div>
      <div
        className={styles.placeholder}
        data-selected={!!selected}
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected || placeholder}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map(option => (
            <Option key={option} option={option} onClick={handleOptionClick} />
          ))}
        </ul>
      )}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any),
  placeholder: PropTypes.string.isRequired,
  selected: PropTypes.any,
  onChange: PropTypes.func,
  mode: PropTypes.string,
};
