import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import styles from './App.module.css';
import EditProfile from './EditProfile';
import Home from './Home';
import Login from './Login';
import Nav from './Nav';
import Register from './Register';
import ProtectedRoute from './common/ProtectedRoute';
import Toast from './common/Toast';
import { clearUserAuthErrors } from '../redux/User/user.actions';

function App({ history }) {
  let location = useLocation();
  const dispatch = useDispatch();

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
      <Nav />
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

        <ProtectedRoute path='/edit-profile' component={EditProfile} />
      </Switch>
      <div className={styles.toastContainer}>
        {renderToast()}
        {/*  */}
      </div>
    </div>
  );
}

export default App;
