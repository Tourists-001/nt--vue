import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import goodsList from '@/page/goodsList.vue'
import changeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import register from '@/page/regist.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      },
      {
        path: '/Index',
        name: 'Index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: changeCity
      }]
    },
    {
      path: '/blankPage',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: '/login',
        name: 'Login',
        component: Login
      }, {
        path: '/register',
        name: 'register',
        component: register
      }]
    }
  ]
})
