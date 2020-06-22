// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
import router from './router'
import VCharts from 'v-charts'
import less from 'less'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VCharts)
Vue.use(less)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
