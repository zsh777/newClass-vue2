import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/all',
        name: 'all',
        component: () => import('../views/AllView.vue')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('../views/SearchView.vue')
      },
      {
        path: '/classDetail',
        name: 'classDetail',
        component: () => import('../views/ClassDetailView.vue'),
        redirect: '/chineseDetail',
        children: [
          {
            path: '/chineseDetail',
            name: 'chineseDetail',
            component: () =>
              import('../components/ClassDetail/ChineseDetail.vue')
          },
          {
            path: '/mathDetail',
            name: 'mathDetail',
            component: () => import('../components/ClassDetail/MathDetail.vue')
          }
        ]
      },
      {
        path: '/myspace',
        name: 'myspace',
        component: () => import('../views/MyspaceView.vue'),
        redirect: '/showInfo',
        children: [
          {
            path: '/showInfo',
            name: 'showInfo',
            component: () => import('../components/MySpace/ShowInfo.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
