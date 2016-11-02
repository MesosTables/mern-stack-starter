import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/index'

class UsersIndex extends Component {
  // will call this automatically when the component is rendered in the DOM
  componentWillMount (props) {
    this.props.fetchUsers(props)
  }

  renderPosts () {
    return this.props.users.map((user) => {
      return (
        <li
          key={user._id}
          className="list-group-item">
          {user.name}
        </li>
      )
    })
  }
// <ul className="list-group">
// {this.renderPosts()}
// </ul>
  render () {
    return (
      <div>
        <h3>Users</h3>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
      )
  }
}

function mapStateToProps (state) {
  return { users: state.users.all }
}

export default connect(mapStateToProps, { fetchUsers })(UsersIndex)
