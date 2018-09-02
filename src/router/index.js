import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const signup = r => require.ensure([], () => r(require('@/pages/signup')), 'signup')
// import home from '@/pages/home'
// import login from '@/pages/login'
// import signup from '@/pages/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
