import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Nav.module.css';

import { userLogoutService } from '../../redux/User/user.services';

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.currentUser.loggedIn);
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = () => {
    userLogoutService(dispatch, history);
  };

  const renderAuthenticationItems = () => {
    if (isLoggedIn) {
      return (
        <div className={styles.rightMenu}>
          <button
            className={styles.logoutButton}
            onClick={handleLogout}
            data-testid='logout-button'
          >
            Logout
          </button>
        </div>
      );
    }

    return (
      <div className={styles.rightMenu}>
        <Link
          className={styles.navLink}
          to='/register'
          data-testid='register-link'
        >
          REGISTER
        </Link>
        <Link className={styles.navLink} to='/login' data-testid='login-link'>
          LOGIN
        </Link>
      </div>
    );
  };

  return (
    <nav className={styles.navContainer} data-testid='nav'>
      <div className={styles.leftMenu}>
        <Link to='/' data-testid='logo-link'>
          LOGO
        </Link>
      </div>
      {renderAuthenticationItems()}
    </nav>
  );
};

export default Nav;
