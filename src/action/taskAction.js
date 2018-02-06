
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const PRIORITY_FILTER_SET = "PRIORITY_FILTER_SET";
export const SEARCH_TEXT_SET = "SEARCH_TEXT_SET";

export const createTask = (request) => {
    return {
        type: CREATE_TASK,
        payload: request
    };
}

export const updateTask = (request) => {
    return {
        type: UPDATE_TASK,
        payload: request
    };
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
}

export const setPriorityFilter = (str) => {
    return {
        type:PRIORITY_FILTER_SET,
        payload:str
    }
}

export const setSearchText = (str) => {
    return {
        type:SEARCH_TEXT_SET,
        payload:str
    }
}

