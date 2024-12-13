import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { selectIsLoggedIn } from './redux/auth/selectors';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

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
