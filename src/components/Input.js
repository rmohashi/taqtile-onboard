import React from 'react';
import TextField from '@material-ui/core/TextField';

const input = (props) => {
  return (
    <TextField
      error={props.error ? true : false}
      id={props.id}
      label={props.label}
      placeholder={props.label}
      helperText={props.error ? 'Inválido' : null}
      margin="normal"
      className="inputField"
      type={props.type}
      onChange={props.changed}
      disabled={props.disabled}
      value={props.value}
    />
  );
}

export default input;
