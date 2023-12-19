import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/main_1.js'
import store from './store/main_2.js'
import ApiPlugin from './plugins/api.js'
Vue.use(VueRouter)
Vue.use(ApiPlugin)

import '@/assets/styles/main.css';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
