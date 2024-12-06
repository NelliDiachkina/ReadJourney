import css from './Title.module.css';

const Title = () => {
  return (
    <h2 className={css.title}>
      Expand your mind, reading <span className={css.titleText}>a book</span>
    </h2>
  );
};

export default Title;
