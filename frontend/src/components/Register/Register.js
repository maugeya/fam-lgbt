import axios from 'axios';
import { useState } from 'react';

const Register = () => {
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
      const res = await axios.post('/api/auth/user/create/', {
        username: inputValues.username,
        email: inputValues.email,
        password: inputValues.password,
      });
      // TODO: send to Login page
    } catch (err) {
      setErrors([...errors, err.response.data]);
    }
  };

  return (
    <div>
      Register
      <form onSubmit={handleOnSubmit}>
        <div></div>
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
          Email
          <input
            type='email'
            placeholder='email'
            name='email'
            onChange={handleOnChangeInput}
            value={inputValues.email}
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
        <div>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
