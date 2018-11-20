import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from './Login';
import User from './User';

import NotificationModal from '../components/NotificationModal';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalText: '',
      modalTitle: '',
    }
  }

  setModal = (title, text) => {
    this.setState({
      modalOpen: true,
      modalTitle: title,
      modalText: text,
    });
  }

  modalCloseHandler = () => {
    this.setState({
      modalOpen: false,
      modalText: '',
      modalTitle: '',
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact path="/"
            render={(props) => <Login {...props} setModal={this.setModal} />}
          />
          <Route
            path="/user"
            render={(props) => <User {...props} setModal={this.setModal} />}
          />
          <NotificationModal
            open={this.state.modalOpen}
            handleClose={this.modalCloseHandler}
            title={this.state.modalTitle}
            text={this.state.modalText}
          />
        </div>
      </Router>
    );
  }
}

export default App;
