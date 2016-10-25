import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class BugList extends Component {
  render () {
    return (
      <div>
        <h1>Bug List</h1>
      </div>
      )
  }
}

ReactDOM.render(<BugList />, document.getElementById('main'))
