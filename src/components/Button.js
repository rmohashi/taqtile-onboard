import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const button = (props) => {
  return (
    <div>
      <Button variant="contained" disabled={props.inProgress} color="primary" onClick={props.clicked}>
        {
          props.inProgress ?
            <CircularProgress size="20px" /> :
            props.children
        }
      </Button>
    </div>
  );
}

export default button;
