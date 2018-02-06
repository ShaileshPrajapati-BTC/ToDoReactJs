import { CREATE_POST,FETCH_POST,FETCH_POSTS,DELETE_POST,EDIT_POST } from '../action/index';
import _ from 'lodash';
const INITIAL_STATE = {
    posts:[]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CREATE_POST: {
            return {
                ...state,
                posts: _.concat(...state.posts,action.payload)
            };
        }
        case FETCH_POSTS: {
            return {
                ...state,
                posts:action.payload
            };
        }
        case FETCH_POST:{
            return {
                ...state,
                posts:action.payload
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts:action.payload
            }
        }
        case EDIT_POST : {
            let arr = state.posts;
            arr[action.payload.index] = action.payload.value
            return {
                ...state,
                posts:arr
            }
        }
        default:
            return state;
    }

};