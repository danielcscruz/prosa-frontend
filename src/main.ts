import './assets/main.css'
import { TheMask } from 'vue-the-mask'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('TheMask', TheMask)

app.use(createPinia())
app.use(router)

app.mount('#app')
