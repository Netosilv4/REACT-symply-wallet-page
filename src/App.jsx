import React from 'react';
import './styles/globalStyles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
