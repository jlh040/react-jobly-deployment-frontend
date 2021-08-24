import React, { useContext } from 'react';
import UserContext from './userContext';
import SearchBar from './SearchBar';
import CompanyCard from './CompanyCard';
import { Container } from 'reactstrap'

const CompanyList = ({ companies, setCompanies }) => {
  const { JoblyApi } = useContext(UserContext)
  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    const filteredCompanies = await JoblyApi.searchForCompanies(formData.search);
    setCompanies(filteredCompanies);
  }
  return (
    <Container>
      <SearchBar handleSubmit={handleSubmit} />
      {companies.map(company => <CompanyCard key={company.handle} company={company} />)}
    </Container>
  )
};

export default CompanyList;