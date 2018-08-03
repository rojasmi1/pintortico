import React from 'react';
import configureStore from './store/createStore';
import Nav from './routes/nav';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { actions } from './store/globalReducer';
import withRoot from './withRoot';

const history = createBrowserHistory();
const initialstate = {
  home: {},
  global: {
    isLoading: false,
    hasErrors: false,
    errorMessage: null,
    baseImages: {}
  }
};

const store = configureStore(initialstate);

class App extends React.Component {
  componentDidMount() {
    store.dispatch(actions.getBaseImages());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Nav store={store} />
        </Router>
      </Provider>
    );
  }
}

export default withRoot(App);
