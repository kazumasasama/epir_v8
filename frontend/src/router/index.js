import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event.vue'
import CustomerIndex from '../views/customer/CustomerIndex.vue'
import CustomerNew from '../views/customer/CustomerNew.vue'
import MenuIndex from '../views/menu/MenuIndex.vue'
import MenuNew from '@/views/menu/MenuNew.vue'
import Index from "../views/Index.vue"
import Login from "../views/Login.vue"
// import NotFound from "@/views/NotFound.vue"

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '*',
  //   name: "error404",
  //   component: NotFound,
  // },
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
  },
  {
    path: '/customers/new',
    name: 'CustomerNew',
    component: CustomerNew,
  },
  {
    path: '/menus',
    name: 'MenuIndex',
    component: MenuIndex,
  },
  {
    path: '/menus/new',
    name: 'MenuNew',
    component: MenuNew,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
