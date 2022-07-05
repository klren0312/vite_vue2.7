import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ncaught (in promise) NavigationDuplicated 问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/mainPage',
  },
  {
    path: '/mainPage',
    name: 'MainPage',
    hidden: true,
    meta: {
      name: '页面一',
    },
    component: () =>
      import(/* webpackChunkName: "MainPage" */ '/@/views/MainPage.vue'),
  },
  {
    path: '/contentPage',
    name: 'ContentPage',
    hidden: true,
    meta: {
      name: '页面二',
    },
    component: () =>
      import(/* webpackChunkName: "ContentPage" */ '/@/views/ContentPage.vue'),
  },
]

const createRouter = () =>
  new VueRouter({
    routes: constantRoutes,
  })

const router = createRouter()

export default router
