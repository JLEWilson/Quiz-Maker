import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import * as a from './../actions';
import QuizList from "./QuizList/QuizList";
import NewQuizButton from './QuizList/NewQuizButton';
import PropTypes from 'prop-types';
import NewQuizForm from './NewQuizForm';
import { withFirestore } from 'react-redux-firebase';
import QuizDetails from './QuizDetails';


class QuizControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedQuiz: null
    }
  }

  handleClick = () => {
    const { dispatch } = this.props
    const action = a.toggleForm();
    dispatch(action);
  }
  handleAddingQuizToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  handleChangingSelectedQuiz = (id) => {
    this.props.firestore.get({collection: 'quizzes', doc: id}).then((quiz) => {
      const firestoreQuiz = {
        name: quiz.get("name"),
        question: quiz.get("question"),
        option1: quiz.get("option1"),
        option2: quiz.get("option2"),
        option3: quiz.get("option3"),
        user: quiz.get("user"),
        id: quiz.id
      }
      this.setState({selectedQuiz: firestoreQuiz });
    });
  }
  handleDeletingQuiz = (id) => {
    console.log(id);
    this.props.firestore.delete({collection: 'quizzes', doc: id});
    this.setState({selectedQuiz: null});
  }
  render() {
    let currentState = null;

    if(this.props.newQuizVisible){
      currentState = <NewQuizForm newQuiz={this.handleAddingQuizToList}/>;
    } else if (this.state.selectedQuiz != null){
      currentState = <QuizDetails
      quiz={this.state.selectedQuiz}
      onClickingDelete={this.handleDeletingQuiz}/>
    }else {
      currentState = <QuizList selectQuiz={this.handleChangingSelectedQuiz}/>
    }
    return (
      <React.Fragment>
        <NewQuizButton newQuiz={this.handleClick}/>
        {currentState}
      </React.Fragment>
    );
  }
}
QuizControl.propTypes = {
  newQuizVisible: PropTypes.bool
}
function mapStateToProps(state) {
  return {
    newQuizVisible: state.newQuizVisible
  };
}

QuizControl = connect(mapStateToProps)(QuizControl);

export default withFirestore(QuizControl);