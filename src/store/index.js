import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'

Vue.use(VueMomentJS, moment)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    now: ''
  },
  getters: {
    now: state => state.now
  },
  mutations: {
    updateTime: state => { state.now = moment().format('LTS') }
  },
  actions: {
    start: (context) => { setInterval(() => { context.commit('updateTime') }, 1000) }
  }
})
