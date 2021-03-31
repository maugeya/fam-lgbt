import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import axiosInstance from '../../axiosApi';
import {
  loginRequest,
  loginSuccess,
  loginFail,
} from '../../redux/User/user.actions';

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginRequest());
      const res = await axiosInstance.post('/auth/token/obtain/', {
        username: inputValues.username,
        password: inputValues.password,
      });
      const { access: accessToken, refresh: refreshToken, user } = res.data;

      axiosInstance.defaults.headers['Authorization'] = 'JWT ' + accessToken;

      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);

      dispatch(loginSuccess(user));

      history.push('/hello');
      return res.data;
    } catch (err) {
      dispatch(loginFail());
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
