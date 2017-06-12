// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from './utils/diyaxios'
// 路由
import router from './router'
// VUEX
import store from './store'
// MuseUI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// 自定义主题
import './assets/theme.less'
import setWechatTitle from './utils/setWechatTitle.js' // 微信标题
import 'babel-polyfill'; //解决ie浏览器不支持promise
import './utils/rem'
// 全局css
import "./assets/css/base.css";
// import jsonp from 'jsonp'
Vue.use(MuseUI)
Vue.config.productionTip = false
Vue.prototype.$http = Axios
// Axios.jsonp = jsonp
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
router.beforeEach((to, from, next) => {
  typeof to.meta.pageTitle !== undefined && setWechatTitle(to.meta.pageTitle)
  next()
})
