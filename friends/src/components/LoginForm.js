import React from 'react';
import { connect } from 'react-redux';
import {loginUser}  from '../actions/actionCreators';


export class LoginForm extends React.Component {
  userRef = React.createRef()

  passRef = React.createRef()

  onLogin = () => {
    const username = this.userRef.current.value;
    const password = this.passRef.current.value;

    this.props.loginUser(username, password);
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <div>username <input type="text" ref={this.userRef} /></div>
        <div>password <input type="text" ref={this.passRef} /></div>

        <button onClick={this.onLogin}>Log in</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
    // STEP 9: FLESH OUT
    return {
      loggedIn:state.loggedIn,
      error:state.error
    };
  }

export default connect(mapStateToProps,{ loginUser })(LoginForm);
