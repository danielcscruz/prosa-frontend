import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/components/DashboardView.vue'
import ProfileView from '@/components/ProfileView.vue'
import LoginView from '@/components/LoginView.vue'
import RegisterView from '@/components/RegisterView.vue'
import PasswordView from '@/components/PasswordView.vue'
import ExploreView from '@/components/ExploreView.vue'
import BookmarkView from '@/components/BookmarkView.vue'

import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  // { path: '/profile', name: 'profile', component: ProfileView, meta: { requiresAuth: true } },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/explore', name: 'explore', component: ExploreView },
  { path: '/bookmark', name: 'bookmark', component: BookmarkView },

  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/password', name: 'password', component: PasswordView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    // Not logged in and trying to access a protected route
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
