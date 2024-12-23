import css from './Quote.module.css';

const Quote = () => {
  return (
    <div className={css.quote}>
      <div className={css.img}></div>
      <p>
        Books are <span className={css.text}>windows</span> to the world, and
        reading is a journey into the unknown.
      </p>
    </div>
  );
};

export default Quote;
