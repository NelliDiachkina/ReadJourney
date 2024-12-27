import css from './EmptyLibraryBlock.module.css';

const EmptyLibraryBlock = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapperImg}>
        <img
          srcSet="/src/assets/img/images/booksStack_1x.webp 1x,/src/assets/img/images/booksStack_2x.webp 2x"
          alt="books"
          src="/src/assets/img/images/booksStack_1x.webp"
          width={70}
          height={70}
        />
      </div>
      <p className={css.text}>
        To start training, add
        <span className={css.textColor}>some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};

export default EmptyLibraryBlock;
