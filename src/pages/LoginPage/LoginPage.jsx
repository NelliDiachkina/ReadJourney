import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import Container from '../../components/Container/Container';
import LoginFormSection from '../../components/LoginFormSection/LoginFormSection';
import PageContent from '../../components/PageContent/PageContent';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <main>
        <Container>
          <PageContent>
            <LoginFormSection />
            <Hero />
          </PageContent>
        </Container>
      </main>
    </>
  );
};

export default LoginPage;
