import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BotView from '../views/BotView'
import AddBot from '../views/AddBot'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bot/:name',
    name: 'BotView',
    component: BotView,
    props: true
  },
  {
    path: '/bot/add',
    name: 'AddBot',
    component: AddBot,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: "active",
  routes
})

export default router
