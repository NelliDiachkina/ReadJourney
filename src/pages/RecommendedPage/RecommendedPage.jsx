import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/operations';
import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks';
import PageContent from '../../components/PageContent/PageContent';
import { selectIsLoadingBooks } from '../../redux/books/selectors';
import Loader from '../../components/Loader/Loader';
import Dashboard from '../../components/Dashboard/Dashboard';
import Filters from '../../components/Filters/Filters';
import Layout from '../../components/Layout/Layout';

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
      <PageContent>
        <Layout>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Dashboard>
                <Filters />
              </Dashboard>
              <RecommendedBooks />
            </>
          )}
        </Layout>
      </PageContent>
    </>
  );
};

export default RecommendedPage;
