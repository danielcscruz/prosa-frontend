<script setup lang="ts">

import ExploreBar from './ExploreBar.vue';
</script>

<template>
  <ExploreBar class="f-2 border" />
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
