import axios from "axios";
import axiosAuthRoute from "../axioAuth/authRoute"
import * as types from "./actionTypes"



  export function login_success(friends) {
    return {
      type: types.LOGIN_SUCCESS,
      payload: friends,
    };
  }

  export function login_failure(error) {
      return {
          type: types.LOGIN_FAILURE,
          payload: error
      }
  }


   export const loginUser = (username, password, history) => dispatch => {
    const credentials = {username, password}
    axios.post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload);
            dispatch(login_success(true))
            history.push("/friends")
        })
        .catch(err => {
            dispatch(login_failure(err.message))
        })
}



export function addFriends(friends) {
    return {
      type: types.ADD_FRIENDS,
      payload: friends,
    };
  }

  export function addFriends_success(friends) {
    return {
      type: types.ADD_FRIENDS_SUCCESS,
      payload: friends,
    };
  }

  export function addFriends_failure(friends) {
    return {
      type: types.ADD_FRIENDS_FAILURE,
      payload: friends,
    };
  }


  export const fetchFriends = () => dispatch => {
    dispatch(addFriends(true));
    axiosAuthRoute().get('http://localhost:5000/api/friends')
      .then(res => {
        dispatch(addFriends_success(res.data)); 
        console.log(res.data)
      })
      .catch(error => {
        dispatch(addFriends_failure(error.message));
        console.log(error.message);
      });
  };

