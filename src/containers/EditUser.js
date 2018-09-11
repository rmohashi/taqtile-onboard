import React, { Component } from 'react';
import Title from '../components/Title';
import UserForm from '../components/UserForm';

import { editUser, getUser } from '../data/user';

import './CreateUser.css';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: '',
      email: '',
      role: '',
      isValidating: true,
      nameError: false,
      emailError: false,
      roleError: false,
    }
  }

  componentWillMount() {
    getUser(this.state.id)
      .then(data => {
        this.setState({
          name: data.name,
          email: data.email,
          role: data.role,
          isValidating: false,
        });
      })
      .catch(error => { alert(error.message) });
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
    const roleError = this.state.role !== 'admin' && this.state.role !== 'user';
    this.setState({
      nameError: nameError,
      emailError: emailError,
      roleError: roleError,
      isValidating: true,
    });
    return (!nameError && !emailError && !roleError);
  }

  buttonClickedHandler = () => {
    if (this.checkValues()) {
      editUser(this.state.id, this.state.name, this.state.email, this.state.role)
        .then(data => {
          alert(`Usuário ${data.data.id} editado com sucesso!`);
          this.props.history.push('/user/list-users');
        })
        .catch(error => {
          alert(error.message);
        });
    }
    this.setState({
      isValidating: false,
    });
  }

  render() {
    return (
      <div className="CreateUser">
        <Title>
          Edição de usuário
        </Title>
        <UserForm
          edit={true}
          name={this.state.name}
          email={this.state.email}
          role={this.state.role}
          nameError={this.state.nameError}
          emailError={this.state.emailError}
          roleError={this.state.roleError}
          isValidating={this.state.isValidating}
          inputChanged={this.inputChangedHandler}
          selectChanged={this.selectChangedHandler}
          buttonClicked={this.buttonClickedHandler}
          buttonText="Salvar"
        />
      </div>
    );
  }
}

export default EditUser;
