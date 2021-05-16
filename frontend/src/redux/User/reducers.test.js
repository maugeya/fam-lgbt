import { userReducer } from './user.reducers';
import * as types from './user.types';
import * as actions from './user.actions';

describe('userReducer', () => {
  const INITIAL_STATE = {
    loginPending: false,
    loggedIn: false,
    user: {},
    errors: [],
  };

  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  // LOGIN ACTIONS

  it('should handle LOGIN_REQUEST', () => {
    expect(userReducer(INITIAL_STATE, { type: 'LOGIN_REQUEST' })).toEqual({
      errors: [],
      loggedIn: false,
      loginPending: true,
      user: {},
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: 'LOGIN_SUCCESS',
        user: { id: 1, username: 'testUser' },
      })
    ).toEqual({
      errors: [],
      loggedIn: true,
      loginPending: false,
      user: { id: 1, username: 'testUser' },
    });
  });

  it('should handle LOGIN_FAIL', () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: 'LOGIN_FAIL',
        errors: ['credentials unknown'],
      })
    ).toEqual({
      errors: ['credentials unknown'],
      loggedIn: false,
      loginPending: false,
      user: {},
    });
  });

  // REGISTER ACTIONS
  it('should handle REGISTER_REQUEST', () => {
    expect(userReducer(INITIAL_STATE, { type: 'REGISTER_REQUEST' })).toEqual({
      errors: [],
      loggedIn: false,
      loginPending: false,
      user: {},
    });
  });

  it('should handle REGISTER_SUCCESS', () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: 'REGISTER_SUCCESS',
        username: 'testUser',
      })
    ).toEqual({
      errors: [],
      loggedIn: false,
      loginPending: false,
      user: { username: 'testUser' },
    });
  });

  it('should handle REGISTER_FAIL', () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: 'REGISTER_FAIL',
        errors: ['Username taken.'],
      })
    ).toEqual({
      errors: ['Username taken.'],
      loggedIn: false,
      loginPending: false,
      user: {},
    });
  });

  it('should handle LOGOUT_REQUEST', () => {
    const state_with_user = {
      errors: [],
      loggedIn: true,
      loginPending: false,
      user: { id: 1, username: 'testUser' },
    };
    expect(userReducer(state_with_user, { type: 'LOGOUT_REQUEST' })).toEqual({
      errors: [],
      loggedIn: true,
      loginPending: false,
      user: { id: 1, username: 'testUser' },
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    const state_with_user = {
      errors: [],
      loggedIn: true,
      loginPending: false,
      user: { id: 1, username: 'testUser' },
    };
    expect(userReducer(state_with_user, { type: 'LOGOUT_SUCCESS' })).toEqual({
      errors: [],
      loggedIn: false,
      loginPending: false,
      user: {},
    });
  });

  it('should handle LOGOUT_FAIL', () => {
    const state_with_user = {
      errors: [],
      loggedIn: true,
      loginPending: false,
      user: { id: 1, username: 'testUser' },
    };
    expect(userReducer(state_with_user, { type: 'LOGOUT_FAIL' })).toEqual({
      errors: [],
      loggedIn: true,
      loginPending: false,
      user: { id: 1, username: 'testUser' },
    });
  });

  it('should handle REGISTER_PASSWORDS_FAIL', () => {
    const registerPasswordErrorAction = actions.registerPasswordsError();
    expect(userReducer(INITIAL_STATE, registerPasswordErrorAction)).toEqual({
      errors: [{ password2: "Passwords don't match!" }],
      loggedIn: false,
      loginPending: false,
      user: {},
    });
  });

  it('should handle REGISTER_PASSWORDS_MATCH', () => {
    const registerPasswordMatchAction = actions.registerPasswordsMatch();
    expect(userReducer(INITIAL_STATE, registerPasswordMatchAction)).toEqual({
      errors: [],
      loggedIn: false,
      loginPending: false,
      user: {},
    });
  });

  //   it('should handle ADD_TODO', () => {
  //     expect(
  //       reducer([], {
  //         type: types.ADD_TODO,
  //         text: 'Run the tests'
  //       })
  //     ).toEqual([
  //       {
  //         text: 'Run the tests',
  //         completed: false,
  //         id: 0
  //       }
  //     ])

  //     expect(
  //       reducer(
  //         [
  //           {
  //             text: 'Use Redux',
  //             completed: false,
  //             id: 0
  //           }
  //         ],
  //         {
  //           type: types.ADD_TODO,
  //           text: 'Run the tests'
  //         }
  //       )
  //     ).toEqual([
  //       {
  //         text: 'Run the tests',
  //         completed: false,
  //         id: 1
  //       },
  //       {
  //         text: 'Use Redux',
  //         completed: false,
  //         id: 0
  //       }
  //     ])
  //   })
});
