import './App.css';
import React from 'react';
import configureStore from './store/createStore';
import Nav from './routes/nav';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const initialstate = {
  home: {
    isLoading: false,
    resultData: null
  },
  professional: {},
  global: {
    currentLanguage: 'en',
    languages: '',
    isAuthenticated: false
  }
};

const store = configureStore(history, initialstate);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Nav store={store}/>
    </ConnectedRouter>
  </Provider>
);

export default App;
