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
    isLoading: false
  },
  global: {
    hasErrors: false,
    errorMessage: null,
    baseImages: null
  }
};

const store = configureStore(history, initialstate);

class App extends React.Component {
  componentDidMount() {
    store.dispatch(actions.getBaseImages());
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
