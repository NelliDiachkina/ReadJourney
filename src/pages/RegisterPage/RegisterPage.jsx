import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero/Hero';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default RegisterPage;
