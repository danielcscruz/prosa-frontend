<script setup lang="ts">

</script>

<template>
  <div class="wrapper ">
    <router-view></router-view>
  </div>
</template>

<style scoped>
body {
  background-color: var(--green-sage);
}

.wrapper {
  position: fixed;
  top: 60px;
  left: 40px;
  right: 40px;
  bottom: 80px;
  background-color: var(--beige-container);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
