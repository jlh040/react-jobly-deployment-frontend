import React, { useContext } from 'react';
import UserContext from './userContext';
import { Jumbotron } from 'reactstrap';
import './Homepage.css';
import "animate.css"

const Homepage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="Homepage">
      <Jumbotron className="animate__animated animate__bounceInLeft Homepage-jumbotron">
        <h1 className="display-3">Jobly</h1>
        <p className="lead">Your go-to place for the best jobs.</p>
        {user && (
          <>
            <hr className="my-2" />
            <h3>Welcome back {user.firstName}!</h3>
          </>
        )}
      </Jumbotron>
    </div>
  )
};

export default Homepage;