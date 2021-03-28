import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

//setting up store with middleware and redux dev tools viewers
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxPromise))
);

export default store;
