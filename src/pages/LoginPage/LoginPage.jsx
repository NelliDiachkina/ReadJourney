import useMedia from '../../hooks/useMedia';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import FormSection from '../../components/FormSection/FormSection';

const LoginPage = () => {
  const { isTablet } = useMedia();

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Layout>
        <FormSection></FormSection>
        {!isTablet && <Hero />}
      </Layout>
    </>
  );
};

export default LoginPage;
