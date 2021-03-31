import {combineReducers} from 'redux';
import authReducer from './auth';
import createReducer from './createQuiz';
import quizReducer from './quiz';

export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer
});