import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31938b1d = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _f7ab0604 = () => interopDefault(import('..\\pages\\jokes\\index.vue' /* webpackChunkName: "pages/jokes/index" */))
const _3c99a05c = () => interopDefault(import('..\\pages\\todo\\index.vue' /* webpackChunkName: "pages/todo/index" */))
const _5d6b8248 = () => interopDefault(import('..\\pages\\jokes\\_id\\index.vue' /* webpackChunkName: "pages/jokes/_id/index" */))
const _514b65e2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _31938b1d,
    name: "about"
  }, {
    path: "/jokes",
    component: _f7ab0604,
    name: "jokes"
  }, {
    path: "/todo",
    component: _3c99a05c,
    name: "todo"
  }, {
    path: "/jokes/:id",
    component: _5d6b8248,
    name: "jokes-id"
  }, {
    path: "/",
    component: _514b65e2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
