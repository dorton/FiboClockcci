import Vue from 'vue'
import Vuex from 'vuex'
import momentTimezone from 'moment-timezone'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'

Vue.use(VueMomentJS, moment, momentTimezone)

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
    updateTime: (state, zone) => { state.now = moment.tz(zone).format('LTS') },
    updateHour: (state, zone) => { state.hour = moment.tz(zone).format('h') },
    updateMinute: (state, zone) => { state.minute = moment.tz(zone).format('m') }
  },
  actions: {
    update: (context, zone) => {
      context.commit('updateTime', zone)
      context.commit('updateHour', zone)
      context.commit('updateMinute', zone)
    }

    // startH: (context, zone) => { context.commit('updateHour', zone) },
    // startM: (context, zone) => { context.commit('updateMinute', zone) }
  }
})
