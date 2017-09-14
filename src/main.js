// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex'
//import { Swiper }
//dfasdsfadsfa
Vue.config.productionTip = false

//console.log(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//告诉当前的实例，使用了vuex
  template: '<App/>',
  components: { App }
})
