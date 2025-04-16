<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/app'
import FeatBar from './components/FeatBar.vue'
import MainBar from './components/MainBar.vue'

const authStore = useAuthStore()
authStore.initializeAuth()

const appStore = useAppStore()
</script>

<template>
  <div class="wrapper">
    <MainBar v-if="!appStore.isPublicRoute" class="f-1 border" />
    <router-view />
    <FeatBar v-if="!appStore.isPublicRoute" class="f-1 feat" />
  </div>
</template>

<style scoped>
body {
  background-color: var(--green-sage);
}

.border {
  border-right: 1px solid var(--beige-background);

  @media screen and (max-width: 1020px) {
    border-right: none;
    border-bottom: 1px solid var(--beige-background);
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;

  }

}

.f-1 {
  flex: 1;
  height: 100%
    /* Takes 1 out of 4 columns */
}

.feat {
  @media screen and (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
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

  @media screen and (max-width: 1020px) {
    position: relative;
    flex-direction: column;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
  }

}
</style>
