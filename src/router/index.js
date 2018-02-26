import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/components/Search'
import Results from '@/components/Results'
import SavedList from '@/components/SavedList'
import Footer from '@/components/Footer'
import NoDocument from '@/components/NoDocument'

import NewYork from '@/components/cities/NewYork'
import London from '@/components/cities/London'
import LosAngeles from '@/components/cities/Losangeles'
import Boston from '@/components/cities/Boston'
import Chicago from '@/components/cities/Chicago'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search/*,
      children: [
        { path: '/results*', component: Results }

      ]*/

    },
    {
      path: '/results',
      name: 'Results',
      component: Results

    },
    {
      path: '/results/NYC',
      name: 'NewYork',
      component: NewYork

    },
    {
      path: '/results/london',
      name: 'London',
      component: London

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
