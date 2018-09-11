import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const button = (props) => {
  return (
    <Button
      className={props.className}
      variant="contained"
      size={props.size}
      disabled={props.inProgress}
      color={props.color}
      onClick={props.clicked}
      type="submit"
    >
      {
        props.inProgress ?
          <CircularProgress size="20px" /> :
          props.children
      }
    </Button>
  );
}

export default button;
