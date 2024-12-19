import { useDispatch, useSelector } from 'react-redux';
import css from './RecommendedBooks.module.css';
import {
  selectAllBooks,
  selectHasNextPage,
  selectPage,
  selectPerPage,
} from '../../redux/books/selectors';
import Book from '../Book/Book';
import { fetchBooks } from '../../redux/books/operations';
import sprite from '../../assets/icons/sprite.svg';
import { decrementPage, incrementPage } from '../../redux/books/slice';
import ModalTemplate from '../ModalTemplate/ModalTemplate';
import { useState } from 'react';

const RecommendedBooks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const books = useSelector(selectAllBooks);
  const currentPage = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const nextPage = useSelector(selectHasNextPage);
  const dispatch = useDispatch();

  const handleNextButtonClick = () => {
    dispatch(incrementPage());
    dispatch(fetchBooks({ page: currentPage + 1, perPage }));
  };

  const handlePrevButtonClick = () => {
    dispatch(decrementPage());
    dispatch(fetchBooks({ page: currentPage - 1, perPage }));
  };

  const handleOpenModal = book => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setModalIsOpen(false);
  };

  return (
    <section className={css.sectionRecommended}>
      <div className={css.wrapperContent}>
        <h2 className={css.title}>Recommended</h2>
        <ul className={css.buttonList}>
          <li>
            <button
              type="button"
              disabled={currentPage === 1}
              className={css.button}
              onClick={handlePrevButtonClick}
              aria-label="Previous Page"
            >
              <svg
                width={20}
                height={20}
                className={`${css.icon} ${css.reversed}`}
              >
                <use href={`${sprite}#icon-chevron-left`}></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              disabled={!nextPage}
              className={css.button}
              onClick={handleNextButtonClick}
              aria-label="Next Page"
            >
              <svg width={20} height={20} className={css.icon}>
                <use href={`${sprite}#icon-chevron-left`}></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <ul className={css.listBooks}>
        {books.map(book => (
          <Book
            key={book._id}
            book={book}
            onClick={() => handleOpenModal(book)}
          />
        ))}
      </ul>
      <ModalTemplate modalIsOpen={modalIsOpen} closeModal={handleCloseModal}>
        {selectedBook && (
          <div className={css.selectedBookContainer}>
            <img
              src={selectedBook.imageUrl}
              alt={selectedBook.title}
              className={css.bookImage}
              width={140}
              height={213}
            />
            <div className={css.bookWrapperText}>
              <p className={css.bookTitle}>{selectedBook.title}</p>
              <p className={css.bookText}>{selectedBook.author}</p>
              <p className={css.bookDescription}>
                {selectedBook.totalPages}
                <span>pages</span>
              </p>
            </div>
            <button
              type="button"
              className={css.modalBtn}
              aria-label="Add to library"
            >
              Add to library
            </button>
          </div>
        )}
      </ModalTemplate>
    </section>
  );
};

export default RecommendedBooks;
