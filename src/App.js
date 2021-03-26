import React, { useEffect, useState } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './component/generic/Header'
import Footer from './component/generic/Footer'
import SideBar from './component/generic/SideBar';
import Home from './component/page/Home'
import Login from './component/page/Login'
import NoteFound from './component/page/NoteFound'
import Post from './component/page/Post'
import Profile from './component/page/Profile'
import ThemeContext ,{themes} from './component/context/ThemeContext'
import UserContext from './component/context/UserContext'
import cookie from 'js-cookie'
import axios from 'axios'
import PrivateRoute from './component/router/Router'



function App() {

const [theme,setTheme] = useState(themes.light)
const [loading,setLoading] = useState(true)
const[user,setUser] = useState({})
const[authenticated,setAutinticated] = useState(false)



useEffect(()=>{
  cookie.get('token') ?login() :setLoading(false)
} ,[])

const login  = () => {
setLoading(true)
axios.get('https://jsonplaceholder.typicode.com/users/1')
.then(response =>{
 cookie.set('token','my-token',{expires:7})
 setUser(response.data)
 setAutinticated(true)
 setLoading(false)
})

 }


 const logOut = () => {
   cookie.remove('token')
   setUser({})
   setAutinticated(false)

 }

 if(loading) {
   return 'loading....'
 }


  return (
    <div>
      <BrowserRouter>
      <UserContext.Provider value={{user,authenticated,login,logOut}}>
      <ThemeContext.Provider value={theme}>

<div>
  {theme === themes.light ? <button onClick={()=>setTheme(themes.dark)}>Dark</button> : <button onClick={()=>setTheme(themes.light)}>Light</button>}
</div>

      <Header/>
      <section style={{display: 'flex'}}>
        <SideBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:id" component={Post}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/profile" component={Profile}/>
          
          <Route path="*" component={NoteFound}/>
        </Switch>
      </section>
      <Footer/>
      </ThemeContext.Provider>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
