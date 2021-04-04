import { ALERT_FAIL, ALERT_SUCCESS, ALERT_CLEAR } from './alert.types';

const INITIAL_STATE = {};

export const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case ALERT_FAIL:
      return {
        type: 'alert-fail',
        message: action.message,
      };
    case ALERT_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
