import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
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
      </div>
    </nav>
  );
};

export default Nav;
