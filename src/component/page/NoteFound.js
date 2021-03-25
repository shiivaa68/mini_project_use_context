import React from 'react'
import {Link} from 'react-router-dom'


const NoteFound =() => {
    return (
        <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em'}}>
            <h1>
                notefound page
            </h1>
            <p>
                go to home page = <Link to="/">HOME</Link>
            </p>
        </article>
    )
}

export default NoteFound