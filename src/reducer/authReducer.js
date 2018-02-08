import { SET_GOOGLE_AUTH,SET_FACEBOOK_AUTH,SET_TWITTER_AUTH } from '../action/authAction';
const INITIAL_STATE = {
    google:{},
    facebook:{},
    twitter:{}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_GOOGLE_AUTH: {
            return {
                ...state,
                google : action.payload
            };
        }
        case SET_FACEBOOK_AUTH: {
            return {
                ...state,
                facebook: action.payload
            }
        }
        case SET_TWITTER_AUTH: {
            return {
                ...state,
                twitter:action.payload
            }
        }
        default:
            return state;
    }

};