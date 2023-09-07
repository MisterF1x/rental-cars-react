import { NavLink } from 'react-router-dom';
import { menu } from '../../helpers/navigation';
import styles from './Header.module.css';
import { BsTelephone, BsClock } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Logo } from '../../components/Logo/Logo';
import { LinkButton } from '../../components/LinkButton/LinkButton';

export const Header = ({ onClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <p className={styles.notice}>Save up to 40% Hurry limited offer!</p>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <BsClock /> Mon-Fri: 09AM to 06PM
              </li>
              <li className={styles.contactItem}>
                <BsTelephone /> +38(073)323-2322
              </li>
            </ul>
          </div>
          <nav className={styles.navbar}>
            <ul className={styles.navlist}>
              {menu.map(({ id, name, path }) => (
                <li key={id}>
                  <NavLink className={styles.navlink} to={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
              <li>
                <a onClick={onClick} type="button" className={styles.navlink}>
                  Contact us
                </a>
              </li>
            </ul>
            <LinkButton>Rent Car Now</LinkButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};
