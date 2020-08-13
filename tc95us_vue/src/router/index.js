import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import MyAccount from '../views/MyAccount.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{requiresVisitor: true},
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'), 
    meta:{requiresVisitor: false},
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
    meta:{requiresVisitor: true},
  },
  {
    path:'/login',
    name:'Login',
    component: Login,
    meta:{requiresVisitor: true},
  },
  {
    path: '/MonCompte',
    name: 'MyAccount',
    component: MyAccount,
    meta:{requiresVisitor: false},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
