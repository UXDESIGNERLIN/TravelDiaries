import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'DiaryDetail',
    props: true,
    component: () => import('../views/DiaryDetail.vue')
  },
  {
    path: '/error/:error',
    name: 'ErrorPage',
    props: true,
    component: () => import('../views/ErrorPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
