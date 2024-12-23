import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/operations';
import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks';
import { selectIsLoadingBooks } from '../../redux/books/selectors';
import Loader from '../../components/Loader/Loader';
import Dashboard from '../../components/Dashboard/Dashboard';
import Filters from '../../components/Filters/Filters';
import Workout from '../../components/Workout/Workout';
import Quote from '../../components/Quote/Quote';

const RecommendedPage = () => {
  const isLoading = useSelector(selectIsLoadingBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Recommended</title>
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Dashboard>
            <Filters />
            <Workout />
            <Quote />
          </Dashboard>
          <RecommendedBooks />
        </>
      )}
    </>
  );
};

export default RecommendedPage;
