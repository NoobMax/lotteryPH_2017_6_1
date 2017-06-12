import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// require.ensure在需要的时候才下载依赖的模块  // 出现问题: 刷新时获取不到url
// const index = r => require.ensure([], () => r(require('../views/Recommend/recommend.vue')), 'index')
import index from '../views/Index/index' // 首页
import facialBeauty from '../views/Index/FacialBeauty/facialBeauty' // 面部美容
import plastic from '../views/Index/Plastic/plastic' // 美体塑性
// 订单页
import order from '../views/Order/order'
import shopOrder from '../views/Order/shopOrder' // 到店订单
import doorOrder from '../views/Order/doorOrder' // 上门订单
import shopOrderAll from '../views/Order/orderDev/shopOrderAll' // 上门订单
import obligation from '../views/Order/orderDev/obligation' // 待付款
import paid from '../views/Order/orderDev/paid' // 已支付
import underway from '../views/Order/orderDev/underway' // 进行中
import done from '../views/Order/orderDev/done' // 已完成
import evaluate from '../views/Order/orderDev/evaluate' // 待评价
import cancel from '../views/Order/orderDev/cancel' // 已取消
// 套餐介绍须知
import mealDescription from '../components/meal-description'
// 套餐支付
import mealPay from '../components/meal-pay'
import confirmOrder from '../components/confirmOrder'
// 已支付套餐详情
import myMealdetails from '../views/My/my-mealdetails'
export default new Router({
  routes: [{
      path: '/index',
      component: require('../views/Index/index.vue')
    },
    { // 门店列表  预约到店
      path: '/appointmentShop',
      component: require('../views/appointmentShop/shopList.vue'),
    },
    { // 门店列表  预约到店
      path: '/appointmentShop/:id',
      component: require('../views/appointmentShop/shopListDet.vue'),
    },
    {
      // 项目详细信息
      path: '/appointmentShop/projectItemDet/:id',
      component: require('../components/projectItemDet.vue'),
      meta: {
        pageTitle: '项目详情'
      }
    },
    { // 订单确认
      path: '/confirmOrder',
      component: require('../components/confirmOrder.vue'),
      meta: {
        pageTitle: '订单'
      }
    },
    { //套餐疗程
      path: '/setCourse',
      component: require('../views/setCourse/mealList.vue')
    },
    { //套餐介绍须知使用方法
      path: '/mealDescription',
      component: mealDescription
    },
    { // 套餐支付页面
      path: '/mealPay',
      component: mealPay,
      meta: {
        pageTitle: '套餐支付'
      }
    },
    {
      path: '/confirmOrder',
      component: confirmOrder
    },
    {
      // 套餐疗程列表详细信息
      path: '/mealdeta/:id',
      component: require('../views/setCourse/Mealdeta/mealdeta.vue')
    },
    { // 店铺
      path: '/shop',
      component: require('../views/Shop/shop.vue'),
      meta: {
        pageTitle: '店铺主页'
      }
    },
    { // 订单
      path: '/order',
      component: order,
      meta: {
        pageTitle: '我的订单'
      }
    },
    { // 我的
      path: '/my',
      component: require('../views/My/my.vue'),
      meta: {
        pageTitle: '个人中心'
      }
    },
    { // 登录
      path: '/login',
      component: require('../components/login/Login.vue'),
    },
    { // 账户管理
      path: '/account',
      component: require('../components/Account.vue'),
    },
    { // 我的套餐
      path: '/myMeal',
      component: require('../components/login/myMeal.vue'),
      meta: {
        pageTitle: '我的套餐'
      }
    },
    { // 我的套餐详情
      path: '/myMealdetails',
      component: myMealdetails,
      meta: {
        pageTitle: '套餐详情'
      }
    },
    { // 优惠券
      path: '/discountCoupon',
      component: require('../components/login/discount-coupon.vue')
    },
    { // 我的积分
      path: '/myPoints',
      component: require('../components/login/my-points.vue')
    },
    { // 我的钱包
      path: '/myWallet',
      component: require('../components/login/my-wallet.vue')
    },
    { // 默认跳转到 '/index/recommend'
      path: '*',
      redirect: '/index'
    }
  ]
})
