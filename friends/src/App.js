import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import  LoginForm  from './components/LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello Redux friends</h1>
        <Route exact path = "/" component = {Home} />
        <Route  path = "/login-form" 
        component={LoginForm}/>
      </div>
    </Router>
  );
}

export default App;
