import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '/@/views/Layout/index.vue'
Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    name: 'MainPage',
    meta: {
      icon: 'el-icon-setting',
      title: '首页',
    },
    component: Layout,
    redirect: '/homePage',
    children: [
      {
        path: '/homePage',
        name: 'HomePage',
        meta: {
          title: '首页',
        },
        component: () =>
          import(
            /* webpackChunkName: "HomePage" */ '../views/HomePage/HomePage.vue'
          ),
      },
    ],
  },
]

const createRouter = () =>
  new VueRouter({
    routes: constantRoutes,
  })

const router = createRouter()

export function useRouter() {
  return router
}

export function useRoute() {
  return router.currentRoute
}

export default router
