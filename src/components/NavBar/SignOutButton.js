import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function SignOutButton(props) {
  const styles = {
    marginRight : "2em"
  }
  return (
    <React.Fragment>
      <Link to="/signin">
        <Button variant="info" styles={styles}>
          <h3>Sign Up/In/Out</h3>
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default SignOutButton;