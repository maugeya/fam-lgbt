import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Nav.module.css';

import { userLogoutService } from '../../redux/User/user.services';

const Nav = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = () => {
    userLogoutService(dispatch, history);
  };

  const renderAuthenticationItems = () => {
    if (isLoggedIn) {
      return (
        <div className={styles.rightMenu}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      );
    }

    return (
      <div className={styles.rightMenu}>
        <Link className={styles.navLink} to='/register'>
          REGISTER
        </Link>
        <Link className={styles.navLink} to='/login'>
          LOGIN
        </Link>
      </div>
    );
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftMenu}>
        <Link to='/home'>LOGO</Link>
      </div>
      {renderAuthenticationItems()}
    </nav>
  );
};

export default Nav;
