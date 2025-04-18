<script setup lang="ts">

import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'  // Importando a store
import { computed, ref } from 'vue'

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

// Controle do menu no mobile
const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

</script>


<template>
  <div>

    <div class="container-profile">
      <img alt="burger menu" src="@/assets/burger.png" class="burger-menu" @click="toggleMenu" />
      <img alt="capivara logo" src="@/assets/logo.png" class="capi-logo" />
      <nav :class="{ 'nav-mobile': showMenu }">
        <RouterLink @click="showMenu = false" to="/" class="nav-group" active-class="active-nav"
          exact-active-class="exact-nav"> <img alt="Home" class="icon" src="@/assets/home.png" />
          Início
        </RouterLink>
        <!-- <RouterLink @click="showMenu = false" to="/notification" class="nav-group alert-parent"
          active-class="active-nav" exact-active-class="exact-nav"> <img alt="Home" class="icon"
            src="@/assets/bell.png" />
          Notificações
          <div class="red-alert"><span></span></div>
        </RouterLink> -->
        <RouterLink @click="showMenu = false" to="/explore" class="nav-group" active-class="active-nav"
          exact-active-class="exact-nav"> <img alt="Home" class="icon" src="@/assets/globe.png" />
          Explorar
        </RouterLink>
        <RouterLink @click="showMenu = false" to="/bookmark" class="nav-group" active-class="active-nav"
          exact-active-class="exact-nav"> <img alt="Home" class="icon" src="@/assets/bookmark.png" />
          Marcado
        </RouterLink>
        <RouterLink @click="showMenu = false" :to="'/profile/' + username" class="nav-group" active-class="active-nav"
          exact-active-class="exact-nav"> <img alt="Home" class="icon" src="@/assets/user.png" />
          Perfil
        </RouterLink>
        <div class="auth" v-if="isAuthenticated">
          <div class="avatar-group">
            <div class="avatar-wrapper">
              <img :src="avatar" class="avatar-mainbar" />
            </div>
            <div class="profile-auth">
              <h3>{{ name }}</h3>
              <h5>@{{ username }}</h5>
            </div>
          </div>
          <div class="logout-circle" @click="logout">
            <img src="../assets/logout.png" class="logout" />
          </div>
        </div>
      </nav>
    </div>
    <p>
    </p>
  </div>
</template>

<style scoped>
.alert-parent {
  position: relative;
}

.red-alert {
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: none;
  background-color: var(--error-red);
  top: 12px;
  left: 16px;
}

@media screen and (max-width: 1020px) {
  nav {
    display: none;
  }

  nav.nav-mobile {
    display: flex;
    position: absolute;
    top: 90px;
    left: 20px;
    background-color: var(--light-cream);
    border-radius: 20px;
    padding: 20px;
    width: 80%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    gap: 16px;
    z-index: 1000;
  }
}


.burger-menu {
  display: none;
  opacity: 0.8;

  @media screen and (max-width: 1020px) {
    display: flex;
    position: absolute;
    top: 20px;
    left: 20px;
    height: 50px;
    width: 50px;
    border: 1px solid var(--beige-background);
    border-radius: 10px;
    padding: 6px;
    cursor: pointer;

  }
}

.burger-menu:hover {
  background-color: var(--capivara);
}

.capi-logo {
  height: 200px;
  width: 200px;

  @media screen and (max-width: 1020px) {
    height: 150px;
    width: 150px;

  }
}

.active-nav {
  background-color: var(--beige-background);
}

.exact-nav {
  font-weight: bold;
}

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

.avatar-wrapper {
  margin: 8px 16px;

}

.avatar-mainbar {
  border-radius: 50%;

  height: 60px;
  width: 60px;
  object-position: center;
}



.container-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 1020px) {
    display: flex;
    flex-direction: row;
    height: 100px;

  }
}

nav {
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

  @media screen and (max-width: 1020px) {
    display: none;
  }
}

button:hover {
  background-color: var(--capivara);
}
</style>
