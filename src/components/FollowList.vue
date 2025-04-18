<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'
import api from '../services/api.js'
import { useRoute } from 'vue-router'
import loader from '../assets/loader.gif'
import { useAuthStore } from '@/stores/auth.js'


interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const isLoading = ref(true)
const route = useRoute()

const authStore = useAuthStore()

const users = ref<User[]>([])
const errorMessage = ref('')


const fetchUsers = async () => {
  isLoading.value = true
  const MIN_LOADING_TIME = 2000
  const delay = new Promise(resolve => setTimeout(resolve, MIN_LOADING_TIME))

  try {
    const token = authStore.accessToken
    errorMessage.value = ''

    let endpoint = '/api/users/profile'
    const username = route.params.username as string


    if (route.name === 'followers') {
      endpoint = `/api/users/profile/${username}/followers`
    }
    if (route.name === 'following') {
      endpoint = `/api/users/profile/${username}/following`
    }


    const [response] = await Promise.all([
      api.get(endpoint, {
        headers: { 'Authorization': `Bearer ${token}` }
      }),
      delay
    ])

    users.value = response.data.results || []

    nextPageUrl.value = response.data.next || null

  } catch (error) {
    console.error("Erro ao buscar usuários: ", error)
    errorMessage.value = 'Erro ao carregar usuários. Tente novamente mais tarde.'
  } finally {
    isLoading.value = false
  }
}


onMounted(fetchUsers)



watch(() => route.fullPath, () => {
  fetchUsers()
})

defineExpose({
  refresh: fetchUsers
})
const nextPageUrl = ref<string | null>(null)
const sentinel = ref<HTMLElement | null>(null)


</script>

<template>
  <h2 v-if="route.name === 'followers'"> Seguidores</h2>
  <h2 v-if="route.name === 'following'"> Seguindo</h2>
  <div class="container">
    <div v-if="isLoading" class="loading-wrapper">
      <img :src="loader" alt="Carregando..." class="loading-img" />
    </div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div v-else-if="users.length === 0 && !isLoading" class="no-posts">
      <img src="../assets/sleep3.png" class="no-posts-img" alt="capivara dormindo" />
      <span>Ninguém por aqui....</span>
    </div>
    <ul v-else-if="!isLoading" class="users-list">
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/profile/${user.username}`" class="card-add-list">
          <div class="profile-feat">
            <img :src="user.avatar" alt="user" class="avatar-feat" />
            <div class="user-group">
              <h3>{{ user.name }}</h3>
              <h4>@{{ user.username }}</h4>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <div ref="sentinel" v-show="nextPageUrl"></div>
  </div>

</template>

<style scoped>
h2 {
  color: var(--brown-mud);
  margin: 8px 24px;
}

.card-add-list {
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

.profile-feat {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
}

.profile-feat:hover {
  background-color: var(--green-sage);

}

.user-group {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 18px;
  gap: 4px;
}

ul {}

li {
  width: 100%;
}

.user-group h4 {
  font-size: 12px;
}

.avatar-feat {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.users-list {
  height: auto;
  width: 100%;
  padding-top: 8px;
  overflow-x: hidden;
  padding: 10px 30px;
  margin: 8px;
}

/* Adicionando estilo para repost */
.repost-info {
  font-size: 12px;
  color: var(--green-sage);
  font-weight: 500;
  white-space: nowrap;
  /* Impede quebra de linha no texto */
}

.repost-icon {
  height: 15px;
  width: 15px;
  flex-shrink: 0;
  /* impede o ícone de encolher */
}

.repost {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
}

.no-posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.no-posts-img {
  margin-top: 40px;
  height: 250px;
  width: 250px;
  border-radius: 20%;
}

.loading-wrapper {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-wrapper img {
  height: 75px;
  width: 75px;
}

.card {
  width: 100%;
  margin-top: 8px;
  border-bottom: 1px solid var(--beige-background);
  padding-bottom: 8px;
  padding-right: 8px;
  display: flex;
  /* ADICIONE ISSO */

}

small {
  font-size: 10px;
}

ul {
  max-height: 500px;
  overflow-y: auto;
}

.avatar-img {
  margin: 8px 16px;
  height: 70px;
  width: 70px;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (max-width:900px) {
    height: 40px;
    width: 40px;

  }
}

.title {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
}

.title h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--brown-mud);
}

.title h4 {
  font-size: 14px;
  color: var(--green-sage);
  font-weight: 400;
}

.content {
  width: 0;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
}

.post {
  padding-bottom: 8px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
}

.icon-set {
  display: flex;
  align-items: center;
  gap: 0px;
}

.icon-set-trash {
  position: absolute;
  top: 0;
  right: 0;

}

.icon-post {
  height: 15px;
  width: 15px;
  margin-right: 8px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
}

.repost {
  height: 20px;
  width: 20px;
}

.icon-post:hover {
  transform: scale(1.5);
}
</style>
