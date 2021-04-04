import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userLoginService } from '../../redux/User/user.services';
import Layout from '../Layout/Layout';

const Login = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const loginErrors = useSelector((state) => state.currentUser.errors);

  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

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
    </Layout>
  );
};

export default Login;
