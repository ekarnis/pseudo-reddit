import './App.css'
import Nav from './Nav'
import { POSTS } from './posts'

import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

function Post (props) {
  const onCommentButtonClick = event => {
    console.log('🚀 ~ App ~ message', event)
    fetch('http://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        body: event.target.value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
  }

  const { id } = useParams()

  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts?id=' + id)
      .then(data => data.json())
      .then(json => setPost(json[0]))
  })

  return (
    <div>
      <span>Path is: {id}</span>
      <div>Post: {post.body}</div>
      <textarea />
      <Button onClick={event => onCommentButtonClick(event)}>Submit</Button>
    </div>
  )
}

export default Post
