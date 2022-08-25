import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/detail/:id',
    name: 'DiaryDetail',
    props: true,
    component: () => import('../views/DiaryDetail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
