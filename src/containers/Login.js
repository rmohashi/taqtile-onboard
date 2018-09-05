import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input';

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
      const axios = require('axios');
      const endpoint = "https://tq-template-server-sample.herokuapp.com/authenticate";
      const payload = {
        email: this.state.email,
        password: this.state.password,
        rememberMe: false,
      }
      axios.post(endpoint, payload)
        .then((response) => {
          localStorage.setItem('username', response.data.data.user.name);
          this.setState({
            redirectToHome: true,
          });
        })
        .catch((error) => {
          alert(error.response.data.errors[0].message);
          this.setState({
            isValidating: false,
          });
        });
    }
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }
    return (
      <div className="Login">
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
        <Button inProgress={this.state.isValidating} clicked={this.buttonClickedHandler}>
          Entrar
        </Button>
      </div>
    );
  }
}

export default Login;
