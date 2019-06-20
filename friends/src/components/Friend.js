import React from 'react'

export default function Friend(props) {
    const { friend } = props
    return (
        <div>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Age: {friend.age}</p>
            <button>Delete</button>
        </div>
    )
}
