import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: () =>import('../views/Login.vue')
  },
  {
    path:'/auth',
    name:'Auth',
    component: () =>import('../views/Auth.vue')
  },
  {
    path:'/funlogin',
    name:'LoginFunfun',
    component: () =>import('../components/login/LoginFunfun.vue')
  },
  {
    path:'/loginkakao',
    name:'LoginKakao',
    component: () =>import('../components/login/LoginKakao.vue')
  },
  {
    path:'/loginnaver',
    name:'LoginNaver',
    component: () =>import('../components/login/LoginNaverCallback.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
