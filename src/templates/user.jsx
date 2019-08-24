import React from 'react'

export default function ({ pageContext }) {
    const {user} = pageContext
    return <div>
        <h1>User {user.username}</h1>
        <p>{user.name}</p>
    </div>
}