import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axiosInstance from '../../axiosApi';

const Login = () => {
  let history = useHistory();
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/auth/token/obtain/', {
        username: inputValues.username,
        password: inputValues.password,
      });
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + res.data.access;
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      history.push('/hello');
      return res.data;
    } catch (err) {
      setErrors([err.response.data]);
    }
  };

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <div>
      Login
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Username
            <input
              type='text'
              placeholder='username'
              name='username'
              onChange={handleOnChangeInput}
              value={inputValues.username}
            />
          </label>
          <label>
            Password
            <input
              type='password'
              placeholder='password'
              name='password'
              onChange={handleOnChangeInput}
              value={inputValues.password}
            />
          </label>
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
