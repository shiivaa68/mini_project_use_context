import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Login =()=>{

    const theme = useContext(ThemeContext)
    return(
        <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em' ,...theme}}>
            <button>
                Login
            </button>
        </article>
    )
}
export default Login