// * Base
import { Formik } from 'formik';
import Field from '../Field/Field';
// * Styles
import styles from './RegistrationForm.module.css';
import Button from './../Button/Button';

const INITIAL_VALUES = { email: '', username: '', password: '' };

const RegistrationForm = () => {
  const validators = ({ email, username, password }) => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!username) {
      errors.username = 'Username is required';
    } else if (username.length < 2) {
      errors.username = 'Username`s min length is 2 symbols';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password min length is 8 symbols';
    }
    return errors;
  };
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };
  return (
    <>
      <Formik
        preventDefault
        initialValues={INITIAL_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field
              title='Email'
              type='email'
              name='email'
              value={values.email}
              placeholder='Enter your email'
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email && errors.email}
            />
            <Field
              title='Username'
              type='username'
              name='username'
              value={values.username}
              placeholder='Enter your username'
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username && errors.username}
            />
            <Field
              title='Password'
              type='password'
              name='password'
              value={values.password}
              placeholder='Enter your password'
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password && errors.password}
            />
            <Button color='lightblue' type='submit' text='Registrate' disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
