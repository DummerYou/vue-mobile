// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/common.css'
import './assets/css/reset.css'
import './assets/css/vantUi.css'
import WXConfig from './assets/js/wxapi'
import './assets/js/flexible.js'
import {
  Toast,
  List
} from 'vant'
Vue.use(Toast).use(List)
// Vue.use(Vant)
Vue.prototype.WXConfig = WXConfig
Vue.prototype.$toast = Toast

Vue.config.productionTip = false
/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
