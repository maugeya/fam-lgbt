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
  CLEAR_USER_AUTH_ERRORS,
} from './user.types';

const INITIAL_STATE = {
  loginPending: false,
  loggedIn: false,
  user: {},
  errors: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginPending: true,
        loggedIn: false,
        user: {},
        errors: [],
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginPending: false,
        loggedIn: true,
        user: action.user,
        errors: [],
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loginPending: false,
        loggedIn: false,
        user: {},
        errors: action.errors,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        loginPending: false,
        loggedIn: true,
        user: state.user,
        errors: [],
      };

    case LOGOUT_SUCCESS:
      return INITIAL_STATE;

    case LOGOUT_FAIL:
      return state;

    case REGISTER_REQUEST:
      return { ...state, errors: [] };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, username: action.username },
        errors: [],
      };

    case REGISTER_FAIL:
      return {
        ...state,
        errors: action.errors,
      };

    case CLEAR_USER_AUTH_ERRORS:
      return {
        ...state,
        errors: [],
      };

    default:
      return state;
  }
};
