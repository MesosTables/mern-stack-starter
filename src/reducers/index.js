import { combineReducers } from 'redux'
import ReducerUsers from './reducer_users'
// import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  users : ReducerUsers
})

export default rootReducer
