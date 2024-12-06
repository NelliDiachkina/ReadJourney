import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import SharedLayout from './components/SharedLayout/SharedLayout';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RecommendedPage = lazy(() =>
  import('./pages/RecommendedPage/RecommendedPage')
);
const LibraryPage = lazy(() => import('./pages/LibraryPage/LibraryPage'));
const ReadingPage = lazy(() => import('./pages/ReadingPage/ReadingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/reading" element={<ReadingPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
