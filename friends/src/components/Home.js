import React, { Component } from 'react'
// import { connect } from "react-redux";
// import { fetchFriends } from "../actions/actionCreators"
import Header from "./Header";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3>Hello, people, I'm the Home page</h3>
            </div>
        )
    }
}
