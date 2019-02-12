import { setAuthInHeader } from '../api'

const mutations = {
  LOGIN (state, { token }) {
    if (!token) return
    state.accessToken = token
    localStorage.accessToken = token
    setAuthInHeader(token)
  },
  LOGOUT (state) {
    state.accessToken = null
    delete localStorage.accessToken
    setAuthInHeader(null)
  }
}

export default mutations
