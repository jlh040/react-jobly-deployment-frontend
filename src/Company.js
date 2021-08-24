import React, { useState, useEffect, useContext } from 'react';
import UserContext from './userContext';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import JobCard from './JobCard';

const Company = () => {
  const { JoblyApi, user, applyForJob, setUser } = useContext(UserContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [company, setCompany] = useState({});
  const { handle } = useParams()
  useEffect(() => {
    const getAndReload = async (companyHandle) => {
      const res = await JoblyApi.getCompany(companyHandle);
      setCompany(res);
      setHasLoaded(true);
    };
    getAndReload(handle)
  }, []);
  
  return (
    <Container>
      <div>
        <h2>{company.name}</h2>
        <p><i>{company.description}</i></p>
      </div>
      <div>
        {hasLoaded ? (
          company.jobs.map(job => <JobCard user={user} setUser={setUser} job={job} applyForJob={applyForJob} />)
        ) : <h4>Loading...</h4>} 
      </div>
    </Container>
  )
};

export default Company;