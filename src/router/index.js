import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login/login'
import HomePage from 'base/home-page/home-page'
import Table from 'components/table/table'
import Form from 'components/form/form'
import Charts from 'components/charts/charts'
import Markdown from 'components/markdown/markdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: HomePage,
      redirect: '/table',
      children: [
        {
          path: '/table',
          component: Table
        },
        {
          path: '/form',
          component: Form
        },
        {
          path: '/charts',
          component: Charts
        },
        {
          path: '/markdown',
          component: Markdown
        }
      ]
    }
  ]
})
