import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'

Vue.use(VueMomentJS, moment)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    now: '',
    hour: '',
    minute: ''
  },
  getters: {
    now: state => state.now,
    hour: state => state.hour,
    minute: state => state.minute
  },
  mutations: {
    updateTime: state => { state.now = moment().format('LTS') },
    updateHour: state => { state.hour = moment().format('h') },
    updateMinute: state => { state.minute = moment().format('m') }
  },
  actions: {
    start: (context) => { setInterval(() => { context.commit('updateTime') }, 1000) },
    startH: (context) => { setInterval(() => { context.commit('updateHour') }, 1000) },
    startM: (context) => { setInterval(() => { context.commit('updateMinute') }, 1000) }
  }
})
