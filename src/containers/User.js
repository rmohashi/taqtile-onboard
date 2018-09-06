import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import ListUsers from './ListUsers';
import TopBar from '../components/TopBar'

class User extends Component {
  render() {
    if (!localStorage.getItem('accessToken')) {
      return <Redirect to="/" />
    }
    return (
      <Router>
        <div className="User">
            <TopBar>
              Taqtile Onboard
            </TopBar>
            <Route
              exact path="/user"
              component={Home}
            />
            <Route
              path="/user/list-users"
              component={ListUsers}
            />
        </div>
      </Router>
    );
  }
}

export default User;
