// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'

Vue.use(VueMomentJS, moment)
// import { _ } from 'lodash'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
