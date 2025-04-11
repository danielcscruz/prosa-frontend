<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
  <div>

    <div class="container-profile">
      <img alt="capivara logo" src="@/assets/logo.png" width="200" height="200" />

      <nav>
        <div class="nav-group">
          <RouterLink to="/"> <img alt="Home" class="icon" src="@/assets/home.png" />
            Início
          </RouterLink>
        </div>
        <div class="nav-group">
          <RouterLink to="/"> <img alt="Home" class="icon" src="@/assets/search.png" />
            Explorar
          </RouterLink>
        </div>
        <div class="nav-group">
          <RouterLink to="/"> <img alt="Home" class="icon" src="@/assets/bookmark.png" />
            Marcado
          </RouterLink>
        </div>
        <div class="nav-group">
          <RouterLink to="/"> <img alt="Home" class="icon" src="@/assets/user.png" />
            Perfil
          </RouterLink>
        </div>
      </nav>
      <button>
        Prosear
      </button>
    </div>
    <p>

    </p>
  </div>
</template>

<style scoped>
.container-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

nav {
  display: block;
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
  /* Aligns items vertically */
  justify-content: flex-start;
  /* Ensures they align to the left inside the group */
  gap: 40px;
  /* Adds spacing between icon and text */
  height: 50px;
  padding: 0 16px;
  /* Adds some internal padding */
  border-radius: 40px;
  cursor: pointer;
}

.nav-group:hover {
  background-color: var(--beige-background);
}



nav a {
  display: flex;
  /* Makes the entire link a flex container */
  align-items: center;
  /* Centers both text and icon inside */
  gap: 40px;
  /* Space between icon & text */
  text-decoration: none;
  font-family: Inter;
  font-weight: 800;
  color: #4E2E10;
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
}

button:hover {
  background-color: var(--capivara);
}
</style>
