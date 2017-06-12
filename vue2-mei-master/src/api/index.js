// 请求api地址
// const _baseUrl = 'http://im.ivymei.com' // 开发+
// http://192.168.1.112/webapi/index.php?app=other&act=index_ banner
import axios from 'axios'

export default {

  // 区域列表
  getArea(city_id = 440100) { // 默认传入 广州
    return `/webapi/index.php?app=area&act=info_list&format=json&city_id=${city_id}`
  },
  // 套餐列表
  getMealList() {
    return `/webapi/index.php?app=meal&act=info_list`
  },
  // 套餐详情
  getMealListDet(id) {
    return `/webapi/index.php?app=meal&act=detail&${id}&source=h5`
  }
}
// const BLOCKING_CYCLE: 30;
// 首页轮播图
let getBanner = () => {
  return '/webapi/index.php?format=json&app=other&act=index_banner&channel=4&position=index&source=h5'
}
// 套餐详情
let getMealListDet = (id) => {
  return `/webapi/index.php?app=meal&act=detail&source=h5&${id}`
}
// 项目立刻下单
let getProjectMsg = (id) => {
  return `/webapi/index.php?format=json&app=project&act=order_info&id=${id}`
}
// 预约时间 床位

/****
 * @param {*} day      时间  ymd
 * @param {*} Shop_id  门店id
 */

let getCartTime = (day,Shop_id) =>{
  return `/webapi/index.php?format=json&app=cart&act=time&day=${day}&shop_id=${Shop_id}`
}
let getShop = () =>{
  return '/webapi/index.php?format=json&app=shop&act=get_info'
}

/**
 * 根据地区获取    门店列表
 * @param {*} district_id 地区id
 * @param {*} lat         纬度
 * @param {*} lng         经度
 * @param {*} page_no     页码
 * @param {*} page_size   条数
 */

let getShopList = (lat = '', lng = '', page_no = 1, page_size = 10) => {
  return `/webapi/index.php?app=shop&act=info_list&page_size=${page_size}&page_no=${page_no}&lat=${lat}&lng=${lng}`
}

// 门店列表详情  id : 门店id  id = xxx
let shopListDet = (id) => {
  return `webapi/index.php?format=json&app=shop&act=detail&${id}&source=h5`
}
// 热门项目
let getHotProject = () => {
  return '/webapi/index.php?app=project&act=hot_index'
}
/**
 * 项目列表
 * @param {*} shop_id  门店 id
 * @param {*} pageNo
 * @param {*} page_size
 */
let getProjectItems = (shop_id, pageNo = 1, page_size = 10) => {
  return `/webapi/index.php?app=project&act=info_list&page_no=${pageNo}&page_size=${page_size}${shop_id? '&shop_'+shop_id:''}`

}
// 项目详情
let getProjectDet = (id) => {
  return `/webapi/index.php?app=project&act=detail&${id}&source=h5`
}
// 获取套餐列表
/**
 * shop_id 门店id
 */
let getMealList = () => {
  return `/webapi/index.php?app=meal&act=info_list`
}



// 评价接口
// 可传参数
/**
 *  page_no	否	页码 默认1
 *  page_size	否	默认100（可选5,10,15,20,30,40,50,80,100,150,200,300,500）
 *  ** project_id/ project _id_arr	否	im_project项目分类表中id, project_arr数组方式传输多个ID。(两参数不能同时存在)
 *  beautician_id	否	美容师ID，用以获取美容师评价
 *  stars/ stars_arr	否	Stars星级值, project_arr数组方式传输多个ID。(两参数不能同时存在)无效
 *  member_id	否	上门/到店(1: 上门, 2：到店, 3：上门+到店)
 *  shop_id	否	门店id
 *  sort	否	排序字段(星级stars,添加时间[最新]add_time)
 *  sort_order	否	默认desc(顺序从大到小),asc（倒序从小到大）(小写)
 */
let getComment = () => {
  return '/webapi/index.php?app=comment&act=info_list&source=h5'
}
let getBjpk = () => {
  return {
    lmp:{code:0,name:'两面盘',body:[
      {
    _name:"冠亚军和",
    list:[{name:"大",odds:2.19,key_s:"ip_3017"},{name:"小",odds:1.78,key_s:"ip_3018"},{name:"单",odds:1.78,key_s:"ip_3019"},{name:"双",odds:2.19,key_s:"ip_3020"}]
  },

    {
        _name:"冠军",
        list:[{name:"大",odds:1.990,key_s:"ip_3001-3011"},{name:"小",odds:1.990,key_s:"ip_3001-3012"},{name:"单",odds:1.990,key_s:"ip_3001-3013"},{name:"双",odds:1.990,key_s:"ip_3001-3014"},{name:"龙",odds:1.990,key_s:"ip_3001-3015"},{name:"虎",odds:1.990,key_s:"ip_3001-3016"}]
    },

    {
        _name:"亚军",
        list:[{name:"大",odds:1.990,key_s:"ip_3002-3011"},{name:"小",odds:1.990,key_s:"ip_3002-3012"},{name:"单",odds:1.990,key_s:"ip_3002-3013"},{name:"双",odds:1.990,key_s:"ip_3002-3014"},{name:"龙",odds:1.990,key_s:"ip_3002-3015"},{name:"虎",odds:1.990,key_s:"ip_3002-3016"}]
    },

    {
        _name:"第三名",
        list:[{name:"大",odds:1.990,key_s:"ip_3003-3011"},{name:"小",odds:1.990,key_s:"ip_3003-3012"},{name:"单",odds:1.990,key_s:"ip_3003-3013"},{name:"双",odds:1.990,key_s:"ip_3003-3014"},{name:"龙",odds:1.990,key_s:"ip_3003-3015"},{name:"虎",odds:1.990,key_s:"ip_3003-3016"}]
    },

    {
        _name:"第四名",
        list:[{name:"大",odds:1.990,key_s:"ip_3004-3011"},{name:"小",odds:1.990,key_s:"ip_3004-3012"},{name:"单",odds:1.990,key_s:"ip_3004-3013"},{name:"双",odds:1.990,key_s:"ip_3004-3014"},{name:"龙",odds:1.990,key_s:"ip_3004-3015"},{name:"虎",odds:1.990,key_s:"ip_3004-3016"}]
    },

    {
        _name:"第五名",
        list:[{name:"大",odds:1.990,key_s:"ip_3005-3011"},{name:"小",odds:1.990,key_s:"ip_3005-3012"},{name:"单",odds:1.990,key_s:"ip_3005-3013"},{name:"双",odds:1.990,key_s:"ip_3005-3014"},{name:"龙",odds:1.990,key_s:"ip_3005-3015"},{name:"虎",odds:1.990,key_s:"ip_3005-3016"}]
    },

    {
        _name:"第六名",
        list:[{name:"大",odds:1.990,key_s:"ip_3006-3011"},{name:"小",odds:1.990,key_s:"ip_3006-3012"},{name:"单",odds:1.990,key_s:"ip_3006-3013"},{name:"双",odds:1.990,key_s:"ip_3006-3014"}]
    },

    {
        _name:"第七名",
        list:[{name:"大",odds:1.990,key_s:"ip_3007-3011"},{name:"小",odds:1.990,key_s:"ip_3007-3012"},{name:"单",odds:1.990,key_s:"ip_3007-3013"},{name:"双",odds:1.990,key_s:"ip_3007-3014"}]
    },
    {
        _name:"第八名",
        list:[{name:"大",odds:1.990,key_s:"ip_3008-3011"},{name:"小",odds:1.990,key_s:"ip_3008-3012"},{name:"单",odds:1.990,key_s:"ip_3008-3013"},{name:"双",odds:1.990,key_s:"ip_3008-3014"}]
    },
    {
        _name:"第九名",
        list:[{name:"大",odds:1.990,key_s:"ip_3009-3011"},{name:"小",odds:1.990,key_s:"ip_3009-3012"},{name:"单",odds:1.990,key_s:"ip_3009-3013"},{name:"双",odds:1.990,key_s:"ip_3009-3014"}]
    },

    {
        _name:"第十名",
        list:[{name:"大",odds:1.990,key_s:"ip_3010-3011"},{name:"小",odds:1.990,key_s:"ip_3010-3012"},{name:"单",odds:1.990,key_s:"ip_3010-3013"},{name:"双",odds:1.990,key_s:"ip_3010-3014"}]
    }
  ]
},
 gyh:{code:1,name:'冠、亚军组合',body:[{
        _name:"冠亚军和",
        list:[{name:"3",odds:42.5,key_s:"ip_3021-3"},
          {name:"4",odds:42.5,key_s:"ip_3021-4"},
          {name:"5",odds:1.78,key_s:"ip_3021-5"},
          {name:"6",odds:2.19,key_s:"ip_3021-6"},
          {name:"7",odds:1.78,key_s:"ip_3021-7"},
          {name:"8",odds:1.78,key_s:"ip_3021-8"},
          {name:"9",odds:2.19,key_s:"ip_3021-9"},
          {name:"10",odds:1.78,key_s:"ip_3021-10"},
          {name:"11",odds:1.78,key_s:"ip_3021-11"},
          {name:"12",odds:2.19,key_s:"ip_3021-12"},
          {name:"13",odds:1.78,key_s:"ip_3021-13"},
          {name:"14",odds:1.78,key_s:"ip_3021-14"},
          {name:"15",odds:2.19,key_s:"ip_3021-15"},
          {name:"16",odds:1.78,key_s:"ip_3021-16"},
          {name:"17",odds:1.78,key_s:"ip_3021-17"},
          {name:"18",odds:2.19,key_s:"ip_3021-18"},
          {name:"19",odds:1.78,key_s:"ip_3021-19"}
          ]},
        {
          _name:"冠亚军和-两面",
          list:[
            {name:"大",odds:2.19,key_s:"ip_3017"},
            {name:"小",odds:1.78,key_s:"ip_3018"},
            {name:"单",odds:1.78,key_s:"ip_3019"},
            {name:"双",odds:2.19,key_s:"ip_3020"}
        ]}]},
 yzw:{code:2,name:'一至五名',body:[{
      _name:"冠军",
      list:[{name:"1",odds:9.90,key_s:"ip_3001-1"},{name:"2",odds:9.90,key_s:"ip_3001-2"},{name:"3",odds:9.90,key_s:"ip_3001-3"},{name:"4",odds:9.90,key_s:"ip_3001-4"},{name:"5",odds:9.90,key_s:"ip_3001-5"},{name:"6",odds:9.90,key_s:"ip_3001-6"},{name:"7",odds:9.90,key_s:"ip_3001-7"},{name:"8",odds:9.90,key_s:"ip_3001-8"},{name:"9",odds:9.90,key_s:"ip_3001-9"},{name:"10",odds:9.90,key_s:"ip_3001-10"}]
    },
    {
      _name:"亚军",
      list:[{name:"1",odds:9.90,key_s:"ip_3002-1"},{name:"2",odds:9.90,key_s:"ip_3002-2"},{name:"3",odds:9.90,key_s:"ip_3002-3"},{name:"4",odds:9.90,key_s:"ip_3002-4"},{name:"5",odds:9.90,key_s:"ip_3002-5"},{name:"6",odds:9.90,key_s:"ip_3002-6"},{name:"7",odds:9.90,key_s:"ip_3002-7"},{name:"8",odds:9.90,key_s:"ip_3002-8"},{name:"9",odds:9.90,key_s:"ip_3002-9"},{name:"10",odds:9.90,key_s:"ip_3002-10"}]
    },
    {
      _name:"第三名",
      list:[{name:"1",odds:9.90,key_s:"ip_3003-1"},{name:"2",odds:9.90,key_s:"ip_3003-2"},{name:"3",odds:9.90,key_s:"ip_3003-3"},{name:"4",odds:9.90,key_s:"ip_3003-4"},{name:"5",odds:9.90,key_s:"ip_3003-5"},{name:"6",odds:9.90,key_s:"ip_3003-6"},{name:"7",odds:9.90,key_s:"ip_3003-7"},{name:"8",odds:9.90,key_s:"ip_3003-8"},{name:"9",odds:9.90,key_s:"ip_3003-9"},{name:"10",odds:9.90,key_s:"ip_3003-10"}]
    },
    {
      _name:"第四名",
      list:[{name:"1",odds:9.90,key_s:"ip_3004-1"},{name:"2",odds:9.90,key_s:"ip_3004-2"},{name:"3",odds:9.90,key_s:"ip_3004-3"},{name:"4",odds:9.90,key_s:"ip_3004-4"},{name:"5",odds:9.90,key_s:"ip_3004-5"},{name:"6",odds:9.90,key_s:"ip_3004-6"},{name:"7",odds:9.90,key_s:"ip_3004-7"},{name:"8",odds:9.90,key_s:"ip_3004-8"},{name:"9",odds:9.90,key_s:"ip_3004-9"},{name:"10",odds:9.90,key_s:"ip_3004-10"}]
    },
    {
      _name:"第五名",
      list:[{name:"1",odds:9.90,key_s:"ip_3005-1"},{name:"2",odds:9.90,key_s:"ip_3005-2"},{name:"3",odds:9.90,key_s:"ip_3005-3"},{name:"4",odds:9.90,key_s:"ip_3005-4"},{name:"5",odds:9.90,key_s:"ip_3005-5"},{name:"6",odds:9.90,key_s:"ip_3005-6"},{name:"7",odds:9.90,key_s:"ip_3005-7"},{name:"8",odds:9.90,key_s:"ip_3005-8"},{name:"9",odds:9.90,key_s:"ip_3005-9"},{name:"10",odds:9.90,key_s:"ip_3005-10"}]
    }]

 },
 lzs:{code:2,name:'六至十名',body:[{
      _name:"第六名",
      list:[{name:"1",odds:9.90,key_s:"ip_3006-1"},{name:"2",odds:9.90,key_s:"ip_3006-2"},{name:"3",odds:9.90,key_s:"ip_3006-3"},{name:"4",odds:9.90,key_s:"ip_3006-4"},{name:"5",odds:9.90,key_s:"ip_3006-5"},{name:"6",odds:9.90,key_s:"ip_3006-6"},{name:"7",odds:9.90,key_s:"ip_3006-7"},{name:"8",odds:9.90,key_s:"ip_3006-8"},{name:"9",odds:9.90,key_s:"ip_3006-9"},{name:"10",odds:9.90,key_s:"ip_3006-10"}]
    },
    {
      _name:"第七名",
      list:[{name:"1",odds:9.90,key_s:"ip_3007-1"},{name:"2",odds:9.90,key_s:"ip_3007-2"},{name:"3",odds:9.90,key_s:"ip_3007-3"},{name:"4",odds:9.90,key_s:"ip_3007-4"},{name:"5",odds:9.90,key_s:"ip_3007-5"},{name:"6",odds:9.90,key_s:"ip_3007-6"},{name:"7",odds:9.90,key_s:"ip_3007-7"},{name:"8",odds:9.90,key_s:"ip_3007-8"},{name:"9",odds:9.90,key_s:"ip_3007-9"},{name:"10",odds:9.90,key_s:"ip_3007-10"}]
    },
    {
      _name:"第八名",
      list:[{name:"1",odds:9.90,key_s:"ip_3008-1"},{name:"2",odds:9.90,key_s:"ip_3008-2"},{name:"3",odds:9.90,key_s:"ip_3008-3"},{name:"4",odds:9.90,key_s:"ip_3008-4"},{name:"5",odds:9.90,key_s:"ip_3008-5"},{name:"6",odds:9.90,key_s:"ip_3008-6"},{name:"7",odds:9.90,key_s:"ip_3008-7"},{name:"8",odds:9.90,key_s:"ip_3008-8"},{name:"9",odds:9.90,key_s:"ip_3008-9"},{name:"10",odds:9.90,key_s:"ip_3008-10"}]
    },
    {
      _name:"第九名",
      list:[{name:"1",odds:9.90,key_s:"ip_3009-1"},{name:"2",odds:9.90,key_s:"ip_3009-2"},{name:"3",odds:9.90,key_s:"ip_3009-3"},{name:"4",odds:9.90,key_s:"ip_3009-4"},{name:"5",odds:9.90,key_s:"ip_3009-5"},{name:"6",odds:9.90,key_s:"ip_3009-6"},{name:"7",odds:9.90,key_s:"ip_3009-7"},{name:"8",odds:9.90,key_s:"ip_3009-8"},{name:"9",odds:9.90,key_s:"ip_3009-9"},{name:"10",odds:9.90,key_s:"ip_3009-10"}]
    },
    {
      _name:"第十名",
      list:[{name:"1",odds:9.90,key_s:"ip_3010-1"},{name:"2",odds:9.90,key_s:"ip_3010-2"},{name:"3",odds:9.90,key_s:"ip_3010-3"},{name:"4",odds:9.90,key_s:"ip_3010-4"},{name:"5",odds:9.90,key_s:"ip_3010-5"},{name:"6",odds:9.90,key_s:"ip_3010-6"},{name:"7",odds:9.90,key_s:"ip_3010-7"},{name:"8",odds:9.90,key_s:"ip_3010-8"},{name:"9",odds:9.90,key_s:"ip_3010-9"},{name:"10",odds:9.90,key_s:"ip_3010-10"}]
    }]}


}}
let getLogin = () => {
  return 'http://jmyl888.com/newapi/GetLogin'
}
let getPeilv = () => {
  return 'http://jmyl888.com/newapi/GetTime'
}
let getUid = () => {
 let a = sessionStorage.getItem('im_token')
 if(a){
   console.log(a);
   let b = a.length-2
  return a.substr(1,b)
 }
 else{
  return false
 }

}
// 进入用户中心
let getmember = () => {
  return '/webapi/index.php?app=member&format=json&act=index&source=h5'
}
// 获取我的套餐列表
//两个参数  page_no page_size
let getMembermealList = () => {
  return '/webapi/index.php?app=member&act=meal&source=h5'
}
// 获取我的套餐详情
let getmyMealdetails = (order_sn) => {
  return `/webapi/index.php?act=meal_detail&app=member&source=h5&order_sn=${order_sn}`
}
// 判断是否登陆
let loginTrue = () => {
  return '/webapi/index.php?format=json&app=meal&act=check_login&source=h5'
}


// let loginTrue = () => {
//   let api = '/webapi/index.php?format=json&app=meal&act=check_login&source=h5';
//   return axios.get(api).then(res => {
//     return Promise.reject(res.data)
//   })
// }

/**获取favorite收藏列表接口调用请求说明  请求方式: GET
 * edit  add 添加收藏   del 删除收藏
 * favorite_type meal(套餐)project项目shop门店（商家）beautician美容师
 * value  对应上值的ID值
 *
 */
let favorite = () => {
  return '/webapi/index.php?app=favorite&act=index&source=h5'
}
// 充值中心
let getBalance = () => {
  return '/webapi/index.php?app=member&act=purse&source=h5' // 获取余额
}

/**
 * 套餐下单
 * meal_id 套餐 id
 * num  购买数量
 * total_price 总价格
 */
let placeOrderMeal = () => {
  return '/webapi/index.php?app=cart&act=add_meal&source=h5'
}
/**
 * 套餐   支付
 * @param {*} order_sn 生成的订单号
 * @param {*} paytype  支付方式
 */
let mealPay = (order_sn, paytype = 0) => {
  if (paytype == 0) {
    // console.log("余额")
    return `/webapi/index.php?app=cart&act=balance_pay&source=h5&order_sn=${order_sn}`
  }
  if (paytype == 1) {
    console.log("支付宝")
    return `http://m.ivymei.com/index.php?/pay/do_alipay/${order_sn}`
  }
  if (paytype == 2) {
    //console.log("微信")
    return `http://www.ivymei.com/pay/jsapi.php?pay_order_sn=${order_sn}`
  }

}

export {
  // 首页轮播图
  getBanner,
  // 根据地区获取门店列表
  getShopList,
  // 门店列表详情
  shopListDet,
  // 热门项目
  getHotProject,
  // 项目列表
  getProjectItems,
  // 项目详情
  getProjectDet,
  // 套餐列表
  getMealList,
  // 套餐详情
  getMealListDet,
  // 评论
  getComment,
  // 登陆
  getLogin,
  //获取uid
  getUid,
  // 获取赔率
  getPeilv,
  // 进入用户中心
  getmember,
  // 会员中心套餐列表
  getMembermealList,
  // 我的套餐详情
  getmyMealdetails,
  // 判断是否登陆
  loginTrue,
  // 充值中心
  getBalance,
  // 套餐下单
  placeOrderMeal,
  // 项目下单
  getProjectMsg,
  // 床位预约 时间
  getCartTime,
  //选中门店显示到门店栏
  getShop,
  // 套餐支付
  mealPay,
  // 收藏列表
  favorite,

  getBjpk,

}
