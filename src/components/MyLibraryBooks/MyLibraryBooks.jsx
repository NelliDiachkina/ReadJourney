import { useDispatch, useSelector } from 'react-redux';
import css from './MyLibraryBooks.module.css';
import { selectLibraryBooks } from '../../redux/books/selectors';
import EmptyLibraryBlock from '../EmptyLibraryBlock/EmptyLibraryBlock';
import Book from '../Book/Book';
import { deleteBook } from '../../redux/books/operations';

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
      <h1 className={css.title}>My library</h1>
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
