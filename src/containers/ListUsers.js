import React, { Component } from 'react';

import Title from '../components/Title';

import { getUsers, deleteUser } from '../data/user';

import './ListUsers.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';

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

  componentDidMount() {
    window.addEventListener('scroll', this.pageScrollHandler, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.pageScrollHandler, false);
  }

  getUsers = (page) => {
    getUsers(page)
      .then(data => {
        this.setState({
          users: this.state.users.concat(data.users),
          page: data.page,
          lastPage: data.lastPage,
          isLoading: false,
        });
      })
      .catch(error => alert(error.message));
  }

  detailsClickedHandler = (id) => {
    this.props.history.push(`/user/details/${id}`);
  }

  editClickedHandler = (id) => {
    this.props.history.push(`/user/edit/${id}`);
  }

  deleteClickedHandler = (id) => {
    deleteUser(id)
      .then(data => {
        this.props.setModal(
          'Sucesso',
          `Usuário ${data.data.name} removido com sucesso`
        )
        this.setState({
          users: this.state.users.filter(user => user.id !== id),
        });
      })
      .catch(error => {
        this.props.setModal('Erro', error.message)
      })
  }

  pageScrollHandler = () => {
    if (!this.state.lastPage && !this.state.isLoading) {
      this.setState({ isLoading: true });
      this.getUsers(this.state.page);
    }
  }

  render() {
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
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.users.map(user => {
                return (
                  <TableRow style={rowStyle} key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <IconButton aria-label="Detail">
                        <PersonIcon onClick={this.detailsClickedHandler.bind(this, user.id)} />
                      </IconButton>
                      <IconButton aria-label="Edit">
                        <EditIcon onClick={this.editClickedHandler.bind(this, user.id)}/>
                      </IconButton>
                      <IconButton aria-label="Edit">
                        <DeleteIcon onClick={this.deleteClickedHandler.bind(this, user.id)} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
        {
          this.state.isLoading &&
          (
            <CircularProgress />
          )
        }
      </div>
    );
  }
}

export default ListUsers;
