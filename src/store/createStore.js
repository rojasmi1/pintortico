import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import allSagas from '../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(allSagas);

  return store;
}
