import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import css from './FormSection.module.css';

const FormSection = ({ children }) => {
  return (
    <section className={css.formSection}>
      <Logo className={css.logoText} />
      <Title />
      {children}
    </section>
  );
};

export default FormSection;
