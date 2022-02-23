import React from 'react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import Quiz from './Quiz';

function QuizList(props) {
  
  useFirestoreConnect([
    { collection: 'quizzes'}
  ]);
  
  const quizzes = useSelector(state => state.firestore.ordered.quizzes) 

  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <hr/>
        {quizzes.map((quiz) => {
          return <Quiz
          whenQuizClicked={props.selectQuiz}
          name={quiz.name}
          question={quiz.question}
          option1={quiz.option1}
          option2={quiz.option2} 
          option3={quiz.option3}
          user={quiz.user}
          id={quiz.id}
          key={quiz.id}/>
        })}
      </React.Fragment>
    );  
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }

}

export default QuizList;