import { ALERT_FAIL, ALERT_SUCCESS, ALERT_CLEAR } from './alert.types';

const INITIAL_STATE = {};

export const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        message: action.message,
        backgroundColor: '#cee9ce',
        border: '1px solid #5cb85c',
      };
    case ALERT_FAIL:
      return {
        message: action.message,
        backgroundColor: '#f3cbca',
        border: '1px solid #d9534f',
      };
    case ALERT_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
