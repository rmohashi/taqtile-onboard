import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header'
import Button from '../components/Button'

import './ListUsers.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const allUsers = [
  { id: 'id-1', name: 'user1', role: 'role1', },
  { id: 'id-2', name: 'user2', role: 'role1', },
  { id: 'id-3', name: 'user3', role: 'role2', },
  { id: 'id-4', name: 'user4', role: 'role2', },
  { id: 'id-5', name: 'user5', role: 'role3', },
  { id: 'id-6', name: 'user6', role: 'role3', },
  { id: 'id-7', name: 'user7', role: 'role3', },
  { id: 'id-8', name: 'user8', role: 'role3', },
  { id: 'id-9', name: 'user9', role: 'role3', },
  { id: 'id-10', name: 'user10', role: 'role3', },
  { id: 'id-11', name: 'user11', role: 'role3', },
  { id: 'id-12', name: 'user12', role: 'role3', },
];

const UsersPerButtonClick = 5;
class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username'),
      nextElementIndex: UsersPerButtonClick,
      users: allUsers.slice(0, UsersPerButtonClick),
    }
  }

  nextButtonClickHandler = () => {
    const users = this.state.users.slice();
    const lastElementIndex = UsersPerButtonClick + this.state.nextElementIndex;
    const nextUsers = allUsers.slice(this.state.nextElementIndex, lastElementIndex);
    this.setState({
      nextElementIndex: lastElementIndex,
      users: users.concat(nextUsers),
    });
  }

  render() {
    if (!this.state.username) {
      return <Redirect to="/login" />
    }
    return (
      <div className="ListUsers">
        <Header>
          Usuários
        </Header>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.users.map(user => {
                return (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
        <Button color="default" inProgress={false} clicked={this.nextButtonClickHandler}>Carregar Mais</Button>
      </div>
    );
  }
}

export default ListUsers;
