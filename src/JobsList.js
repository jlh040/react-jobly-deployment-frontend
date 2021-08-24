import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import { Container } from 'reactstrap';
import JobCard from './JobCard';

const JobsList = ({ jobs, setJobs, applyForJob, user, setUser, JoblyApi }) => {
  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    const jobs = await JoblyApi.searchForJobs(formData.search);
    setJobs(jobs);
  }
  return (
    <Container >
      <SearchBar handleSubmit={handleSubmit} />
      {jobs.map(job => <JobCard 
        user={user} 
        setUser={setUser} 
        key={job.id} 
        job={job}
        applyForJob={applyForJob} 
        displayCompany
        />)
      }
    </Container>
  )
};

export default JobsList;