
export const SET_GOOGLE_AUTH = "SET_GOOGLE_AUTH";
export const SET_FACEBOOK_AUTH = "SET_FACEBOOK_AUTH";
export const SET_TWITTER_AUTH = "SET_TWITTER_AUTH";

export const setGoogleInfo = (request) => {
    return {
        type: SET_GOOGLE_AUTH,
        payload: request
    };
}

export const setFacebookInfo = (request) => {
    return {
        type: SET_FACEBOOK_AUTH,
        payload:request
    }
}

export const setTwitterInfo = (request) => {
    return {
        type: SET_TWITTER_AUTH,
        payload:request
    }
}



