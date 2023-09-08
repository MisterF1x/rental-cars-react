import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { IMG } from '../../assets';
import styles from './Logo.module.css';

export const Logo = ({ type = 'standart' }) => {
  return (
    <div
      className={styles.logo_container}
      style={{ minHeight: type === 'standart' ? '120px' : '' }}
    >
      <NavLink to={'/'}>
        <img
          src={type === 'standart' ? IMG.LogoIcon : IMG.WhiteLogo}
          alt="Logo Priceless rent car"
          width={250}
        />
      </NavLink>
    </div>
  );
};

Logo.propTypes = {
  type: PropTypes.string,
};
