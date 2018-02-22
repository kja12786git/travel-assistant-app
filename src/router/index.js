import Vue from 'vue'
import Router from 'vue-router'
import NoDocument from '@/components/NoDocument'
import Search from '@/components/Search'
import Results from '@/components/Results'

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
      path: '/login',
      name: 'Login',
      component: NoDocument
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/saved',
      name: 'Saved',
      component: NoDocument
    }/*,
    {
      path: '/*',
      name: '404',
      component: NoDocument
    }*/

  ]

})
