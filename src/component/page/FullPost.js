import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

const FullPost = ()=> {
  const [fullpost, setFullPost] = useState({})
  const theme = useContext(ThemeContext)
  const {id} = useParams()

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(result => setFullPost(result))
  }, [id])

  return (
    <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em', ...theme}}>
  <div>
  <h1>{fullpost.title}</h1>
      <p>{fullpost.body}</p>
  </div>
  <div>
    <Link to="/post">
 back to list
    </Link>
  </div>
    </article>
 
  )
}

export default FullPost