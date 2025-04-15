import axios from 'axios'

const API_URL = 'http://localhost:8000/api/token/'

let isRefreshing = false
let subscribers: ((token: string) => void)[] = []

function onAccessTokenFetched(token: string) {
  subscribers.forEach((callback) => callback(token))
  subscribers = []
}

function subscribeTokenRefresh(callback: (token: string) => void) {
  subscribers.push(callback)
}

export default {
  async login(username: string, password: string) {
    const response = await axios.post(`${API_URL}`, { username, password })
    return response.data
  },

  async refresh(refreshToken: string) {
    const response = await axios.post(`${API_URL}refresh/`, { refresh: refreshToken })
    return response.data
  },

  // Função para obter o token de forma segura
  async getAccessToken() {
    const storedRefreshToken = localStorage.getItem('refresh_token')
    if (storedRefreshToken) {
      try {
        // Renova o token
        const response = await this.refresh(storedRefreshToken)
        const { access, refresh } = response.data

        // Salve o novo access token e refresh token
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)

        // Notifica as requisições que estavam aguardando o novo token
        onAccessTokenFetched(access)

        return access
      } catch (error) {
        console.error('Erro ao tentar renovar o token', error)
        throw error
      }
    }
    return null
  },

  // Configura um interceptor para o axios
  setupAxiosInterceptors() {
    axios.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem('access_token')
        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    axios.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true

          if (!isRefreshing) {
            isRefreshing = true
            // Tente renovar o token
            try {
              const newAccessToken = await this.getAccessToken() // Tente renovar o token
              if (newAccessToken) {
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                onAccessTokenFetched(newAccessToken) // Atualiza as requisições pendentes
                return axios(originalRequest)
              }
            } catch (err) {
              console.error('Erro ao renovar o token', err)
            } finally {
              isRefreshing = false
            }
          } else {
            // Se o token está sendo renovado, adicione a requisição à fila de espera
            return new Promise((resolve) => {
              subscribeTokenRefresh((newToken: string) => {
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`
                resolve(axios(originalRequest))
              })
            })
          }
        }
        return Promise.reject(error)
      },
    )
  },
}
