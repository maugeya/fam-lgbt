import { combineReducers } from 'redux';

import { alertReducer } from './Alert/alert.reducers';
import counterReducer from './Counter/counter.reducer';
import { userReducer } from './User/user.reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  currentUser: userReducer,
  alertMessages: alertReducer,
});

export default rootReducer;
