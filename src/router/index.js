import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BotView from '../views/BotView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bot/:id',
    name: 'BotView',
    component: BotView,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
