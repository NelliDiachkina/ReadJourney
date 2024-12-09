import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';

const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// const EMAIL_REGEX =
//   /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long'),
  email: Yup.string().required('Email is required').matches(EMAIL_REGEX, {
    message: 'Invalid email address',
  }),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long'),
});

const RegisterForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    const { name, email, password } = data;
    console.log({ name, email, password });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputsWrapper}>
        <div className={css.wrapperInput}>
          <label htmlFor={nameId} className={css.label}>
            Name:
          </label>
          <input
            id={nameId}
            {...register('name')}
            type="text"
            className={css.input}
          />
        </div>
        {errors.name && <div className={css.error}>{errors.name.message}</div>}
        <div className={css.wrapperInput}>
          <label htmlFor={emailId} className={css.label}>
            Mail:
          </label>
          <input {...register('email')} type="email" className={css.input} />
        </div>
        {errors.email && (
          <div className={css.error}>{errors.email.message}</div>
        )}
        <div className={css.wrapperInput}>
          <label htmlFor={passwordId} className={css.label}>
            Password:
          </label>
          <input
            {...register('password')}
            type="password"
            className={css.input}
          />
        </div>
        {errors.password && (
          <div className={css.error}>{errors.password.message}</div>
        )}
      </div>
      <div className={css.btnLinkWrapper}>
        <button
          type="submit"
          className={css.btn}
          aria-label="Sign up button for an account"
        >
          Registration
        </button>
        <Link to="/login" className={css.link}>
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
