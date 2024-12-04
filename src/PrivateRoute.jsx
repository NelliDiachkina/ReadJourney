import { Outlet } from 'react-router';
import Header from './components/Header/Header';

const PrivateRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
