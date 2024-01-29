import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
// 引入字体资源
import '@/static/icon/icon.css'
Vue.config.productionTip = false
import uView from 'uview-ui'
App.mpType = 'app'
Vue.use(uView)

const app = new Vue({
  ...App
})
app.$mount()
