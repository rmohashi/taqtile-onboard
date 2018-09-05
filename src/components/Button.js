import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const button = (props) => {
  return (
    <Button variant="contained" disabled={props.inProgress} color={props.color} onClick={props.clicked}>
      {
        props.inProgress ?
          <CircularProgress size="20px" /> :
          props.children
      }
    </Button>
  );
}

export default button;
