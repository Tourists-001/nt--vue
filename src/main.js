import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store.js'
Vue.use(ElementUI)
// 注册一个全局自定义指令 `v-focus`
Vue.directive('document-click', {
  // 当被绑定的元素插入到 DOM 中时……
  bind: function (el, binding) {
    document.addEventListener('click', binding.value, false)
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
