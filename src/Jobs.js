import React, { useState, useEffect, useContext } from 'react';
import UserContext from './userContext';
import JobsList from './JobsList';

const Jobs = () => {
  const { JoblyApi, user, setUser, applyForJob } = useContext(UserContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      const res = await JoblyApi.getAllJobs();
      setJobs(res);
      setHasLoaded(true);
    };
    getJobs()
  }, [JoblyApi]);

  return (
    <div>
      {hasLoaded ? (
        <JobsList 
          jobs={jobs} 
          setJobs={setJobs} 
          applyForJob={applyForJob} 
          user={user} 
          setUser={setUser}
          JoblyApi={JoblyApi} /> 
      ) : <h3>Loading...</h3>}
    </div>
  )
};

export default Jobs;