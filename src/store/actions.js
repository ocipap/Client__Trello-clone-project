import { auth } from '../api'

const actions = {
  LOGIN ({ commit }, { email, password }) {
    return auth.login(email, password).then(({ data }) => {
      commit('LOGIN', { token: data.token })
    })
  },
  SIGNUP ({}, { username, email, password }) {
    return auth.signup(username, email, password )
  }
}
export default actions