import React from 'react';

import Input from '../components/Input';
import ValueSelect from '../components/ValueSelect';
import Button from '../components/Button';

const UserForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className='UserForm'>
      <Input
        value={props.name}
        id="name"
        label="Nome"
        type="text"
        error={props.nameError}
        changed={props.inputChanged}
      />
      <Input
        value={props.email}
        id="email"
        label="E-mail"
        type="text"
        error={props.emailError}
        changed={props.inputChanged}
      />
      {
        !props.edit &&
        (
          <Input
            id="password"
            label="Senha"
            type="password"
            error={props.passwordError}
            changed={props.inputChanged}
          />
        )
      }
      <ValueSelect
        label='Tipo'
        changed={props.selectChanged}
        name='role'
        id='select-role'
        value={props.role}
        error={props.roleError}
        items={[
          { value: 'user', text: 'User' },
          { value: 'admin', text: 'Admin' },
        ]}
      />
      <Button color="primary" inProgress={props.isValidating}>
        {props.buttonText}
      </Button>
    </form>
  );
}

export default UserForm;
