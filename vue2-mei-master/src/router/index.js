import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



import myInfo from '../views/My/my-info'
import myPassword from '../views/My/my-password'
import myCenter from '../views/My/my-center'
import myMoney from '../views/My/my-money'
import myPasswordQ from '../views/My/my-password-q'
import my from '../views/My/my'
// 资金管理
import order from "../views/Order/order"

import todayBuyColor from "../views/today/buy-color"
import todayWinning from "../views/today/winning"
// import regist from "../components/regist/regist"
import myHistroy from '../views/My/my-histroy'

import passwordZ from "../views/password/password-z"
import passwordD from "../views/password/password-d"
import myService from '../views/My/my-service'

export default new Router({

  routes: [
    {
      path: '/index',
      component: require('../views/Index/index.vue')
    }, {
      path: '/game_55',
      component: require('../views/Games/game_55.vue'),
    },
    {
      path: '/game_40',
      component: require('../views/Games/game_40.vue'),
    },
    {
      path: '/game_35',
      component: require('../views/Games/game_35.vue'),
    },
    {
      path: '/game_30',
      component: require('../views/Games/game_30.vue'),
    },
    {
      path: '/game_25',
      component: require('../views/Games/game_25.vue'),
    },
    {
      path: '/game_20',
      component: require('../views/Games/game_20.vue'),
    },
    {
      path: '/game_15',
      component: require('../views/Games/game_15.vue'),
    },{
      path: '/my',
      component:my,
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
    },
    {
      path: '/regist',
      component: require('../components/regist/regist.vue')
    }
    , { // 默认跳转到 '/index/recommend'
      path: '*',
      redirect: '/index'
    }
    ,
    { // 资金管理
      path: '/order',
      component: order,
      meta: {
        pageTitle: '资金管理'
      }
    }
    ,
    {
      //未结明细
      path: '/todayBuyColor',
      component: todayBuyColor,
      meta: {
        pageTitle: '未结明细'
      }
    }
    ,
    {
      //今日已结
      path: '/todayWinning',
      component: todayWinning,
      meta: {
        pageTitle: '今日已结'
      }
    }
    ,

    ,
    {
      //注册
      path: '/myHistroy',
      component: myHistroy,
      meta: {
        pageTitle: '下注历史'
      }
    }
    ,
    {
      //修改支付密码
      path: '/passwordZ',
      component: passwordZ,
      meta: {
        pageTitle: '修改支付密码'
      }
    }
    ,
    {
      //修改登录密码
      path: '/passwordD',
      component: passwordD,
      meta: {
        pageTitle: '修改登录密码'
      }
    }
    ,
    {
      //客服
      path: '/myService',
      component: myService,
      meta: {
        pageTitle: '客服'
      }
    }
  ]
})
