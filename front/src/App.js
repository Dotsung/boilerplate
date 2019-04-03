// @flow
import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from "mobx-react"
import { Router, Route, Switch } from "react-router-dom";
import './App.css'

import Login from 'pages/Login';
import { stores } from './stores'

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <Switch>
            <Route exact={true} path='/' component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;