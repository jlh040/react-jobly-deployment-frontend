import React from 'react';
import { NavLink } from 'react-router-dom'
import {
  Card, CardText, CardBody,
  CardTitle, CardLink
} from 'reactstrap';
import './CompanyCard.css';


const CompanyCard = ({ company }) => {
  return (
    <div className="CompanyCard">
      <Card className="my-3">
        <CardBody>
          <CardTitle tag="h5">
            <CardLink tag={NavLink} exact to={`/companies/${company.handle}`}>
              {company.name}
            </CardLink>
          </CardTitle>
          <CardText>{company.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CompanyCard;