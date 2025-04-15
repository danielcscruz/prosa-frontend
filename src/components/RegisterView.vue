<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';

const first_name = ref("");
const last_name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert("As senhas não coincidem.");
    return;
  }

  try {
    const response = await fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name.value,
        last_name: last_name.value,
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      router.push('/login'); // ou qualquer outra rota de sucesso

      // Redirecionar ou logar automaticamente, se desejar
    } else {
      const errorData = await response.json();
      console.error("Erro no cadastro:", errorData);
      alert("Erro ao registrar. Verifique os dados.");
    }
  } catch (err) {
    console.error("Erro de conexão:", err);
    alert("Erro ao conectar ao servidor.");
  }
}
</script>

<template>
  <div class="container">
    <img alt="capivara logo" src="@/assets/logo2.png" class="logo" />
    <h2> Registre no Prosa</h2>
    <form @submit.prevent="register">
      <div class="group">
        <div class="input-field">
          <input type="text" placeholder="nome" v-model="first_name" />
        </div>
        <div class="input-field">
          <input type="text" placeholder="sobrenome" v-model="last_name" />
        </div>
      </div>

      <div class="input-field">
        <input type="text" placeholder="email" v-model="email" />
      </div>
      <div class="input-field">
        <input type="text" placeholder="usuário" v-model="username" />
      </div>
      <div class="input-field">
        <input type="password" placeholder="senha" v-model="password" />
      </div>
      <div class="input-field">
        <input type="password" placeholder="confirme a senha" v-model="confirmPassword" />
      </div>
      <button type="submit">Registrar</button>
      <h4>Já é cadastrado? <a href="/login">Entre aqui</a></h4>



    </form>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  width: 100%;
  justify-content: space-between;

}

.group>.input-field {
  width: 140px;
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
  height: 40px;
  width: 300px;
  margin-top: 10px;
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
  margin-top: 20px;
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
