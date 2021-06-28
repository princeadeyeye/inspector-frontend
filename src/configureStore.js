import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  timeout: null,
};

const logger = createLogger({
  predicate: () => process.env.REACT_APP_BACKEND !== 'production',
});

const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = compose(applyMiddleware(thunk, logger));
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
