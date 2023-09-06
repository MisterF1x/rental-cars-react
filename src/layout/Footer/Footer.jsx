import { Logo } from '../../components/Logo/Logo';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

export const Footer = ({ scrollToElementRef }) => {
  const year = new Date().getFullYear();
  return (
    <footer ref={scrollToElementRef} id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerwrapper}>
          <div className={styles.footerAbout}>
            <Logo type="white" />
            <p className={styles.footerDescription}>
              Enjoy cost-effective travel with our budget rental cars, without
              compromising on quality. Choose from our eco-friendly rental cars
              and contribute to a greener planet during your travels.
            </p>
          </div>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerTitle}>Contact Info</h3>
            <ul>
              <li>
                Car Showroom:
                <span className={styles.footer__white}> +3(099)687-4433</span>
              </li>
              <li>
                Vehicles Repair & Service:
                <span className={styles.footer__white}> +3(099)232-1133 </span>
              </li>
              <li>
                Email:
                <a className={styles.footer__white} href="mailto:info@mail.com">
                  {' '}
                  info@mail.com
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerSchedule}>
            <h3 className={styles.footerTitle}>Service Hour</h3>
            <ul>
              <li>
                Monday-Fridat:{' '}
                <span className={styles.footer__white}> 09:00AM-06:00PM</span>
              </li>
              <li>
                Saturday:{' '}
                <span className={styles.footer__white}> 09:00AM-04:00PM</span>
              </li>
              <li>
                Sunday:
                <span className={styles.footer__white}> Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>
          Copyrights (c) {year} Priceless - Auto Rent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  scrollToElementRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
