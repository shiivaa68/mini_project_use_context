import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import ThemeContext, { themes } from '../context/ThemeContext'

const NoteFound =() => {

const theme = useContext(ThemeContext)

    return (
        <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...theme}}>
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