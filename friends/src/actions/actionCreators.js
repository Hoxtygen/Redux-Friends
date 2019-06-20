import * as types from "./actionTypes"
import axios from "axios";

export function addFriends(friends) {
    return {
      type: types.ADD_FRIENDS,
      payload: friends,
    };
  }

  export function login(friends) {
      return {
          type: types.LOGIN,
          payload: friends
      }
  }

  export function success(friends) {
    return {
      type: types.LOGIN_SUCCESS,
      payload: friends,
    };
  }

  export function failure(error) {
      return {
          type: types.LOGIN_FAILURE,
          payload: error
      }
  }


   export const loginUser = (username, password) => dispatch => {
    const credentials = {username, password}
    axios.post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload);
            dispatch(success(true))
        })
        .catch(err => {
            dispatch(failure(err.message))
        })
}

  export const fetchFriends = () => dispatch => {
    axios.get('http://localhost:5000/api/friends')
      .then(res => {
        //dispatch(addFriends(res.data)); 
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.message);
      });
  };

