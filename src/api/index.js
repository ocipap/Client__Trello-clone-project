import axios from 'axios'
import router from '../router'

const BASE_URL = 'http://localhost:3000'
const Unauthorized = 401
const onUnauthorized = () => {
  router.push(`/login?returnPath=${encodeURIComponets(location.pathname)}`)
}

const request = {
  get(path) {
    return axios.get(`${BASE_URL + path}`)
      .catch(({ response }) => {
        const { status } = response
        if (status === Unauthorized) return onUnauthorized()
        throw Error(response)
      })
  },
  post(path, data) {
    return axios.post(`${BASE_URL + path}`, data)
  },
  delete(path) {
    return axios.delete(`${BASE_URL + path}`)
  },
  put(path, data) {
    return axios.put(`${BASE_URL + path}`, data)
  }
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['token'] = token ? token : null
}

export const auth = {
  login(email, password) {
    return request.post('/user/login', { email, password })
  },
  signup(username, email, password) {
    return request.post('/user/join', { username, email, password })
  }
}