import React, { Component } from 'react';

import Title from '../components/Title';
import Button from '../components/Button';

import { Redirect } from 'react-router-dom';
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
      page: 1,
      lastPage: false,
      users: [],
      isLoading: true,
    }
    this.getUsers(1);
  }

  getUsers = (page) => {
    getUsers(page)
      .then(data => {
        this.setState({
          users: this.state.users.concat(data.users),
          page: data.page,
          lastPage: data.lastPage,
          isLoading: false,
          userId: null,
        });
      })
      .catch(error => alert(error.message));
  }

  userClickedHandler = (id) => {
    this.setState({
      userId: id,
    });
  }

  nextButtonClickHandler = () => {
    this.setState({ isLoading: true });
    this.getUsers(this.state.page);
  }

  render() {
    if (this.state.userId) {
      return (<Redirect to={"/user/details/" + this.state.userId} />)
    }
    const rowStyle = {
      cursor: "pointer",
    }
    return (
      <div className="ListUsers">
        <Title>
          Usuários
        </Title>
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
                  <TableRow style={rowStyle} key={user.id} onClick={() => this.userClickedHandler(user.id)}>
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
          !this.state.lastPage &&
          (
            <Button
              color="primary"
              inProgress={this.state.isLoading}
              clicked={this.nextButtonClickHandler}
            >
              Carregar Mais
            </Button>
          )
        }
      </div>
    );
  }
}

export default ListUsers;
