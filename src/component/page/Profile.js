import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const Profile =  () => {


  const theme = useContext(ThemeContext)

  return (
    <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...theme}}>
      <h1>My profile</h1>
      <p>
        My name is .........
      </p>
    </article>
  )
}

export default Profile