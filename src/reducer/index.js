import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import TaskReducer from './taskReducer'

const rootReducer = combineReducers({
    post:PostReducer,
    task:TaskReducer
});

export default rootReducer;
