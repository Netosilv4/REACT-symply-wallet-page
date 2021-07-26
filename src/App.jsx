/* eslint-disable react/prop-types */
import React from 'react';
import './styles/globalStyles.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/wallet/Dashboard';

function App({ userInfo }) {
  if (userInfo.token !== undefined) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.loginReducer.user,
});

export default connect(mapStateToProps, null)(App);
