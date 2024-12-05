import css from './PageContent.module.css';

const PageContent = ({ children }) => (
  <div className={css.pageContent}>{children}</div>
);

export default PageContent;
