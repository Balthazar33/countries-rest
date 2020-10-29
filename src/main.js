import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/css/style_common.css'
import '@/assets/css/style_home.css'
import '@/assets/css/style_country_data.css'
import store from '@/store/store.js'
import BaseCard from './components/BaseCard.vue'
Vue.use(axios);
Vue.config.productionTip = false

Vue.component('base-card',BaseCard);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


