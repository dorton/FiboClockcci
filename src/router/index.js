import Vue from 'vue'
import Router from 'vue-router'
import Clock from '@/components/clock/clock.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Clock
    }
  ]
})
