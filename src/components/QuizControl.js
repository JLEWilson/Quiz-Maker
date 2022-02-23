import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as a from './../actions';
import QuizList from "./QuizList/QuizList";
import NewQuizButton from './QuizList/NewQuizButton';
import PropTypes from 'prop-types';
import NewQuizForm from './NewQuizForm';
import { withFirestore } from 'react-redux-firebase';
import QuizDetails from './QuizDetails';
import EditQuizForm from './EditQuizForm';


class QuizControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedQuiz: null,
      editing: false
    }
  }

  handleClick = () => {
    const { dispatch } = this.props
    const action = a.toggleForm();
    dispatch(action);
  }
  handleEditClick = () => {
    this.setState({editing: true});
  }
  handleEditingQuizInList = () => {
    this.setState({ 
      editing: false, selectedQuiz: null});
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
        id: quiz.id,
        results: quiz.get("results"),
        users: quiz.get("users") || []
      }
      this.setState({selectedQuiz: firestoreQuiz });
    });
  }
  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({collection: 'quizzes', doc: id});
    this.setState({selectedQuiz: null});
  }
  render() {
    let currentState = null;
    
    if(this.state.editing){
      currentState = <EditQuizForm quiz={this.state.selectedQuiz} onEditQuiz={this.handleEditingQuizInList} />
    } else if(this.props.newQuizVisible){
      currentState = <NewQuizForm newQuiz={this.handleAddingQuizToList}/>;
    } else if (this.state.selectedQuiz != null){
      currentState = <QuizDetails
      quiz={this.state.selectedQuiz}
      onClickingDelete={this.handleDeletingQuiz}
      onClickingEdit = {this.handleEditClick}
      selectQuiz={this.handleChangingSelectedQuiz}/>
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