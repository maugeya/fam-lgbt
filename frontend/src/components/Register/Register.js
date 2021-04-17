import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Register.module.css';
import Layout from '../Layout/Layout';
import TextInput from '../common/TextInput/TextInput';
import { userRegisterService } from '../../redux/User/user.services';

const Register = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const registerErrors = useSelector((state) => state.currentUser.errors);

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    userRegisterService(
      inputValues.username,
      inputValues.email,
      inputValues.password,
      history,
      dispatch
    );
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Register</h2>
        <form className={styles.registerForm} onSubmit={handleOnSubmit}>
          <div className={styles.formContent}>
            <TextInput
              inputName='username'
              type='text'
              handleOnChangeInput={handleOnChangeInput}
              value={inputValues.username}
              errors={registerErrors}
            />
            <TextInput
              inputName='email'
              type='email'
              handleOnChangeInput={handleOnChangeInput}
              value={inputValues.email}
              errors={registerErrors}
            />
            <TextInput
              inputName='password'
              type='password'
              handleOnChangeInput={handleOnChangeInput}
              value={inputValues.password}
              errors={registerErrors}
            />
          </div>
          <div className={styles.formFooter}>
            <button type='submit' className={styles.registerSubmitButton}>
              Register
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
