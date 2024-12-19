import Modal from 'react-modal';
import css from './ModalTemplate.module.css';
import sprite from '../../assets/icons/sprite.svg';
import { useEffect } from 'react';

Modal.setAppElement('#root');

const ModalTemplate = ({ modalIsOpen, closeModal, children }) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <div className={css.buttonWrapper}>
        <button
          type="button"
          className={css.button}
          onClick={closeModal}
          aria-label="Close modal"
        >
          <svg width={22} height={22} className={css.icon}>
            <use href={`${sprite}#icon-cross`}></use>
          </svg>
        </button>
      </div>

      {children}
    </Modal>
  );
};

export default ModalTemplate;
