import { combineReducers } from 'redux';

import counterReducer from './Counter/counter.reducer';
import { userReducer } from './User/user.reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  currentUser: userReducer,
});

export default rootReducer;
