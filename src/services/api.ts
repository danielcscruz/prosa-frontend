import axios from 'axios'
import router from '@/router' // <-- importe o router aqui

import { useAuthStore } from '@/stores/auth'

// import AuthService from './AuthService'

const api = axios.create({
  baseURL: 'http://localhost:8000/',
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useAuthStore()

    const originalRequest = error.config

    // Se for erro de autorização
    if (error.response && error.response.status === 401 && originalRequest?.method !== 'get') {
      console.warn('Token expirado ou inválido. Fazendo logout...')
      console.log('Token expirado ou inválido. Fazendo logout...')

      authStore.logout()
      router.push('/welcome') // redireciona imediatamente
    }

    return Promise.reject(error)
  },
)
export default api
