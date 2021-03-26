import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    try {
      const res = await axios.post('/api/auth/token/obtain/', {
        username: inputValues.username,
        password: inputValues.password,
      });
      console.log('res', res);
      // TODO: Send to Authenticated Home
    } catch (err) {
      setErrors([...errors, err.response.data]);
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
