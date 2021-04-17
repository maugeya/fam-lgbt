import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './user.types';

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (username) => ({
  type: REGISTER_SUCCESS,
  username,
});

export const registerFail = (errors) => ({
  type: REGISTER_FAIL,
  errors,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFail = (errors) => ({
  type: LOGIN_FAIL,
  errors,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFail = () => ({
  type: LOGOUT_FAIL,
});
