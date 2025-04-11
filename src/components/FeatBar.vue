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
const posts = ref<Post[]>([])

interface User {
  id: number;
  name: string;
  username: string;
  user_avatar: string;
}

const users = ref<User[]>([])

const fetchPosts = async () => {
  try {
    const response = await api.get<Post[]>('/api/most-liked-posts/')
    posts.value = response.data
  } catch (error) {
    console.error("Erro ao buscar items: ", error)
  }
}
onMounted(fetchPosts)

const fetchUsers = async () => {
  try {
    const response = await api.get<Post[]>('/api/random-users/')
    users.value = response.data
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
    <div class="feat-box">
      <h2>Posts mais curtidos</h2>
      <ul>

        <li v-for="post in posts" :key="post.id">
          <div class="card-post-list">
            <h3>{{ truncatedContent(post.content) }}</h3>
            <div class="details">
              <h4>@ {{ post.username }}</h4>
              <h5>{{ post.likes }} curtidas</h5>
            </div>

          </div>
        </li>

      </ul>
    </div>

    <div class="feat-box">
      <h2>Quem Seguir</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <div class="card-add-list">
            <div class="profile-feat">
              <img :src=user.user_avatar alt="user" class="avatar-feat" />
              <div class="user-group">
                <h3>{{ user.name }}</h3>
                <h4>@{{ user.username }}</h4>
              </div>
            </div>
            <div class="add-circle">
              <img src="@/assets/user-add.png" alt="" class="add-feat" />
            </div>
          </div>
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

.card-post-list {
  padding-left: 4px;
  border-radius: 8px;
  cursor: pointer;
  padding-top: 8px;
  line-height: 20px;
}

.card-post-list:hover {
  background-color: var(--green-moss);

}

.card-post-list h3 {
  font-size: 18px;
  font-weight: 800;
}

/* li:not(:first-child):not(:last-child) {

  border-bottom: 1px solid var(--green-moss);
  border-top: 1px solid var(--green-moss);
} */

.details {
  display: flex;
  justify-content: space-between;
  margin: 4px auto;
  align-items: center;

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

.feat-box h5 {
  margin-top: 6px;
  margin-bottom: 4px;

}

.user-group h3 {
  font-size: 14px;
  font-weight: 800;
}
</style>
