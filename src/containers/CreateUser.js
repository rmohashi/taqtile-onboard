import React, { Component } from 'react';
import Title from '../components/Title';
import Input from '../components/Input';
import ValueSelect from '../components/ValueSelect';
import Button from '../components/Button';

import { createUser } from '../data/user';

import './CreateUser.css';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      role: '',
      isValidating: false,
      nameError: false,
      emailError: false,
      roleError: false,
    }
  }

  inputChangedHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  selectChangedHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  checkValues = () => {
    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /\S+@\S+/;
    this.setState({
      nameError: !namePattern.test(this.state.name),
      emailError: !emailPattern.test(this.state.email),
      passwordError: !this.state.password || this.state.password.length < 4,
      roleError: this.state.role !== 'admin' && this.state.role !== 'user',
      isValidating: true,
    });
    return (
      !this.state.nameError &&
      !this.state.emailError &&
      !this.state.passwordError &&
      !this.state.roleError
    );
  }

  buttonClickedHandler = () => {
    if (this.checkValues()) {
      alert("Usuário criado com sucesso!");
    }
    this.setState({
      isValidating: false,
    });
  }

  render() {
    return (
      <div className="CreateUser">
        <Title>
          Novo Usuário
        </Title>
        <Input
          id="name"
          label="Nome"
          type="text"
          error={this.state.nameError}
          changed={this.inputChangedHandler}
        />
        <Input
          id="email"
          label="E-mail"
          type="text"
          error={this.state.emailError}
          changed={this.inputChangedHandler}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          error={this.state.passwordError}
          changed={this.inputChangedHandler}
        />
        <ValueSelect
          label='Tipo'
          changed={this.selectChangedHandler}
          name='role'
          id='select-role'
          value={this.state.role}
          error={this.state.roleError}
          items={[
            { value: 'user', text: 'User' },
            { value: 'admin', text: 'Admin' },
          ]}
        />
        <Button color="primary" inProgress={this.state.isValidating} clicked={this.buttonClickedHandler}>
          Criar
        </Button>
      </div>
    );
  }
}

export default CreateUser;
