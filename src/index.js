import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import CssBaseline from '@material-ui/core/CssBaseline'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Post from './Post'
import Nav from './Nav'

ReactDOM.render(
  <React.StrictMode>
    <Nav title={'LayerCI Demo'} />
    <Router>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route exact path='/post/:id'>
          <Post />
        </Route>
      </Switch>
      <CssBaseline />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
