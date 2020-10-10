// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Vue from 'vue'
// 导入字体图标
import './assets/fonts/iconfont.css'
// import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

// 注册
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// 引入mock
// 引入mock
require('./mock/mock.js')
