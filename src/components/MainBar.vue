<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'  // Importando a store
import { computed } from 'vue'

const authStore = useAuthStore()

// Computed property para verificar se o usuário está logado
const isAuthenticated = computed(() => authStore.isAuthenticated)

// Computed property para acessar o nome do usuário e avatar
const name = computed(() => authStore.user?.name || 'Nome')
const username = computed(() => authStore.user?.username || 'Usuário')
const avatar = computed(() => authStore.user?.avatar || '/default-avatar.png')

// Método para fazer logout
const logout = () => {
  authStore.logout()
}


</script>

<template>
  <div>

    <div class="container-profile">
      <img alt="capivara logo" src="@/assets/logo.png" width="200" height="200" />
      <nav>
        <RouterLink to="/" class="nav-group"> <img alt="Home" class="icon" src="@/assets/home.png" />
          Início
        </RouterLink>
        <RouterLink to="/explore" class="nav-group"> <img alt="Home" class="icon" src="@/assets/search.png" />
          Explorar
        </RouterLink>
        <RouterLink to="/bookmark" class="nav-group"> <img alt="Home" class="icon" src="@/assets/bookmark.png" />
          Marcado
        </RouterLink>
        <RouterLink to="/profile" class="nav-group"> <img alt="Home" class="icon" src="@/assets/user.png" />
          Perfil
        </RouterLink>
      </nav>
      <button>
        Prosear
      </button>
      <div class="auth" v-if="isAuthenticated">
        <div class="avatar-group">
          <img :src="avatar" class="avatar-mainbar" />
          <div class="profile-auth">
            <h3>{{ name }}</h3>
            <h5>@{{ username }}</h5>
          </div>
        </div>
        <div class="logout-circle" @click="logout">
          <img src="../assets/logout.png" class="logout" />
        </div>
      </div>
    </div>
    <p>

    </p>
  </div>
</template>

<style scoped>
.logout {
  height: 20px;
  width: 20px;
}

.logout-circle {
  border-radius: 30%;
  height: 40px;
  width: 40px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

}

.logout-circle:hover {
  transform: scale(1.5);
}

.profile-auth h4 {
  font-weight: 400;
  margin-top: 4px;
}

.profile-auth h5 {
  font-weight: 400;
  margin-top: 4px;
}

.profile-auth {
  line-height: 18px;
}

.avatar-group {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.auth {
  margin-top: 50px;
  align-items: center;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.avatar-mainbar {
  margin: 8px 16px;
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.container-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

nav {
  display: block;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;

}

.icon {
  height: 25px;
  width: 25px;
  display: block;
}

.nav-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  height: 50px;
  padding: 0 16px;
  border-radius: 40px;
  cursor: pointer;
}

.nav-group:hover {
  background-color: var(--beige-background);
}



nav a {
  display: flex;
  align-items: center;
  gap: 40px;
  text-decoration: none;
  font-family: Inter;
  font-weight: 800;
  color: var(--brown-mud);
  font-size: 20px;
  cursor: pointer;

}

button {
  background-color: var(--green-sage);
  border: none;
  width: 60%;
  height: 40px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 40px;
  color: var(--light-cream);
}

button:hover {
  background-color: var(--capivara);
}
</style>
