import { useHistory } from 'react-router-dom';
import JoblyApi from '../api';

const useUserUpdate = (setUser) => {
  const history = useHistory();
  const handleUpdate = async (e, username, formData, setShowMessage) => {
    try {
      e.preventDefault();
      setUser(await JoblyApi.updateUser(username, formData));
      history.push('/');
    }
    catch(err) {
      console.log(err)
      let errors = err.map(message => <p>{message}</p>);
      setShowMessage(errors);
    }
  };

  return handleUpdate;
};

export default useUserUpdate;