import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Nav.module.css';

import { userLogoutService } from '../../redux/User/user.services';

const Nav = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = () => {
    userLogoutService(dispatch, history);
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
