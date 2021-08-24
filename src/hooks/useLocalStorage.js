import { useState, useEffect } from 'react';

const useLocalStorage = (key, tokenFromLogin, tokenFromSignUp, JoblyApi) => {
  const [state, setState] = useState(() => {
    try {
      if (JSON.parse(window.localStorage.getItem(key))) {
        const { token } = JSON.parse(window.localStorage.getItem(key))
        return token;
      }
    }
    catch(e) {
      alert('Local storage realized an error!');
    }
  });
  useEffect(() => {
    if (state) {
      window.localStorage.setItem(key, `{"token": "${state}"}`);
      JoblyApi.token = state;
    }
    else if (tokenFromLogin) {
      window.localStorage.setItem(key, `{"token": "${tokenFromLogin}"}`);
      setState(tokenFromLogin);
    }
    else if (tokenFromSignUp) {
      window.localStorage.setItem(key, `{"token": "${tokenFromSignUp}"}`);
      setState(tokenFromSignUp);
    }
    else {
      window.localStorage.setItem(key, `{"token": null}`);
    }
  }, [state, tokenFromLogin, tokenFromSignUp, JoblyApi, key]);
  return [state, setState];
};

export default useLocalStorage;