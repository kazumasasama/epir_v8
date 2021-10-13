import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'
import CustomerIndex from '../views/customer/CustomerIndex.vue'
import MenuIndex from '../views/menu/MenuIndex.vue'
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/customers',
    name: 'CustomerIndex',
    component: CustomerIndex,
    children: [
      {
        path: 'new',
        component: () => import('@/views/customer/CustomerNew'),
        name: 'CustomerNew',
        meta: { title: 'new_customer', noCache: true },
      },
    ]
  },
  {
    path: '/menus',
    name: 'MenuIndex',
    component: MenuIndex,
    children: [
      {
        path: 'show',
        component: () => import('@/views/menu/MenuShow'),
        name: 'MenuShow',
        meta: { title: 'show_menu', icon: 'user', noCache: true },
        hidden: true
      },
      {
        path: 'new',
        component: () => import('@/views/menu/MenuNew'),
        name: 'MenuNew',
        meta: { title: 'new_menu' },
        // hidden: true
      },
      {
        path: 'edit',
        component: () => import('@/views/menu/MenuEdit'),
        name: 'MenuEdit',
        meta: { title: 'edit_menu', noCache: true },
        hidden: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
