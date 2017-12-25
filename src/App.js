import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import TestingHome from 'scenes/Testing/TestingHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <Switch>
            <Route path="/testing" component={TestingHome} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
