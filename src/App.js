import React, { useState } from 'react';
import './App.css';
import HeaderBar from './Layout/HeaderBar/HeaderBar';
import Content from './Layout/Content/Content';
import { Route, Switch, useHistory } from 'react-router-dom';
import Authentication from './Authentication/Authentication';
import Button from './core/UI/Button/Button';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  return (
    <div className="App">
      <HeaderBar
        currentUser={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          setIsAuthenticated(false);
        }}
      ></HeaderBar>
      <Content>
        <Switch>
          <Route
            render={() => (
              <Authentication
                currentUser={currentUser}
                onLogout={() => {
                  setCurrentUser(null);
                  setIsAuthenticated(false);
                }}
                onSuccessLogin={user => {
                  setCurrentUser(user);
                  setIsAuthenticated(true);
                }}
              />
            )}
            path="/auth"
          />
          <Route
            path=""
            exact
            render={() => (
              <div>
                <Button
                  label="Ir a Login"
                  onClick={() => history.push('/auth/login')}
                />
                <Button
                  label="Ir a Registro"
                  onClick={() => history.push('/auth/register')}
                />
              </div>
            )}
          />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
