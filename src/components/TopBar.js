import React from 'react';

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavButton from '../components/NavButton';

const appBarStyle = {
  backgroundColor: "#009688",
}

const typographyStyle = {
  flexGrow: 1,
  textAlign: "left",
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
}

const topBar = (props) => {
  return (
    <AppBar style={appBarStyle} position="static">
      <Toolbar>
        <Typography style={typographyStyle} variant="title" color="inherit">
          {props.children}
        </Typography>
        <NavButton color="inherit">
          <Link style={linkStyle} to="/user/list-users">Listagem</Link>
        </NavButton>
        <NavButton color="inherit">
          <Link style={linkStyle} to="/user/new">Adicionar</Link>
        </NavButton>
        <NavButton color="inherit">
          <Link style={linkStyle} to="/user">Home</Link>
        </NavButton>
      </Toolbar>
    </AppBar>
  );
}

export default topBar;
