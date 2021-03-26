import React, { useContext } from 'react'
import { Redirect, Route, useLocation } from 'react-router'
import UserContext from '../context/UserContext'





const PrivateRoute = ({children,...props}) => {

const{authenticated} =useContext(UserContext)
const location = useLocation()

if(authenticated) {
    return<Route {...props}>{children}</Route>
}else {
    return <Redirect to={{pathname:'/login',state:{oldPath:location.pathname}}}/>
}


}

export default PrivateRoute;