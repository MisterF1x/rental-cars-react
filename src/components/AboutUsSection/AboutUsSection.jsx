import { IMG, SVG } from '../../assets';
import styles from './AboutUsSection.module.css';

export const AboutUsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.about_container}>
          <div className={styles.about_text_container}>
            <p className={styles.about_subtitle}>
              Streamlines Your Car Search for Effortless Discovery
            </p>
            <h2 className={styles.about_title}>
              Welcome to <span>Priceless</span>
            </h2>
            <p className={styles.about_decription}>
              With a fleet of top-quality vehicles, easy booking options, and a
              commitment to customer satisfaction, we are your go-to choice for
              rental cars. Whether you are exploring a new city, embarking on a
              road trip, or just need a temporary ride, count on us to provide
              reliable and affordable transportation.
            </p>
            <ul className={styles.about_list}>
              <li className={styles.about_item}>
                <SVG.CarSuv />
                <p>Fast & Easy </p>
                <p>Booking</p>
              </li>
              <li className={styles.about_item}>
                <SVG.CarNavigation />
                <p>Many Pickup </p>
                <p>Locations</p>
              </li>
              <li className={styles.about_item}>
                <SVG.CarService />
                <p>No Booking </p>
                <p>Charges</p>
              </li>
            </ul>
          </div>
          <div className={styles.about_img_container}>
            <img src={IMG.MenService} alt="man with keys" width={480} />
          </div>
        </div>
      </div>
    </section>
  );
};
