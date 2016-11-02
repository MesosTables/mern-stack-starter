import axios from 'axios'

const ROOT_URL = `http://localhost:3000/api/`

export const FETCH_USERS = 'FETCH_USERS'

export function fetchUsers () {
  const getAllUsers = `${ROOT_URL}contacts`
  // axios will make the ajax request, this will return a promise
  const request = axios.get(getAllUsers)

  return {
    type    : FETCH_USERS,
    payload : request
  }
}
