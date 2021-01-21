import Vue from 'vue'
import VueRouter from 'vue-router'
import WinnerPage from '../views/WinnerPage.vue'
import PlayPage from '../views/PlayPage.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/winner',
    name: 'WinnerPage',
    component: WinnerPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/playGame',
    name: 'PlayPage',
    component: PlayPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = store.state.username
    if (!auth) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
