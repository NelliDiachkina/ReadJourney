import css from './Book.module.css';
import sprite from '../../assets/icons/sprite.svg';

const Book = ({ book, onClick, showDeleteButton = false, onDelete }) => {
  const { imageUrl, title, author } = book;

  return (
    <li className={css.book}>
      <img
        src={imageUrl}
        alt={title}
        className={css.bookImage}
        width={137}
        height={208}
        onClick={onClick}
        aria-label={`View details of the book: ${title}`}
      />
      <div className={css.wrapperContent}>
        <div className={css.bookWrapperText}>
          <p className={css.bookTitle}>{title}</p>
          <p className={css.bookText}>{author}</p>
        </div>
        {showDeleteButton && (
          <button
            type="button"
            className={css.deleteButton}
            onClick={onDelete}
            aria-label="Delete"
          >
            <svg width={14} height={14} className={css.iconDelete}>
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </button>
        )}
      </div>
    </li>
  );
};

export default Book;
