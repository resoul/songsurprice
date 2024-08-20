import './app/assets/styles.min.css'
import './app/assets/theme.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
