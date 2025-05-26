import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import bonecas from '@/views/bonecas.vue'
import sacola from '@/views/sacola.vue'
import saibaMais from '@/views/saiba-mais.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/index',
            name: 'Index',
            component: index
        },
        {
            path: '/bonecas',
            name: 'Bonecas',
            component: bonecas
        },
        {
            path: '/sacola',
            name: 'Sacola',
            component: sacola
        },
        {
            path: '/saiba-mais',
            name: 'SaibaMais',
            component: saibaMais
        }
    ],
})

export default router