import JoblyApi from '../api';

const useApplyForJob = () => {
  const applyForJob = async (user, job) => {
    const { username } = user;
    const { id } = job;

    let res = await JoblyApi.applyForJob(username, id);
    return res;
  };

  return applyForJob;
};

export default useApplyForJob;