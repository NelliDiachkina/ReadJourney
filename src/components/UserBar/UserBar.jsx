import css from './UserBar.module.css';

const UserBar = () => {
  return (
    <div className={css.userBar}>
      <p className={css.userBarText}>User</p>
      <button className={css.userBarBtn}>Log out</button>
    </div>
  );
};

export default UserBar;
