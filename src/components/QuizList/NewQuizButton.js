import React from 'react';
import { Button } from 'react-bootstrap';

function NewQuizButton(props) {
  function OnClick(){
    props.newQuiz()
  }
  return (
    <Button onClick={OnClick} variant="dark" >New Quiz</Button>
  );
}

export default NewQuizButton;