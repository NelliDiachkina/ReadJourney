import { useSelector } from 'react-redux';
import css from './UserBar.module.css';
import { selectUserName } from '../../redux/auth/selectors';

const UserBar = () => {
  const userName = useSelector(selectUserName);

  return (
    <div className={css.userBar}>
      <div className={css.nameWrapper}>
        <div className={css.userBarFirstLetterName}>
          {userName ? userName.charAt(0).toUpperCase() : 'U'}
        </div>
        <p className={css.userBarText}>{userName || 'User'}</p>
      </div>
      <button className={css.userBarBtn}>Log out</button>
    </div>
  );
};

export default UserBar;
