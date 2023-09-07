import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop } from '../Backdrop/Backdrop';
import styles from './Modal.module.css';
import { GrClose } from 'react-icons/gr';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ onClose, children, isModalOpen }) => {
  const handleKeyDown = event => {
    if (event.key === 'Escape') onClose();
  };

  const onClickOverlay = event => {
    if (event.target === event.currentTarget) onClose();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]); // eslint-disable-line

  if (!isModalOpen) {
    return null;
  }

  return createPortal(
    <Backdrop onClick={onClickOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>
          <GrClose />
        </button>
        {children}
      </div>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  isModalOpen: PropTypes.bool.isRequired,
};
