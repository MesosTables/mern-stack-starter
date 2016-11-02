import React, { Component } from 'react'
import UsersIndex from './users_index'

export default class App extends Component {
  // app shows any children component
  render () {
    return (
      <div>
        <UsersIndex />
      </div>
    )
  }
}
