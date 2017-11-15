import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
