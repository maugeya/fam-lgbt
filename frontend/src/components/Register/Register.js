import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Register.module.css';
import axiosInstance from '../../axiosApi';
import Layout from '../Layout/Layout';
import TextInput from '../common/TextInput/TextInput';

const Register = () => {
  let history = useHistory();
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState([]);

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    try {
      const res = await axiosInstance.post('/auth/user/create/', {
        username: inputValues.username,
        email: inputValues.email,
        password: inputValues.password,
      });
      history.push('/login');
      return res;
    } catch (err) {
      setErrors([err.response.data]);
    }
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
            />
            <TextInput
              inputName='email'
              type='email'
              handleOnChangeInput={handleOnChangeInput}
              value={inputValues.email}
            />
            <TextInput
              inputName='password'
              type='password'
              handleOnChangeInput={handleOnChangeInput}
              value={inputValues.password}
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
