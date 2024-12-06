import css from './Layout.module.css';

const Layout = ({ children }) => {
  return <main className={css.main}>{children}</main>;
};

export default Layout;
