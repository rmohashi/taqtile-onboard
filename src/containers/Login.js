import React, { Component } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';

import { login } from '../data/authentication';

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
    }
  }

  componentDidMount() {
    if (localStorage.getItem('accessToken')) {
      this.props.history.push('/user');
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

  login = () => {
    login(this.state.email, this.state.password)
      .then(data => {
        localStorage.setItem('username', data.username);
        localStorage.setItem('accessToken', data.accessToken);
        this.props.history.push(`/user`);
      })
      .catch(error => {
        this.props.setModal('Error', error.message);
        this.setState({isValidating: false});
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.checkValues()) {
      this.login()
    }
  }

  render() {
    return (
      <div className="Login">
        <Title>
          Login
        </Title>
        <form onSubmit={this.handleSubmit}>
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
          <Button color="primary" inProgress={this.state.isValidating}>
            Entrar
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
