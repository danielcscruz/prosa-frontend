<script setup lang="ts">
import PostList from './PostList.vue';
</script>

<template>
  <div class="container-post">
    <div class="header-image">
      <div class="input-area">
        <form>
          <input type="text" placeholder="Buscar...">
          <img src="../assets/search.png" class="icon-action" />
        </form>
      </div>
    </div>
    <div>
      <PostList />
    </div>

  </div>

</template>

<style scoped>
.input-area {
  margin-top: 8px;
  border: 1px solid var(--beige-background);
  background-color: var(--light-cream);
  border-radius: 8px;
  width: 70%;
  height: 40px;
  align-items: center;
  position: relative;
  justify-self: center;
}

.icon-action {
  position: absolute;
  top: 6px;
  right: 6px;
  height: 20px;
  width: 20px;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
}

.icon-action:hover {
  transform: scale(1.5);
}

input {
  width: 80%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  margin-left: 4px;
  align-items: center;
}


.header-image {
  height: 150px;
  background-color: var(--green-sage);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
}
</style>
