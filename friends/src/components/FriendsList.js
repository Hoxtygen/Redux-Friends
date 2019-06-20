import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchFriends } from '../actions/actionCreators';
import Friend from "./Friend"
import Loaders from "react-loader-spinner";

class FriendsList extends Component {
    componentDidMount() {
        this.props.fetchFriends()
    }
    
    render() {
        const friends = this.props.friends || []        
        return (
            <div>
                <h2>List of friends here</h2>
                {
                    friends.map(friend => {
                    return  <Friend  key = {friend.id} friend = {friend}/>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state)    {
    return {
        friends: state.friendReducer.friends,
        fetching: state.friendReducer.fetching,
        error: state.friendReducer.error
    }
}

export default connect(mapStateToProps, {fetchFriends})(FriendsList)

