<script setup lang="ts">

import BookmarkBar from './BookmarkBar.vue';
</script>

<template>
  <BookmarkBar class="f-2 border" />
</template>

<style scoped>
.f-2 {
  flex: 2;
  height: 100%
}

.border {
  border-left: 1px solid var(--beige-background);

}
</style>
