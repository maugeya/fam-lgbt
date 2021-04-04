import { ALERT_FAIL, ALERT_SUCCESS, ALERT_CLEAR } from './alert.types';

export const alertSucess = (message) => ({
  type: ALERT_SUCCESS,
  message,
});

export const alertFail = (message) => ({
  type: ALERT_FAIL,
  message,
});

export const alertClear = () => ({
  type: ALERT_CLEAR,
});
