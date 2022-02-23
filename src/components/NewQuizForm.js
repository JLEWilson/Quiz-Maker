import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import { getAuth } from "firebase/auth";
import ReusableForm from './ReusableForm';

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
    <React.Fragment>
      <h2>Submit new quiz!</h2>
      <ReusableForm
      formSubmissionHandler={addQuiz}
      cancel={props.newQuiz}
      buttonText="Add New Quiz"/>
    </React.Fragment>
  );
}

export default NewQuizForm;