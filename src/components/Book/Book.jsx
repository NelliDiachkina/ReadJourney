import css from './Book.module.css';

const Book = ({ book }) => {
  const { imageUrl, title, author } = book;

  return (
    <li className={css.book}>
      <img
        src={imageUrl}
        alt={title}
        className={css.bookImage}
        width={137}
        height={208}
      />
      <div className={css.bookWrapperText}>
        <p className={css.bookTitle}>{title}</p>
        <p className={css.bookText}>{author}</p>
      </div>
    </li>
  );
};

export default Book;
