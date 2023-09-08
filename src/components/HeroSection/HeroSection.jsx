import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section>
      <div className={styles.hero_container}>
        <div className={styles.container}>
          <div className={styles.text_container}>
            <p className={styles.hero_subtitle}>Luxury unleashed</p>
            <h1 className={styles.hero_title}>Volvo XC90,19</h1>
            <div className={styles.hero_price_container}>
              <p className={styles.hero_price}>
                $50<span>per day</span>
              </p>
            </div>
            <a href="tel:+380970000000" className={styles.hero_btn}>
              rent now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
