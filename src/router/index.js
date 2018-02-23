import Vue from 'vue'
import Router from 'vue-router'
import NoDocument from '@/components/NoDocument'
import Search from '@/components/Search'
import Results from '@/components/Results'

import VueApiRequest from 'vue-api-request'
import api from '@/assets/dbstatic.js'

Vue.use(Router)
Vue.use(VueApiRequest)

export default new Router({
  mode: 'history',
  items: items,
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: NoDocument
    },
    {
      path: '/results',
      name: 'Results',
      component: Results, Search
    },
    {
      path: '/saved',
      name: 'Saved',
      component: NoDocument
    },
    {
      path: '/*',
      name: '404',
      component: NoDocument
    }

  ]

})
