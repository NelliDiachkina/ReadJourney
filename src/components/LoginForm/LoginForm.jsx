import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect, useId, useState } from 'react';
import css from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import { EMAIL_REGEX } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { loginUser } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').matches(EMAIL_REGEX, {
    message: 'Invalid email address',
  }),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
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
    },
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/recommended');
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = data => {
    dispatch(loginUser(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputsWrapper}>
        <div className={css.wrapperInput}>
          <label htmlFor={emailId} className={css.label}>
            Mail:
          </label>
          <input
            {...register('email')}
            type="email"
            className={`${css.input} ${errors.email ? css.errorInpt : ''}`}
          />
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
            type={showPassword ? 'text' : 'password'}
            className={`${css.input} ${errors.password ? css.errorInpt : ''}`}
          />
          <svg
            role="button"
            width={18}
            height={18}
            className={`${css.icon} ${errors.password ? css.iconError : ''}`}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <use
              href={`${sprite}${
                showPassword ? '#icon-eye-open' : '#icon-eye-off'
              }`}
            ></use>
          </svg>
        </div>
        {errors.password && (
          <div className={css.error}>{errors.password.message}</div>
        )}
      </div>
      <div className={css.btnLinkWrapper}>
        <button
          type="submit"
          className={css.btn}
          aria-label="Sign in button for an account"
        >
          Log In
        </button>
        <Link to="/register" className={css.link}>
          Don’t have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
