import React, { useState } from 'react';

import './Login.css';
import Input from '../../core/Input/Input';
import { Link, useHistory } from 'react-router-dom';
import { deleted } from '../../core/Crud';
import Button from '../../core/UI/Button/Button';

export default props => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const deleteUser = () => {
    deleted('/DeleteUser', props.currentUser).then(() => {
      props.onLogout();
      history.push('/');
    });
  };

  return (
    <div className="Login-container">
      {props.currentUser ? (
        <button onClick={deleteUser}>Eliminar Usuario</button>
      ) : (
        <div style={{ width: '60%' }}>
          <Input label="Username" changed={setUsername} type="text" />
          <Input label="Password" changed={setPassword} type="password" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/auth/register">No tienes una cuenta ?</Link>
            <Button
              style={{ marginTop: '10px' }}
              label="Login"
              onClick={() => props.onSubmit(username, password)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
