import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import styles from './App.module.css';
import Hello from './Hello/Hello';
import Home from './Home/Home';
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Register from './Register/Register';
import Toast from './common/Toast/Toast';
import { clearUserAuthErrors } from '../redux/User/user.actions';

function App({ history }) {
  let location = useLocation();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.currentUser.loggedIn);
  const alertMessages = useSelector((state) => state.alertMessages);

  // clear user errors when location changes
  useEffect(() => {
    dispatch(clearUserAuthErrors());
  }, [location, dispatch]);

  const renderToast = () => {
    if (_.isEmpty(alertMessages)) {
      return null;
    } else {
      return <Toast />;
    }
  };

  return (
    <div>
      <Nav isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/hello'>
          <Hello />
        </Route>
      </Switch>
      <div className={styles.toastContainer}>
        {renderToast()}
        {/*  */}
      </div>
    </div>
  );
}

export default App;
