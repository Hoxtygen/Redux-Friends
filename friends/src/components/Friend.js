import React from 'react'

export default function Friend(props) {
    const { friend } = props
    return (
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.age}</p>
            <button>Delete</button>
        </div>
    )
}
