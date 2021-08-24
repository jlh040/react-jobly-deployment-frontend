import React, { useState, useContext } from 'react';
import UserContext from './userContext';
import './SignUpForm.css';
import { Container, Button, Alert, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const SignUpForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { handleSignUp } = useContext(UserContext);
  const initialState = { username: '', password: '', firstName: '', lastName: '', email: '' };
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    setFormData(fData => ({
      ...fData,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <Container className="SignUpForm">
      <Form onSubmit={e => handleSignUp(e, formData, setShowMessage)} className="SignUpForm-form">
        <FormGroup row>
          <Col sm={{size: 6, offset: 3}}>
            <h2>Sign Up</h2>
            <Label className="SignUpForm-label" for="username">Username</Label>
            <Input 
              type="text" 
              name="username" 
              value={formData.username} 
              id="username"
              onChange={handleChange} 
              placeholder="Username" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="password">Password</Label>
            <Input 
              type="password" 
              name="password" 
              value={formData.password} 
              id="password"
              onChange={handleChange} 
              placeholder="Password" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="first-name">First name</Label>
            <Input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              id="first-name"
              onChange={handleChange} 
              placeholder="First name" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="last-name">Last name</Label>
            <Input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              id="last-name"
              onChange={handleChange} 
              placeholder="Last name" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="SignUpForm-label" for="email">Email</Label>
            <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            id="email"
            onChange={handleChange} 
            placeholder="Email" 
          />
          </Col>
        </FormGroup>
        <Col sm={{size: 6, offset: 3}}>
          {showMessage && <Alert color="danger">{showMessage}</Alert>}
        </Col>
        <div className="SignUpForm-button">
            <Button color="primary">Submit</Button>
        </div>
      </Form>
    </Container>
  )
};

export default SignUpForm;
