import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import TaskReducer from './taskReducer';
import AuthReducer from './authReducer'

const rootReducer = combineReducers({
    post:PostReducer,
    task:TaskReducer,
    auth:AuthReducer
});

export default rootReducer;
