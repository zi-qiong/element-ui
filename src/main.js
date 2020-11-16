import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '@/assets/common/public.scss'

Vue.config.productionTip = false

import elementUi from './components/index.js'

Vue.use(elementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
