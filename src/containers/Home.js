import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username'),
    }
  }

  render() {
    if (!this.state.username) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <p>{this.state.username}</p>
      </div>
    );
  }
}

export default Home;
