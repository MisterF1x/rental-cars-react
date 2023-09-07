import { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import styles from './ScrollToTop.module.css';

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scroll}>
      {showTopBtn && <BsChevronUp onClick={goToTop} />}
    </div>
  );
};
