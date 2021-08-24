import React, { useEffect, useState } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const JobCard = ({ job, displayCompany, applyForJob, user, setUser }) => {
  const [hasApplied, setHasApplied] = useState(false);
  const handleClick = async () => {
    if (!hasApplied) {
      const updatedUser = await applyForJob(user, job);
      setUser(updatedUser);
      setHasApplied(true);
    }
  };
  useEffect(() => {
    if (user) {
      if (user.applications.includes(job.id)) {
        setHasApplied(true);
      }
    }
  },[user])
  return (
    <div>
      <Card className="my-4">
        <CardBody>
          <CardTitle tag="h5">{ job.title }</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Salary: { job.salary }</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Equity: { job.equity }</CardSubtitle>
          <CardText>
            { displayCompany ? job.companyName : '' }
          </CardText>
          <div>
            <Button onClick={handleClick} color="primary" disabled={hasApplied ? true : false}>
              {hasApplied ? 'Applied' : 'Apply'}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobCard;