<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const message = ref('')
const error = ref(false)

const requestNewPassword = async () => {
  try {
    console.log('Email enviado:', email.value)

    const response = await fetch('https://prosa-app-31830595ff5b.herokuapp.com/forgot-password/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    })

    const data = await response.json()

    if (response.ok) {
      message.value = data.message || 'Nova senha enviada para seu e-mail.'
      error.value = false
    } else {
      message.value = data.error || 'Erro ao enviar a nova senha. Entre em contato com o administrador dos ite.'
      error.value = true
    }
  } catch (err) {
    console.error(err)
    message.value = 'Erro de conexão. Tente novamente mais tarde.'
    error.value = true
  }
}
</script>

<template>
  <div class="container">
    <img alt="capivara logo" src="@/assets/logo2.png" class="logo" />
    <h2> Entrar no Prosa</h2>
    <form @submit.prevent="requestNewPassword">
      <div class="input-field">
        <input type="text" placeholder="email" v-model="email" />
      </div>

      <button type="submit">Enviar</button>
      <h5 v-if="message" :style="{ color: error ? 'red' : 'green' }">{{ message }}</h5>
      <h4><a href="/login">Voltar</a></h4>



    </form>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: 800;
  color: var(--brown-mud);
}

.input-field {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 2px solid var(--light-cream);
  background-color: var(--beige-background);
  height: 50px;
  width: 300px;
  margin-top: 20px;
}

h4 {
  color: var(--brown-mud);

  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
}

h5 {
  color: var(--brown-mud);

  font-size: 12px;
  font-weight: 500;
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 4px;


}

input {
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--green-moss);
  font-weight: 400;
  font-size: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;

}

h2 {
  color: var(--brown-mud);
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

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: 100px;
  width: 100px;
  margin-top: 40px;
}

.container {
  height: 600px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--beige-background);
  border-radius: 16px;
}

h2 {
  margin: 20px;
}
</style>
