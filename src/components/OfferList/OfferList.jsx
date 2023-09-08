import { useEffect, useState } from 'react';
import { Offer } from '../Offer/Offer';
import { Loading } from '../Loading/Loading';
import styles from './OfferList.module.css';

export const OfferList = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch('src/data/offers.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setOffers(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [error]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error fetching data</p>;
  }
  return (
    <ul className={styles.offer_list}>
      {offers.map(({ img, offer, id }) => (
        <li className={styles.offer_item} key={id}>
          <Offer img={img} offer={offer} />
        </li>
      ))}
    </ul>
  );
};
