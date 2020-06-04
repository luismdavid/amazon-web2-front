import React, { useState } from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import Login from './Login/Login';
import * as api from '../core/Crud';

import './Authentication.css';
import Register from './Register/Register';

export default ({
  onSuccessLogin,
  onSuccessRegister,
  currentUser,
  onLogout,
}) => {
  let match = useRouteMatch();
  let history = useHistory();
  const [error, setError] = useState(null);

  const loginWithCreds = (username, password) => {
    api
      .post('/Login', {
        username,
        password,
      })
      .then(user => {
        onSuccessLogin(user);
        setError(null);
      })
      .catch(error => setError(error));
  };

  const registerUser = userData => {
    api
      .post('/Register', userData)
      .then(() => {
        setError(null);
        history.push('/auth/login');
      })
      .catch(error => setError(error));
  };

  return (
    <div className="Auth-container">
      <h3>{error ? error.message : null}</h3>
      <Switch>
        <Route
          path={match.url + '/login'}
          render={() => (
            <Login onSubmit={loginWithCreds} currentUser={currentUser} onLogout={onLogout}/>
          )}
          exact
        />
        <Route
          path={match.url + '/register'}
          component={() => <Register onSubmit={registerUser} />}
          exact
        />
      </Switch>
    </div>
  );
};
