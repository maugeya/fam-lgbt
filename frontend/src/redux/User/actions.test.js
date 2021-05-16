import * as actions from './user.actions';
import * as types from './user.types';

describe('User actions', () => {
  describe('loginRequest', () => {
    it('should create a loginRequest action', () => {
      const expectedAction = {
        type: types.LOGIN_REQUEST,
      };
      expect(actions.loginRequest()).toEqual(expectedAction);
    });
  });

  describe('loginSuccess', () => {
    it('should create a loginSuccess action containing user as a payload', () => {
      const user = {
        id: 1,
        username: 'testUser',
      };
      const expectedAction = {
        type: types.LOGIN_SUCCESS,
        user,
      };
      expect(actions.loginSuccess(user)).toEqual(expectedAction);
    });
  });

  describe('loginFail', () => {
    it('should create a loginFail action containing errors payload', () => {
      const errors = {
        credentials: 'Unknown credentials used',
      };
      const expectedAction = {
        type: types.LOGIN_FAIL,
        errors,
      };
      expect(actions.loginFail(errors)).toEqual(expectedAction);
    });
  });

  describe('registerRequest', () => {
    it('should create a registerRequest action', () => {
      const expectedAction = {
        type: types.REGISTER_REQUEST,
      };
      expect(actions.registerRequest()).toEqual(expectedAction);
    });
  });

  describe('registerSuccess', () => {
    it('should create a registerSuccess action with username as a payload', () => {
      const username = 'testUser';
      const expectedAction = {
        type: types.REGISTER_SUCCESS,
        username,
      };
      expect(actions.registerSuccess(username)).toEqual(expectedAction);
    });
  });

  describe('registerFail', () => {
    it('should create a registerFail action with an errors payload', () => {
      const errors = 'Username already taken';
      const expectedAction = {
        type: types.REGISTER_FAIL,
        errors,
      };
      expect(actions.registerFail(errors)).toEqual(expectedAction);
    });
  });

  describe('logoutRequest', () => {
    it('should create a logoutRequest action', () => {
      const expectedAction = {
        type: types.LOGOUT_REQUEST,
      };
      expect(actions.logoutRequest()).toEqual(expectedAction);
    });
  });

  describe('logoutSuccess', () => {
    it('should create a logoutSuccess action', () => {
      const expectedAction = {
        type: types.LOGOUT_SUCCESS,
      };
      expect(actions.logoutSuccess()).toEqual(expectedAction);
    });
  });

  describe('logoutFail', () => {
    it('should create a logoutFail action', () => {
      const expectedAction = {
        type: types.LOGOUT_FAIL,
      };
      expect(actions.logoutFail()).toEqual(expectedAction);
    });
  });

  describe('clearUserAuthErrors', () => {
    it('should create a clearUserAuthErrors action', () => {
      const expectedAction = {
        type: types.CLEAR_USER_AUTH_ERRORS,
      };
      expect(actions.clearUserAuthErrors()).toEqual(expectedAction);
    });
  });

  describe('registerPasswordsMatch', () => {
    it('should create a registerPasswordsMatch action', () => {
      const expectedAction = {
        type: types.REGISTER_PASSWORDS_MATCH,
      };
      expect(actions.registerPasswordsMatch()).toEqual(expectedAction);
    });
  });

  describe('registerPasswordsError', () => {
    it('should create a registerPasswordsError action with errors as a payload', () => {
      const expectedAction = {
        type: types.REGISTER_PASSWORDS_FAIL,
        errors: [{ password2: "Passwords don't match!" }],
      };
      expect(actions.registerPasswordsError()).toEqual(expectedAction);
    });
  });
});
