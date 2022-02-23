import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

QuizDetails.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func
};

function QuizDetails(props) {
  const { quiz, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>{quiz.name}</h1>
      <p>by: {quiz.user}</p>
      <hr/>
      <h2>{quiz.question}</h2>
      <h3>{quiz.option1}</h3>
      <h3>{quiz.option2}</h3>
      <h3>{quiz.option3}</h3>
      <hr/>
      <Button variant="danger" onClick={()=>onClickingDelete(quiz.id)}>Delete this garbage quiz! Get it out of here!</Button>
      <Button variant="warning" onClick={()=>console.log(quiz)}>Click to log the console bro</Button>
    </React.Fragment>
  );
}

export default QuizDetails;