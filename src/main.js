import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Question1 from './components/Question1.vue';
import Question2 from './components/Question2.vue';
import Question3 from './components/Question3.vue';

const routes = [
  { path: '/question1', component: Question1 },
  { path: '/question2', component: Question2 },
  { path: '/question3', component: Question3 },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
