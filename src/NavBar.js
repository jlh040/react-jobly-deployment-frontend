import React, { useState, useContext } from 'react';
import UserContext from './userContext';
import { NavLink as RRNavLink } from 'react-router-dom';
import './NavBar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = (props) => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBar">
      <Navbar className="shadow-sm mb-2" color="light" expand="md">
        <NavbarBrand color="primary">
          <NavLink tag={RRNavLink} exact to="/">Jobly</NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto">
            {user && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/jobs">Jobs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/logout">Log out {user.firstName}</NavLink>
                </NavItem>
              </>
            )}
            {!user && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/signup">Sign Up</NavLink>
                </NavItem>
                <NavItem className="me-3">
                  <NavLink tag={RRNavLink} exact to="/login">Login</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;