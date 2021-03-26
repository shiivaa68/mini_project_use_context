import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import UserContext from '../context/UserContext'

const Profile =  () => {


  const theme = useContext(ThemeContext)
  const {user} = useContext(UserContext)


  return (
    <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...theme}}>
      <h1>My profile</h1>
      <p>
        My name is <span style={{color:'rosybrown'}}>{user.name}</span>
      </p>
    </article>
  )
}

export default Profile