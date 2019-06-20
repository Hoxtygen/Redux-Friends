import  * as types from "../actions/actionTypes";

const initialState = {
    friends: [],
    loggedIn:false,
    error: null
}

export function friendReducer(state = initialState, action)   {
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
            }

        default:
            return state;
    }
}