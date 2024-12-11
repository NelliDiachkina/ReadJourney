import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';

const UserNav = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/recommended"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.active}` : css.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/library"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.active}` : css.navLink
            }
          >
            My library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
