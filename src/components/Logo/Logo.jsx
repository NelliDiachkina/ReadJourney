import Icon from '../Icon/Icon';
import css from './Logo.module.css';

const Logo = ({ className }) => {
  return (
    <div className={css.logo}>
      <Icon id="icon-logo" width="42" height="17" />
      <span className={className}>read journey</span>
    </div>
  );
};

export default Logo;
