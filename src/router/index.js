import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Pets from '../views/Pets'
import Favorites from '../views/Favorites'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pets',
    name: 'Pets',
    component: Pets
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
