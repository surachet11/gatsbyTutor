import React from 'react'
import { Link } from 'gatsby'


export default function ({pageContext}) {
    const { people } = pageContext


    return <div>
        <h1>People</h1>
        {people.map(each => {
            return <p key={each}>
                <Link to={`/${each.toLowerCase()}`}>{each}</Link>
            </p>
        })}
    </div>
}