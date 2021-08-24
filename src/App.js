import React from 'react';
import './App.css';
import Routes from './Routes';
import UserContext from './userContext';
import useSignUp from './hooks/useSignUp';
import useLogin from './hooks/useLogin';
import useGetUser from './hooks/useGetUser';
import useUserUpdate from './hooks/useUserUpdate';
import useLocalStorage from './hooks/useLocalStorage';
import useApplyForJob from './hooks/useApplyForJob';
import JoblyApi from './api';

function App() {
  const [tokenFromSignUp, setTokenFromSignUp, handleSignUp] = useSignUp(JoblyApi);
  const [tokenFromLogin, setTokenFromLogin, handleLogin] = useLogin(JoblyApi);
  const [tokenFromLocalStorage, setTFLS] = useLocalStorage('token', tokenFromLogin, tokenFromSignUp, JoblyApi);
  const [user, setUser] = useGetUser(tokenFromLogin, tokenFromSignUp, tokenFromLocalStorage, JoblyApi);
  const applyForJob = useApplyForJob();
  const handleUpdate = useUserUpdate(setUser);

  return (
    <div className="App">
      <UserContext.Provider value={{
          user, 
          setUser,
          JoblyApi, 
          tokenFromSignUp, 
          setTokenFromSignUp, 
          handleSignUp, 
          tokenFromLogin, 
          setTokenFromLogin, 
          handleLogin,
          handleUpdate,
          applyForJob,
          setTFLS
        }}
      >
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
