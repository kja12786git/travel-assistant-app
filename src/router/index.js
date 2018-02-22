import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NoDocument from '@/components/NoDocument'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: HelloWorld
    },
    {
      path: '/Results',
      name: 'Results',
      component: HelloWorld
    },
    {
      path: '/Saved',
      name: 'Saved',
      component: HelloWorld
    },
    {
      path: '/*',
      name: '404',
      component: NoDocument
    }

  ]
})
