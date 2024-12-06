import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
export default SharedLayout;
