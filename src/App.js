import React, { useState } from 'react'
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

function App() {

const [theme,setTheme] = useState(themes.light)
const [loading,setLoading] = useState(true)
const[user,setUser] = useState({})
const[authenticated,setAutinticated] = useState(false)



  return (
    <div>
      <BrowserRouter>
      <UserContext.Provider>
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
          <Route path="/profile" component={Profile}/>
          
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
