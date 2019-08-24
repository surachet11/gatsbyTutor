import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { albums } = pageContext

    return <div>
        <h1>Users</h1>
        {albums.map(each => {
            return <p key={each.id}>
                <Link to={`/albums/${each.id}`}>{each.title}</Link>
            </p>
        })}
    </div>
}