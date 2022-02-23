import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';
import { getAuth } from "firebase/auth";

function NewQuizForm(props) {
  const firestore = useFirestore();
  function addQuiz(event) {
    event.preventDefault();
    props.newQuiz();
    const auth = getAuth()
    const user = auth.currentUser.email;
    return firestore.collection('quizzes').add(
      {
        name: event.target.name.value,
        question: event.target.question.value,
        option1: event.target.option1.value,
        option2: event.target.option2.value,
        option3: event.target.option3.value,
        user: user,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  return (
    <Form onSubmit={addQuiz}>
      <Form.Group className="mb-3">
        <Form.Label>Quiz Name</Form.Label>
        <Form.Control type="text" placeholder="Quiz Name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Question</Form.Label>
        <Form.Control type="text" placeholder="Enter Question" name="question" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Option 1</Form.Label>
        <Form.Control type="text" placeholder="option 1" name="option1" />
        <Form.Group className="mb-3">
          <Form.Label>Option 2</Form.Label>
          <Form.Control type="text" placeholder="option 2" name="option2" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Option 3</Form.Label>
          <Form.Control type="text" placeholder="option 1" name="option3" />
        </Form.Group>
      </Form.Group>
    <Button variant="success" type="submit">Add Quiz</Button>
    </Form>
  );
}

export default NewQuizForm;