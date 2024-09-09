import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/Form.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/app',
      component: () => import('../views/App.vue'),
      children: [
        {
          path: '',
          name: 'app',
          component: () => import('../views/app/AppView.vue'),
        },
        {
          path: 'select-genre',
          name: 'app-genre',
          component: () => import('../views/app/CreateView.vue'),
        },
        {
          path: 'app-record-audio',
          name: 'app-record-audio',
          component: () => import('../views/app/CreateView.vue'),
        },
        {
          path: 'app-compose',
          name: 'app-compose',
          component: () => import('../views/app/CreateView.vue'),
        }
      ]
    }
  ]
})

export default router
