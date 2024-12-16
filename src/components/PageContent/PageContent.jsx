import css from './PageContent.module.css';

const PageContent = ({ children }) => {
  return <div className={css.pageContainer}>{children}</div>;
};

export default PageContent;
