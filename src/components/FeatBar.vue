<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../services/api.js'

interface Post {
  id: number;
  name: string;
  username: string;
  content: string;
  created_at: string;
  likes: number;
  user_avatar: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

interface PostResponse {
  results: Post[];
}

interface UserResponse {
  results: User[];
}

const posts = ref<Post[]>([])
const users = ref<User[]>([])

const fetchPosts = async () => {
  try {
    const response = await api.get<PostResponse>('/api/most-liked-posts/')
    posts.value = response.data.results
  } catch (error) {
    console.error("Erro ao buscar items: ", error)
  }
}
onMounted(fetchPosts)

const fetchUsers = async () => {
  try {
    const response = await api.get<UserResponse>('/api/random-users/')
    users.value = response.data.results
  } catch (error) {
    console.error("Erro ao buscar items: ", error)
  }
}
onMounted(fetchUsers)

const truncatedContent = (content: string) => {
  return content.length > 50 ? content.substring(0, 50) + '...' : content
}

</script>


<template>
  <div class="container-feats">
    <!-- <div class="feat-box" v-if="posts.length"> -->
    <div class="feat-box">

      <h2>Posts mais curtidos</h2>
      <ul>

        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/profile/${post.username}/${post.id}`" class="card-post-list">
            <h3>{{ truncatedContent(post.content) }}</h3>
            <div class="details">
              <h5>@ {{ post.username }}</h5>
              <h4>{{ post.likes }} curtidas</h4>
            </div>
          </router-link>
        </li>

      </ul>
    </div>

    <!-- <div class="feat-box" v-if="users.length"> -->
    <div class="feat-box">

      <h2>Quem Seguir</h2>
      <ul>
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
    </div>
  </div>

</template>

<style scoped>
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

.card-post-list {
  padding: 6px 6px;
  border-radius: 8px;
  gap: 4px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.card-post-list h3 {
  font-size: 14px;
  line-height: 16px;
  font-weight: 800;
}

.details {
  display: flex;
  justify-content: space-between;
  margin: 0 4px;
  align-items: center;

}

.card-post-list:hover {
  background-color: var(--green-moss);

}

.profile-feat {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
}

.profile-feat:hover {
  background-color: var(--green-moss);

}

.avatar-feat {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
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

.user-group h4 {
  font-size: 12px;
}

.add-circle {
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

.add-circle:hover {
  transform: scale(1.5);
}

.add-feat {
  height: 20px;
  width: 20px;


}



.container-feats {
  display: block;
  padding: 20px 8px;
}

.feat-box {
  width: 90%;
  background-color: var(--green-sage);
  border-radius: 16px;
  padding: 16px;
  margin-top: 20px;
}







.feat-box h2 {
  font-size: 20px;
}

.feat-box h3 {
  font-size: 18px;
  font-weight: 500;
}

.feat-box h4 {
  font-weight: 100;
  line-height: 6px;
}


.user-group h3 {
  font-size: 14px;
  font-weight: 800;
}
</style>
