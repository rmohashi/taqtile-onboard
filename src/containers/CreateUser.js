import React, { Component } from 'react';
import Title from '../components/Title';
import UserForm from '../components/UserForm';

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
      passwordError: false,
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
    const nameError = !namePattern.test(this.state.name);
    const emailError = !emailPattern.test(this.state.email);
    const passwordError = !this.state.password || this.state.password.length < 4;
    const roleError = this.state.role !== 'admin' && this.state.role !== 'user';
    this.setState({
      nameError: nameError,
      emailError: emailError,
      passwordError: passwordError,
      roleError: roleError,
      isValidating: true,
    });
    return (!nameError && !emailError && !passwordError && !roleError);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.checkValues()) {
      createUser(this.state.name, this.state.email, this.state.password, this.state.role)
        .then(data => {
          this.props.setModal('Sucesso', `Usuário ${data.name} criado com sucesso!`);
          this.props.history.push('/user/list-users');
        })
        .catch(error => {
          this.props.setModal('Erro', error.message);
        });
    }
    this.setState({ isValidating: false });
  }

  render() {
    return (
      <div className="CreateUser">
        <Title>
          Novo Usuário
        </Title>
        <UserForm
          role={this.state.role}
          nameError={this.state.nameError}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          roleError={this.state.roleError}
          isValidating={this.state.isValidating}
          inputChanged={this.inputChangedHandler}
          selectChanged={this.selectChangedHandler}
          buttonText="Criar"
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default CreateUser;
