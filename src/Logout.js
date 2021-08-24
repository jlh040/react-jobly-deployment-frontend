import React, { useContext } from 'react';
import UserContext from './userContext';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  let { tokenFromLogin, setTokenFromLogin, tokenFromSignUp, setTokenFromSignUp, setTFLS } = useContext(UserContext);

  localStorage.clear();
  setTFLS(null);

  if (tokenFromLogin) {
    setTokenFromLogin(null);
  }
  else if (tokenFromSignUp) {
    setTokenFromSignUp(null);
  }

  return <Redirect to="/" />
};

export default Logout;