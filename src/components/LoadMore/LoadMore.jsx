import { useState } from 'react';
import styles from './LoadMore.module.css';
import PropTypes from 'prop-types';

export const LoadMore = ({ onClick, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const onClickLoadMore = () => {
    onClick(startIndex, endIndex);
    setCurrentPage(currentPage + 1);
  };

  return (
    <button className={styles.loadMore} onClick={onClickLoadMore}>
      Load More
    </button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};
