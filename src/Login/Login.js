import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
    }
  }

  inputChangedHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  buttonClickedHandler = () => {
    let emailPattern = /\S+@\S+/;
    this.setState({
      emailError: emailPattern.test(this.state.email) ? false : true,
      passwordError: this.state.password && this.state.password.length > 3 ? false: true,
    })
  }

  render() {
    return (
      <div className="Login">
        <TextField
          error={this.state.emailError ? true : false}
          id="email"
          label="E-mail"
          placeholder="E-mail"
          helperText={this.state.emailError? 'Inválido' : null}
          margin="normal"
          className="inputField"
          onChange={this.inputChangedHandler}
        />
        <br />
        <TextField
          error={this.state.passwordError ? true : false}
          id="password"
          label="Senha"
          placeholder="Senha"
          helperText={this.state.passwordError ? 'Inválido' : null}
          margin="normal"
          className="inputField"
          type="password"
          onChange={this.inputChangedHandler}
        />
        <br />
        <p><a href='#'>Esqueceu a senha?</a></p>
        <Button variant="contained" color="primary" onClick={this.buttonClickedHandler}>
          Enviar
        </Button>
      </div>
    );
  }
}

export default Login;
