const useIsLoggedIn = () => {
  let isLoggedIn;
  if (!JSON.parse(localStorage.getItem('token'))) {
    isLoggedIn = null;
  }
  else if (JSON.parse(localStorage.getItem('token')).token) {
    isLoggedIn = true;
  }

  return isLoggedIn;
};

export default useIsLoggedIn;