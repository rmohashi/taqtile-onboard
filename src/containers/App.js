import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
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
        </div>
      </Router>
    );
  }
}

export default App;
