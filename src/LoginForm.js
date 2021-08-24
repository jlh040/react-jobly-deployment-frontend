import React, { useContext, useState } from 'react';
import UserContext from './userContext';
import './LoginForm.css';
import { Container, Button, Alert, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const LoginForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { handleLogin } = useContext(UserContext);
  const initialState = { username: '', password: ''};
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    setFormData(fData => ({
      ...fData,
      [e.target.name]: e.target.value
    }))
  };
  
  return (
    <Container className="LoginForm">
      <Form onSubmit={e => handleLogin(e, formData, setShowMessage)} className="LoginForm-form">
        <FormGroup row>
          <Col sm={{size: 6, offset: 3}}>
            <h2>Log In</h2>
            <Label className="LoginForm-label" for="username">Username</Label>
            <Input 
              type="text" 
              name="username" 
              id="username" 
              value={formData.username} 
              onChange={handleChange} 
              placeholder="Username" 
            />
          </Col>
        </FormGroup>
        <FormGroup className="my-4" row>
          <Col sm={{size: 6, offset: 3}}>
            <Label className="LoginForm-label" for="password">Password</Label>
            <Input 
              type="password" 
              name="password" 
              id="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Password" 
            />
          </Col>
        </FormGroup>
        <Col sm={{size: 6, offset: 3}} className="LoginForm-alert">
          {showMessage && <Alert color="danger">{showMessage}</Alert>}
        </Col>
        <div className="LoginForm-button">
          <Button color="primary">Submit</Button>
        </div>
      </Form>
    </Container>
  )
};

export default LoginForm;
