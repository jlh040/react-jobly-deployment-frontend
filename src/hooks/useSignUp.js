import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useSignUp = (JoblyApi) => {
  const history = useHistory();
  const [token, setToken] = useState();
  const handleSignUp = async (e, formData, setShowMessage) => {
    try {
      e.preventDefault();
      console.log(formData);
      const respToken = await JoblyApi.signUp(formData);
      JoblyApi.token = respToken;
      setToken(respToken);
      history.push('/');
    }
    catch(err) {
      let errors = err.map(message => <p>{message}</p>);
      setShowMessage(errors);
    }
  };
  return [token, setToken, handleSignUp];
};

export default useSignUp;