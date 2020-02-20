import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VCharts from 'v-charts'

Vue.use(VCharts)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/PageHelloWorld',
    name: 'PageHelloWorld',
    component: () => import('../views/Pages/PageHelloWorld.vue')
  },
  {
    path: '/PageCarts',
    name: 'PageCarts',
    component: () => import('../views/Pages/PageCarts.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
