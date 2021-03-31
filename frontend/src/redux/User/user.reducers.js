import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './user.types';

const INITIAL_STATE = {
  loginPending: false,
  loggedIn: false,
  user: {},
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginPending: true,
        loggedIn: false,
        user: {},
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginPending: false,
        loggedIn: true,
        user: action.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginPending: false,
        loggedIn: false,
        user: {},
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loginPending: false,
        loggedIn: true,
        user: state.user,
      };
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    case LOGOUT_FAIL:
      return state;
    default:
      return state;
  }
};
