import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import UsersIndex from './components/users_index'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={UsersIndex} />
  </Route>
)
