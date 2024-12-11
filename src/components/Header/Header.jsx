import Logo from '../Logo/Logo';
import UserBar from '../UserBar/UserBar';
import UserNav from '../UserNav/UserNav';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Logo className={css.logoText} />
      <UserNav />
      <UserBar />
    </header>
  );
};

export default Header;
