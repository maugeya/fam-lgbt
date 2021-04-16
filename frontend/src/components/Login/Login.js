import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userLoginService } from '../../redux/User/user.services';
import Layout from '../Layout/Layout';
import styles from './Login.module.css';
import TextInput from '../common/TextInput/TextInput';

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  const loginErrors = useSelector((state) => state.currentUser.errors);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    userLoginService(
      inputValues.username,
      inputValues.password,
      history,
      dispatch
    );
  };

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Login</h2>
        <form className={styles.loginForm} onSubmit={handleFormSubmit}>
          <div className={styles.formContent}>
            <TextInput
              inputName='username'
              type='text'
              handleOnChangeInput={handleOnChangeInput}
              value={inputValues.username}
              errors={loginErrors}
            />
            <TextInput
              inputName='password'
              type='password'
              handleOnChangeInput={handleOnChangeInput}
              value={inputValues.password}
              errors={loginErrors}
            />
          </div>
          <div className={styles.formFooter}>
            <button className={styles.loginSubmitButton} type='submit'>
              Log in
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
