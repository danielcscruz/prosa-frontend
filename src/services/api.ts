import axios from 'axios'
// import AuthService from './AuthService'

const api = axios.create({
  baseURL: 'http://localhost:8000/',
})

export default api
