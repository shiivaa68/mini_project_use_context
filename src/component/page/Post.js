import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'


const  Post =  () =>  {
 const [posts,setPost] = useState([])
  const theme = useContext(ThemeContext)


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setPost(response.data))
  })




  return (
    <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...theme}}>
   {posts.slice(0,10).map(post=>
   
   <ul key={post.id}>
    <Link to={`/post/${post.id}`}>
       <li>{post.title} </li></Link>
        <p>{post.body}</p>
   </ul>)}
    </article>
  )
}

export default Post
