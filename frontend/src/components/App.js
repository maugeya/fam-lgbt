import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import styles from './App.module.css';
import Hello from './Hello/Hello';
import Home from './Home/Home';
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Register from './Register/Register';
import Toast from './common/Toast/Toast';

function App() {
  const isLoggedIn = useSelector((state) => state.currentUser.loggedIn);
  const alertMessages = useSelector((state) => state.alertMessages);

  const renderToast = () => {
    if (_.isEmpty(alertMessages)) {
      return null;
    } else {
      return <Toast />;
    }
  };

  return (
    <Router>
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
    </Router>
  );
}

export default App;
