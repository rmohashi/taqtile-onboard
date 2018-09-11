import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const valueSelect = (props) => {
  return (
    <FormControl className='inputField' error={props.error}>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <Select
        value={props.value}
        onChange={props.changed}
        inputProps={{
          id: props.id,
          name: props.name,
        }}
      >
        {
          props.items.map(item => {
            return (
              <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
            );
          })
        }
      </Select>
      {
        props.error &&
        (
          <FormHelperText>Inválido</FormHelperText>
        )
      }
    </FormControl>
  );
}

export default valueSelect;
