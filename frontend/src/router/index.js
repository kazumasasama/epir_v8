import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'
import CustomerIndex from '../views/CustomerIndex.vue'
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
    component: CustomerIndex
  },
  {
    path: '/menus',
    name: 'MenuIndex',
    component: MenuIndex,
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
  routes,
});

export default router;
