import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Nav.module.css';
import axiosInstance from '../../axiosApi';
import {
  logoutRequest,
  logoutSuccess,
  logoutFail,
} from '../../redux/User/user.actions';

const Nav = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = async () => {
    try {
      dispatch(logoutRequest());
      const res = await axiosInstance.post('/auth/logout/', {
        refresh_token: localStorage.getItem('refresh_token'),
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
      dispatch(logoutSuccess());
      history.push('/');
      return res;
    } catch (e) {
      dispatch(logoutFail());
      console.log(e);
    }
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftMenu}>
        <Link to='/home'>LOGO</Link>
      </div>
      <div className={styles.rightMenu}>
        <Link className={styles.navLink} to='/register'>
          REGISTER
        </Link>
        <Link className={styles.navLink} to='/login'>
          LOGIN
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Nav;
