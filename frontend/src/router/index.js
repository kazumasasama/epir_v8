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
    path: '/event',
    name: 'Event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue')
  },
  {
    path: '/customers',
    name: 'CustomersIndex',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomersIndex.vue')
  },
  {
    path: '/menus',
    name: 'MenuIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/menu/MenuIndex.vue'),
    // redirect: '/menus/index',
    children: [
      {
        path: 'show',
        component: () => import('@/views/menu/ShowMenu'),
        name: 'ShowMenu',
        meta: { title: 'show_menu', icon: 'user', noCache: true },
        hidden: true
      },
      {
        path: 'new',
        component: () => import('@/views/menu/NewMenu'),
        name: 'NewCustomer',
        meta: { title: 'new_customer', noCache: true },
        hidden: true
      },
      {
        path: 'edit',
        component: () => import('@/views/menu/EditMenu'),
        name: 'EditMenu',
        meta: { title: 'edit_menu', noCache: true },
        hidden: true
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
