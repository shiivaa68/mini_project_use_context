import React, { useContext } from 'react'
import { Redirect, useHistory, useLocation } from 'react-router'
import ThemeContext from '../context/ThemeContext'
import UserContext from '../context/UserContext'




const Login =()=>{

    const theme = useContext(ThemeContext)
    const {login,authenticated} = useContext(UserContext)

    const history = useHistory()
    const location = useLocation()

     const  signIn = ()=>{

    const {oldPath} = location.state || {oldPath:'/'}

    login()

    history.push(oldPath)
     }

     if(authenticated){
         return <Redirect to='/'/>
     }


    return(
        <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em' ,...theme}}>
            <button onClick={()=>signIn()}>
                Login
            </button>
        </article>
    )
}
export default Login