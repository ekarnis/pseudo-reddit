import './App.css'
import { POSTS } from './posts'

import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import { useEffect, useState } from 'react'

import { nanoid } from 'nanoid'

import { Link } from 'react-router-dom'

function App () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
      .then(data => data.json())
      .then(json => setPosts(json))
  })

  return (
    <div className='App'>
      <Container maxWidth='lg' m={2}>
        {posts.map(post => {
          return (
            <Box m={2} key={nanoid()}>
              <Paper id={post.id}>
                <Box p={2}>
                  <h3>{post.title}</h3>
                  <h4>Author: {post.userId}</h4>
                  <Link to={'/post/' + post.id}>Details</Link>
                </Box>
              </Paper>
            </Box>
          )
        })}
      </Container>
    </div>
  )
}

export default App
