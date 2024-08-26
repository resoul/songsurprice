import './app/assets/styles.min.css'
import './app/assets/theme.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Notifications)

app.mount('#app')
