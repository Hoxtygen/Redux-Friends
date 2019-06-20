import * as types from "../actions/actionTypes";

export const addTokenToLocalStorage = store => next => action => {
    if(action.type === types.LOGIN_SUCCESS) {
      localStorage.setItem('token', action.payload);
    }
    next(action);
  };