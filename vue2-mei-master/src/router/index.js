import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



import myInfo from '../views/My/my-info'
import myPassword from '../views/My/my-password'
import myCenter from '../views/My/my-center'
import myMoney from '../views/My/my-money'
import myPasswordQ from '../views/My/my-password-q'
import my from '../views/My/my'
export default new Router({

  routes: [
    {
      path: '/index',
      component: require('../views/Index/index.vue')
    }, { // 店铺
      path: '/shop',
      component: require('../views/Shop/shop.vue'),
    },{
      path: '/my', component:my,

    },
    { path: '/myInfo',
    component: myInfo,
    meta: {
      pageTitle: '个人资料' }
    },
    { path: '/myPassword',
    component: myPassword,
    meta: {
      pageTitle: '登录密码' }
    },
    { path: '/myCenter',
    component: myCenter,
    meta: {
      pageTitle: '信息中心' }
    },
    { path: '/myMoney',
    component: myMoney,
    meta: {
      pageTitle: '资金管理' }
    },
    { path: '/myPasswordQ',
    component: myPasswordQ,
    meta: {
      pageTitle: '取款密码' }
    },{
      path: '/login',
      component: require('../components/login/Login.vue')
    }, { // 默认跳转到 '/index/recommend'
      path: '*',
      redirect: '/index'
    }
  ]
})
