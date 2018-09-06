import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from './Login';
import User from './User';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact path="/"
            component={Login}
          />
          <Route
            path="/user"
            component={User}
          />
        </div>
      </Router>
    );
  }
}

export default App;
