import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchFriends } from '../actions/actionCreators';
import Friend from "./Friend"
import Loaders from "react-loader-spinner";
import Header from './Header';

class FriendsList extends Component {
    componentDidMount() {
        this.props.fetchFriends()
    }
    
    render() {
        const friends = this.props.friends || []
        console.log(this.props)
        if (this.props.fetching) {
            // return something here to indicate that you are fetching data
            return <Loaders />
          }
          return this.props.error ? (<p>{this.props.error}</p>) :  
         (
            <div>
                <Header />
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

