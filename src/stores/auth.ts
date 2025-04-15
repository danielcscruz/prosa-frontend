import router from '@/router'
import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  username: string
  email: string
  posts_count: number
  followers_count: number
  following_count: number
  avatar: string
}

function isTokenExpired(token: string): boolean {
  if (!token) return true
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Math.floor(Date.now() / 1000)
    return payload.exp < currentTime
  } catch {
    return true
  }
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('access') || '',
    refreshToken: localStorage.getItem('refresh') || '',
    user: null as User | null,
  }),

  getters: {
    isAuthenticated: (state) => {
      return !!state.accessToken && !isTokenExpired(state.accessToken)
    },
  },

  actions: {
    setTokens(access: string, refresh: string) {
      this.accessToken = access
      this.refreshToken = refresh
      localStorage.setItem('access', access)
      localStorage.setItem('refresh', refresh)
    },

    clearTokens() {
      this.accessToken = ''
      this.refreshToken = ''
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      this.user = null
    },

    async login(username: string, password: string) {
      try {
        const response = await fetch('http://localhost:8000/api/token/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })

        if (response.ok) {
          const data = await response.json()
          this.setTokens(data.access, data.refresh)
          await this.fetchUserData()
        } else {
          throw new Error('Credenciais inválidas')
        }
      } catch (error) {
        console.error(error)
        throw error
      }
    },

    async refreshAccessToken() {
      try {
        const response = await fetch('http://localhost:8000/api/token/refresh/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh: this.refreshToken }),
        })

        if (response.ok) {
          const data = await response.json()
          this.accessToken = data.access
          localStorage.setItem('access', data.access)
        } else {
          this.logout()
        }
      } catch (error) {
        console.error('Erro ao renovar o token:', error)
        this.logout()
      }
    },

    async fetchUserData() {
      try {
        const response = await fetch('http://localhost:8000/api/users/me/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.accessToken}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          this.user = data
        } else {
          throw new Error('Erro ao buscar os dados do usuário')
        }
      } catch (error) {
        console.error(error)
      }
    },

    async logout() {
      this.clearTokens()
      router.push('/welcome')
    },

    async initializeAuth() {
      const access = localStorage.getItem('access')
      const refresh = localStorage.getItem('refresh')

      this.accessToken = access || ''
      this.refreshToken = refresh || ''

      if (this.accessToken && isTokenExpired(this.accessToken)) {
        await this.refreshAccessToken()
      }

      if (!isTokenExpired(this.accessToken)) {
        await this.fetchUserData()
      }
    },
  },
})
