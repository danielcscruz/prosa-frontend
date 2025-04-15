import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://prosa-app-31830595ff5b.herokuapp.com/api',
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
