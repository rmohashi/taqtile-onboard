import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header'

import './ListUsers.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username'),
    }
  }

  render() {
    const users = [
      { id: 'id-1', name: 'user1', role: 'role1', },
      { id: 'id-2', name: 'user2', role: 'role1', },
      { id: 'id-3', name: 'user3', role: 'role2', },
      { id: 'id-4', name: 'user4', role: 'role2', },
      { id: 'id-5', name: 'user5', role: 'role3', },
    ];

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
            {users.map(user => {
              return (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ListUsers;
