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

const RecommendedBooks = () => {
  const books = useSelector(selectAllBooks);
  const currentPage = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const nextPage = useSelector(selectHasNextPage);
  const dispatch = useDispatch();

  const handleNextButtonClick = () => {
    dispatch(incrementPage);
    dispatch(fetchBooks({ page: currentPage + 1, perPage }));
  };

  const handlePrevButtonClick = () => {
    dispatch(decrementPage);
    dispatch(fetchBooks({ page: currentPage - 1, perPage }));
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
          <Book key={book._id} book={book} />
        ))}
      </ul>
    </section>
  );
};

export default RecommendedBooks;