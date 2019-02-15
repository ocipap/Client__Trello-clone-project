import { auth } from '../api'

const actions = {
  LOGIN ({ commit }, { email, password }) {
    return auth.login(email, password).then(({ data }) => {
      commit('LOGIN', { token: data.token, username: data.data.username })
    })
  },
  SIGNUP ({}, { username, email, password }) {
    return auth.signup(username, email, password )
  },
  FORGOT ({}, { email }) {
    return auth.forgot(email)
  },
  VERIFY_RESET_CODE ({}, { uid, resetCode }){
    return auth.verifyReset(uid, resetCode)
  },
  DELETE_RESET_CODE ({}, { uid, resetCode }){
    return auth.deleteReset(uid, resetCode)
  },
  RESET_PASSWORD ({}, { password, uid, resetCode }){
    return auth.reset(password, uid, resetCode)
  }
}
export default actions