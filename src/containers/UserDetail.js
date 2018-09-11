import React, { Component } from 'react';
import { getUser } from '../data/user';
import Title from '../components/Title';
import Input from '../components/Input';

import './UserDetail.css';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: '',
      email: '',
      role: '',
    }
    this.getUser();
  }

  getUser = () => {
    getUser(this.state.id)
      .then(data => {
        this.setState({
          name: data.name,
          email: data.email,
          role: data.role,
        });
      })
      .catch(error => { alert(error.message) });
  }

  render() {
    return (
      <div className="UserDetail">
        <Title>
          Detalhes de Usuário
        </Title>
        <Input
          id="name"
          label="Nome"
          type="text"
          disabled={true}
          value={this.state.name}
        />
        <Input
          id="email"
          label="E-mail"
          type="text"
          disabled={true}
          value={this.state.email}
        />
        <Input
          id="role"
          label="Tipo"
          type="text"
          disabled={true}
          value={this.state.role}
        />
      </div>
    );
  }
}

export default UserDetail;
