import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

export const fetchPosts = (request) => {
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export const createPost = (request) => {
    return {
        type: CREATE_POST,
        payload: request
    };
}

export const fetchPost = (request) => {
    return {
        type: FETCH_POST,
        payload: request
    };
}

export const deletePost = (str) => {
    return {
        type: DELETE_POST,
        payload: str
    };
}

export const editPost = (str,index) => {
    return {
        type: EDIT_POST,
        payload: {value:str,index:index}
    };
}