<script setup lang="ts">

import PostBar from './PostBar.vue';
import FeatBar from './FeatBar.vue';
</script>

<template>
  <PostBar class="f-2 border" />
  <FeatBar class="f-1" />
</template>

<style scoped>
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
