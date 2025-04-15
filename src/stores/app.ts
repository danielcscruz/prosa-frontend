// stores/app.ts
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const route = useRoute()

  const publicRoutes = ['/login', '/register', '/welcome', '/password']

  // Verifica se a rota atual é pública
  const isPublicRoute = computed(() => {
    return publicRoutes.includes(route.path)
  })

  return {
    isPublicRoute,
  }
})
