import React from 'react';
import { createMemoryHistory } from 'history';
// import { screen } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Router } from 'react-router-dom';

import { render } from './testUtils/render';
import App from './App';

const INITIAL_STATE = {
  currentUser: {
    loginPending: false,
    loggedIn: false,
    user: {},
    errors: {},
  },
};

describe('<App />', () => {
  it('Renders the connected app with initialState', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>,
      { initialState: INITIAL_STATE }
    );

    expect(screen.getByTestId('logo-link')).toBeInTheDocument();
    expect(screen.getByTestId('register-link')).toBeInTheDocument();
    expect(screen.getByTestId('login-link')).toBeInTheDocument();
    expect(screen.getByTestId('home-container')).toBeInTheDocument();
  });

  it('Renders Logout in nav if there is a current user', () => {
    const LoggedInState = {
      ...INITIAL_STATE,
      currentUser: {
        loginPending: false,
        loggedIn: true,
        user: {
          id: 1,
          usernme: 'test',
        },
      },
    };
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>,
      { initialState: LoggedInState }
    );

    expect(screen.getByTestId('logout-button')).toBeInTheDocument();
  });
});
