import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const page = r => require.ensure([], () => r(require('@/pages/page')), 'page')
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const signup = r => require.ensure([], () => r(require('@/pages/signup')), 'signup')
const forget = r => require.ensure([], () => r(require('@/pages/forget')), 'forget')
const community = r => require.ensure([], () => r(require('@/pages/community')), 'community')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page',
      name: 'page',
      component: page,
      children: [
        {
          path: 'index',
          name: 'index',
          component: index
        },
        {
          path: 'community',
          name: 'community',
          component: community
        }
      ]
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
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    }
  ]
})
