import css from './Dashboard.module.css';

const Dashboard = ({ children }) => {
  return <section className={css.dashboard}>{children}</section>;
};

export default Dashboard;
