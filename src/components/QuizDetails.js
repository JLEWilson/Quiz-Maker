import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import { getAuth } from "firebase/auth";

QuizDetails.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func
};

function QuizDetails(props) {
  const { quiz, onClickingDelete, onClickingEdit, selectQuiz } = props;
  const firestore = useFirestore();
  let disabled = false;
  const auth = getAuth();
  const user = auth.currentUser.email;
  if (quiz.users.includes(user)) disabled = true;
  
  function quizSubmit(event) {
    event.preventDefault();
    const selection = event.target.quiz.value;
    let newResults = quiz.results;
    newResults[selection] += 1;
    const newUser = quiz.users.concat(user);
    const propsToUpdate = {
      results: {...newResults},
      users: newUser
    }
    return firestore.update({collection: 'quizzes', doc: quiz.id}, propsToUpdate).then(selectQuiz(quiz.id));
  }

  return (
    <React.Fragment>
      <h1>{quiz.name}</h1>
      <p>by: {quiz.user}</p>
      <Form onSubmit={quizSubmit}>
        <Form.Label><strong>{quiz.question}</strong></Form.Label>
        <Form.Check type="radio" value="1" label={quiz.option1} name="quiz" disabled={disabled}/>
        <Form.Check type="radio" value="2" label={quiz.option2} name="quiz" disabled={disabled}/>
        <Form.Check type="radio" value="3" label={quiz.option3} name="quiz" disabled={disabled}/>
        <Button variant="success" type="submit">Log my results!</Button>
      </Form>
      <hr/>
      <h2>Quiz results:</h2>
      <ul>
        <li>Option 1: {quiz.results["1"]}</li>
        <li>Option 2: {quiz.results["2"]}</li>
        <li>Option 3: {quiz.results["3"]}</li>
      </ul>
      <h3>Users that took this quiz: {quiz.users}</h3>
      <Button variant="light" onClick={()=>onClickingEdit(quiz)}>That's not what I meant...</Button>
      <Button variant="danger" onClick={()=>onClickingDelete(quiz.id)}>Delete this garbage quiz! Get it out of here!</Button>
      <Button variant="warning" onClick={()=>console.log(quiz)}>Click here to log b</Button>
    </React.Fragment>
  );
}

export default QuizDetails;