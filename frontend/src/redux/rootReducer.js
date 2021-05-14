import { combineReducers } from 'redux';

import { alertReducer } from './Alert/alert.reducers';
import { userReducer } from './User/user.reducers';

const rootReducer = combineReducers({
  currentUser: userReducer,
  alertMessages: alertReducer,
});

export default rootReducer;
