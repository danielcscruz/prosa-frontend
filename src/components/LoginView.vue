<script setup lang="ts">
// import loader2 from "../assets/loader2.gif"
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';


const username = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();
const errorMessage = ref('');

const login = async () => {
  try {
    await authStore.login(username.value, password.value);
    router.push('/'); // ou qualquer outra rota de sucesso
  } catch (error) {
    console.log(error)
    errorMessage.value = 'Credenciais inválidas. Tente novamente.';
  }
};

</script>

<template>
  <div class="container">
    <img alt="capivara logo" src="@/assets/logo2.png" class="logo" />
    <!-- <img :src="loader2" height="75px" width="75px" /> -->

    <h2> Entrar no Prosa</h2>
    <form @submit.prevent="login">
      <div class="input-field">
        <input v-model="username" type="text" placeholder="usuário" />
      </div>
      <div class="input-field">
        <input v-model="password" type="password" placeholder="senha" />
      </div>
      <h5><a href="/password"> Esqueci minha senha</a></h5>

      <button type="submit">Entrar</button>
      <h4>Ainda não é registrado? <a href="/register">Registre aqui</a></h4>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

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

  @media screen and (max-width: 900px) {
    background-color: var(--beige-container);

  }

}

h2 {
  margin: 20px;
}
</style>
