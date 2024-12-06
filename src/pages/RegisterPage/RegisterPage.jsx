import useMedia from '../../hooks/useMedia';
import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import FormSection from '../../components/FormSection/FormSection';

const RegisterPage = () => {
  const { isTablet } = useMedia();

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Layout>
        <FormSection></FormSection>
        {!isTablet && <Hero />}
      </Layout>
    </>
  );
};

export default RegisterPage;
