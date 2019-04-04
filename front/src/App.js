// @flow
import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from "mobx-react"
import { Router, Route, Switch } from "react-router-dom";
import HeaderContainer from 'containers/Base/HeaderContainer';

import './App.css'

import Auth from 'pages/Auth';
import { stores } from './stores'

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Provider {...stores}>
          <Router history={history}>
            <Switch>
              <Route exact={true} path='/' component={Auth} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;