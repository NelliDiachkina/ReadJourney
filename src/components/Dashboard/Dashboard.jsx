import css from './Dashboard.module.css';

const Dashboard = ({ children }) => {
  return (
    <section className={css.dashboard}>
      <h2 className="visually-hidden">Dashboard Section</h2>
      {children}
    </section>
  );
};

export default Dashboard;
