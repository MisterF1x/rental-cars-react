import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.css';
import { useRef } from 'react';

export const Layout = () => {
  const scrollToElementRef = useRef(null);
  const scrollToElement = () => {
    if (scrollToElementRef.current) {
      scrollToElementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Header onClick={scrollToElement} />
      <main className={styles.main}>
        <div className={styles.container}>{<Outlet />}</div>
      </main>
      <Footer scrollToElementRef={scrollToElementRef} />
    </>
  );
};
