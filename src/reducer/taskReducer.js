import { CREATE_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    FILTER_TASK,
    PRIORITY_FILTER_SET,
    SEARCH_TEXT_SET} from '../action/taskAction';
import _ from 'lodash';
const INITIAL_STATE = {
    task:[],
    priorityFilter:'',
    searchText:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CREATE_TASK: {
            return {
                ...state,
                task : _.concat(...state.task,action.payload)
            };
        }
        case UPDATE_TASK: {
            return {
                ...state,
                task: state.task.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item;
                    }
                    return item;
                })
            };
        }
        case DELETE_TASK:{
            return {
                ...state,
                task: state.task.filter(item => action.payload !== item.id)
            }
        }
        case PRIORITY_FILTER_SET: {
            return {
                ...state,
                priorityFilter:action.payload
            }
        }
        case SEARCH_TEXT_SET : {
            return {
                ...state,
                searchText:action.payload
            }
        }
        default:
            return state;
    }

};