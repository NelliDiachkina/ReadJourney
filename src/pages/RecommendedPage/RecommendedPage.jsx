import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/operations';
import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks';
import PageContent from '../../components/PageContent/PageContent';
import { selectIsLoadingBooks } from '../../redux/books/selectors';
import Loader from '../../components/Loader/Loader';

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
      <PageContent>{isLoading ? <Loader /> : <RecommendedBooks />}</PageContent>
    </>
  );
};

export default RecommendedPage;
