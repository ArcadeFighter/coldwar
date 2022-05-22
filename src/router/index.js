import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dom�',
    component: Home
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  },
  {
    path: '/ultra',
    name: 'Ultra',
    component: () => import(/* webpackChunkName: "ultra" */ '../views/Ultra.vue')
  },
  {
    path: '/aether',
    name: 'Aether',
    component: () => import(/* webpackChunkName: "aether" */ '../views/Aether.vue')
  },
  {
    path: '/about',
    name: 'Informace',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'Nastaven�',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
