import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const  Post =  () =>  {

  const theme = useContext(ThemeContext)
  return (
    <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...theme}}>
      <h1>TITLE</h1>
      <p>BODY</p>
    </article>
  )
}

export default Post
