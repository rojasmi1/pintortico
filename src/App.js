import "./App.css";
import React from "react";
import DefaultLayout from "./layout/defaultLayout";
import Home from "./containers/home";
import About from "./containers/about";
import ProfessionalPage from "./containers/professional-page";
import configureStore from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

const App = () => (
  <Provider store={configureStore(history)}>
    <ConnectedRouter history={history}>
      <div>
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout path="/professional" component={ProfessionalPage} />
        <DefaultLayout path="/about" component={About} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
