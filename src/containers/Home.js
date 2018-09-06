import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username'),
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.username}</p>
      </div>
    );
  }
}

export default Home;
