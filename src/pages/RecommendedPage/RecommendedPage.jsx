import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/operations';

const RecommendedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Recommended</title>
      </Helmet>
      <h1>Recommended Page</h1>
    </>
  );
};

export default RecommendedPage;
