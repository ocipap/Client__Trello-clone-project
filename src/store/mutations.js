import { setAuthInHeader } from '../api'

const mutations = {
  LOGIN (state, { token, username }) {
    if (!token) return
    console.log(username)
    state.accessToken = token
    state.username = username
    localStorage.accessToken = token
    localStorage.username = username
    setAuthInHeader(token)
  },
  LOGOUT (state) {
    state.accessToken = null
    state.username = null
    delete localStorage.accessToken
    delete localStorage.username
    setAuthInHeader(null)
  }
}

export default mutations
