import './App.css';
import React from 'react';
import configureStore from './store/createStore';
import Nav from './routes/nav';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { actions } from './store/globalReducer';

const history = createBrowserHistory();
const initialstate = {
  home: {
    isLoading: false,
    resultData: null
  },
  professional: {},
  global: {
    currentLocale: 'en_US',
    locales: [
      { id: 'en_US', displayName: 'English US' },
      { id: 'es_ES', displayName: 'Spanish ES' }
    ],
    isAuthenticated: false,
    hasErrors: false,
    errorMessage: null
  }
};

const store = configureStore(history, initialstate);

class App extends React.Component {
  componentDidMount() {
    store.dispatch(actions.loadSettings('en_US'));
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Nav store={store} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
