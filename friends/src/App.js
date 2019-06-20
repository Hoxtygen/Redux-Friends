import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import  LoginForm  from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from "./axioAuth/PrivateRoute"
import NewFriend from "./components/NewFriend"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = "/" component = {Home} />
        <Route  path = "/login-form" component={LoginForm}/>
        <PrivateRoute exact path = "/friends" component = {FriendsList} />
        <PrivateRoute exact path = "/new-friend" component = {NewFriend} />
      </div>
    </Router>
  );
}

export default App;
