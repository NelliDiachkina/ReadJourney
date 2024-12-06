import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import LoginFormSection from '../../components/LoginFormSection/LoginFormSection';
import Layout from '../../components/Layout/Layout';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Layout>
        <LoginFormSection />
        <Hero />
      </Layout>
    </>
  );
};

export default LoginPage;
