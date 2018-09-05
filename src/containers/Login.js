import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input';
import Header from '../components/Header';

import { login } from '../data/Authenticator';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      isValidating: false,
      redirectToHome: localStorage.getItem('username') ? true : false,
    }
  }

  inputChangedHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  checkValues = () => {
    const emailPattern = /\S+@\S+/;
    const emailError = emailPattern.test(this.state.email) ? false : true;
    const passwordError = this.state.password && this.state.password.length > 3 ? false : true;
    this.setState({
      emailError: emailError,
      passwordError: passwordError,
      isValidating: !emailError && !passwordError,
    });
    return !emailError && !passwordError;
  }

  buttonClickedHandler = () => {
    if (this.checkValues()) {
      login(this);
    }
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }
    return (
      <div className="Login">
        <Header>
          Login
        </Header>
        <Input
          error={this.state.emailError}
          id="email"
          label="E-mail"
          type="text"
          changed={this.inputChangedHandler}
        />
        <Input
          error={this.state.passwordError}
          id="password"
          label="Senha"
          type="password"
          changed={this.inputChangedHandler}
        />
        <Button color="primary" inProgress={this.state.isValidating} clicked={this.buttonClickedHandler}>
          Entrar
        </Button>
      </div>
    );
  }
}

export default Login;
