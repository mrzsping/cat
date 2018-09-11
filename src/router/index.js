import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/pages/home')), 'home')
const index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const page = r => require.ensure([], () => r(require('@/pages/page')), 'page')
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const signup = r => require.ensure([], () => r(require('@/pages/signup')), 'signup')
const forget = r => require.ensure([], () => r(require('@/pages/forget')), 'forget')
const community = r => require.ensure([], () => r(require('@/pages/community')), 'community')
const list = r => require.ensure([], () => r(require('@/pages/community/list')), 'list')
const article = r => require.ensure([], () => r(require('@/pages/article')), 'article')
const mine = r => require.ensure([], () => r(require('@/pages/mine')), 'mine')
const person = r => require.ensure([], () => r(require('@/pages/mine/minePage/person')), 'mine')
const notice = r => require.ensure([], () => r(require('@/pages/mine/minePage/notice')), 'mine')
const collection = r => require.ensure([], () => r(require('@/pages/mine/minePage/collection')), 'mine')
const adoption = r => require.ensure([], () => r(require('@/pages/mine/minePage/adoption')), 'mine')
const aboutme = r => require.ensure([], () => r(require('@/pages/mine/minePage/aboutme')), 'mine')
const diary = r => require.ensure([], () => r(require('@/pages/diary')), 'diary')
const diaryList = r => require.ensure([], () => r(require('@/pages/diary/diaryList')), 'diary')
const diaryEdit = r => require.ensure([], () => r(require('@/pages/diary/diaryEdit')), 'diary')

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
          component: community,
          children: [
            {
              path: 'list',
              name: 'list',
              component: list
            },
            {
              path: 'article',
              name: 'article',
              component: article
            }
          ]
        },
        {
          path: 'diary',
          name: 'diary',
          component: diary,
          children: [
            {
              path: 'diaryList',
              name: 'diaryList',
              component: diaryList
            },
            {
              path: ':id/edit',
              name: 'edit',
              component: diaryEdit
            }
          ]
        },
        {
          path: 'publish',
          name: 'publish',
          component: mine
        },
        {
          path: 'mine',
          name: 'mine',
          component: mine,
          children: [
            {
              path: 'person',
              name: 'person',
              component: person
            },
            {
              path: 'notice',
              name: 'notice',
              component: notice
            },
            {
              path: 'collection',
              name: 'collection',
              component: collection
            },
            {
              path: 'adoption',
              name: 'adoption',
              component: adoption
            },
            {
              path: 'aboutme',
              name: 'aboutme',
              component: aboutme
            }
          ]
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
