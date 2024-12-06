import sprite from '/src/assets/icons/sprite.svg';
import css from './Icon.module.css';

const Icon = ({ id, width, height }) => {
  return (
    <svg className={css.icon} width={width} height={height} aria-hidden="true">
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
