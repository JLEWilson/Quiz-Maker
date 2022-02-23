import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import ReusableForm from './ReusableForm';

function EditQuizForm(props) {

  const firestore = useFirestore();
  const { quiz } = props;
  
  function addQuiz(event) {
    event.preventDefault();
    props.onEditQuiz();
    const propsToUpdate = {
      name: event.target.name.value,
      question: event.target.question.value,
      option1: event.target.option1.value,
      option2: event.target.option2.value,
      option3: event.target.option3.value,
    }
    return firestore.update({collection: 'quizzes', doc: quiz.id}, propsToUpdate)
  }
  return (
    <React.Fragment>
      <h2>Edit Changes to {quiz.name}</h2>
      <ReusableForm
      formSubmissionHandler={addQuiz}
      cancel={props.onEditQuiz}
      buttonText="Submit Changes"/>
    </React.Fragment>
  );
}

export default EditQuizForm;