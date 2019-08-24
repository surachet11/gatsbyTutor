import React from 'react'
import { Link } from 'gatsby'
import 'bulma/css/bulma.min.css'
import '../style.css'



export default function ({children}) {
    return <div>
        <section className="section">
            <div className="container">
                <Link to="/">หน้าแรก</Link>
                {' | '}
                <Link to="/about">เกี่ยวกับ</Link>
                {' | '}
                <Link to="/users">Users</Link>
                {' | '}
                <Link to="/albums">Album</Link>
                {children}
            </div>
        </section>
    </div>
}