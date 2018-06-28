import "./App.css";
import React from "react";
import configureStore from "./store/createStore";
import Nav from './routes/nav';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const initialstate = {
  home: {
    isLoading: false,
    resultData: null
  },
  global: {
    currentLanguage: 'en'
  }
};

const App = () => (
  <Provider store={configureStore(history, initialstate)}>
    <ConnectedRouter history={history}>
      <Nav/>
    </ConnectedRouter>
  </Provider>
);

export default App;
