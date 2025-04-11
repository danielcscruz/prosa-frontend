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
  bookmark: number;
}
const posts = ref<Post[]>([])

const fetchPosts = async () => {
  try {
    const response = await api.get<Post[]>('/api/posts')
    posts.value = response.data
  } catch (error) {
    console.error("Erro ao buscar items: ", error)
  }
}
onMounted(fetchPosts)


</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <div class="card">
        <div class="avatar-section">
          <img :src=post.user_avatar class="avatar-img" alt="like" />
        </div>
        <div class="content">
          <div class="title">
            <h3>{{ post.name }}</h3>
            <h4>{{ post.username }}</h4>
          </div>
          <div class="post">
            {{ post.content }}
          </div>
          <small>{{ post.created_at }}</small>
          <div class="actions">
            <div class="icon-set">
              <img src="@/assets/heart-green.png" class="icon-post" alt="like" />
              <!-- <span>{{ post.likes }}</span> -->
            </div>
            <div class="icon-set">
              <img src="@/assets/bookmark-green.png" class="icon-post" alt="bookmark" />
              <!-- <span>{{ post.bookmark }}</span> -->
            </div>
            <div class="icon-set">
              <img src="@/assets/refresh-green.png" class="icon-post" alt="repost" />
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.card {
  margin-top: 8px;
  border-bottom: 1px solid var(--beige-background);
  padding-bottom: 8px;
  padding-right: 8px;
  display: flex;
}

ul {
  max-height: 500px;
  /* Set a fixed height */
  overflow-y: auto;
}

.avatar-img {
  margin: 8px 16px;
  height: 70px;
  width: 70px;
  object-fit: cover;
  /* Ensures the image fills the circle */
  border-radius: 50%;
}

.title {
  display: flex;
  align-items: center;
  /* Align text vertically */
  gap: 4px;
}

.title h3 {
  font-size: 18px;
  font-weight: 700;
}

.title h4 {
  font-size: 14px;
  color: var(--green-sage);
  font-weight: 400;

}

.content {
  display: flex;
  flex-direction: column;
}

.post {
  padding-bottom: 8px;
}

.actions {
  display: flex;
  justify-content: flex-start;
  /* Aligns everything to the left */
  align-items: center;
  padding-top: 8px;
  gap: 16px;
}

.icon-set {
  display: flex;
  align-items: center;
  gap: 0px;
}

.icon-post {
  height: 15px;
  width: 15px;
  margin-right: 80px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  /* Animação suave */

}

.icon-post:hover {
  transform: scale(1.5);
  /* Aumenta 20% */

}
</style>
