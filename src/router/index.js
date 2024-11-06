import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/pages/HomeView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import("@/views/pages/ContactView.vue")
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router