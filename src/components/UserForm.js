import React from 'react';

import Input from '../components/Input';
import ValueSelect from '../components/ValueSelect';
import Button from '../components/Button';

const UserForm = (prop) => {
  return (
    <div className='UserForm'>
      <Input
        value={prop.name}
        id="name"
        label="Nome"
        type="text"
        error={prop.nameError}
        changed={prop.inputChanged}
      />
      <Input
        value={prop.email}
        id="email"
        label="E-mail"
        type="text"
        error={prop.emailError}
        changed={prop.inputChanged}
      />
      {
        !prop.edit &&
        (
          <Input
            id="password"
            label="Senha"
            type="password"
            error={prop.passwordError}
            changed={prop.inputChanged}
          />
        )
      }
      <ValueSelect
        label='Tipo'
        changed={prop.selectChanged}
        name='role'
        id='select-role'
        value={prop.role}
        error={prop.roleError}
        items={[
          { value: 'user', text: 'User' },
          { value: 'admin', text: 'Admin' },
        ]}
      />
      <Button color="primary" inProgress={prop.isValidating} clicked={prop.buttonClicked}>
        {prop.buttonText}
      </Button>
    </div>
  );
}

export default UserForm;
