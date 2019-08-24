import React from 'react'

export default function ({ pageContext }) {
    const { album } = pageContext

    return <div>
        <h1>Album</h1>
        <p>{album.title}</p>
    </div>
}