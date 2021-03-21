import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Register from './Register/Register';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact='/' path='/home'>
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
