import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export default function configureStore(history, initialState={}) {
 return createStore(
   connectRouter(history)(rootReducer),
   initialState,
   compose(
    applyMiddleware(
     routerMiddleware(history),
     thunk
    )
  )
 );
}