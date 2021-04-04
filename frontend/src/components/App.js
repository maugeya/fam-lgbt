import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import Hello from './Hello/Hello';
import Home from './Home/Home';
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Register from './Register/Register';

function App() {
  const isLoggedIn = useSelector((state) => state.currentUser.loggedIn);

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
    </Router>
  );
}

export default App;
