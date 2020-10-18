import {combineReducers} from 'redux';
import postReducer from './postReducer';
import incrementReducer from './incrementReducer';

export default combineReducers({
   posts: postReducer, 
   counter : incrementReducer
});