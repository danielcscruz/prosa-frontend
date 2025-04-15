<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="container-group">
    <div class="container">
      <img alt="capivara logo" src="@/assets/welcome.png" class="welcome-img" />
      <h2>Bem-vindo ao <b>Prosa</b>!</h2>

      <p>Uma rede de microblog feita pra você prosear à vontade, com leveza e respeito.</p>


    </div>
    <div class="container">

      <h2>O que você deseja fazer?</h2>

      <RouterLink to="/login" class="button">Entrar</RouterLink>
      <RouterLink to="/register" class="button">Registrar</RouterLink>
    </div>

  </div>
</template>

<style scoped>
.welcome-img {
  height: 300px;
  width: 300px;
}

.container-group {
  display: flex;
  flex-direction: row;
  gap: 50px;

  @media screen and (max-width: 900px) {
    margin: auto auto;
    flex-direction: column;
    gap: 0;
  }

}

.container {
  width: 400px;
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
    margin: 20px;
    align-items: center;
  }



}

h2 {
  color: var(--brown-mud);
  font-size: 30px;
  margin-bottom: 8px;
}

p {
  color: var(--capivara);
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  margin-top: 8px;
}

.button {
  display: flex;
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
  text-align: center;
  text-decoration: none;
  align-items: center;
  justify-content: center;
}

.button:hover {
  background-color: var(--capivara);
}

.logo {
  height: 100px;
  width: 100px;
  margin-top: 40px;
}
</style>
