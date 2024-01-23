import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/loop',
      name: 'loop',
      component: () => import('../views/LoopView.vue'),
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('../views/ConditionalView.vue'),
    },
  ]
})

export default router
