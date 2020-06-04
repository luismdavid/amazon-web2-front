import React, { useState } from 'react';
import Input from '../../core/Input/Input';

import './Register.css';
import Button from '../../core/UI/Button/Button';

export default ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [identification, setIdentification] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerif, setPasswordVerif] = useState('');

  const validateForm = () => {
    let valid = true;
    if (password !== passwordVerif) {
      valid = false;
    }
    console.log(valid);
    return valid;
  };

  return (
    <div className="Register-container">
      <div className="row">
        <div className="col-6">
          <Input label="Email" changed={setEmail} type="email" />
        </div>
        <div className="col-6">
          <Input label="Username" changed={setUsername} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Input label="Nombre" changed={setFirstName} />
        </div>
        <div className="col-6">
          <Input label="Apellido" changed={setLastname} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Input label="Cedula" changed={setIdentification} />
        </div>
        <div className="col-6">
          <Input label="phone" type="tel" changed={setPhone} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Input label="password" changed={setPassword} type="password" />
        </div>
        <div className="col-6">
          <Input
            label="Repetir contrasena"
            changed={setPasswordVerif}
            type="password"
          />
        </div>
      </div>
      <Button
        label="Register"
        onClick={() => {
          if (validateForm()) {
            onSubmit({
              email,
              username,
              firstName,
              lastName,
              identification,
              phone,
              password,
            });
          }
        }}
      ></Button>
    </div>
  );
};
