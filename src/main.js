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
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('VUE APP BASE API', process.env.VUE_APP_BASE_API);

Vue.mixin(initialMixin);

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
