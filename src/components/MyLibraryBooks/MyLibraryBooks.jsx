import { useDispatch, useSelector } from 'react-redux';
import css from './MyLibraryBooks.module.css';
import { selectLibraryBooks } from '../../redux/books/selectors';
import EmptyLibraryBlock from '../EmptyLibraryBlock/EmptyLibraryBlock';
import Book from '../Book/Book';
import { deleteBook } from '../../redux/books/operations';
import Select from '../Select/Select';

const MyLibraryBooks = () => {
  const myLibrary = useSelector(selectLibraryBooks);
  const dispatch = useDispatch();

  const handleDeleteBook = id => {
    dispatch(deleteBook(id));
  };

  const handleClick = id => {
    console.log(id);
  };

  return (
    <section className={css.librarySection}>
      <div className={css.titleWrapper}>
        <h1 className={css.title}>My library</h1>
        <Select />
      </div>
      {myLibrary.length === 0 ? (
        <EmptyLibraryBlock />
      ) : (
        <ul className={css.listBooks}>
          {myLibrary.map(book => (
            <Book
              key={book._id}
              book={book}
              onClick={() => handleClick(book._id)}
              showDeleteButton={true}
              onDelete={() => handleDeleteBook(book._id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MyLibraryBooks;
