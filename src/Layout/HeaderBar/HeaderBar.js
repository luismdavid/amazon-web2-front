import React from 'react';
import './HeaderBar.css';
import { get } from '../../core/Crud';

export default ({ currentUser, onLogout }) => {
  const logOut = () => {
    get('/Logout')
      .then(data => onLogout())
      .catch(error => console.log(error));
  };
  return (
    <header className="App-header">
      <div style={{color: 'white'}}>{currentUser ? 'Hola ' + currentUser.firstName : null}</div>
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="App-logo"
        alt="logo"
      />
      <div>
        {currentUser ? <button onClick={logOut}>Log out</button> : null}
      </div>
    </header>
  );
};
