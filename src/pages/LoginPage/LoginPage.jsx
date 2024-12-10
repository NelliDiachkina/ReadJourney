import useMedia from '../../hooks/useMedia';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import Layout from '../../components/Layout/Layout';
import FormSection from '../../components/FormSection/FormSection';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const { isTablet } = useMedia();

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Layout>
        <FormSection>
          <LoginForm />
        </FormSection>
        {!isTablet && <Hero />}
      </Layout>
    </>
  );
};

export default LoginPage;
