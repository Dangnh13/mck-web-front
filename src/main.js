import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n/index.js'
import '@/plugins/validation'
import router from './router'
import * as filters from './filters' // global filters
import store from './store'
import initialMixin from '@/mixins/initial'

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

Vue.mixin(initialMixin);

// Vue.config.devtools = false

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
