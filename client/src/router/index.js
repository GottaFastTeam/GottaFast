import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WinnerPage from '../views/WinnerPage.vue'
import PlayPage from '../views/PlayPage.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/play',
    name: 'Home',
    component: Home
  },
  {
    path: '/winner',
    name: 'WinnerPage',
    component: WinnerPage
  },
  {
    path: '/play',
    name: 'PlayPage',
    component: PlayPage
  },
  }
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
