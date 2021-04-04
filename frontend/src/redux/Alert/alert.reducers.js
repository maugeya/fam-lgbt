import { ALERT_FAIL, ALERT_SUCCESS, ALERT_CLEAR } from './alert.types';

const INITIAL_STATE = {};

export const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        type: 'Success',
        message: action.message,
        backgroundColor: '#5cb85c',
      };
    case ALERT_FAIL:
      return {
        type: 'Fail',
        message: action.message,
        backgroundColor: '#d9534f',
      };
    case ALERT_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
