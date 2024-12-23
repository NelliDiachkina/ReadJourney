import { useId } from 'react';
import { useForm } from 'react-hook-form';
import css from './Filters.module.css';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/operations';

const Filters = () => {
  const dispatch = useDispatch();
  const titleId = useId();
  const authorId = useId();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      author: '',
    },
  });

  const onSubmit = data => {
    dispatch(fetchBooks(data));
    reset();
  };

  return (
    <>
      <h3 className={css.filersTitle}>Filters:</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.inputsWrapper}>
          <div className={css.wrapperInput}>
            <label htmlFor={titleId} className={css.label}>
              Book title:
            </label>
            <input
              {...register('title')}
              type="text"
              className={css.input}
              placeholder="Enter text"
            />
          </div>
          <div className={css.wrapperInput}>
            <label htmlFor={authorId} className={css.label}>
              The author:
            </label>
            <input
              {...register('author')}
              type="text"
              className={css.input}
              placeholder="Enter text"
            />
          </div>
        </div>

        <button type="submit" className={css.btn} aria-label="To apply">
          To apply
        </button>
      </form>
    </>
  );
};

export default Filters;
