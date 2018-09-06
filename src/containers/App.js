import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import ListUsers from './ListUsers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username'),
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            exact path="/login"
            component={Login}
          />
          <Route
            exact path="/list-users"
            component={ListUsers}
          />
        </div>
      </Router>
    );
  }
}

export default App;
