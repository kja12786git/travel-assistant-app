import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/components/Search'
import Results from '@/components/Results'
import SavedList from '@/components/SavedList'
import Footer from '@/components/Footer'
import NoDocument from '@/components/NoDocument'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search

    },
    {
      path: '/results',
      name: 'Results',
      component: Results

    },
    {
      path: '/login',
      name: 'Login',
      component: NoDocument

    },
    {
      path: '/savedlist',
      name: 'SavedList',
      component: SavedList

    },
    {
      path: '/*',
      name: '404',
      component: NoDocument
    }

  ]

})
