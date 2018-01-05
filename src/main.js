import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import axios from 'axios'

import { routes } from './routes/routes.js'
import store from './store/store.js'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root ="https://vuejs-stocktrader-47b06.firebaseio.com/ ";

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes,
  
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
