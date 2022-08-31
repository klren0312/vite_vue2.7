import Vue from 'vue'
import VueRouter from 'vue-router'

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
