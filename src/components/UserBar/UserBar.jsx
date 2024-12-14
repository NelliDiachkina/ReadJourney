import { useDispatch, useSelector } from 'react-redux';
import css from './UserBar.module.css';
import { selectUserName } from '../../redux/auth/selectors';
import { logOutUser } from '../../redux/auth/operations';

const UserBar = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.userBar}>
      <div className={css.nameWrapper}>
        <div className={css.userBarFirstLetterName}>
          {userName ? userName.charAt(0).toUpperCase() : 'U'}
        </div>
        <p className={css.userBarText}>{userName || 'User'}</p>
      </div>
      <button className={css.userBarBtn} onClick={() => dispatch(logOutUser())}>
        Log out
      </button>
    </div>
  );
};

export default UserBar;
