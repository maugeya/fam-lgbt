import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//setting up store with middleware and redux dev tools viewers

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(ReduxPromise))
);

let persistor = persistStore(store);

export { store, persistor };
