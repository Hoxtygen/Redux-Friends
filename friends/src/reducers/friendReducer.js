import * as types from "../actions/actionTypes";

const initialState = {
    friends: [],
    loggedIn: false,
    error: null,
    fetching: false
}

export function friendReducer(state = initialState, action) {
    switch (action.type) {
        case (types.LOGIN):
            return {
                ...state,
                loggedIn: true
            };
        case (types.LOGIN_SUCCESS):
            return {
                ...state,
                loggedIn: true,
                error: null
            };
        case (types.LOGIN_FAILURE):
            return {
                ...state,
                loggedIn: false,
                error: action.payload
            };
        case (types.ADD_FRIENDS):
            return { ...state, fetching: action.payload };
        case (types.ADD_FRIENDS_SUCCESS):
            return {
                ...state,
                friends: action.payload,
                fetching: false,
                error: null,
                loggedIn: true
            };
        case (types.ADD_FRIENDS_FAILURE):
            return {
                ...state,
                error: action.payload,
                fetching: false,
                loggedIn: true
            }

        default:
            return state;
    }
}