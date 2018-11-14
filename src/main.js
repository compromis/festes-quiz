import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import Quiz from './Quiz'

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  offset: -70
})

/* eslint-disable no-new */
new Vue({
  render: h => h(Quiz)
}).$mount('#app')
