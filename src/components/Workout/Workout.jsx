import { Link } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import css from './Workout.module.css';

const Workout = () => {
  return (
    <div className={css.sectionWorkout}>
      <h3 className={css.title}>Start your workout</h3>
      <ul className={css.list}>
        <li className={css.listItem}>
          <p className={css.number}>1</p>
          <p className={css.text}>
            <span className={css.textTitle}>Create a personal library:</span>
            add the books you intend to read to it.
          </p>
        </li>
        <li className={css.listItem}>
          <p className={css.number}>2</p>
          <p className={css.text}>
            <span className={css.textTitle}>Create your first workout:</span>
            define a goal, choose a period, start training.
          </p>
        </li>
      </ul>
      <Link to="/library" className={css.link}>
        My library
        <svg width={24} height={24} className={css.icon}>
          <use href={`${sprite}#icon-log-in`}></use>
        </svg>
      </Link>
    </div>
  );
};

export default Workout;
