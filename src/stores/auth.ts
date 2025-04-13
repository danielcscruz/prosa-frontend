import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('access') || '',
    refreshToken: localStorage.getItem('refresh') || '',
    isAuthenticated: false,
    user: null, // Novo estado para armazenar as informações do usuário
  }),

  actions: {
    setTokens(access: string, refresh: string) {
      this.accessToken = access
      this.refreshToken = refresh
      localStorage.setItem('access', access)
      localStorage.setItem('refresh', refresh)
      this.isAuthenticated = true
    },

    clearTokens() {
      this.accessToken = ''
      this.refreshToken = ''
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      this.isAuthenticated = false
      this.user = null // Limpar os dados do usuário
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
          await this.fetchUserData() // Chamar para buscar dados do usuário após login
        } else {
          throw new Error('Credenciais inválidas')
        }
      } catch (error) {
        console.error(error)
        throw error
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
          this.user = data // Atualizar o estado com os dados do usuário
        } else {
          throw new Error('Erro ao buscar os dados do usuário')
        }
      } catch (error) {
        console.error(error)
      }
    },

    async logout() {
      this.clearTokens()
      // Aqui você pode redirecionar para a página de login, por exemplo:
      router.push('/login')
    },
  },
})
