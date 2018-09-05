import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';

import { getUsers } from '../data/UserFetcher';

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
      page: 1,
      lastPage: false,
      users: [],
    }
    getUsers(this);
  }

  nextButtonClickHandler = () => {
    getUsers(this);
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
        {
          this.state.lastPage ?
            null :
            <Button
              color="default"
              inProgress={false}
              clicked={this.nextButtonClickHandler}
            >
              Carregar Mais
            </Button>
        }
      </div>
    );
  }
}

export default ListUsers;
