import { useState, useEffect } from 'react';

import Layout from '../Layout/Layout';
import axiosInstance from '../../axiosApi';

const EditProfile = () => {
  const [message, setMessage] = useState('');

  const getMessage = async () => {
    try {
      let response = await axiosInstance.get('/auth/edit-profile/');
      const message = response.data.hello;
      setMessage(message);
      return message;
    } catch (err) {
      console.log('Error: ', JSON.stringify(err, null, 4));
      throw err;
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <Layout>
      <div>{message}</div>
    </Layout>
  );
};

export default EditProfile;
