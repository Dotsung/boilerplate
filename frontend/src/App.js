// @flow
import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from "mobx-react"
import { Router, Route, Switch } from "react-router-dom";
import HeaderContainer from 'containers/Base/HeaderContainer';

import './App.css'

import { Home, Auth, Board } from 'pages';
import { stores } from './stores'

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider {...stores}>
          <Router history={history}>
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route exact={true} path='/auth' component={Auth} />
              <Route exact={true} path='/board' component={Board} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;