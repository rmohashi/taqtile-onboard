import React from 'react';
import Button from '@material-ui/core/Button';

const navButton = (props) => {
  return (
    <Button color="inherit">
      {props.children}
    </Button>
  );
}

export default navButton;
