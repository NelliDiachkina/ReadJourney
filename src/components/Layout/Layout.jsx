import Container from '../Container/Container';
import PageContent from '../PageContent/PageContent';

const Layout = ({ children }) => {
  return (
    <main>
      <Container>
        <PageContent>{children}</PageContent>
      </Container>
    </main>
  );
};

export default Layout;
