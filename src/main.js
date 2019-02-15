// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue
import Vue from 'vue'
// 引入饿了么组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入根组件
import App from './App'
// 引入路由
import router from './router'
// 引入css通用文件
import '@/assets/css/base.css'
// 引入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
// 使用饿了么组件库
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
