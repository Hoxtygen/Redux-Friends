import  * as types from "../actions/actionTypes";

export function friendReducer(state = [], action)   {
    switch (action.type) {
        case (types.ADD_FRIENDS):
            return action.payload;    
        default:
            break;
    }
}