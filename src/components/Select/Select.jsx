import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import css from './Select.module.css';
import sprite from '../../assets/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwnBooks } from '../../redux/books/operations';
import { selectFilter } from '../../redux/books/selectors';
import { saveFilter } from '../../redux/books/slice';

const options = [
  { value: 'unread', text: 'Unread' },
  { value: 'in-progress', text: 'In progress' },
  { value: 'done', text: 'Done' },
  { value: '', text: 'All books' },
];

const Select = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleClick = option => {
    dispatch(saveFilter(option));
    dispatch(fetchOwnBooks(option.value));
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className={css.menuButton}>
            {filter.text}
            <svg
              width={16}
              height={16}
              className={`${css.icon} ${open ? css.iconOpen : ''}`}
            >
              <use href={`${sprite}#icon-chevron-down`}></use>
            </svg>
          </MenuButton>
          <MenuItems anchor="bottom" className={css.menu}>
            {options.map((option, index) => (
              <MenuItem key={index} className={css.menuItem}>
                <button
                  type="button"
                  className={css.buttonOption}
                  onClick={() => handleClick(option)}
                  aria-label={option.text}
                >
                  {option.text}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
};

export default Select;
