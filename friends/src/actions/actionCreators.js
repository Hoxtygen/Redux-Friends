import * as types from "./actionTypes"
import axios from "axios";


export const login = (username, password) => dispatch => {
    const credentials = {username, password}
    axios.post("http://localhost:5000/api/login", credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token)
        })
        .catch(err => {
            console.log(err)
        })
}


export function addFriends(friends) {
    return {
      type: types.ADD_FRIENDS,
      payload: friends,
    };
  }

  export const fetchFriends = () => dispatch => {
    axios.get('http://localhost:5000/api/friends')
      .then(res => {
        dispatch(addFriends(res.data)); // option 2
      })
      .catch(error => {
        console.log(error.message);
      });
  };