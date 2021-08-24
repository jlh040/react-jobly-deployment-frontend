import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const SearchBar = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({search: ''});
  const handleChange = e => {
    setFormData(fData => ({
      search: e.target.value
    }))
  }
  return (
    <Form onSubmit={e => handleSubmit(e, formData)} className="mt-5 mb-3" inline>
      <FormGroup>
      <Input
        type="search"
        value={formData.search}
        placeholder="Enter search term.."
        onChange={handleChange}
      />
      </FormGroup>
      <Button color="primary" className="mt-3">Search</Button>
    </Form>
  )
};

export default SearchBar;