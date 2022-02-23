import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import newQuizFormVisibleReducer from './new-quiz-form-visible-reducer';

const rootReducer = combineReducers({
  newQuizVisible: newQuizFormVisibleReducer,
  firestore: firestoreReducer
});

export default rootReducer;