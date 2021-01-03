import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/work',
        name: 'Work',
        component: () =>
            import ('../views/Work.vue')
    },
    {
        path: '/uni',
        name: 'Uni',
        component: () =>
            import ('../views/Uni.vue')
    },
    {
        path: '/side',
        name: 'Side',
        component: () =>
            import ('../views/Side.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router