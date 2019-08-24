import React from 'react'
import {Link} from 'gatsby'

export default function ({ pageContext}) {
    const { user } = pageContext

    return <div>
        <h1>Users</h1>
        {user.map(each => {
            return <p key={each.id}>
                <Link to={`/users/${each.username.toLowerCase()}`}>{each.name}</Link>
            </p>
        })}
    </div>
}