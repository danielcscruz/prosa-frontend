<script setup lang="ts">

import ProfileBar from './components/ProfileBar.vue';
import PostBar from './components/PostBar.vue';
import FeatBar from './components/FeatBar.vue';
</script>

<template>
  <div class="wrapper ">
    <ProfileBar class="f-1 profile-bar" />
    <PostBar class="f-2 border" />
    <FeatBar class="f-1" />
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
  /* Enables flexbox */
  justify-content: center;
  /* Centers children horizontally */
  align-items: center;
  /* Centers children vertically */
  gap: 1rem;
}

.f-1 {
  flex: 1;
  height: 100%
    /* Takes 1 out of 4 columns */
}

.f-2 {
  flex: 2;
  height: 100%
    /* Takes 2 out of 4 columns */
}

.border {
  border-left: 1px solid var(--beige-background);

}
</style>
