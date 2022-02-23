import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function QuizzesButton(props) {
  const styles = {
    marginRight : "2em"
  }
  return (
    <React.Fragment>
      <Link to="/">
        <Button variant="info" style={styles}>
          <h3>Quizzes</h3>
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default QuizzesButton;