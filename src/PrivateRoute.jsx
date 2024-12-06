import { Outlet } from 'react-router';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

const PrivateRoute = () => {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default PrivateRoute;
