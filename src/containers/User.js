import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import ListUsers from './ListUsers';
import UserDetail from './UserDetail';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

import TopBar from '../components/TopBar';

class User extends Component {
  componentWillMount() {
    if (!localStorage.getItem('accessToken')) {
      this.props.history.push('/');
    }
  }

  render() {
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
            render={(props) => <ListUsers {...props} setModal={this.props.setModal} />}
          />
          <Route
            path="/user/details/:id"
            component={UserDetail}
          />
          <Route
            path="/user/new"
            render={(props) => <CreateUser {...props} setModal={this.props.setModal} />}
          />
          <Route
            path="/user/edit/:id"
            render={(props) => <EditUser {...props} setModal={this.props.setModal} />}
          />
        </div>
      </Router>
    );
  }
}

export default User;
