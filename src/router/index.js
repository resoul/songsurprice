import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/pages/HomeView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router