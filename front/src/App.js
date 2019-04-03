// @flow
import React from 'react';
import './App.css';
import { Provider } from "mobx-react"
import { Router, Route, Switch } from "react-router-dom";

import Login from './pages/Login';
import { stores } from './stores'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;