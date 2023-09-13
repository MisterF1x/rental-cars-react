import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.css';
import { Suspense, useRef } from 'react';
import { Loading } from '../../components/Loading/Loading';

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
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer scrollToElementRef={scrollToElementRef} />
    </>
  );
};
