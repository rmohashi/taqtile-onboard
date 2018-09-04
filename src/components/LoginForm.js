import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      isValid: false,
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
      isValid: !emailError && !passwordError,
    })
  }

  buttonClickedHandler = () => {
    this.checkValues()
  }

  render() {
    return (
      <div className="Login">
        <TextField
          error={this.state.emailError ? true : false}
          id="email"
          label="E-mail"
          placeholder="E-mail"
          helperText={this.state.emailError ? 'Inválido' : null}
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
        {
          this.state.isValid ?
          <CircularProgress /> :
          <Button variant="contained" color="primary" onClick={this.buttonClickedHandler}>
              Enviar
          </Button>
        }
      </div>
    );
  }
}

export default LoginForm;
