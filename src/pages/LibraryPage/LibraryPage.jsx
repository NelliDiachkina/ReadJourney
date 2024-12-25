import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingBooks } from '../../redux/books/selectors';
import Dashboard from '../../components/Dashboard/Dashboard';
import Loader from '../../components/Loader/Loader';
import MyLibraryBooks from '../../components/MyLibraryBooks/MyLibraryBooks';
import { useEffect } from 'react';
import { fetchOwnBooks } from '../../redux/books/operations';

const LibraryPage = () => {
  const isLoading = useSelector(selectIsLoadingBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwnBooks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Library</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Dashboard />
          <MyLibraryBooks />
        </>
      )}
    </>
  );
};

export default LibraryPage;
