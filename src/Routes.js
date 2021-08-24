import React from 'react';
import useIsLoggedIn from './hooks/useIsLoggedIn';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';
import SignUp from './SignUp';
import Login from './Login';
import Logout from './Logout';
import NavBar from './NavBar';

const Routes = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <div style={{height: '100%'}}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/companies">
          {isLoggedIn ? <Companies /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/companies/:handle">
          {isLoggedIn ? <Company /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/jobs">
          {isLoggedIn ? <Jobs /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/profile">
          {isLoggedIn ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </div>
  )
};

export default Routes;