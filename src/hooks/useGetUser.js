import { useState, useEffect } from 'react';

const useGetUser = (tokenFromLogin, tokenFromSignUp, tokenFromLocalStorage, JoblyApi) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getInformation = async () => {
      if (!(tokenFromLocalStorage || tokenFromLogin || tokenFromSignUp)) {
        if (user) setUser(null);
        return;
      }
      else {
        const userResp = await JoblyApi.getUser(tokenFromLocalStorage || tokenFromSignUp || tokenFromLogin);
        setUser(userResp);
      }
    };
    getInformation();
  }, [tokenFromLogin, tokenFromSignUp, tokenFromLocalStorage, JoblyApi]);

  return [user, setUser, JoblyApi];
};

export default useGetUser;