import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
import uView from "uview-ui"
App.mpType = 'app'
Vue.use(uView)

const app = new Vue({
  ...App
})
app.$mount()
