<script setup lang="ts">
import api from '../services/api'
import { ref, computed } from 'vue'
import PostList from './PostList.vue';
import { useAuthStore } from '@/stores/auth'

const text = ref('')               // Holds the user input
const maxLength = 140

const characterCount = computed(() => `${text.value.length}/${maxLength}`)
const isMaxed = computed(() => text.value.length >= maxLength)

const isDisabled = computed(() => text.value.length === 0 || isMaxed.value)

const authStore = useAuthStore()

const id = authStore.user?.id

const postListRef = ref()

const postContent = async () => {
  try {
    const token = authStore.accessToken
    console.log(id)
    const response = await api.post(
      'https://prosa-app-31830595ff5b.herokuapp.com/api/posts/',
      {
        content: text.value,
        user: id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    console.log('Post enviado com sucesso!', response.data)
    text.value = '' // limpa o textarea após postar
    postListRef.value?.refresh()

  } catch (err) {
    console.error('Erro ao enviar post:', err)
  }
}

// Limit input manually
const handleInput = (e: Event) => {
  const input = (e.target as HTMLTextAreaElement).value
  text.value = input.slice(0, maxLength) // Cut off after 140 chars
}
</script>

<template>
  <div class="container-post">
    <div class="header">
      <h3>No que você está pensando?</h3>
      <div class="post-area">
        <textarea :value="text" @input="handleInput" placeholder="Digite aqui..."></textarea>
        <div class="btn-group">
          <button :disabled="isDisabled" @click="postContent"> Prosear</button>
          <span :class="{ 'maxed-out': isMaxed }">{{ characterCount }}</span>
        </div>
      </div>
    </div>
    <div>
      <PostList ref="postListRef" />
    </div>

  </div>

</template>

<style scoped>
button:disabled {
  background-color: var(--disabled-gray);
  cursor: not-allowed;
}

button:disabled:hover {
  background-color: var(--disabled-gray);
  cursor: not-allowed;
}

span {
  font-family: Inter;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  color: var(--brown-mud);
}

span.maxed-out {
  color: var(--error-red);
}

.container-post {
  /* display: block; */
  /* padding: 8px 16px; */
}

.header {
  width: 100%;
  padding: 0 16px;
}

.header h3 {
  font-family: Inter;
  font-weight: 800;
  color: var(--brown-mud);
  font-size: 24px;
}

.post-area {
  margin-top: 8px;
  border: 1px solid var(--beige-background);
  background-color: var(--light-cream);
  border-radius: 8px;
  width: 100%;
  height: 70px;
  position: relative;
}

.btn-group {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6px;
  right: 8px;
}

button {
  background-color: var(--green-sage);
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  color: var(--light-cream);

}

button:hover {
  background-color: var(--capivara);
}



textarea {
  background-color: transparent;
  padding: 4px;
  border: none;
  height: 100%;
  width: 80%;
  font-size: 16px;
  font-weight: 200;
  resize: none;
  align-items: center;
  outline: none;

}

textarea:hover {
  border: none;
}

textarea:focus:hover {
  border: none;
}
</style>
