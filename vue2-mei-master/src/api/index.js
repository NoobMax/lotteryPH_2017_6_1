import axios from 'axios'

export default {

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

let getCartTime = (day, Shop_id) => {
  return `/webapi/index.php?format=json&app=cart&act=time&day=${day}&shop_id=${Shop_id}`
}
let getShop = () => {
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
  return `/webapi/index.php?app=project&act=info_list&page_no=${pageNo}&page_size=${page_size}${shop_id
    ? '&shop_' + shop_id
    : ''}`

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
//香港六合彩

let getXglhc = () => {
  return {
    tma: {
      name: "特A",
      body: [{
        _name: "特A",
        list: [
          {
            group: "特A",
            isCheck: false,
            name: 1,
            odds: 42,
            key_s: "ip_1"
          },
          {
            group: "特A",
            isCheck: false,
            name: 2,
            odds: 42,
            key_s: "ip_2"
          },
          {
            group: "特A",
            isCheck: false,
            name: 3,
            odds: 42,
            key_s: "ip_3"
          },
          {
            group: "特A",
            isCheck: false,
            name: 4,
            odds: "42",
            key_s: "ip_4"
          },
          {
            group: "特A",
            isCheck: false,
            name: 5,
            odds: 42,
            key: "ip_5"
          },
          {
            group: "特A",
            isCheck: false,
            name: 6,
            odds: 42,
            key_s: "ip_6"
          },
          {
            group: "特A",
            isCheck: false,
            name: 7,
            odds: 42,
            key_s: "ip_7"
          },
          {
            group: "特A",
            isCheck: false,
            name: 8,
            odds: 42,
            key_s: "ip_8"
          },
          {
            group: "特A",
            isCheck: false,
            name: 9,
            odds: 42,
            key_s: "ip_9"
          },
          {
            group: "特A",
            isCheck: false,
            name: 10,
            odds: 42,
            key_s: "ip_10"
          },
          {
            group: "特A",
            isCheck: false,
            name: 11,
            odds: 42,
            key_s: "ip_11"
          },
          {
            group: "特A",
            isCheck: false,
            name: 12,
            odds: 42,
            key_s: "ip_12"
          },
          {
            group: "特A",
            isCheck: false,
            name: 13,
            odds: "42",
            key_s: "ip_13"
          },
          {
            group: "特A",
            isCheck: false,
            name: 14,
            odds: 42,
            key_s: "ip_14"
          },
          {
            group: "特A",
            isCheck: false,
            name: 15,
            odds: 42,
            key_s: "ip_15"
          },
          {
            group: "特A",
            isCheck: false,
            name: 16,
            odds: 42,
            key_s: "ip_16"
          },
          {
            group: "特A",
            isCheck: false,
            name: 17,
            odds: 42,
            key_s: "ip_17"
          },
          {
            group: "特A",
            isCheck: false,
            name: 18,
            odds: 42,
            key_s: "ip_18"
          },
          {
            group: "特A",
            isCheck: false,
            name: 19,
            odds: 42,
            key_s: "ip_19"
          },
          {
            group: "特A",
            isCheck: false,
            name: 20,
            odds: 42,
            key_s: "ip_20"
          },
          {
            group: "特A",
            isCheck: false,
            name: 21,
            odds: 42,
            key_s: "ip_21"
          },
          {
            group: "特A",
            isCheck: false,
            name: 22,
            odds: 42,
            key_s: "ip_22"
          },
          {
            group: "特A",
            isCheck: false,
            name: 23,
            odds: 42,
            key_s: "ip_23"
          },
          {
            group: "特A",
            isCheck: false,
            name: 24,
            odds: 42,
            key_s: "ip_24"
          },
          {
            group: "特A",
            isCheck: false,
            name: 25,
            odds: 42,
            key_s: "ip_25"
          },
          {
            group: "特A",
            isCheck: false,
            name: 26,
            odds: 42,
            key_s: "ip_26"
          },
          {
            group: "特A",
            isCheck: false,
            name: 27,
            odds: 42,
            key_s: "ip_27"
          },
          {
            group: "特A",
            isCheck: false,
            name: 28,
            odds: 42,
            key_s: "ip_28"
          },
          {
            group: "特A",
            isCheck: false,
            name: 29,
            odds: 42,
            key_s: "ip_29"
          },
          {
            group: "特A",
            isCheck: false,
            name: 30,
            odds: 42,
            key_s: "ip_30"
          },
          {
            group: "特A",
            isCheck: false,
            name: 31,
            odds: 42,
            key_s: "ip_31"
          },
          {
            group: "特A",
            isCheck: false,
            name: 32,
            odds: 42,
            key_s: "ip_32"
          },
          {
            group: "特A",
            isCheck: false,
            name: 33,
            odds: 42,
            key_s: "ip_33"
          },
          {
            group: "特A",
            isCheck: false,
            name: 34,
            odds: 42,
            key_s: "ip_34"
          },
          {
            group: "特A",
            isCheck: false,
            name: 35,
            odds: 42,
            key_s: "ip_35"
          },
          {
            group: "特A",
            isCheck: false,
            name: 36,
            odds: 42,
            key_s: "ip_36"
          },
          {
            group: "特A",
            isCheck: false,
            name: 37,
            odds: 42,
            key_s: "ip_37"
          },
          {
            group: "特A",
            isCheck: false,
            name: 38,
            odds: 42,
            key_s: "ip_38"
          },
          {
            group: "特A",
            isCheck: false,
            name: 39,
            odds: 42,
            key_s: "ip_39"
          },
          {
            group: "特A",
            isCheck: false,
            name: 40,
            odds: 42,
            key_s: "ip_40"
          },
          {
            group: "特A",
            isCheck: false,
            name: 41,
            odds: 42,
            key_s: "ip_41"
          },
          {
            group: "特A",
            isCheck: false,
            name: 42,
            odds: 42,
            key_s: "ip_42"
          },
          {
            group: "特A",
            isCheck: false,
            name: 43,
            odds: 42,
            key_s: "ip_43"
          },
          {
            group: "特A",
            isCheck: false,
            name: 44,
            odds: 42,
            key_s: "ip_44"
          },
          {
            group: "特A",
            isCheck: false,
            name: 45,
            odds: 42,
            key_s: "ip_45"
          },
          {
            group: "特A",
            isCheck: false,
            name: 46,
            odds: 42,
            key_s: "ip_46"
          },
          {
            group: "特A",
            isCheck: false,
            name: 47,
            odds: 42,
            key_s: "ip_47"
          },
          {
            group: "特A",
            isCheck: false,
            name: 48,
            odds: 42,
            key_s: "ip_48"
          },
          {
            group: "特A",
            isCheck: false,
            name: 49,
            odds: "42",
            key_s: "ip_49"
          }
        ]
      }]


    },
    tmb: {
      name: '特码',
      body: [{
        _name: '特B',
        list: [

          {
            group: "特B",
            isCheck: false,
            name: "1",
            odds: 48,
            key_s: "ip_59"
          },
          {
            group: "特B",
            isCheck: false,
            name: "2",
            odds: 48.8,
            key_s: "ip_60"
          },
          {
            group: "特B",
            isCheck: false,
            name: "3",
            odds: 48.8,
            key_s: "ip_61"
          },
          {
            group: "特B",
            isCheck: false,
            name: "4",
            odds: 48.8,
            key_s: "ip_62"
          },
          {
            group: "特B",
            isCheck: false,
            name: "5",
            odds: 48.8,
            key_s: "ip_63"
          },
          {
            group: "特B",
            isCheck: false,
            name: "6",
            odds: 48.8,
            key_s: "ip_64"
          },
          {
            group: "特B",
            isCheck: false,
            name: "7",
            odds: 48.8,
            key_s: "ip_65"
          },
          {
            group: "特B",
            isCheck: false,
            name: "8",
            odds: 48.8,
            key_s: "ip_66"
          },
          {
            group: "特B",
            isCheck: false,
            name: "9",
            odds: 48.8,
            key_s: "ip_67"
          },
          {
            group: "特B",
            isCheck: false,
            name: "10",
            odds: 48.8,
            key_s: "ip_68"
          },
          {
            group: "特B",
            isCheck: false,
            name: "11",
            odds: 48.8,
            key_s: "ip_69"
          },
          {
            group: "特B",
            isCheck: false,
            name: "12",
            odds: 48.8,
            key_s: "ip_70"
          },
          {
            group: "特B",
            isCheck: false,
            name: "13",
            odds: 48.8,
            key_s: "ip_71"
          },
          {
            group: "特B",
            isCheck: false,
            name: "14",
            odds: 48.8,
            key_s: "ip_72"
          },
          {
            group: "特B",
            isCheck: false,
            name: "15",
            odds: 48.8,
            key_s: "ip_73"
          },
          {
            group: "特B",
            isCheck: false,
            name: "16",
            odds: 48.8,
            key_s: "ip_74"
          },
          {
            group: "特B",
            isCheck: false,
            name: "17",
            odds: 48.8,
            key_s: "ip_75"
          },
          {
            group: "特B",
            isCheck: false,
            name: "18",
            odds: 48.8,
            key_s: "ip_76"
          },
          {
            group: "特B",
            isCheck: false,
            name: "19",
            odds: 48.8,
            key_s: "ip_77"
          },
          {
            group: "特B",
            isCheck: false,
            name: "20",
            odds: 48.8,
            key_s: "ip_78"
          },
          {
            group: "特B",
            isCheck: false,
            name: "21",
            odds: 48.8,
            key_s: "ip_79"
          },
          {
            group: "特B",
            isCheck: false,
            name: "22",
            odds: 48.8,
            key_s: "ip_80"
          },
          {
            group: "特B",
            isCheck: false,
            name: "23",
            odds: 48.8,
            key_s: "ip_81"
          },
          {
            group: "特B",
            isCheck: false,
            name: "24",
            odds: 48.8,
            key_s: "ip_82"
          },
          {
            group: "特B",
            isCheck: false,
            name: "25",
            odds: 48.8,
            key_s: "ip_83"
          },
          {
            group: "特B",
            isCheck: false,
            name: "26",
            odds: 48.8,
            key_s: "ip_84"
          },
          {
            group: "特B",
            isCheck: false,
            name: "27",
            odds: 48.8,
            key_s: "ip_85"
          },
          {
            group: "特B",
            isCheck: false,
            name: "28",
            odds: 48.8,
            key_s: "ip_86"
          },
          {
            group: "特B",
            isCheck: false,
            name: "29",
            odds: 48.8,
            key_s: "ip_87"
          },
          {
            group: "特B",
            isCheck: false,
            name: "30",
            odds: 48.8,
            key_s: "ip_88"
          },
          {
            group: "特B",
            isCheck: false,
            name: "31",
            odds: 48.8,
            key_s: "ip_89"
          },
          {
            group: "特B",
            isCheck: false,
            name: "32",
            odds: 48.8,
            key_s: "ip_90"
          },
          {
            group: "特B",
            isCheck: false,
            name: "33",
            odds: 48.8,
            key_s: "ip_91"
          },
          {
            group: "特B",
            isCheck: false,
            name: "34",
            odds: 48.8,
            key_s: "ip_92"
          },
          {
            group: "特B",
            isCheck: false,
            name: "35",
            odds: 48.8,
            key_s: "ip_93"
          },
          {
            group: "特B",
            isCheck: false,
            name: "36",
            odds: 48.8,
            key_s: "ip_94"
          },
          {
            group: "特B",
            isCheck: false,
            name: "37",
            odds: 48.8,
            key_s: "ip_95"
          },
          {
            group: "特B",
            isCheck: false,
            name: "38",
            odds: 48.8,
            key_s: "ip_96"
          },
          {
            group: "特B",
            isCheck: false,
            name: "39",
            odds: 48.8,
            key_s: "ip_97"
          },
          {
            group: "特B",
            isCheck: false,
            name: "40",
            odds: 48.8,
            key_s: "ip_98"
          },
          {
            group: "特B",
            isCheck: false,
            name: "41",
            odds: 48.8,
            key_s: "ip_99"
          },
          {
            group: "特B",
            isCheck: false,
            name: "42",
            odds: 48.8,
            key_s: "ip_100"
          },
          {
            group: "特B",
            isCheck: false,
            name: "43",
            odds: 48.8,
            key_s: "ip_101"
          },
          {
            group: "特B",
            isCheck: false,
            name: "44",
            odds: 48.8,
            key_s: "ip_102"
          },
          {
            group: "特B",
            isCheck: false,
            name: "45",
            odds: 48.8,
            key_s: "ip_103"
          },
          {
            group: "特B",
            isCheck: false,
            name: "46",
            odds: 48.8,
            key_s: "ip_104"
          },
          {
            group: "特B",
            isCheck: false,
            name: "47",
            odds: 48.8,
            key_s: "ip_105"
          },
          {
            group: "特B",
            isCheck: false,
            name: "48",
            odds: 48.8,
            key_s: "ip_106"
          },
          {
            group: "特B",
            isCheck: false,
            name: "49",
            odds: 48.8,
            key_s: "ip_107"
          }
        ]
      }
      ]
    },
    zhma: {
      name: '正码',
      body: [{
        _name: '正A',
        list: [

          {
            group: "正A",
            isCheck: false,
            name: "1",
            odds: 7.21,
            key_s: "ip_465"
          },
          {
            group: "正A",
            isCheck: false,
            name: "2",
            odds: 7.21,
            key_s: "ip_466"
          },
          {
            group: "正A",
            isCheck: false,
            name: "3",
            odds: 7.21,
            key_s: "ip_467"
          },
          {
            group: "正A",
            isCheck: false,
            name: "4",
            odds: 7.21,
            key_s: "ip_468"
          },
          {
            group: "正A",
            isCheck: false,
            name: "5",
            odds: 7.21,
            key_s: "ip_469"
          },
          {
            group: "正A",
            isCheck: false,
            name: "6",
            odds: 7.21,
            key_s: "ip_470"
          },
          {
            group: "正A",
            isCheck: false,
            name: "7",
            odds: 7.21,
            key_s: "ip_471"
          },
          {
            group: "正A",
            isCheck: false,
            name: "8",
            odds: 7.21,
            key_s: "ip_472"
          },
          {
            group: "正A",
            isCheck: false,
            name: "9",
            odds: 7.21,
            key_s: "ip_473"
          },
          {
            group: "正A",
            isCheck: false,
            name: "10",
            odds: 7.21,
            key_s: "ip_474"
          },
          {
            group: "正A",
            isCheck: false,
            name: "11",
            odds: 7.21,
            key_s: "ip_475"
          },
          {
            group: "正A",
            isCheck: false,
            name: "12",
            odds: 7.21,
            key_s: "ip_476"
          },
          {
            group: "正A",
            isCheck: false,
            name: "13",
            odds: 7.21,
            key_s: "ip_477"
          },
          {
            group: "正A",
            isCheck: false,
            name: "14",
            odds: 7.21,
            key_s: "ip_478"
          },
          {
            group: "正A",
            isCheck: false,
            name: "15",
            odds: 7.21,
            key_s: "ip_479"
          },
          {
            group: "正A",
            isCheck: false,
            name: "16",
            odds: 7.21,
            key_s: "ip_480"
          },
          {
            group: "正A",
            isCheck: false,
            name: "17",
            odds: 7.21,
            key_s: "ip_481"
          },
          {
            group: "正A",
            isCheck: false,
            name: "18",
            odds: 7.21,
            key_s: "ip_482"
          },
          {
            group: "正A",
            isCheck: false,
            name: "19",
            odds: 7.21,
            key_s: "ip_483"
          },
          {
            group: "正A",
            isCheck: false,
            name: "20",
            odds: 7.21,
            key_s: "ip_484"
          },
          {
            group: "正A",
            isCheck: false,
            name: "21",
            odds: 7.21,
            key_s: "ip_485"
          },
          {
            group: "正A",
            isCheck: false,
            name: "22",
            odds: 7.21,
            key_s: "ip_486"
          },
          {
            group: "正A",
            isCheck: false,
            name: "23",
            odds: 7.21,
            key_s: "ip_487"
          },
          {
            group: "正A",
            isCheck: false,
            name: "24",
            odds: 7.21,
            key_s: "ip_488"
          },
          {
            group: "正A",
            isCheck: false,
            name: "25",
            odds: 7.21,
            key_s: "ip_489"
          },
          {
            group: "正A",
            isCheck: false,
            name: "26",
            odds: 7.21,
            key_s: "ip_490"
          },
          {
            group: "正A",
            isCheck: false,
            name: "27",
            odds: 7.21,
            key_s: "ip_491"
          },
          {
            group: "正A",
            isCheck: false,
            name: "28",
            odds: 7.21,
            key_s: "ip_492"
          },
          {
            group: "正A",
            isCheck: false,
            name: "29",
            odds: 7.21,
            key_s: "ip_493"
          },
          {
            group: "正A",
            isCheck: false,
            name: "30",
            odds: 7.21,
            key_s: "ip_494"
          },
          {
            group: "正A",
            isCheck: false,
            name: "31",
            odds: 7.21,
            key_s: "ip_495"
          },
          {
            group: "正A",
            isCheck: false,
            name: "32",
            odds: 7.21,
            key_s: "ip_496"
          },
          {
            group: "正A",
            isCheck: false,
            name: "33",
            odds: 7.21,
            key_s: "ip_497"
          },
          {
            group: "正A",
            isCheck: false,
            name: "34",
            odds: 7.21,
            key_s: "ip_498"
          },
          {
            group: "正A",
            isCheck: false,
            name: "35",
            odds: 7.21,
            key_s: "ip_499"
          },
          {
            group: "正A",
            isCheck: false,
            name: "36",
            odds: 7.21,
            key_s: "ip_500"
          },
          {
            group: "正A",
            isCheck: false,
            name: "37",
            odds: 7.21,
            key_s: "ip_501"
          },
          {
            group: "正A",
            isCheck: false,
            name: "38",
            odds: 7.21,
            key_s: "ip_502"
          },
          {
            group: "正A",
            isCheck: false,
            name: "39",
            odds: 7.21,
            key_s: "ip_503"
          },
          {
            group: "正A",
            isCheck: false,
            name: "40",
            odds: 7.21,
            key_s: "ip_504"
          },
          {
            group: "正A",
            isCheck: false,
            name: "41",
            odds: 7.21,
            key_s: "ip_505"
          },
          {
            group: "正A",
            isCheck: false,
            name: "42",
            odds: 7.21,
            key_s: "ip_506"
          },
          {
            group: "正A",
            isCheck: false,
            name: "43",
            odds: 7.21,
            key_s: "ip_507"
          },
          {
            group: "正A",
            isCheck: false,
            name: "44",
            odds: 7.21,
            key_s: "ip_508"
          },
          {
            group: "正A",
            isCheck: false,
            name: "45",
            odds: 7.21,
            key_s: "ip_509"
          },
          {
            group: "正A",
            isCheck: false,
            name: "46",
            odds: 7.21,
            key_s: "ip_510"
          },
          {
            group: "正A",
            isCheck: false,
            name: "47",
            odds: 7.21,
            key_s: "ip_511"
          },
          {
            group: "正A",
            isCheck: false,
            name: "48",
            odds: 7.21,
            key_s: "ip_512"
          },
          {
            group: "正A",
            isCheck: false,
            name: "49",
            odds: 7.21,
            key_s: "ip_513"
          }
        ]
      },
      {
        _name: '大小单双',
        list: [
          {
            group: "号码投注",
            isCheck: false,
            name: "总单",
            odds: 1.965,
            key_s: "ip_514"
          },
          {
            group: "号码投注",
            isCheck: false,
            name: "总双",
            odds: 1.965,
            key_s: "ip_515"
          },
          {
            group: "号码投注",
            isCheck: false,
            name: "总大",
            odds: 1.965,
            key_s: "ip_516"
          },
          {
            group: "号码投注",
            isCheck: false,
            name: "总小",
            odds: 1.965,
            key_s: "ip_517"
          }
        ]
      }
      ]
    },
    zhmb: {
      name: '正码',
      body: [{
        _name: '正B',
        list: [

          {
            group: "正B",
            isCheck: false,
            name: "1",
            odds: 7.21,
            key_s: "ip_518"
          },
          {
            group: "正B",
            isCheck: false,
            name: "2",
            odds: 7.21,
            key_s: "ip_519"
          },
          {
            group: "正B",
            isCheck: false,
            name: "3",
            odds: 7.21,
            key_s: "ip_520"
          },
          {
            group: "正B",
            isCheck: false,
            name: "4",
            odds: 7.21,
            key_s: "ip_521"
          },
          {
            group: "正B",
            isCheck: false,
            name: "5",
            odds: 7.21,
            key_s: "ip_522"
          },
          {
            group: "正B",
            isCheck: false,
            name: "6",
            odds: 7.21,
            key_s: "ip_523"
          },
          {
            group: "正B",
            isCheck: false,
            name: "7",
            odds: 7.21,
            key_s: "ip_524"
          },
          {
            group: "正B",
            isCheck: false,
            name: "8",
            odds: 7.21,
            key_s: "ip_525"
          },
          {
            group: "正B",
            isCheck: false,
            name: "9",
            odds: 7.21,
            key_s: "ip_526"
          },
          {
            group: "正B",
            isCheck: false,
            name: "10",
            odds: 7.21,
            key_s: "ip_527"
          },
          {
            group: "正B",
            isCheck: false,
            name: "11",
            odds: 7.21,
            key_s: "ip_528"
          },
          {
            group: "正B",
            isCheck: false,
            name: "12",
            odds: 7.21,
            key_s: "ip_529"
          },
          {
            group: "正B",
            isCheck: false,
            name: "13",
            odds: 7.21,
            key_s: "ip_530"
          },
          {
            group: "正B",
            isCheck: false,
            name: "14",
            odds: 7.21,
            key_s: "ip_531"
          },
          {
            group: "正B",
            isCheck: false,
            name: "15",
            odds: 7.21,
            key_s: "ip_532"
          },
          {
            group: "正B",
            isCheck: false,
            name: "16",
            odds: 7.21,
            key_s: "ip_533"
          },
          {
            group: "正B",
            isCheck: false,
            name: "17",
            odds: 7.21,
            key_s: "ip_534"
          },
          {
            group: "正B",
            isCheck: false,
            name: "18",
            odds: 7.21,
            key_s: "ip_535"
          },
          {
            group: "正B",
            isCheck: false,
            name: "19",
            odds: 7.21,
            key_s: "ip_536"
          },
          {
            group: "正B",
            isCheck: false,
            name: "20",
            odds: 7.21,
            key_s: "ip_537"
          },
          {
            group: "正B",
            isCheck: false,
            name: "21",
            odds: 7.21,
            key_s: "ip_538"
          },
          {
            group: "正B",
            isCheck: false,
            name: "22",
            odds: 7.21,
            key_s: "ip_539"
          },
          {
            group: "正B",
            isCheck: false,
            name: "23",
            odds: 7.21,
            key_s: "ip_540"
          },
          {
            group: "正B",
            isCheck: false,
            name: "24",
            odds: 7.21,
            key_s: "ip_541"
          },
          {
            group: "正B",
            isCheck: false,
            name: "25",
            odds: 7.21,
            key_s: "ip_542"
          },
          {
            group: "正B",
            isCheck: false,
            name: "26",
            odds: 7.21,
            key_s: "ip_543"
          },
          {
            group: "正B",
            isCheck: false,
            name: "27",
            odds: 7.21,
            key_s: "ip_544"
          },
          {
            group: "正B",
            isCheck: false,
            name: "28",
            odds: 7.21,
            key_s: "ip_545"
          },
          {
            group: "正B",
            isCheck: false,
            name: "29",
            odds: 7.21,
            key_s: "ip_546"
          },
          {
            group: "正B",
            isCheck: false,
            name: "30",
            odds: 7.21,
            key_s: "ip_547"
          },
          {
            group: "正B",
            isCheck: false,
            name: "31",
            odds: 7.21,
            key_s: "ip_548"
          },
          {
            group: "正B",
            isCheck: false,
            name: "32",
            odds: 7.21,
            key_s: "ip_549"
          },
          {
            group: "正B",
            isCheck: false,
            name: "33",
            odds: 7.21,
            key_s: "ip_550"
          },
          {
            group: "正B",
            isCheck: false,
            name: "34",
            odds: 7.21,
            key_s: "ip_551"
          },
          {
            group: "正B",
            isCheck: false,
            name: "35",
            odds: 7.21,
            key_s: "ip_552"
          },
          {
            group: "正B",
            isCheck: false,
            name: "36",
            odds: 7.21,
            key_s: "ip_553"
          },
          {
            group: "正B",
            isCheck: false,
            name: "37",
            odds: 7.21,
            key_s: "ip_554"
          },
          {
            group: "正B",
            isCheck: false,
            name: "38",
            odds: 7.21,
            key_s: "ip_555"
          },
          {
            group: "正B",
            isCheck: false,
            name: "39",
            odds: 7.21,
            key_s: "ip_556"
          },
          {
            group: "正B",
            isCheck: false,
            name: "40",
            odds: 7.21,
            key_s: "ip_557"
          },
          {
            group: "正B",
            isCheck: false,
            name: "41",
            odds: 7.21,
            key_s: "ip_558"
          },
          {
            group: "正B",
            isCheck: false,
            name: "42",
            odds: 7.21,
            key_s: "ip_559"
          },
          {
            group: "正B",
            isCheck: false,
            name: "43",
            odds: 7.21,
            key_s: "ip_560"
          },
          {
            group: "正B",
            isCheck: false,
            name: "44",
            odds: 7.21,
            key_s: "ip_561"
          },
          {
            group: "正B",
            isCheck: false,
            name: "45",
            odds: 7.21,
            key_s: "ip_562"
          },
          {
            group: "正B",
            isCheck: false,
            name: "46",
            odds: 7.21,
            key_s: "ip_563"
          },
          {
            group: "正B",
            isCheck: false,
            name: "47",
            odds: 7.21,
            key_s: "ip_564"
          },
          {
            group: "正B",
            isCheck: false,
            name: "48",
            odds: 7.21,
            key_s: "ip_565"
          },
          {
            group: "正B",
            isCheck: false,
            name: "49",
            odds: 7.21,
            key_s: "ip_566"
          }
        ]
      },
      {
        _name: '大小单双',
        list: [
          {
            group: "号码投注",
            isCheck: false,
            name: "总单",
            odds: 1.965,
            key_s: "ip_567"
          },
          {
            group: "号码投注",
            isCheck: false,
            name: "总双",
            odds: 1.965,
            key_s: "ip_568"
          },
          {
            group: "号码投注",
            isCheck: false,
            name: "总大",
            odds: 1.965,
            key_s: "ip_569"
          },
          {
            group: "号码投注",
            isCheck: false,
            name: "总小",
            odds: 1.965,
            key_s: "ip_570"
          }
        ]
      }
      ]
    },
    tm1: {
      name: '正码特',
      body: [{
        _name: '正1特',
        list: [{
          "name": 1,
          "odds": "42",
          "key_s": "ip_117",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 2,
          "odds": "42",
          "key_s": "ip_118",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 3,
          "odds": "42",
          "key_s": "ip_119",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 4,
          "odds": "42",
          "key_s": "ip_120",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 5,
          "odds": "42",
          "key_s": "ip_121",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 6,
          "odds": "42",
          "key_s": "ip_122",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 7,
          "odds": "42",
          "key_s": "ip_123",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 8,
          "odds": "42",
          "key_s": "ip_124",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 9,
          "odds": "42",
          "key_s": "ip_125",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 10,
          "odds": "42",
          "key_s": "ip_126",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 11,
          "odds": "42",
          "key_s": "ip_127",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 12,
          "odds": "42",
          "key_s": "ip_128",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 13,
          "odds": "42",
          "key_s": "ip_129",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 14,
          "odds": "42",
          "key_s": "ip_130",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 15,
          "odds": "42",
          "key_s": "ip_131",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 16,
          "odds": "42",
          "key_s": "ip_132",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 17,
          "odds": "42",
          "key_s": "ip_133",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 18,
          "odds": "42",
          "key_s": "ip_134",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 19,
          "odds": "42",
          "key_s": "ip_135",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 20,
          "odds": "42",
          "key_s": "ip_136",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 21,
          "odds": "42",
          "key_s": "ip_137",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 22,
          "odds": "42",
          "key_s": "ip_138",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 23,
          "odds": "42",
          "key_s": "ip_139",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 24,
          "odds": "42",
          "key_s": "ip_140",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 25,
          "odds": "42",
          "key_s": "ip_141",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 26,
          "odds": "42",
          "key_s": "ip_142",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 27,
          "odds": "42",
          "key_s": "ip_143",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 28,
          "odds": "42",
          "key_s": "ip_144",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 29,
          "odds": "42",
          "key_s": "ip_145",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 30,
          "odds": "42",
          "key_s": "ip_146",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 31,
          "odds": "42",
          "key_s": "ip_147",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 32,
          "odds": "42",
          "key_s": "ip_148",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 33,
          "odds": "42",
          "key_s": "ip_149",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 34,
          "odds": "42",
          "key_s": "ip_150",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 35,
          "odds": "42",
          "key_s": "ip_151",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 36,
          "odds": "42",
          "key_s": "ip_152",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 37,
          "odds": "42",
          "key_s": "ip_153",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 38,
          "odds": "42",
          "key_s": "ip_154",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 39,
          "odds": "42",
          "key_s": "ip_155",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 40,
          "odds": "42",
          "key_s": "ip_156",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 41,
          "odds": "42",
          "key_s": "ip_157",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 42,
          "odds": "42",
          "key_s": "ip_158",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 43,
          "odds": "42",
          "key_s": "ip_159",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 44,
          "odds": "42",
          "key_s": "ip_160",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 45,
          "odds": "42",
          "key_s": "ip_161",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 46,
          "odds": "42",
          "key_s": "ip_162",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 47,
          "odds": "42",
          "key_s": "ip_163",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 48,
          "odds": "42",
          "key_s": "ip_164",
          "group": "正1特",
          "isCheck": false
        }, {
          "name": 49,
          "odds": "42",
          "key_s": "ip_165",
          "group": "正1特",
          "isCheck": false
        }
        ]
      },
      {
        _name: '大小单双',
        list: [

          {
            group: "大小单双",
            isCheck: false,
            name: "单",
            odds: 1.965,
            key_s: "ip_166"
          },
          {
            group: "大小单双",
            isCheck: false,
            name: "双",
            odds: 1.965,
            key_s: "ip_167"
          },
          {
            group: "大小单双",
            isCheck: false,
            name: "大",
            odds: 1.965,
            key_s: "ip_168"
          },
          {
            group: "大小单双",
            isCheck: false,
            name: "小",
            odds: 1.965,
            key_s: "ip_169"
          },
          {
            group: "大小单双",
            isCheck: false,
            name: "合单",
            odds: 1.965,
            key_s: "ip_170"
          },
          {
            group: "大小单双",
            isCheck: false,
            name: "合双",
            odds: 1.965,
            key_s: "ip_171"
          },
          {
            group: "大小单双",
            isCheck: false,
            name: "红波",
            odds: 2.7,
            key_s: "ip_172"
          },
          {
            group: "大小单双",
            isCheck: false,
            name: "绿波",
            odds: 2.9,
            key_s: "ip_173"
          },
          {
            group: "大小单双",
            isCheck: false,
            name: "蓝波",
            odds: 2.9,
            key_s: "ip_174"
          }
        ]
      }
      ]
    },
    tm2: {
    					name: '正码特',
    					body: [{
    						_name: '正2特',
    						list: [{ "name": 1, "odds": "42", "key_s": "ip_175", "group": "正2特", "isCheck": false }, { "name": 2, "odds": "42", "key_s": "ip_176", "group": "正2特", "isCheck": false }, { "name": 3, "odds": "42", "key_s": "ip_177", "group": "正2特", "isCheck": false }, { "name": 4, "odds": "42", "key_s": "ip_178", "group": "正2特", "isCheck": false }, { "name": 5, "odds": "42", "key_s": "ip_179", "group": "正2特", "isCheck": false }, { "name": 6, "odds": "42", "key_s": "ip_180", "group": "正2特", "isCheck": false }, { "name": 7, "odds": "42", "key_s": "ip_181", "group": "正2特", "isCheck": false }, { "name": 8, "odds": "42", "key_s": "ip_182", "group": "正2特", "isCheck": false }, { "name": 9, "odds": "42", "key_s": "ip_183", "group": "正2特", "isCheck": false }, { "name": 10, "odds": "42", "key_s": "ip_184", "group": "正2特", "isCheck": false }, { "name": 11, "odds": "42", "key_s": "ip_185", "group": "正2特", "isCheck": false }, { "name": 12, "odds": "42", "key_s": "ip_186", "group": "正2特", "isCheck": false }, { "name": 13, "odds": "42", "key_s": "ip_187", "group": "正2特", "isCheck": false }, { "name": 14, "odds": "42", "key_s": "ip_188", "group": "正2特", "isCheck": false }, { "name": 15, "odds": "42", "key_s": "ip_189", "group": "正2特", "isCheck": false }, { "name": 16, "odds": "42", "key_s": "ip_190", "group": "正2特", "isCheck": false }, { "name": 17, "odds": "42", "key_s": "ip_191", "group": "正2特", "isCheck": false }, { "name": 18, "odds": "42", "key_s": "ip_192", "group": "正2特", "isCheck": false }, { "name": 19, "odds": "42", "key_s": "ip_193", "group": "正2特", "isCheck": false }, { "name": 20, "odds": "42", "key_s": "ip_194", "group": "正2特", "isCheck": false }, { "name": 21, "odds": "42", "key_s": "ip_195", "group": "正2特", "isCheck": false }, { "name": 22, "odds": "42", "key_s": "ip_196", "group": "正2特", "isCheck": false }, { "name": 23, "odds": "42", "key_s": "ip_197", "group": "正2特", "isCheck": false }, { "name": 24, "odds": "42", "key_s": "ip_198", "group": "正2特", "isCheck": false }, { "name": 25, "odds": "42", "key_s": "ip_199", "group": "正2特", "isCheck": false }, { "name": 26, "odds": "42", "key_s": "ip_200", "group": "正2特", "isCheck": false }, { "name": 27, "odds": "42", "key_s": "ip_201", "group": "正2特", "isCheck": false }, { "name": 28, "odds": "42", "key_s": "ip_202", "group": "正2特", "isCheck": false }, { "name": 29, "odds": "42", "key_s": "ip_203", "group": "正2特", "isCheck": false }, { "name": 30, "odds": "42", "key_s": "ip_204", "group": "正2特", "isCheck": false }, { "name": 31, "odds": "42", "key_s": "ip_205", "group": "正2特", "isCheck": false }, { "name": 32, "odds": "42", "key_s": "ip_206", "group": "正2特", "isCheck": false }, { "name": 33, "odds": "42", "key_s": "ip_207", "group": "正2特", "isCheck": false }, { "name": 34, "odds": "42", "key_s": "ip_208", "group": "正2特", "isCheck": false }, { "name": 35, "odds": "42", "key_s": "ip_209", "group": "正2特", "isCheck": false }, { "name": 36, "odds": "42", "key_s": "ip_210", "group": "正2特", "isCheck": false }, { "name": 37, "odds": "42", "key_s": "ip_211", "group": "正2特", "isCheck": false }, { "name": 38, "odds": "42", "key_s": "ip_212", "group": "正2特", "isCheck": false }, { "name": 39, "odds": "42", "key_s": "ip_213", "group": "正2特", "isCheck": false }, { "name": 40, "odds": "42", "key_s": "ip_214", "group": "正2特", "isCheck": false }, { "name": 41, "odds": "42", "key_s": "ip_215", "group": "正2特", "isCheck": false }, { "name": 42, "odds": "42", "key_s": "ip_216", "group": "正2特", "isCheck": false }, { "name": 43, "odds": "42", "key_s": "ip_217", "group": "正2特", "isCheck": false }, { "name": 44, "odds": "42", "key_s": "ip_218", "group": "正2特", "isCheck": false }, { "name": 45, "odds": "42", "key_s": "ip_219", "group": "正2特", "isCheck": false }, { "name": 46, "odds": "42", "key_s": "ip_220", "group": "正2特", "isCheck": false }, { "name": 47, "odds": "42", "key_s": "ip_221", "group": "正2特", "isCheck": false }, { "name": 48, "odds": "42", "key_s": "ip_222", "group": "正2特", "isCheck": false }, { "name": 49, "odds": "42", "key_s": "ip_223", "group": "正2特", "isCheck": false }]

    					},
    					{
    						_name: '大小单双',
    						list: [

    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "单",
    								odds: 1.965,
    								key_s: "ip_224"
    							},
    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "双",
    								odds: 1.965,
    								key_s: "ip_225"
    							},
    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "大",
    								odds: 1.965,
    								key_s: "ip_226"
    							},
    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "小",
    								odds: 1.965,
    								key_s: "ip_227"
    							},
    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "合单",
    								odds: 1.965,
    								key_s: "ip_228"
    							},
    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "合双",
    								odds: 1.965,
    								key_s: "ip_229"
    							},
    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "红波",
    								odds: 2.7,
    								key_s: "ip_230"
    							},
    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "绿波",
    								odds: 2.9,
    								key_s: "ip_231"
    							},
    							{
    								group: "大小单双",
    								isCheck: false,
    								name: "蓝波",
    								odds: 2.9,
    								key_s: "ip_232"
    							}
    						]
    					}
    					]
    				},
    tm3: {
        					name: '正码特',
        					body: [{
        						_name: '正3特',
        						list:[{"name":1,"odds":"42","key_s":"ip_233","group":"正3特","isCheck":false},{"name":2,"odds":"42","key_s":"ip_234","group":"正3特","isCheck":false},{"name":3,"odds":"42","key_s":"ip_235","group":"正3特","isCheck":false},{"name":4,"odds":"42","key_s":"ip_236","group":"正3特","isCheck":false},{"name":5,"odds":"42","key_s":"ip_237","group":"正3特","isCheck":false},{"name":6,"odds":"42","key_s":"ip_238","group":"正3特","isCheck":false},{"name":7,"odds":"42","key_s":"ip_239","group":"正3特","isCheck":false},{"name":8,"odds":"42","key_s":"ip_240","group":"正3特","isCheck":false},{"name":9,"odds":"42","key_s":"ip_241","group":"正3特","isCheck":false},{"name":10,"odds":"42","key_s":"ip_242","group":"正3特","isCheck":false},{"name":11,"odds":"42","key_s":"ip_243","group":"正3特","isCheck":false},{"name":12,"odds":"42","key_s":"ip_244","group":"正3特","isCheck":false},{"name":13,"odds":"42","key_s":"ip_245","group":"正3特","isCheck":false},{"name":14,"odds":"42","key_s":"ip_246","group":"正3特","isCheck":false},{"name":15,"odds":"42","key_s":"ip_247","group":"正3特","isCheck":false},{"name":16,"odds":"42","key_s":"ip_248","group":"正3特","isCheck":false},{"name":17,"odds":"42","key_s":"ip_249","group":"正3特","isCheck":false},{"name":18,"odds":"42","key_s":"ip_250","group":"正3特","isCheck":false},{"name":19,"odds":"42","key_s":"ip_251","group":"正3特","isCheck":false},{"name":20,"odds":"42","key_s":"ip_252","group":"正3特","isCheck":false},{"name":21,"odds":"42","key_s":"ip_253","group":"正3特","isCheck":false},{"name":22,"odds":"42","key_s":"ip_254","group":"正3特","isCheck":false},{"name":23,"odds":"42","key_s":"ip_255","group":"正3特","isCheck":false},{"name":24,"odds":"42","key_s":"ip_256","group":"正3特","isCheck":false},{"name":25,"odds":"42","key_s":"ip_257","group":"正3特","isCheck":false},{"name":26,"odds":"42","key_s":"ip_258","group":"正3特","isCheck":false},{"name":27,"odds":"42","key_s":"ip_259","group":"正3特","isCheck":false},{"name":28,"odds":"42","key_s":"ip_260","group":"正3特","isCheck":false},{"name":29,"odds":"42","key_s":"ip_261","group":"正3特","isCheck":false},{"name":30,"odds":"42","key_s":"ip_262","group":"正3特","isCheck":false},{"name":31,"odds":"42","key_s":"ip_263","group":"正3特","isCheck":false},{"name":32,"odds":"42","key_s":"ip_264","group":"正3特","isCheck":false},{"name":33,"odds":"42","key_s":"ip_265","group":"正3特","isCheck":false},{"name":34,"odds":"42","key_s":"ip_266","group":"正3特","isCheck":false},{"name":35,"odds":"42","key_s":"ip_267","group":"正3特","isCheck":false},{"name":36,"odds":"42","key_s":"ip_268","group":"正3特","isCheck":false},{"name":37,"odds":"42","key_s":"ip_269","group":"正3特","isCheck":false},{"name":38,"odds":"42","key_s":"ip_270","group":"正3特","isCheck":false},{"name":39,"odds":"42","key_s":"ip_271","group":"正3特","isCheck":false},{"name":40,"odds":"42","key_s":"ip_272","group":"正3特","isCheck":false},{"name":41,"odds":"42","key_s":"ip_273","group":"正3特","isCheck":false},{"name":42,"odds":"42","key_s":"ip_274","group":"正3特","isCheck":false},{"name":43,"odds":"42","key_s":"ip_275","group":"正3特","isCheck":false},{"name":44,"odds":"42","key_s":"ip_276","group":"正3特","isCheck":false},{"name":45,"odds":"42","key_s":"ip_277","group":"正3特","isCheck":false},{"name":46,"odds":"42","key_s":"ip_278","group":"正3特","isCheck":false},{"name":47,"odds":"42","key_s":"ip_279","group":"正3特","isCheck":false},{"name":48,"odds":"42","key_s":"ip_280","group":"正3特","isCheck":false},{"name":49,"odds":"42","key_s":"ip_281","group":"正3特","isCheck":false}]
        					},
        					{
        						_name: '大小单双',
        						list: [

        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "单",
        								odds: 1.965,
        								key_s: "ip_282"
        							},
        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "双",
        								odds: 1.965,
        								key_s: "ip_283"
        							},
        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "大",
        								odds: 1.965,
        								key_s: "ip_284"
        							},
        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "小",
        								odds: 1.965,
        								key_s: "ip_285"
        							},
        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "合单",
        								odds: 1.965,
        								key_s: "ip_286"
        							},
        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "合双",
        								odds: 1.965,
        								key_s: "ip_287"
        							},
        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "红波",
        								odds: 2.7,
        								key_s: "ip_288"
        							},
        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "绿波",
        								odds: 2.9,
        								key_s: "ip_289"
        							},
        							{
        								group: "大小单双",
        								isCheck: false,
        								name: "蓝波",
        								odds: 2.9,
        								key_s: "ip_290"
        							}
        						]
        					}
        					]
        				},
    tm4: {
                					name: '正码特',
                					body: [{
                						_name: '正4特',
                						list: [{"name":1,"odds":"42","key_s":"ip_291","group":"正4特","isCheck":false},{"name":2,"odds":"42","key_s":"ip_292","group":"正4特","isCheck":false},{"name":3,"odds":"42","key_s":"ip_293","group":"正4特","isCheck":false},{"name":4,"odds":"42","key_s":"ip_294","group":"正4特","isCheck":false},{"name":5,"odds":"42","key_s":"ip_295","group":"正4特","isCheck":false},{"name":6,"odds":"42","key_s":"ip_296","group":"正4特","isCheck":false},{"name":7,"odds":"42","key_s":"ip_297","group":"正4特","isCheck":false},{"name":8,"odds":"42","key_s":"ip_298","group":"正4特","isCheck":false},{"name":9,"odds":"42","key_s":"ip_299","group":"正4特","isCheck":false},{"name":10,"odds":"42","key_s":"ip_300","group":"正4特","isCheck":false},{"name":11,"odds":"42","key_s":"ip_301","group":"正4特","isCheck":false},{"name":12,"odds":"42","key_s":"ip_302","group":"正4特","isCheck":false},{"name":13,"odds":"42","key_s":"ip_303","group":"正4特","isCheck":false},{"name":14,"odds":"42","key_s":"ip_304","group":"正4特","isCheck":false},{"name":15,"odds":"42","key_s":"ip_305","group":"正4特","isCheck":false},{"name":16,"odds":"42","key_s":"ip_306","group":"正4特","isCheck":false},{"name":17,"odds":"42","key_s":"ip_307","group":"正4特","isCheck":false},{"name":18,"odds":"42","key_s":"ip_308","group":"正4特","isCheck":false},{"name":19,"odds":"42","key_s":"ip_309","group":"正4特","isCheck":false},{"name":20,"odds":"42","key_s":"ip_310","group":"正4特","isCheck":false},{"name":21,"odds":"42","key_s":"ip_311","group":"正4特","isCheck":false},{"name":22,"odds":"42","key_s":"ip_312","group":"正4特","isCheck":false},{"name":23,"odds":"42","key_s":"ip_313","group":"正4特","isCheck":false},{"name":24,"odds":"42","key_s":"ip_314","group":"正4特","isCheck":false},{"name":25,"odds":"42","key_s":"ip_315","group":"正4特","isCheck":false},{"name":26,"odds":"42","key_s":"ip_316","group":"正4特","isCheck":false},{"name":27,"odds":"42","key_s":"ip_317","group":"正4特","isCheck":false},{"name":28,"odds":"42","key_s":"ip_318","group":"正4特","isCheck":false},{"name":29,"odds":"42","key_s":"ip_319","group":"正4特","isCheck":false},{"name":30,"odds":"42","key_s":"ip_320","group":"正4特","isCheck":false},{"name":31,"odds":"42","key_s":"ip_321","group":"正4特","isCheck":false},{"name":32,"odds":"42","key_s":"ip_322","group":"正4特","isCheck":false},{"name":33,"odds":"42","key_s":"ip_323","group":"正4特","isCheck":false},{"name":34,"odds":"42","key_s":"ip_324","group":"正4特","isCheck":false},{"name":35,"odds":"42","key_s":"ip_325","group":"正4特","isCheck":false},{"name":36,"odds":"42","key_s":"ip_326","group":"正4特","isCheck":false},{"name":37,"odds":"42","key_s":"ip_327","group":"正4特","isCheck":false},{"name":38,"odds":"42","key_s":"ip_328","group":"正4特","isCheck":false},{"name":39,"odds":"42","key_s":"ip_329","group":"正4特","isCheck":false},{"name":40,"odds":"42","key_s":"ip_330","group":"正4特","isCheck":false},{"name":41,"odds":"42","key_s":"ip_331","group":"正4特","isCheck":false},{"name":42,"odds":"42","key_s":"ip_332","group":"正4特","isCheck":false},{"name":43,"odds":"42","key_s":"ip_333","group":"正4特","isCheck":false},{"name":44,"odds":"42","key_s":"ip_334","group":"正4特","isCheck":false},{"name":45,"odds":"42","key_s":"ip_335","group":"正4特","isCheck":false},{"name":46,"odds":"42","key_s":"ip_336","group":"正4特","isCheck":false},{"name":47,"odds":"42","key_s":"ip_337","group":"正4特","isCheck":false},{"name":48,"odds":"42","key_s":"ip_338","group":"正4特","isCheck":false},{"name":49,"odds":"42","key_s":"ip_339","group":"正4特","isCheck":false}]
                					},
                					{
                						_name: '大小单双',
                						list: [

                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "单",
                								odds: 1.965,
                								key_s: "ip_340"
                							},
                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "双",
                								odds: 1.965,
                								key_s: "ip_341"
                							},
                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "大",
                								odds: 1.965,
                								key_s: "ip_342"
                							},
                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "小",
                								odds: 1.965,
                								key_s: "ip_343"
                							},
                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "合单",
                								odds: 1.965,
                								key_s: "ip_344"
                							},
                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "合双",
                								odds: 1.965,
                								key_s: "ip_345"
                							},
                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "红波",
                								odds: 2.7,
                								key_s: "ip_346"
                							},
                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "绿波",
                								odds: 2.9,
                								key_s: "ip_347"
                							},
                							{
                								group: "大小单双",
                								isCheck: false,
                								name: "蓝波",
                								odds: 2.9,
                								key_s: "ip_348"
                							}
                						]
                					}
                					]
                				},
    tm5: {
                    					name: '正码特',
                    					body: [{
                    						_name: '正5特',
                    						list:[{"name":1,"odds":"42","key_s":"ip_349","group":"正5特","isCheck":false},{"name":2,"odds":"42","key_s":"ip_350","group":"正5特","isCheck":false},{"name":3,"odds":"42","key_s":"ip_351","group":"正5特","isCheck":false},{"name":4,"odds":"42","key_s":"ip_352","group":"正5特","isCheck":false},{"name":5,"odds":"42","key_s":"ip_353","group":"正5特","isCheck":false},{"name":6,"odds":"42","key_s":"ip_354","group":"正5特","isCheck":false},{"name":7,"odds":"42","key_s":"ip_355","group":"正5特","isCheck":false},{"name":8,"odds":"42","key_s":"ip_356","group":"正5特","isCheck":false},{"name":9,"odds":"42","key_s":"ip_357","group":"正5特","isCheck":false},{"name":10,"odds":"42","key_s":"ip_358","group":"正5特","isCheck":false},{"name":11,"odds":"42","key_s":"ip_359","group":"正5特","isCheck":false},{"name":12,"odds":"42","key_s":"ip_360","group":"正5特","isCheck":false},{"name":13,"odds":"42","key_s":"ip_361","group":"正5特","isCheck":false},{"name":14,"odds":"42","key_s":"ip_362","group":"正5特","isCheck":false},{"name":15,"odds":"42","key_s":"ip_363","group":"正5特","isCheck":false},{"name":16,"odds":"42","key_s":"ip_364","group":"正5特","isCheck":false},{"name":17,"odds":"42","key_s":"ip_365","group":"正5特","isCheck":false},{"name":18,"odds":"42","key_s":"ip_366","group":"正5特","isCheck":false},{"name":19,"odds":"42","key_s":"ip_367","group":"正5特","isCheck":false},{"name":20,"odds":"42","key_s":"ip_368","group":"正5特","isCheck":false},{"name":21,"odds":"42","key_s":"ip_369","group":"正5特","isCheck":false},{"name":22,"odds":"42","key_s":"ip_370","group":"正5特","isCheck":false},{"name":23,"odds":"42","key_s":"ip_371","group":"正5特","isCheck":false},{"name":24,"odds":"42","key_s":"ip_372","group":"正5特","isCheck":false},{"name":25,"odds":"42","key_s":"ip_373","group":"正5特","isCheck":false},{"name":26,"odds":"42","key_s":"ip_374","group":"正5特","isCheck":false},{"name":27,"odds":"42","key_s":"ip_375","group":"正5特","isCheck":false},{"name":28,"odds":"42","key_s":"ip_376","group":"正5特","isCheck":false},{"name":29,"odds":"42","key_s":"ip_377","group":"正5特","isCheck":false},{"name":30,"odds":"42","key_s":"ip_378","group":"正5特","isCheck":false},{"name":31,"odds":"42","key_s":"ip_379","group":"正5特","isCheck":false},{"name":32,"odds":"42","key_s":"ip_380","group":"正5特","isCheck":false},{"name":33,"odds":"42","key_s":"ip_381","group":"正5特","isCheck":false},{"name":34,"odds":"42","key_s":"ip_382","group":"正5特","isCheck":false},{"name":35,"odds":"42","key_s":"ip_383","group":"正5特","isCheck":false},{"name":36,"odds":"42","key_s":"ip_384","group":"正5特","isCheck":false},{"name":37,"odds":"42","key_s":"ip_385","group":"正5特","isCheck":false},{"name":38,"odds":"42","key_s":"ip_386","group":"正5特","isCheck":false},{"name":39,"odds":"42","key_s":"ip_387","group":"正5特","isCheck":false},{"name":40,"odds":"42","key_s":"ip_388","group":"正5特","isCheck":false},{"name":41,"odds":"42","key_s":"ip_389","group":"正5特","isCheck":false},{"name":42,"odds":"42","key_s":"ip_390","group":"正5特","isCheck":false},{"name":43,"odds":"42","key_s":"ip_391","group":"正5特","isCheck":false},{"name":44,"odds":"42","key_s":"ip_392","group":"正5特","isCheck":false},{"name":45,"odds":"42","key_s":"ip_393","group":"正5特","isCheck":false},{"name":46,"odds":"42","key_s":"ip_394","group":"正5特","isCheck":false},{"name":47,"odds":"42","key_s":"ip_395","group":"正5特","isCheck":false},{"name":48,"odds":"42","key_s":"ip_396","group":"正5特","isCheck":false},{"name":49,"odds":"42","key_s":"ip_397","group":"正5特","isCheck":false}]
                    					},
                    					{
                    						_name: '大小单双',
                    						list: [

                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "单",
                    								odds: 1.965,
                    								key_s: "ip_398"
                    							},
                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "双",
                    								odds: 1.965,
                    								key_s: "ip_399"
                    							},
                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "大",
                    								odds: 1.965,
                    								key_s: "ip_400"
                    							},
                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "小",
                    								odds: 1.965,
                    								key_s: "ip_401"
                    							},
                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "合单",
                    								odds: 1.965,
                    								key_s: "ip_402"
                    							},
                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "合双",
                    								odds: 1.965,
                    								key_s: "ip_403"
                    							},
                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "红波",
                    								odds: 2.7,
                    								key_s: "ip_404"
                    							},
                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "绿波",
                    								odds: 2.9,
                    								key_s: "ip_405"
                    							},
                    							{
                    								group: "大小单双",
                    								isCheck: false,
                    								name: "蓝波",
                    								odds: 2.9,
                    								key_s: "ip_406"
                    							}
                    						]
                    					}
                    					]
                    				},
    tm6: {
                        					name: '正码特',
                        					body: [{
                        						_name: '正6特',
                        						list:[{"name":1,"odds":"42","key_s":"ip_407","group":"正6特","isCheck":false},{"name":2,"odds":"42","key_s":"ip_408","group":"正6特","isCheck":false},{"name":3,"odds":"42","key_s":"ip_409","group":"正6特","isCheck":false},{"name":4,"odds":"42","key_s":"ip_410","group":"正6特","isCheck":false},{"name":5,"odds":"42","key_s":"ip_411","group":"正6特","isCheck":false},{"name":6,"odds":"42","key_s":"ip_412","group":"正6特","isCheck":false},{"name":7,"odds":"42","key_s":"ip_413","group":"正6特","isCheck":false},{"name":8,"odds":"42","key_s":"ip_414","group":"正6特","isCheck":false},{"name":9,"odds":"42","key_s":"ip_415","group":"正6特","isCheck":false},{"name":10,"odds":"42","key_s":"ip_416","group":"正6特","isCheck":false},{"name":11,"odds":"42","key_s":"ip_417","group":"正6特","isCheck":false},{"name":12,"odds":"42","key_s":"ip_418","group":"正6特","isCheck":false},{"name":13,"odds":"42","key_s":"ip_419","group":"正6特","isCheck":false},{"name":14,"odds":"42","key_s":"ip_420","group":"正6特","isCheck":false},{"name":15,"odds":"42","key_s":"ip_421","group":"正6特","isCheck":false},{"name":16,"odds":"42","key_s":"ip_422","group":"正6特","isCheck":false},{"name":17,"odds":"42","key_s":"ip_423","group":"正6特","isCheck":false},{"name":18,"odds":"42","key_s":"ip_424","group":"正6特","isCheck":false},{"name":19,"odds":"42","key_s":"ip_425","group":"正6特","isCheck":false},{"name":20,"odds":"42","key_s":"ip_426","group":"正6特","isCheck":false},{"name":21,"odds":"42","key_s":"ip_427","group":"正6特","isCheck":false},{"name":22,"odds":"42","key_s":"ip_428","group":"正6特","isCheck":false},{"name":23,"odds":"42","key_s":"ip_429","group":"正6特","isCheck":false},{"name":24,"odds":"42","key_s":"ip_430","group":"正6特","isCheck":false},{"name":25,"odds":"42","key_s":"ip_431","group":"正6特","isCheck":false},{"name":26,"odds":"42","key_s":"ip_432","group":"正6特","isCheck":false},{"name":27,"odds":"42","key_s":"ip_433","group":"正6特","isCheck":false},{"name":28,"odds":"42","key_s":"ip_434","group":"正6特","isCheck":false},{"name":29,"odds":"42","key_s":"ip_435","group":"正6特","isCheck":false},{"name":30,"odds":"42","key_s":"ip_436","group":"正6特","isCheck":false},{"name":31,"odds":"42","key_s":"ip_437","group":"正6特","isCheck":false},{"name":32,"odds":"42","key_s":"ip_438","group":"正6特","isCheck":false},{"name":33,"odds":"42","key_s":"ip_439","group":"正6特","isCheck":false},{"name":34,"odds":"42","key_s":"ip_440","group":"正6特","isCheck":false},{"name":35,"odds":"42","key_s":"ip_441","group":"正6特","isCheck":false},{"name":36,"odds":"42","key_s":"ip_442","group":"正6特","isCheck":false},{"name":37,"odds":"42","key_s":"ip_443","group":"正6特","isCheck":false},{"name":38,"odds":"42","key_s":"ip_444","group":"正6特","isCheck":false},{"name":39,"odds":"42","key_s":"ip_445","group":"正6特","isCheck":false},{"name":40,"odds":"42","key_s":"ip_446","group":"正6特","isCheck":false},{"name":41,"odds":"42","key_s":"ip_447","group":"正6特","isCheck":false},{"name":42,"odds":"42","key_s":"ip_448","group":"正6特","isCheck":false},{"name":43,"odds":"42","key_s":"ip_449","group":"正6特","isCheck":false},{"name":44,"odds":"42","key_s":"ip_450","group":"正6特","isCheck":false},{"name":45,"odds":"42","key_s":"ip_451","group":"正6特","isCheck":false},{"name":46,"odds":"42","key_s":"ip_452","group":"正6特","isCheck":false},{"name":47,"odds":"42","key_s":"ip_453","group":"正6特","isCheck":false},{"name":48,"odds":"42","key_s":"ip_454","group":"正6特","isCheck":false},{"name":49,"odds":"42","key_s":"ip_455","group":"正6特","isCheck":false}]
                        					},
                        					{
                        						_name: '大小单双',
                        						list: [

                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "单",
                        								odds: 1.965,
                        								key_s: "ip_456"
                        							},
                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "双",
                        								odds: 1.965,
                        								key_s: "ip_457"
                        							},
                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "大",
                        								odds: 1.965,
                        								key_s: "ip_458"
                        							},
                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "小",
                        								odds: 1.965,
                        								key_s: "ip_459"
                        							},
                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "合单",
                        								odds: 1.965,
                        								key_s: "ip_460"
                        							},
                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "合双",
                        								odds: 1.965,
                        								key_s: "ip_461"
                        							},
                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "红波",
                        								odds: 2.7,
                        								key_s: "ip_462"
                        							},
                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "绿波",
                        								odds: 2.9,
                        								key_s: "ip_463"
                        							},
                        							{
                        								group: "大小单双",
                        								isCheck: false,
                        								name: "蓝波",
                        								odds: 2.9,
                        								key_s: "ip_464"
                        							}
                        						]
                        					}
                        					]
                        				},
                    zhydl: {
          					name: '正1',
          					body: [{
          						_name: '正1',
          						list: [
          						{
          								group: "正1",
          								isCheck: false,
          								name: "大",
          								odds: 1.965,
          								key_s: "ip_571"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "小",
          								odds: 1.965,
          								key_s: "ip_572"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "单",
          								odds: 1.965,
          								key_s: "ip_573"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "双",
          								odds: 1.965,
          								key_s: "ip_574"
          							},

          							{
          								group: "正1",
          								isCheck: false,
          								name: "红波",
          								odds: 2.7,
          								key_s: "ip_575"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "绿波",
          								odds: 2.9,
          								key_s: "ip_576"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "蓝波",
          								odds: 2.9,
          								key_s: "ip_577"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "合大",
          								odds: 1.965,
          								key_s: "ip_1047"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "合小",
          								odds: 1.965,
          								key_s: "ip_1048"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "合单",
          								odds: 1.965,
          								key_s: "ip_1049"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "合双",
          								odds: 1.965,
          								key_s: "ip_1050"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "尾大",
          								odds: 1.965,
          								key_s: "ip_1051"
          							},
          							{
          								group: "正1",
          								isCheck: false,
          								name: "尾小",
          								odds: 1.965,
          								key_s: "ip_1052"
          							}
          						]
          					},
          					{
          						_name: '正2',
          						list: [


          							{
          								group: "正2",
          								isCheck: false,
          								name: "大",
          								odds: 1.965,
          								key_s: "ip_578"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "小",
          								odds: 1.965,
          								key_s: "ip_579"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "单",
          								odds: 1.965,
          								key_s: "ip_580"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "双",
          								odds: 1.965,
          								key_s: "ip_581"
          							},

          							{
          								group: "正2",
          								isCheck: false,
          								name: "红波",
          								odds: 2.7,
          								key_s: "ip_582"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "绿波",
          								odds: 2.9,
          								key_s: "ip_583"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "蓝波",
          								odds: 2.9,
          								key_s: "ip_584"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "合大",
          								odds: 1.965,
          								key_s: "ip_1053"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "合小",
          								odds: 1.965,
          								key_s: "ip_1054"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "合单",
          								odds: 1.965,
          								key_s: "ip_1055"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "合双",
          								odds: 1.965,
          								key_s: "ip_1056"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "尾大",
          								odds: 1.965,
          								key_s: "ip_1057"
          							},
          							{
          								group: "正2",
          								isCheck: false,
          								name: "尾小",
          								odds: 1.965,
          								key_s: "ip_1058"
          							}
          						]
          					},
          					{
          						_name: '正3',
          						list: [


          							{
          								group: "正3",
          								isCheck: false,
          								name: "大",
          								odds: 1.965,
          								key_s: "ip_585"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "小",
          								odds: 1.965,
          								key_s: "ip_586"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "单",
          								odds: 1.965,
          								key_s: "ip_587"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "双",
          								odds: 1.965,
          								key_s: "ip_588"
          							},

          							{
          								group: "正3",
          								isCheck: false,
          								name: "红波",
          								odds: 2.7,
          								key_s: "ip_589"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "绿波",
          								odds: 2.9,
          								key_s: "ip_590"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "蓝波",
          								odds: 2.9,
          								key_s: "ip_591"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "合大",
          								odds: 1.965,
          								key_s: "ip_1059"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "合小",
          								odds: 1.965,
          								key_s: "ip_1060"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "合单",
          								odds: 1.965,
          								key_s: "ip_1061"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "合双",
          								odds: 1.965,
          								key_s: "ip_1062"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "尾大",
          								odds: 1.965,
          								key_s: "ip_1063"
          							},
          							{
          								group: "正3",
          								isCheck: false,
          								name: "尾小",
          								odds: 1.965,
          								key_s: "ip_1064"
          							}
          						]
          					},
          					{
          						_name: '正4',
          						list: [


          							{
          								group: "正4",
          								isCheck: false,
          								name: "大",
          								odds: 1.965,
          								key_s: "ip_592"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "小",
          								odds: 1.965,
          								key_s: "ip_593"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "单",
          								odds: 1.965,
          								key_s: "ip_594"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "双",
          								odds: 1.965,
          								key_s: "ip_595"
          							},

          							{
          								group: "正4",
          								isCheck: false,
          								name: "红波",
          								odds: 2.7,
          								key_s: "ip_596"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "绿波",
          								odds: 2.9,
          								key_s: "ip_597"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "蓝波",
          								odds: 2.9,
          								key_s: "ip_598"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "合大",
          								odds: 1.965,
          								key_s: "ip_1065"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "合小",
          								odds: 1.965,
          								key_s: "ip_1066"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "合单",
          								odds: 1.965,
          								key_s: "ip_1067"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "合双",
          								odds: 1.965,
          								key_s: "ip_1068"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "尾大",
          								odds: 1.965,
          								key_s: "ip_1069"
          							},
          							{
          								group: "正4",
          								isCheck: false,
          								name: "尾小",
          								odds: 1.965,
          								key_s: "ip_1070"
          							}
          						]
          					},
          					{
          						_name: '正5',
          						list: [


          							{
          								group: "正5",
          								isCheck: false,
          								name: "大",
          								odds: 1.965,
          								key_s: "ip_599"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "小",
          								odds: 1.965,
          								key_s: "ip_600"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "单",
          								odds: 1.965,
          								key_s: "ip_601"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "双",
          								odds: 1.965,
          								key_s: "ip_602"
          							},

          							{
          								group: "正5",
          								isCheck: false,
          								name: "红波",
          								odds: 2.7,
          								key_s: "ip_603"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "绿波",
          								odds: 2.9,
          								key_s: "ip_604"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "蓝波",
          								odds: 2.9,
          								key_s: "ip_605"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "合大",
          								odds: 1.965,
          								key_s: "ip_1071"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "合小",
          								odds: 1.965,
          								key_s: "ip_1072"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "合单",
          								odds: 1.965,
          								key_s: "ip_1073"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "合双",
          								odds: 1.965,
          								key_s: "ip_1074"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "尾大",
          								odds: 1.965,
          								key_s: "ip_1075"
          							},
          							{
          								group: "正5",
          								isCheck: false,
          								name: "尾小",
          								odds: 1.965,
          								key_s: "ip_1076"
          							}
          						]
          					},
          					{
          						_name: '正6',
          						list: [


          							{
          								group: "正6",
          								isCheck: false,
          								name: "大",
          								odds: 1.965,
          								key_s: "ip_606"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "小",
          								odds: 1.965,
          								key_s: "ip_607"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "单",
          								odds: 1.965,
          								key_s: "ip_608"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "双",
          								odds: 1.965,
          								key_s: "ip_609"
          							},

          							{
          								group: "正6",
          								isCheck: false,
          								name: "红波",
          								odds: 2.7,
          								key_s: "ip_610"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "绿波",
          								odds: 2.9,
          								key_s: "ip_611"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "蓝波",
          								odds: 2.9,
          								key_s: "ip_612"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "合大",
          								odds: 1.965,
          								key_s: "ip_1077"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "合小",
          								odds: 1.965,
          								key_s: "ip_1078"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "合单",
          								odds: 1.965,
          								key_s: "ip_1079"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "合双",
          								odds: 1.965,
          								key_s: "ip_1080"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "尾大",
          								odds: 1.965,
          								key_s: "ip_1081"
          							},
          							{
          								group: "正6",
          								isCheck: false,
          								name: "尾小",
          								odds: 1.965,
          								key_s: "ip_1082"
          							}
          						]
          					}
          				  ]
          				},
                  lianm: {
                    name: "连码",
                    body: [{
                      _name: "连码",
                      list: [
                        {
                          group: "特A",
                          isCheck: false,
                          name: 1,
                          odds: 42,
                          key_s: "ip_1"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 2,
                          odds: 42,
                          key_s: "ip_2"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 3,
                          odds: 42,
                          key_s: "ip_3"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 4,
                          odds: "42",
                          key_s: "ip_4"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 5,
                          odds: 42,
                          key: "ip_5"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 6,
                          odds: 42,
                          key_s: "ip_6"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 7,
                          odds: 42,
                          key_s: "ip_7"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 8,
                          odds: 42,
                          key_s: "ip_8"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 9,
                          odds: 42,
                          key_s: "ip_9"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 10,
                          odds: 42,
                          key_s: "ip_10"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 11,
                          odds: 42,
                          key_s: "ip_11"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 12,
                          odds: 42,
                          key_s: "ip_12"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 13,
                          odds: "42",
                          key_s: "ip_13"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 14,
                          odds: 42,
                          key_s: "ip_14"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 15,
                          odds: 42,
                          key_s: "ip_15"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 16,
                          odds: 42,
                          key_s: "ip_16"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 17,
                          odds: 42,
                          key_s: "ip_17"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 18,
                          odds: 42,
                          key_s: "ip_18"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 19,
                          odds: 42,
                          key_s: "ip_19"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 20,
                          odds: 42,
                          key_s: "ip_20"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 21,
                          odds: 42,
                          key_s: "ip_21"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 22,
                          odds: 42,
                          key_s: "ip_22"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 23,
                          odds: 42,
                          key_s: "ip_23"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 24,
                          odds: 42,
                          key_s: "ip_24"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 25,
                          odds: 42,
                          key_s: "ip_25"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 26,
                          odds: 42,
                          key_s: "ip_26"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 27,
                          odds: 42,
                          key_s: "ip_27"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 28,
                          odds: 42,
                          key_s: "ip_28"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 29,
                          odds: 42,
                          key_s: "ip_29"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 30,
                          odds: 42,
                          key_s: "ip_30"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 31,
                          odds: 42,
                          key_s: "ip_31"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 32,
                          odds: 42,
                          key_s: "ip_32"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 33,
                          odds: 42,
                          key_s: "ip_33"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 34,
                          odds: 42,
                          key_s: "ip_34"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 35,
                          odds: 42,
                          key_s: "ip_35"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 36,
                          odds: 42,
                          key_s: "ip_36"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 37,
                          odds: 42,
                          key_s: "ip_37"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 38,
                          odds: 42,
                          key_s: "ip_38"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 39,
                          odds: 42,
                          key_s: "ip_39"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 40,
                          odds: 42,
                          key_s: "ip_40"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 41,
                          odds: 42,
                          key_s: "ip_41"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 42,
                          odds: 42,
                          key_s: "ip_42"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 43,
                          odds: 42,
                          key_s: "ip_43"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 44,
                          odds: 42,
                          key_s: "ip_44"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 45,
                          odds: 42,
                          key_s: "ip_45"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 46,
                          odds: 42,
                          key_s: "ip_46"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 47,
                          odds: 42,
                          key_s: "ip_47"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 48,
                          odds: 42,
                          key_s: "ip_48"
                        },
                        {
                          group: "特A",
                          isCheck: false,
                          name: 49,
                          odds: "42",
                          key_s: "ip_49"
                        }
                      ]
                    }]


                  },
                  guoguan:null,
                  banbo: {
					name: '半波',
					body: [{
						_name: '半波',
						list: [

							{
								group: "半波",
								isCheck: false,
								name: "红单",
								odds: 5.75,
								key_s: "ip_662"
							},
							{
								group: "半波",
								isCheck: false,
								name: "红双",
								odds:5.08,
								key_s: "ip_663"
							},
							{
								group: "半波",
								isCheck: false,
								name: "红大",
								odds:6.58,
								key_s: "ip_664"
							},
							{
								group: "半波",
								isCheck: false,
								name: "红小",
								odds: 4.55,
								key_s: "ip_665"
							},
							{
								group: "半波",
								isCheck: false,
								name: "绿单",
								odds: 5.75,
								key_s: "ip_666"
							},
							{
								group: "半波",
								isCheck: false,
								name: "绿双",
								odds: 6.58,
								key_s: "ip_667"
							},
							{
								group: "半波",
								isCheck: false,
								name: "绿大",
								odds: 5.75,
								key_s: "ip_668"
							},
							{
								group: "半波",
								isCheck: false,
								name: "绿小",
								odds: 6.58,
								key_s: "ip_669"
							},
							{
								group: "半波",
								isCheck: false,
								name: "蓝单",
								odds:5.75,
								key_s: "ip_670"
							},
							{
								group: "半波",
								isCheck: false,
								name: "蓝双",
								odds: 5.75,
								key_s: "ip_671"
							},
							{
								group: "半波",
								isCheck: false,
								name: "蓝大",
								odds:5.08,
								key_s: "ip_672"
							},
							{
								group: "半波",
								isCheck: false,
								name: "蓝小",
								odds: 6.58,
								key_s: "ip_673"
							},
							{
								group: "半波",
								isCheck: false,
								name: "红合单",
								odds: 4.88,
								key_s: "ip_718"
							},
							{
								group: "半波",
								isCheck: false,
								name: "红合双",
								odds: 5.75,
								key_s: "ip_719"
							},
							{
								group: "半波",
								isCheck: false,
								name: "绿合单",
								odds: 5.75,
								key_s: "ip_720"
							},
							{
								group: "半波",
								isCheck: false,
								name: "绿合双",
								odds:5.75,
								key_s: "ip_721"
							},
							{
								group: "半波",
								isCheck: false,
								name: "蓝合单",
								odds: 5.75,
								key_s: "ip_722"
							},
							{
								group: "半波",
								isCheck: false,
								name: "蓝合双",
								odds: 5.75,
								key_s: "ip_723"
							}
						]
					}]
				},
        yxiao: {
					name: '生肖/尾数',
					body: [{
						_name: '生肖',
						list: [

							{
								group: "生肖",
								isCheck: false,
								name: "鼠",
								odds: 2.09,
								key_s: "ip_700"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "虎",
								odds: 2.09,
								key_s: "ip_701"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "龙",
								odds: 2.09,
								key_s: "ip_702"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "马",
								odds: 2.09,
								key_s: "ip_703"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "猴",
								odds: 2.09,
								key_s: "ip_704"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "狗",
								odds: 2.09,
								key_s: "ip_705"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "牛",
								odds: 2.09,
								key_s: "ip_706"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "兔",
								odds: 2.09,
								key_s: "ip_707"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "蛇",
								odds: 2.09,
								key_s: "ip_708"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "羊",
								odds: 2.09,
								key_s: "ip_709"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "鸡",
								odds: 2.09,
								key_s: "ip_710"
							},
							{
								group: "生肖",
								isCheck: false,
								name: "猪",
								odds: 2.09,
								key_s: "ip_711"
							}

						]
					},
					{
						_name: '尾数',
						list: [

							{
								group: "尾数",
								isCheck: false,
								name: "0",
								odds: 2.09,
								key_s: "ip_769"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "1",
								odds: 1.8,
								key_s: "ip_770"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "2",
								odds: 1.8,
								key_s: "ip_771"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "3",
								odds: 1.8,
								key_s: "ip_772"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "4",
								odds: 1.8,
								key_s: "ip_773"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "5",
								odds: 1.8,
								key_s: "ip_774"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "6",
								odds: 1.8,
								key_s: "ip_775"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "7",
								odds: 1.8,
								key_s: "ip_776"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "8",
								odds: 1.8,
								key_s: "ip_777"
							},
							{
								group: "尾数",
								isCheck: false,
								name: "9",
								odds: 1.8,
								key_s: "ip_778"
							}
						]
					}
					]
				},
        tex: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '特肖',
       						list: [

       							{
       								group: "特肖",
       								isCheck: false,
       								name: "鼠",
       								odds: 11.5,
       								key_s: "ip_674"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "虎",
       								odds: 11.5,
       								key_s: "ip_675"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "龙",
       								odds: 11.5,
       								key_s: "ip_676"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "马",
       								odds: 11.5,
       								key_s: "ip_677"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "猴",
       								odds:11.5,
       								key_s: "ip_678"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "狗",
       								odds: 11.5,
       								key_s: "ip_679"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "牛",
       								odds: 11.5,
       								key_s: "ip_680"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "兔",
       								odds:11.5,
       								key_s: "ip_681"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "蛇",
       								odds: 11.5,
       								key_s: "ip_682"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "羊",
       								odds: 11.5,
       								key_s: "ip_683"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "鸡",
       								odds: 11.5,
       								key_s: "ip_684"
       							},
       							{
       								group: "特肖",
       								isCheck: false,
       								name: "猪",
       								odds:11.5,
       								key_s: "ip_685"
       							}

       						]
       					  }
       					]
       				},
       		hx2: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '二肖',
       						list: [

       							{
       								group: "二肖",
       								isCheck: false,
       								name: "鼠",
       								odds: 5.82,
       								key_s: "ip_901"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "虎",
       								odds: 5.82,
       								key_s: "ip_902"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "龙",
       								odds: 5.82,
       								key_s: "ip_903"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "马",
       								odds: 5.82,
       								key_s: "ip_904"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "猴",
       								odds:5.82,
       								key_s: "ip_905"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "狗",
       								odds: 5.82,
       								key_s: "ip_906"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "牛",
       								odds: 5.82,
       								key_s: "ip_907"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "兔",
       								odds:5.82,
       								key_s: "ip_908"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "蛇",
       								odds: 5.82,
       								key_s: "ip_909"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "羊",
       								odds:5.82,
       								key_s: "ip_910"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "鸡",
       								odds: 5.82,
       								key_s: "ip_911"
       							},
       							{
       								group: "二肖",
       								isCheck: false,
       								name: "猪",
       								odds:5.82,
       								key_s: "ip_912"
       							}

       						]
       					  }
       					]
       				},
       	  hx3: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '三肖',
       						list: [

       							{
       								group: "三肖",
       								isCheck: false,
       								name: "鼠",
       								odds: 3.85,
       								key_s: "ip_913"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "虎",
       								odds: 3.85,
       								key_s: "ip_914"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "龙",
       								odds: 3.85,
       								key_s: "ip_915"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "马",
       								odds: 3.85,
       								key_s: "ip_916"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "猴",
       								odds:3.85,
       								key_s: "ip_917"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "狗",
       								odds: 3.85,
       								key_s: "ip_918"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "牛",
       								odds: 3.85,
       								key_s: "ip_919"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "兔",
       								odds:3.85,
       								key_s: "ip_920"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "蛇",
       								odds: 3.85,
       								key_s: "ip_921"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "羊",
       								odds:3.85,
       								key_s: "ip_922"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "鸡",
       								odds: 3.85,
       								key_s: "ip_923"
       							},
       							{
       								group: "三肖",
       								isCheck: false,
       								name: "猪",
       								odds:3.85,
       								key_s: "ip_924"
       							}

       						]
       					  }
       					]
       				},
       	 hx4: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '四肖',
       						list: [

       							{
       								group: "四肖",
       								isCheck: false,
       								name: "鼠",
       								odds: 2.92,
       								key_s: "ip_925"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "虎",
       								odds: 2.92,
       								key_s: "ip_926"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "龙",
       								odds: 2.92,
       								key_s: "ip_927"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "马",
       								odds: 2.92,
       								key_s: "ip_928"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "猴",
       								odds:2.92,
       								key_s: "ip_929"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "狗",
       								odds: 2.92,
       								key_s: "ip_930"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "牛",
       								odds: 2.92,
       								key_s: "ip_931"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "兔",
       								odds:2.92,
       								key_s: "ip_932"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "蛇",
       								odds: 2.92,
       								key_s: "ip_933"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "羊",
       								odds:2.92,
       								key_s: "ip_934"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "鸡",
       								odds: 2.92,
       								key_s: "ip_935"
       							},
       							{
       								group: "四肖",
       								isCheck: false,
       								name: "猪",
       								odds:2.92,
       								key_s: "ip_936"
       							}

       						]
       					  }
       					]
       				},
       	  hx5: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '五肖',
       						list: [

       							{
       								group: "五肖",
       								isCheck: false,
       								name: "鼠",
       								odds:2.35,
       								key_s: "ip_937"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "虎",
       								odds:2.35,
       								key_s: "ip_938"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "龙",
       								odds:2.35,
       								key_s: "ip_939"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "马",
       								odds:2.35,
       								key_s: "ip_940"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "猴",
       								odds:2.92,
       								key_s: "ip_941"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "狗",
       								odds:2.35,
       								key_s: "ip_942"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "牛",
       								odds:2.35,
       								key_s: "ip_943"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "兔",
       								odds:2.35,
       								key_s: "ip_944"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "蛇",
       								odds:2.35,
       								key_s: "ip_945"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "羊",
       								odds:2.35,
       								key_s: "ip_946"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "鸡",
       								odds:2.35,
       								key_s: "ip_947"
       							},
       							{
       								group: "五肖",
       								isCheck: false,
       								name: "猪",
       								odds:2.35,
       								key_s: "ip_948"
       							}

       						]
       					  }
       					]
       				},
       	 hx6: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '六肖',
       						list: [

       							{
       								group: "六肖",
       								isCheck: false,
       								name: "鼠",
       								odds:1.96,
       								key_s: "ip_949"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "虎",
       								odds:1.96,
       								key_s: "ip_950"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "龙",
       								odds:1.96,
       								key_s: "ip_951"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "马",
       								odds:1.96,
       								key_s: "ip_952"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "猴",
       								odds:1.96,
       								key_s: "ip_953"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "狗",
       								odds:1.96,
       								key_s: "ip_954"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "牛",
       								odds:1.96,
       								key_s: "ip_955"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "兔",
       								odds:1.96,
       								key_s: "ip_956"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "蛇",
       								odds:1.96,
       								key_s: "ip_957"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "羊",
       								odds:1.96,
       								key_s: "ip_958"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "鸡",
       								odds:1.96,
       								key_s: "ip_959"
       							},
       							{
       								group: "六肖",
       								isCheck: false,
       								name: "猪",
       								odds:1.96,
       								key_s: "ip_960"
       							}

       						]
       					  }
       					]
       				},
       	 sxl2zh: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '二肖连中',
       						list: [

       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "鼠",
       								odds:4.5,
       								key_s: "ip_1401"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "虎",
       								odds:4.5,
       								key_s: "ip_1402"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "龙",
       								odds:4.5,
       								key_s: "ip_1403"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "马",
       								odds:4.5,
       								key_s: "ip_1404"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "猴",
       								odds:4.5,
       								key_s: "ip_1405"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "狗",
       								odds:4.5,
       								key_s: "ip_1406"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "牛",
       								odds:4.5,
       								key_s: "ip_1407"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "兔",
       								odds:4.5,
       								key_s: "ip_1408"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "蛇",
       								odds:4.5,
       								key_s: "ip_1409"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "羊",
       								odds:4.5,
       								key_s: "ip_1410"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "鸡",
       								odds:4.5,
       								key_s: "ip_1411"
       							},
       							{
       								group: "二肖连中",
       								isCheck: false,
       								name: "猪",
       								odds:4.5,
       								key_s: "ip_1412"
       							}

       						]
       					  }
       					]
       				},
       	 sxl3zh: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '三肖连中',
       						list: [

       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "鼠",
       								odds:12,
       								key_s: "ip_1413"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "虎",
       								odds:12,
       								key_s: "ip_1414"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "龙",
       								odds:12,
       								key_s: "ip_1415"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "马",
       								odds:12,
       								key_s: "ip_1416"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "猴",
       								odds:12,
       								key_s: "ip_1417"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "狗",
       								odds:12,
       								key_s: "ip_1418"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "牛",
       								odds:12,
       								key_s: "ip_1419"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "兔",
       								odds:12,
       								key_s: "ip_1420"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "蛇",
       								odds:12,
       								key_s: "ip_1421"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "羊",
       								odds:12,
       								key_s: "ip_1422"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "鸡",
       								odds:12,
       								key_s: "ip_1423"
       							},
       							{
       								group: "三肖连中",
       								isCheck: false,
       								name: "猪",
       								odds:12,
       								key_s: "ip_1424"
       							}

       						]
       					  }
       					]
       				},
       	 sxl4zh: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '四肖连中',
       						list: [

       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "鼠",
       								odds:35,
       								key_s: "ip_1425"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "虎",
       								odds:35,
       								key_s: "ip_1426"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "龙",
       								odds:35,
       								key_s: "ip_1427"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "马",
       								odds:35,
       								key_s: "ip_1428"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "猴",
       								odds:35,
       								key_s: "ip_1429"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "狗",
       								odds:35,
       								key_s: "ip_1430"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "牛",
       								odds:35,
       								key_s: "ip_1431"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "兔",
       								odds:35,
       								key_s: "ip_1432"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "蛇",
       								odds:35,
       								key_s: "ip_1433"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "羊",
       								odds:35,
       								key_s: "ip_1434"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "鸡",
       								odds:35,
       								key_s: "ip_1435"
       							},
       							{
       								group: "四肖连中",
       								isCheck: false,
       								name: "猪",
       								odds:35,
       								key_s: "ip_1436"
       							}

       						]
       					  }
       					]
       				},
       	 sxl5zh: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '五肖连中',
       						list: [

       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "鼠",
       								odds:85,
       								key_s: "ip_1473"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "虎",
       								odds:85,
       								key_s: "ip_1474"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "龙",
       								odds:85,
       								key_s: "ip_1475"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "马",
       								odds:85,
       								key_s: "ip_1476"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "猴",
       								odds:85,
       								key_s: "ip_1477"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "狗",
       								odds:85,
       								key_s: "ip_1478"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "牛",
       								odds:85,
       								key_s: "ip_1479"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "兔",
       								odds:85,
       								key_s: "ip_1480"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "蛇",
       								odds:85,
       								key_s: "ip_1481"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "羊",
       								odds:85,
       								key_s: "ip_1482"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "鸡",
       								odds:85,
       								key_s: "ip_1483"
       							},
       							{
       								group: "五肖连中",
       								isCheck: false,
       								name: "猪",
       								odds:85,
       								key_s: "ip_1484"
       							}

       						]
       					  }
       					]
       				},
       	 sx2bzh: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '二肖连不中',
       						list: [

       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "鼠",
       								odds:4,
       								key_s: "ip_1437"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "虎",
       								odds:4,
       								key_s: "ip_1438"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "龙",
       								odds:4,
       								key_s: "ip_1439"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "马",
       								odds:4,
       								key_s: "ip_1440"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "猴",
       								odds:4,
       								key_s: "ip_1441"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "狗",
       								odds:4,
       								key_s: "ip_1442"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "牛",
       								odds:4,
       								key_s: "ip_1443"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "兔",
       								odds:4,
       								key_s: "ip_1444"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "蛇",
       								odds:4,
       								key_s: "ip_1445"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "羊",
       								odds:4,
       								key_s: "ip_1446"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "鸡",
       								odds:4,
       								key_s: "ip_1447"
       							},
       							{
       								group: "二肖连不中",
       								isCheck: false,
       								name: "猪",
       								odds:4,
       								key_s: "ip_1448"
       							}

       						]
       					  }
       					]
       				},
       	 sx3bzh: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '三肖连不中',
       						list: [

       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "鼠",
       								odds:8,
       								key_s: "ip_1449"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "虎",
       								odds:8,
       								key_s: "ip_1450"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "龙",
       								odds:8,
       								key_s: "ip_1451"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "马",
       								odds:8,
       								key_s: "ip_1452"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "猴",
       								odds:8,
       								key_s: "ip_1453"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "狗",
       								odds:8,
       								key_s: "ip_1454"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "牛",
       								odds:8,
       								key_s: "ip_1455"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "兔",
       								odds:8,
       								key_s: "ip_1456"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "蛇",
       								odds:8,
       								key_s: "ip_1457"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "羊",
       								odds:8,
       								key_s: "ip_1458"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "鸡",
       								odds:8,
       								key_s: "ip_1459"
       							},
       							{
       								group: "三肖连不中",
       								isCheck: false,
       								name: "猪",
       								odds:8,
       								key_s: "ip_1460"
       							}

       						]
       					  }
       					]
       				},
       	 sx4bzh: {
       					name: '生肖/尾数',
       					body: [{
       						_name: '四肖连不中',
       						list: [

       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "鼠",
       								odds:20,
       								key_s: "ip_1461"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "虎",
       								odds:20,
       								key_s: "ip_1462"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "龙",
       								odds:20,
       								key_s: "ip_1463"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "马",
       								odds:20,
       								key_s: "ip_1464"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "猴",
       								odds:20,
       								key_s: "ip_1465"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "狗",
       								odds:20,
       								key_s: "ip_1466"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "牛",
       								odds:20,
       								key_s: "ip_1467"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "兔",
       								odds:20,
       								key_s: "ip_1468"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "蛇",
       								odds:20,
       								key_s: "ip_1469"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "羊",
       								odds:20,
       								key_s: "ip_1470"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "鸡",
       								odds:20,
       								key_s: "ip_1471"
       							},
       							{
       								group: "四肖连不中",
       								isCheck: false,
       								name: "猪",
       								odds:20,
       								key_s: "ip_1472"
       							}

       						]
       					  }
       					]
       				},
       	 wl2zh: {
       					name: '生肖连',
       					body: [{
       						_name: '二尾连中',
       						list: [

       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "1",
       								odds: 3.4,
       								key_s: "ip_1301"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "2",
       								odds: 3.4,
       								key_s: "ip_1302"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "3",
       								odds: 3.4,
       								key_s: "ip_1303"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "4",
       								odds: 3.4,
       								key_s: "ip_1304"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "5",
       								odds: 3.4,
       								key_s: "ip_1305"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "6",
       								odds: 3.4,
       								key_s: "ip_1306"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "7",
       								odds:3.4,
       								key_s: "ip_1307"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "8",
       								odds: 3.4,
       								key_s: "ip_1308"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "9",
       								odds: 3.4,
       								key_s: "ip_1309"
       							},
       							{
       								group: "二尾连中",
       								isCheck: false,
       								name: "0",
       								odds: 3.4,
       								key_s: "ip_1310"
       							}
       						]
       					}
       					]
       				},
       	 wl3zh: {
       					name: '生肖连',
       					body: [{
       						_name: '三尾连中',
       						list: [

       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "1",
       								odds: 7.2,
       								key_s: "ip_1311"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "2",
       								odds: 7.2,
       								key_s: "ip_1312"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "3",
       								odds: 7.2,
       								key_s: "ip_1313"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "4",
       								odds: 7.2,
       								key_s: "ip_1314"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "5",
       								odds: 7.2,
       								key_s: "ip_1315"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "6",
       								odds: 7.2,
       								key_s: "ip_1316"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "7",
       								odds:7.2,
       								key_s: "ip_1317"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "8",
       								odds: 7.2,
       								key_s: "ip_1318"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "9",
       								odds: 7.2,
       								key_s: "ip_1319"
       							},
       							{
       								group: "三尾连中",
       								isCheck: false,
       								name: "0",
       								odds: 7.2,
       								key_s: "ip_1320"
       							}
       						]
       					}
       					]
       				},
       	 wl4zh: {
       					name: '生肖连',
       					body: [{
       						_name: '四尾连中',
       						list: [

       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "1",
       								odds: 17,
       								key_s: "ip_1321"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "2",
       								odds: 17,
       								key_s: "ip_1322"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "3",
       								odds: 17,
       								key_s: "ip_1323"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "4",
       								odds: 17,
       								key_s: "ip_1324"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "5",
       								odds: 17,
       								key_s: "ip_1325"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "6",
       								odds: 17,
       								key_s: "ip_1326"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "7",
       								odds: 17,
       								key_s: "ip_1327"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "8",
       								odds: 17,
       								key_s: "ip_1328"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "9",
       								odds: 17,
       								key_s: "ip_1329"
       							},
       							{
       								group: "四尾连中",
       								isCheck: false,
       								name: "0",
       								odds: 17,
       								key_s: "ip_1330"
       							}
       						]
       					}
       					]
       				},
       	 wl2bz: {
       					name: '生肖连',
       					body: [{
       						_name: '二尾连不中',
       						list: [

       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "1",
       								odds: 5.1,
       								key_s: "ip_1331"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "2",
       								odds: 5.1,
       								key_s: "ip_1332"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "3",
       								odds: 5.1,
       								key_s: "ip_1333"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "4",
       								odds: 5.1,
       								key_s: "ip_1334"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "5",
       								odds: 5.1,
       								key_s: "ip_1335"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "6",
       								odds: 5.1,
       								key_s: "ip_1336"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "7",
       								odds: 5.1,
       								key_s: "ip_1337"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "8",
       								odds: 5.1,
       								key_s: "ip_1338"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "9",
       								odds: 5.1,
       								key_s: "ip_1339"
       							},
       							{
       								group: "二尾连不中",
       								isCheck: false,
       								name: "0",
       								odds: 5.1,
       								key_s: "ip_1340"
       							}
       						]
       					}
       					]
       				},
          wl3bz: {
       					name: '生肖连',
       					body: [{
       						_name: '三尾连不中',
       						list: [

       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "1",
       								odds:15,
       								key_s: "ip_1341"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "2",
       								odds: 15,
       								key_s: "ip_1342"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "3",
       								odds: 15,
       								key_s: "ip_1343"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "4",
       								odds: 15,
       								key_s: "ip_1344"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "5",
       								odds: 15,
       								key_s: "ip_1345"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "6",
       								odds: 15,
       								key_s: "ip_1346"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "7",
       								odds: 15,
       								key_s: "ip_1347"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "8",
       								odds: 15,
       								key_s: "ip_1348"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "9",
       								odds: 15,
       								key_s: "ip_1349"
       							},
       							{
       								group: "三尾连不中",
       								isCheck: false,
       								name: "0",
       								odds: 15,
       								key_s: "ip_1350"
       							}
       						]
       					}
       					]
       				},
       	 wl4bz: {
       					name: '生肖连',
       					body: [{
       						_name: '四尾连不中',
       						list: [

       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "1",
       								odds:51,
       								key_s: "ip_1351"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "2",
       								odds: 51,
       								key_s: "ip_1352"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "3",
       								odds: 51,
       								key_s: "ip_1353"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "4",
       								odds: 51,
       								key_s: "ip_1354"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "5",
       								odds: 51,
       								key_s: "ip_1355"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "6",
       								odds: 51,
       								key_s: "ip_1356"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "7",
       								odds: 51,
       								key_s: "ip_1357"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "8",
       								odds: 51,
       								key_s: "ip_1358"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "9",
       								odds: 51,
       								key_s: "ip_1359"
       							},
       							{
       								group: "四尾连不中",
       								isCheck: false,
       								name: "0",
       								odds: 51,
       								key_s: "ip_1360"
       							}
       						]
       					}
       					]
       				},
       		bz5: {
       					name: '全不中',
       					body: [{
       						_name: '五不中',
       						list: [

       							{
       								group: "五不中",
       								isCheck: false,
       								name: "1",
       								odds: 2.18,
       								key_s: "ip_1101"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "2",
       								odds: 2.18,
       								key_s: "ip_1102"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "3",
       								odds: 2.18,
       								key_s: "ip_1103"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "4",
       								odds: 2.18,
       								key_s: "ip_1104"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "5",
       								odds: 2.18,
       								key_s: "ip_1105"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "6",
       								odds: 2.18,
       								key_s: "ip_1106"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "7",
       								odds: 2.18,
       								key_s: "ip_1107"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "8",
       								odds: 2.18,
       								key_s: "ip_1108"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "9",
       								odds: 2.18,
       								key_s: "ip_1109"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "10",
       								odds: 2.18,
       								key_s: "ip_1110"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "11",
       								odds: 2.18,
       								key_s: "ip_1111"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "12",
       								odds: 2.18,
       								key_s: "ip_1112"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "13",
       								odds: 2.18,
       								key_s: "ip_1113"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "14",
       								odds: 2.18,
       								key_s: "ip_1114"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "15",
       								odds: 2.18,
       								key_s: "ip_1115"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "16",
       								odds: 2.18,
       								key_s: "ip_1116"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "17",
       								odds: 2.18,
       								key_s: "ip_1117"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "18",
       								odds: 2.18,
       								key_s: "ip_1118"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "19",
       								odds: 2.18,
       								key_s: "ip_1119"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "20",
       								odds: 2.18,
       								key_s: "ip_1120"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "21",
       								odds: 2.18,
       								key_s: "ip_1121"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "22",
       								odds: 2.18,
       								key_s: "ip_1122"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "23",
       								odds: 2.18,
       								key_s: "ip_1123"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "24",
       								odds: 2.18,
       								key_s: "ip_1124"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "25",
       								odds: 2.18,
       								key_s: "ip_1125"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "26",
       								odds: 2.18,
       								key_s: "ip_1126"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "27",
       								odds: 2.18,
       								key_s: "ip_1127"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "28",
       								odds: 2.18,
       								key_s: "ip_1128"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "29",
       								odds: 2.18,
       								key_s: "ip_1129"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "30",
       								odds: 2.18,
       								key_s: "ip_1130"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "31",
       								odds: 2.18,
       								key_s: "ip_1131"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "32",
       								odds: 2.18,
       								key_s: "ip_1132"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "33",
       								odds: 2.18,
       								key_s: "ip_1133"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "34",
       								odds: 2.18,
       								key_s: "ip_1134"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "35",
       								odds: 2.18,
       								key_s: "ip_1135"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "36",
       								odds: 2.18,
       								key_s: "ip_1136"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "37",
       								odds: 2.18,
       								key_s: "ip_1137"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "38",
       								odds: 2.18,
       								key_s: "ip_1138"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "39",
       								odds: 2.18,
       								key_s: "ip_1139"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "40",
       								odds: 2.18,
       								key_s: "ip_1140"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "41",
       								odds: 2.18,
       								key_s: "ip_1141"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "42",
       								odds: 2.18,
       								key_s: "ip_1142"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "43",
       								odds: 2.18,
       								key_s: "ip_1143"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "44",
       								odds: 2.18,
       								key_s: "ip_1144"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "45",
       								odds: 2.18,
       								key_s: "ip_1145"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "46",
       								odds: 2.18,
       								key_s: "ip_1146"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "47",
       								odds: 2.18,
       								key_s: "ip_1147"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "48",
       								odds: 2.18,
       								key_s: "ip_1148"
       							},
       							{
       								group: "五不中",
       								isCheck: false,
       								name: "49",
       								odds: 2.18,
       								key_s: "ip_1149"
       							}
       						]
       					}]
       				},
       	 bz6: {
       					name: '全不中',
       					body: [{
       						_name: '六不中',
       						list: [

       							{
       								group: "六不中",
       								isCheck: false,
       								name: "1",
       								odds: 2.63,
       								key_s: "ip_1151"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "2",
       								odds: 2.63,
       								key_s: "ip_1152"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "3",
       								odds: 2.63,
       								key_s: "ip_1153"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "4",
       								odds: 2.63,
       								key_s: "ip_1154"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "5",
       								odds: 2.63,
       								key_s: "ip_1155"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "6",
       								odds: 2.63,
       								key_s: "ip_1156"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "7",
       								odds: 2.63,
       								key_s: "ip_1157"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "8",
       								odds: 2.63,
       								key_s: "ip_1158"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "9",
       								odds: 2.63,
       								key_s: "ip_1159"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "10",
       								odds: 2.63,
       								key_s: "ip_1160"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "11",
       								odds: 2.63,
       								key_s: "ip_1161"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "12",
       								odds: 2.63,
       								key_s: "ip_1162"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "13",
       								odds: 2.63,
       								key_s: "ip_1163"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "14",
       								odds: 2.63,
       								key_s: "ip_1164"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "15",
       								odds: 2.63,
       								key_s: "ip_1165"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "16",
       								odds: 2.63,
       								key_s: "ip_1166"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "17",
       								odds: 2.63,
       								key_s: "ip_1167"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "18",
       								odds: 2.63,
       								key_s: "ip_1168"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "19",
       								odds: 2.63,
       								key_s: "ip_1169"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "20",
       								odds: 2.63,
       								key_s: "ip_1170"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "21",
       								odds: 2.63,
       								key_s: "ip_1171"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "22",
       								odds: 2.63,
       								key_s: "ip_1172"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "23",
       								odds: 2.63,
       								key_s: "ip_1173"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "24",
       								odds: 2.63,
       								key_s: "ip_1174"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "25",
       								odds: 2.63,
       								key_s: "ip_1175"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "26",
       								odds: 2.63,
       								key_s: "ip_1176"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "27",
       								odds: 2.63,
       								key_s: "ip_1177"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "28",
       								odds: 2.63,
       								key_s: "ip_1178"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "29",
       								odds: 2.63,
       								key_s: "ip_1179"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "30",
       								odds: 2.63,
       								key_s: "ip_1180"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "31",
       								odds: 2.63,
       								key_s: "ip_1181"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "32",
       								odds: 2.63,
       								key_s: "ip_1182"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "33",
       								odds: 2.63,
       								key_s: "ip_1183"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "34",
       								odds: 2.63,
       								key_s: "ip_1184"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "35",
       								odds: 2.63,
       								key_s: "ip_1185"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "36",
       								odds: 2.63,
       								key_s: "ip_1186"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "37",
       								odds: 2.63,
       								key_s: "ip_1187"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "38",
       								odds: 2.63,
       								key_s: "ip_1188"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "39",
       								odds: 2.63,
       								key_s: "ip_1189"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "40",
       								odds: 2.63,
       								key_s: "ip_1190"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "41",
       								odds: 2.63,
       								key_s: "ip_1191"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "42",
       								odds: 2.63,
       								key_s: "ip_1192"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "43",
       								odds: 2.63,
       								key_s: "ip_1193"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "44",
       								odds: 2.63,
       								key_s: "ip_1194"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "45",
       								odds: 2.63,
       								key_s: "ip_1195"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "46",
       								odds: 2.63,
       								key_s: "ip_1196"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "47",
       								odds: 2.63,
       								key_s: "ip_1197"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "48",
       								odds: 2.63,
       								key_s: "ip_1198"
       							},
       							{
       								group: "六不中",
       								isCheck: false,
       								name: "49",
       								odds: 2.63,
       								key_s: "ip_1199"
       							}
       						]
       					}]
       				},
       		bz7: {
       					name: '全不中',
       					body: [{
       						_name: '七不中',
       						list: [

       							{
       								group: "七不中",
       								isCheck: false,
       								name: "1",
       								odds: 3.18,
       								key_s: "ip_1201"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "2",
       								odds: 3.18,
       								key_s: "ip_1202"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "3",
       								odds: 3.18,
       								key_s: "ip_1203"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "4",
       								odds: 3.18,
       								key_s: "ip_1204"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "5",
       								odds: 3.18,
       								key_s: "ip_1205"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "6",
       								odds: 3.18,
       								key_s: "ip_1206"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "7",
       								odds: 3.18,
       								key_s: "ip_1207"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "8",
       								odds: 3.18,
       								key_s: "ip_1208"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "9",
       								odds: 3.18,
       								key_s: "ip_1209"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "10",
       								odds: 3.18,
       								key_s: "ip_1210"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "11",
       								odds: 3.18,
       								key_s: "ip_1211"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "12",
       								odds: 3.18,
       								key_s: "ip_1212"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "13",
       								odds: 3.18,
       								key_s: "ip_1213"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "14",
       								odds: 3.18,
       								key_s: "ip_1214"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "15",
       								odds: 3.18,
       								key_s: "ip_1215"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "16",
       								odds: 3.18,
       								key_s: "ip_1216"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "17",
       								odds: 3.18,
       								key_s: "ip_1217"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "18",
       								odds: 3.18,
       								key_s: "ip_1218"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "19",
       								odds: 3.18,
       								key_s: "ip_1219"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "20",
       								odds: 3.18,
       								key_s: "ip_1220"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "21",
       								odds: 3.18,
       								key_s: "ip_1221"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "22",
       								odds: 3.18,
       								key_s: "ip_1222"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "23",
       								odds: 3.18,
       								key_s: "ip_1223"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "24",
       								odds: 3.18,
       								key_s: "ip_1224"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "25",
       								odds: 3.18,
       								key_s: "ip_1225"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "26",
       								odds: 3.18,
       								key_s: "ip_1226"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "27",
       								odds: 3.18,
       								key_s: "ip_1227"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "28",
       								odds: 3.18,
       								key_s: "ip_1228"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "29",
       								odds: 3.18,
       								key_s: "ip_1229"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "30",
       								odds: 3.18,
       								key_s: "ip_1230"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "31",
       								odds: 3.18,
       								key_s: "ip_1231"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "32",
       								odds: 3.18,
       								key_s: "ip_1232"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "33",
       								odds: 3.18,
       								key_s: "ip_1233"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "34",
       								odds: 3.18,
       								key_s: "ip_1234"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "35",
       								odds: 3.18,
       								key_s: "ip_1235"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "36",
       								odds: 3.18,
       								key_s: "ip_1236"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "37",
       								odds: 3.18,
       								key_s: "ip_1237"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "38",
       								odds: 3.18,
       								key_s: "ip_1238"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "39",
       								odds: 3.18,
       								key_s: "ip_1239"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "40",
       								odds: 3.18,
       								key_s: "ip_1240"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "41",
       								odds: 3.18,
       								key_s: "ip_1241"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "42",
       								odds: 3.18,
       								key_s: "ip_1242"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "43",
       								odds: 3.18,
       								key_s: "ip_1243"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "44",
       								odds: 3.18,
       								key_s: "ip_1244"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "45",
       								odds: 3.18,
       								key_s: "ip_1245"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "46",
       								odds: 3.18,
       								key_s: "ip_1246"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "47",
       								odds: 3.18,
       								key_s: "ip_1247"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "48",
       								odds: 3.18,
       								key_s: "ip_1248"
       							},
       							{
       								group: "七不中",
       								isCheck: false,
       								name: "49",
       								odds: 3.18,
       								key_s: "ip_1249"
       							}
       						]
       					}]
       				},
       	 bz8: {
       					name: '全不中',
       					body: [{
       						_name: '八不中',
       						list: [

       							{
       								group: "八不中",
       								isCheck: false,
       								name: "1",
       								odds: 3.72,
       								key_s: "ip_1251"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "2",
       								odds: 3.72,
       								key_s: "ip_1252"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "3",
       								odds: 3.72,
       								key_s: "ip_1253"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "4",
       								odds: 3.72,
       								key_s: "ip_1254"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "5",
       								odds: 3.72,
       								key_s: "ip_1255"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "6",
       								odds: 3.72,
       								key_s: "ip_1256"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "7",
       								odds: 3.72,
       								key_s: "ip_1257"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "8",
       								odds: 3.72,
       								key_s: "ip_1258"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "9",
       								odds: 3.72,
       								key_s: "ip_1259"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "10",
       								odds: 3.72,
       								key_s: "ip_1260"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "11",
       								odds: 3.72,
       								key_s: "ip_1261"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "12",
       								odds: 3.72,
       								key_s: "ip_1262"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "13",
       								odds: 3.72,
       								key_s: "ip_1263"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "14",
       								odds: 3.72,
       								key_s: "ip_1264"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "15",
       								odds: 3.72,
       								key_s: "ip_1265"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "16",
       								odds: 3.72,
       								key_s: "ip_1266"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "17",
       								odds: 3.72,
       								key_s: "ip_1267"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "18",
       								odds: 3.72,
       								key_s: "ip_1268"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "19",
       								odds: 3.72,
       								key_s: "ip_1269"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "20",
       								odds: 3.72,
       								key_s: "ip_1270"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "21",
       								odds: 3.72,
       								key_s: "ip_1271"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "22",
       								odds: 3.72,
       								key_s: "ip_1272"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "23",
       								odds: 3.72,
       								key_s: "ip_1273"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "24",
       								odds: 3.72,
       								key_s: "ip_1274"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "25",
       								odds: 3.72,
       								key_s: "ip_1275"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "26",
       								odds: 3.72,
       								key_s: "ip_1276"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "27",
       								odds: 3.72,
       								key_s: "ip_1277"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "28",
       								odds: 3.72,
       								key_s: "ip_1278"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "29",
       								odds: 3.72,
       								key_s: "ip_1279"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "30",
       								odds: 3.72,
       								key_s: "ip_1280"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "31",
       								odds: 3.72,
       								key_s: "ip_1281"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "32",
       								odds: 3.72,
       								key_s: "ip_1282"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "33",
       								odds: 3.72,
       								key_s: "ip_1283"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "34",
       								odds: 3.72,
       								key_s: "ip_1284"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "35",
       								odds: 3.72,
       								key_s: "ip_1285"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "36",
       								odds: 3.72,
       								key_s: "ip_1286"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "37",
       								odds: 3.72,
       								key_s: "ip_1287"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "38",
       								odds: 3.72,
       								key_s: "ip_1288"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "39",
       								odds: 3.72,
       								key_s: "ip_1289"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "40",
       								odds: 3.72,
       								key_s: "ip_1290"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "41",
       								odds: 3.72,
       								key_s: "ip_1291"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "42",
       								odds: 3.72,
       								key_s: "ip_1292"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "43",
       								odds: 3.72,
       								key_s: "ip_1293"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "44",
       								odds: 3.72,
       								key_s: "ip_1294"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "45",
       								odds: 3.72,
       								key_s: "ip_1295"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "46",
       								odds: 3.72,
       								key_s: "ip_1296"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "47",
       								odds: 3.72,
       								key_s: "ip_1297"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "48",
       								odds: 3.72,
       								key_s: "ip_1298"
       							},
       							{
       								group: "八不中",
       								isCheck: false,
       								name: "49",
       								odds: 3.72,
       								key_s: "ip_1299"
       							}
       						]
       					}]
       				},
         	bz9: {
       					name: '全不中',
       					body: [{
       						_name: '九不中',
       						list: [

       							{
       								group: "九不中",
       								isCheck: false,
       								name: "1",
       								odds: 4.5,
       								key_s: "ip_1501"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "2",
       								odds: 4.5,
       								key_s: "ip_1502"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "3",
       								odds: 4.5,
       								key_s: "ip_1503"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "4",
       								odds: 4.5,
       								key_s: "ip_1504"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "5",
       								odds: 4.5,
       								key_s: "ip_1505"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "6",
       								odds: 4.5,
       								key_s: "ip_1506"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "7",
       								odds: 4.5,
       								key_s: "ip_1507"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "8",
       								odds: 4.5,
       								key_s: "ip_1508"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "9",
       								odds: 4.5,
       								key_s: "ip_1509"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "10",
       								odds: 4.5,
       								key_s: "ip_1510"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "11",
       								odds: 4.5,
       								key_s: "ip_1511"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "12",
       								odds: 4.5,
       								key_s: "ip_1512"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "13",
       								odds: 4.5,
       								key_s: "ip_1513"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "14",
       								odds: 4.5,
       								key_s: "ip_1514"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "15",
       								odds: 4.5,
       								key_s: "ip_1515"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "16",
       								odds: 4.5,
       								key_s: "ip_1516"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "17",
       								odds: 4.5,
       								key_s: "ip_1517"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "18",
       								odds: 4.5,
       								key_s: "ip_1518"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "19",
       								odds: 4.5,
       								key_s: "ip_1519"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "20",
       								odds: 4.5,
       								key_s: "ip_1520"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "21",
       								odds: 4.5,
       								key_s: "ip_1521"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "22",
       								odds: 4.5,
       								key_s: "ip_1522"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "23",
       								odds: 4.5,
       								key_s: "ip_1523"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "24",
       								odds: 4.5,
       								key_s: "ip_1524"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "25",
       								odds: 4.5,
       								key_s: "ip_1525"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "26",
       								odds: 4.5,
       								key_s: "ip_1526"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "27",
       								odds: 4.5,
       								key_s: "ip_1527"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "28",
       								odds: 4.5,
       								key_s: "ip_1528"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "29",
       								odds: 4.5,
       								key_s: "ip_1529"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "30",
       								odds: 4.5,
       								key_s: "ip_1530"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "31",
       								odds: 4.5,
       								key_s: "ip_1531"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "32",
       								odds: 4.5,
       								key_s: "ip_1532"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "33",
       								odds: 4.5,
       								key_s: "ip_1533"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "34",
       								odds: 4.5,
       								key_s: "ip_1534"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "35",
       								odds: 4.5,
       								key_s: "ip_1535"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "36",
       								odds: 4.5,
       								key_s: "ip_1536"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "37",
       								odds: 4.5,
       								key_s: "ip_1537"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "38",
       								odds: 4.5,
       								key_s: "ip_1538"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "39",
       								odds: 4.5,
       								key_s: "ip_1539"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "40",
       								odds: 4.5,
       								key_s: "ip_1540"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "41",
       								odds: 4.5,
       								key_s: "ip_1541"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "42",
       								odds: 4.5,
       								key_s: "ip_1542"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "43",
       								odds: 4.5,
       								key_s: "ip_1543"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "44",
       								odds: 4.5,
       								key_s: "ip_1544"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "45",
       								odds: 4.5,
       								key_s: "ip_1545"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "46",
       								odds: 4.5,
       								key_s: "ip_1546"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "47",
       								odds: 4.5,
       								key_s: "ip_1547"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "48",
       								odds: 4.5,
       								key_s: "ip_1548"
       							},
       							{
       								group: "九不中",
       								isCheck: false,
       								name: "49",
       								odds: 4.5,
       								key_s: "ip_1549"
       							}
       						]
       					}]
       				},
       	 bz10: {
       					name: '全不中',
       					body: [{
       						_name: '十不中',
       						list: [

       							{
       								group: "十不中",
       								isCheck: false,
       								name: "1",
       								odds: 5.58,
       								key_s: "ip_1551"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "2",
       								odds: 5.58,
       								key_s: "ip_1552"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "3",
       								odds: 5.58,
       								key_s: "ip_1553"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "4",
       								odds: 5.58,
       								key_s: "ip_1554"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "5",
       								odds: 5.58,
       								key_s: "ip_1555"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "6",
       								odds: 5.58,
       								key_s: "ip_1556"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "7",
       								odds: 5.58,
       								key_s: "ip_1557"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "8",
       								odds: 5.58,
       								key_s: "ip_1558"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "9",
       								odds: 5.58,
       								key_s: "ip_1559"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "10",
       								odds: 5.58,
       								key_s: "ip_1560"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "11",
       								odds: 5.58,
       								key_s: "ip_1561"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "12",
       								odds: 5.58,
       								key_s: "ip_1562"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "13",
       								odds: 5.58,
       								key_s: "ip_1563"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "14",
       								odds: 5.58,
       								key_s: "ip_1564"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "15",
       								odds: 5.58,
       								key_s: "ip_1565"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "16",
       								odds: 5.58,
       								key_s: "ip_1566"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "17",
       								odds: 5.58,
       								key_s: "ip_1567"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "18",
       								odds: 5.58,
       								key_s: "ip_1568"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "19",
       								odds: 5.58,
       								key_s: "ip_1569"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "20",
       								odds: 5.58,
       								key_s: "ip_1570"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "21",
       								odds: 5.58,
       								key_s: "ip_1571"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "22",
       								odds: 5.58,
       								key_s: "ip_1572"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "23",
       								odds: 5.58,
       								key_s: "ip_1573"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "24",
       								odds: 5.58,
       								key_s: "ip_1574"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "25",
       								odds: 5.58,
       								key_s: "ip_1575"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "26",
       								odds: 5.58,
       								key_s: "ip_1576"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "27",
       								odds: 5.58,
       								key_s: "ip_1577"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "28",
       								odds: 5.58,
       								key_s: "ip_1578"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "29",
       								odds: 5.58,
       								key_s: "ip_1579"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "30",
       								odds: 5.58,
       								key_s: "ip_1580"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "31",
       								odds: 5.58,
       								key_s: "ip_1581"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "32",
       								odds: 5.58,
       								key_s: "ip_1582"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "33",
       								odds: 5.58,
       								key_s: "ip_1583"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "34",
       								odds: 5.58,
       								key_s: "ip_1584"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "35",
       								odds: 5.58,
       								key_s: "ip_1585"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "36",
       								odds: 5.58,
       								key_s: "ip_1586"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "37",
       								odds: 5.58,
       								key_s: "ip_1587"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "38",
       								odds: 5.58,
       								key_s: "ip_1588"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "39",
       								odds: 5.58,
       								key_s: "ip_1589"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "40",
       								odds: 5.58,
       								key_s: "ip_1590"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "41",
       								odds: 5.58,
       								key_s: "ip_1591"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "42",
       								odds: 5.58,
       								key_s: "ip_1592"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "43",
       								odds: 5.58,
       								key_s: "ip_1593"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "44",
       								odds: 5.58,
       								key_s: "ip_1594"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "45",
       								odds: 5.58,
       								key_s: "ip_1595"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "46",
       								odds: 5.58,
       								key_s: "ip_1596"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "47",
       								odds: 5.58,
       								key_s: "ip_1597"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "48",
       								odds: 5.58,
       								key_s: "ip_1598"
       							},
       							{
       								group: "十不中",
       								isCheck: false,
       								name: "49",
       								odds: 5.58,
       								key_s: "ip_1599"
       							}
       						]
       					}]
       				},
       	 bz11: {
       					name: '全不中',
       					body: [{
       						_name: '十一不中',
       						list: [

       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "1",
       								odds: 6.8,
       								key_s: "ip_1601"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "2",
       								odds: 6.8,
       								key_s: "ip_1602"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "3",
       								odds: 6.8,
       								key_s: "ip_1603"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "4",
       								odds: 6.8,
       								key_s: "ip_1604"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "5",
       								odds: 6.8,
       								key_s: "ip_1605"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "6",
       								odds: 6.8,
       								key_s: "ip_1606"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "7",
       								odds: 6.8,
       								key_s: "ip_1607"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "8",
       								odds: 6.8,
       								key_s: "ip_1608"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "9",
       								odds: 6.8,
       								key_s: "ip_1609"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "10",
       								odds: 6.8,
       								key_s: "ip_1610"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "11",
       								odds: 6.8,
       								key_s: "ip_1611"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "12",
       								odds: 6.8,
       								key_s: "ip_1612"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "13",
       								odds: 6.8,
       								key_s: "ip_1613"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "14",
       								odds: 6.8,
       								key_s: "ip_1614"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "15",
       								odds: 6.8,
       								key_s: "ip_1615"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "16",
       								odds: 6.8,
       								key_s: "ip_1616"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "17",
       								odds: 6.8,
       								key_s: "ip_1617"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "18",
       								odds: 6.8,
       								key_s: "ip_1618"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "19",
       								odds: 6.8,
       								key_s: "ip_1619"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "20",
       								odds: 6.8,
       								key_s: "ip_1620"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "21",
       								odds: 6.8,
       								key_s: "ip_1621"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "22",
       								odds: 6.8,
       								key_s: "ip_1622"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "23",
       								odds: 6.8,
       								key_s: "ip_1623"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "24",
       								odds: 6.8,
       								key_s: "ip_1624"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "25",
       								odds: 6.8,
       								key_s: "ip_1625"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "26",
       								odds: 6.8,
       								key_s: "ip_1626"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "27",
       								odds: 6.8,
       								key_s: "ip_1627"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "28",
       								odds: 6.8,
       								key_s: "ip_1628"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "29",
       								odds: 6.8,
       								key_s: "ip_1629"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "30",
       								odds: 6.8,
       								key_s: "ip_1630"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "31",
       								odds: 6.8,
       								key_s: "ip_1631"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "32",
       								odds: 6.8,
       								key_s: "ip_1632"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "33",
       								odds: 6.8,
       								key_s: "ip_1633"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "34",
       								odds: 6.8,
       								key_s: "ip_1634"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "35",
       								odds: 6.8,
       								key_s: "ip_1635"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "36",
       								odds: 6.8,
       								key_s: "ip_1636"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "37",
       								odds: 6.8,
       								key_s: "ip_1637"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "38",
       								odds: 6.8,
       								key_s: "ip_1638"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "39",
       								odds: 6.8,
       								key_s: "ip_1639"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "40",
       								odds: 6.8,
       								key_s: "ip_1640"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "41",
       								odds: 6.8,
       								key_s: "ip_1641"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "42",
       								odds: 6.8,
       								key_s: "ip_1642"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "43",
       								odds: 6.8,
       								key_s: "ip_1643"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "44",
       								odds: 6.8,
       								key_s: "ip_1644"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "45",
       								odds: 6.8,
       								key_s: "ip_1645"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "46",
       								odds: 6.8,
       								key_s: "ip_1646"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "47",
       								odds: 6.8,
       								key_s: "ip_1647"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "48",
       								odds: 6.8,
       								key_s: "ip_1648"
       							},
       							{
       								group: "十一不中",
       								isCheck: false,
       								name: "49",
       								odds: 6.8,
       								key_s: "ip_1649"
       							}
       						]
       					}]
       				},
       	 bz12: {
       					name: '全不中',
       					body: [{
       						_name: '十二不中',
       						list: [

       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "1",
       								odds:8.5,
       								key_s: "ip_1651"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "2",
       								odds:8.5,
       								key_s: "ip_1652"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "3",
       								odds:8.5,
       								key_s: "ip_1653"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "4",
       								odds:8.5,
       								key_s: "ip_1654"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "5",
       								odds:8.5,
       								key_s: "ip_1655"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "6",
       								odds:8.5,
       								key_s: "ip_1656"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "7",
       								odds:8.5,
       								key_s: "ip_1657"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "8",
       								odds:8.5,
       								key_s: "ip_1658"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "9",
       								odds:8.5,
       								key_s: "ip_1659"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "10",
       								odds:8.5,
       								key_s: "ip_1660"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "11",
       								odds:8.5,
       								key_s: "ip_1661"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "12",
       								odds:8.5,
       								key_s: "ip_1662"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "13",
       								odds:8.5,
       								key_s: "ip_1663"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "14",
       								odds:8.5,
       								key_s: "ip_1664"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "15",
       								odds:8.5,
       								key_s: "ip_1665"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "16",
       								odds:8.5,
       								key_s: "ip_1666"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "17",
       								odds:8.5,
       								key_s: "ip_1667"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "18",
       								odds:8.5,
       								key_s: "ip_1668"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "19",
       								odds:8.5,
       								key_s: "ip_1669"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "20",
       								odds:8.5,
       								key_s: "ip_1670"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "21",
       								odds:8.5,
       								key_s: "ip_1671"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "22",
       								odds:8.5,
       								key_s: "ip_1672"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "23",
       								odds:8.5,
       								key_s: "ip_1673"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "24",
       								odds:8.5,
       								key_s: "ip_1674"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "25",
       								odds:8.5,
       								key_s: "ip_1675"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "26",
       								odds:8.5,
       								key_s: "ip_1676"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "27",
       								odds:8.5,
       								key_s: "ip_1677"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "28",
       								odds:8.5,
       								key_s: "ip_1678"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "29",
       								odds:8.5,
       								key_s: "ip_1679"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "30",
       								odds:8.5,
       								key_s: "ip_1680"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "31",
       								odds:8.5,
       								key_s: "ip_1681"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "32",
       								odds:8.5,
       								key_s: "ip_1682"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "33",
       								odds:8.5,
       								key_s: "ip_1683"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "34",
       								odds:8.5,
       								key_s: "ip_1684"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "35",
       								odds:8.5,
       								key_s: "ip_1685"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "36",
       								odds:8.5,
       								key_s: "ip_1686"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "37",
       								odds:8.5,
       								key_s: "ip_1687"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "38",
       								odds:8.5,
       								key_s: "ip_1688"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "39",
       								odds:8.5,
       								key_s: "ip_1689"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "40",
       								odds:8.5,
       								key_s: "ip_1690"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "41",
       								odds:8.5,
       								key_s: "ip_1691"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "42",
       								odds:8.5,
       								key_s: "ip_1692"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "43",
       								odds:8.5,
       								key_s: "ip_1693"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "44",
       								odds:8.5,
       								key_s: "ip_1694"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "45",
       								odds:8.5,
       								key_s: "ip_1695"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "46",
       								odds:8.5,
       								key_s: "ip_1696"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "47",
       								odds:8.5,
       								key_s: "ip_1697"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "48",
       								odds:8.5,
       								key_s: "ip_1698"
       							},
       							{
       								group: "十二不中",
       								isCheck: false,
       								name: "49",
       								odds: 8.5,
       								key_s: "ip_1699"
       							}
       						]
       					}]
       				},



    }

}



//广东快乐十分
let getKlsf = () => {
  return {
    lmp: {
      name: '两面盘',
      body: [
        {
          _name: '总和龙虎',
          list: [
            {
              group: "总和龙虎",
              isCheck: false,
              name: "总和大",
              odds: 1.988,
              key_s: "ip_2024"
            }, {
              group: "总和龙虎",
              isCheck: false,
              name: "总和小",
              odds: 1.988,
              key_s: "ip_2025"
            }, {
              group: "总和龙虎",
              isCheck: false,
              name: "总和单",
              odds: 1.988,
              key_s: "ip_2026"
            }, {
              group: "总和龙虎",
              isCheck: false,
              name: "总和双",
              odds: 1.988,
              key_s: "ip_2027"
            }, {
              group: "总和龙虎",
              isCheck: false,
              name: "总和尾大",
              odds: 1.988,
              key_s: "ip_2028"
            }, {
              group: "总和龙虎",
              isCheck: false,
              name: "总和尾小",
              odds: 1.988,
              key_s: "ip_2029"
            }, {
              group: "总和龙虎",
              isCheck: false,
              name: "龙",
              odds: 1.988,
              key_s: "ip_2030"
            }, {
              group: "总和龙虎",
              isCheck: false,
              name: "虎",
              odds: 1.988,
              key_s: "ip_2031"
            }
          ]
        }, {
          _name: '第一球',
          list: [
            {
              group: "第一球",
              isCheck: false,
              name: "大",
              odds: 1.988,
              key_s: "ip_1_2009"
            }, {
              group: "第一球",
              isCheck: false,
              name: "小",
              odds: 1.988,
              key_s: "ip_1_2010"
            }, {
              group: "第一球",
              isCheck: false,
              name: "单",
              odds: 1.988,
              key_s: "ip_1_2011"
            }, {
              group: "第一球",
              isCheck: false,
              name: "双",
              odds: 1.988,
              key_s: "ip_1_2012"
            }, {
              group: "第一球",
              isCheck: false,
              name: "尾大",
              odds: 1.988,
              key_s: "ip_1_2013"
            }, {
              group: "第一球",
              isCheck: false,
              name: "尾小",
              odds: 1.988,
              key_s: "ip_1_2014"
            }, {
              group: "第一球",
              isCheck: false,
              name: "合数单",
              odds: 1.988,
              key_s: "ip_1_2015"
            }, {
              group: "第一球",
              isCheck: false,
              name: "合数双",
              odds: 1.988,
              key_s: "ip_1_2016"
            }
          ]
        }, {
          _name: '第二球',
          list: [
            {
              group: "第二球",
              isCheck: false,
              name: "大",
              odds: 1.988,
              key_s: "ip_2_2009"
            }, {
              group: "第二球",
              isCheck: false,
              name: "小",
              odds: 1.988,
              key_s: "ip_2_2010"
            }, {
              group: "第二球",
              isCheck: false,
              name: "单",
              odds: 1.988,
              key_s: "ip_2_2011"
            }, {
              group: "第二球",
              isCheck: false,
              name: "双",
              odds: 1.988,
              key_s: "ip_2_2012"
            }, {
              group: "第二球",
              isCheck: false,
              name: "尾大",
              odds: 1.988,
              key_s: "ip_2_2013"
            }, {
              group: "第二球",
              isCheck: false,
              name: "尾小",
              odds: 1.988,
              key_s: "ip_2_2014"
            }, {
              group: "第二球",
              isCheck: false,
              name: "合数单",
              odds: 1.988,
              key_s: "ip_2_2015"
            }, {
              group: "第二球",
              isCheck: false,
              name: "合数双",
              odds: 1.988,
              key_s: "ip_2_2016"
            }
          ]
        }, {
          _name: '第三球',
          list: [
            {
              group: "第三球",
              isCheck: false,
              name: "大",
              odds: 1.988,
              key_s: "ip_3_2009"
            }, {
              group: "第三球",
              isCheck: false,
              name: "小",
              odds: 1.988,
              key_s: "ip_3_2010"
            }, {
              group: "第三球",
              isCheck: false,
              name: "单",
              odds: 1.988,
              key_s: "ip_3_2011"
            }, {
              group: "第三球",
              isCheck: false,
              name: "双",
              odds: 1.988,
              key_s: "ip_3_2012"
            }, {
              group: "第三球",
              isCheck: false,
              name: "尾大",
              odds: 1.988,
              key_s: "ip_3_2013"
            }, {
              group: "第三球",
              isCheck: false,
              name: "尾小",
              odds: 1.988,
              key_s: "ip_3_2014"
            }, {
              group: "第三球",
              isCheck: false,
              name: "合数单",
              odds: 1.988,
              key_s: "ip_3_2015"
            }, {
              group: "第三球",
              isCheck: false,
              name: "合数双",
              odds: 1.988,
              key_s: "ip_3_2016"
            }
          ]
        }, {
          _name: '第四球',
          list: [
            {
              group: "第四球",
              isCheck: false,
              name: "大",
              odds: 1.988,
              key_s: "ip_4_209"
            }, {
              group: "第四球",
              isCheck: false,
              name: "小",
              odds: 1.988,
              key_s: "ip_4_2010"
            }, {
              group: "第四球",
              isCheck: false,
              name: "单",
              odds: 1.988,
              key_s: "ip_4_2011"
            }, {
              group: "第四球",
              isCheck: false,
              name: "双",
              odds: 1.988,
              key_s: "ip_4_2012"
            }, {
              group: "第四球",
              isCheck: false,
              name: "尾大",
              odds: 1.988,
              key_s: "ip_4_2013"
            }, {
              group: "第四球",
              isCheck: false,
              name: "尾小",
              odds: 1.988,
              key_s: "ip_4_2014"
            }, {
              group: "第四球",
              isCheck: false,
              name: "合数单",
              odds: 1.988,
              key_s: "ip_4_2015"
            }, {
              group: "第四球",
              isCheck: false,
              name: "合数双",
              odds: 1.988,
              key_s: "ip_4_2016"
            }
          ]
        }, {
          _name: '第五球',
          list: [
            {
              group: "第五球",
              isCheck: false,
              name: "大",
              odds: 1.988,
              key_s: "ip_5_2009"
            }, {
              group: "第五球",
              isCheck: false,
              name: "小",
              odds: 1.988,
              key_s: "ip_5_2010"
            }, {
              group: "第五球",
              isCheck: false,
              name: "单",
              odds: 1.988,
              key_s: "ip_5_2011"
            }, {
              group: "第五球",
              isCheck: false,
              name: "双",
              odds: 1.988,
              key_s: "ip_5_2012"
            }, {
              group: "第五球",
              isCheck: false,
              name: "尾大",
              odds: 1.988,
              key_s: "ip_5_2013"
            }, {
              group: "第五球",
              isCheck: false,
              name: "尾小",
              odds: 1.988,
              key_s: "ip_5_2014"
            }, {
              group: "第五球",
              isCheck: false,
              name: "合数单",
              odds: 1.988,
              key_s: "ip_5_2015"
            }, {
              group: "第五球",
              isCheck: false,
              name: "合数双",
              odds: 1.988,
              key_s: "ip_5_2016"
            }
          ]
        }, {
          _name: '第六球',
          list: [
            {
              group: "第六球",
              isCheck: false,
              name: "大",
              odds: 1.988,
              key_s: "ip_6_2009"
            }, {
              group: "第六球",
              isCheck: false,
              name: "小",
              odds: 1.988,
              key_s: "ip_6_2010"
            }, {
              group: "第六球",
              isCheck: false,
              name: "单",
              odds: 1.988,
              key_s: "ip_6_2011"
            }, {
              group: "第六球",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_6_2012"
            }, {
              group: "第六球",
              isCheck: false,
              name: "尾大",
              odds: 1.988,
              key_s: "ip_6_2013"
            }, {
              group: "第六球",
              isCheck: false,
              name: "尾小",
              odds: 1.988,
              key_s: "ip_6_2014"
            }, {
              group: "第六球",
              isCheck: false,
              name: "合数单",
              odds: 1.988,
              key_s: "ip_6_2015"
            }, {
              group: "第六球",
              isCheck: false,
              name: "合数双",
              odds: 1.988,
              key_s: "ip_6_2016"
            }
          ]
        }, {
          _name: '第七球',
          list: [
            {
              group: "第七球",
              isCheck: false,
              name: "大",
              odds: 1.988,
              key_s: "ip_7_2009"
            }, {
              group: "第七球",
              isCheck: false,
              name: "小",
              odds: 1.988,
              key_s: "ip_7_2010"
            }, {
              group: "第七球",
              isCheck: false,
              name: "单",
              odds: 1.988,
              key_s: "ip_7_2011"
            }, {
              group: "第七球",
              isCheck: false,
              name: "双",
              odds: 1.988,
              key_s: "ip_7_2012"
            }, {
              group: "第七球",
              isCheck: false,
              name: "尾大",
              odds: 1.988,
              key_s: "ip_7_2013"
            }, {
              group: "第七球",
              isCheck: false,
              name: "尾小",
              odds: 1.988,
              key_s: "ip_7_2014"
            }, {
              group: "第七球",
              isCheck: false,
              name: "合数单",
              odds: 1.988,
              key_s: "ip_7_2015"
            }, {
              group: "第七球",
              isCheck: false,
              name: "合数双",
              odds: 1.988,
              key_s: "ip_7_2016"
            }
          ]
        }, {
          _name: '第八球',
          list: [
            {
              group: "第八球",
              isCheck: false,
              name: "大",
              odds: 1.988,
              key_s: "ip_8_2009"
            }, {
              group: "第八球",
              isCheck: false,
              name: "小",
              odds: 1.988,
              key_s: "ip_8_2010"
            }, {
              group: "第八球",
              isCheck: false,
              name: "单",
              odds: 1.988,
              key_s: "ip_8_2011"
            }, {
              group: "第八球",
              isCheck: false,
              name: "双",
              odds: 1.988,
              key_s: "ip_8_2012"
            }, {
              group: "第八球",
              isCheck: false,
              name: "尾大",
              odds: 1.988,
              key_s: "ip_8_2013"
            }, {
              group: "第八球",
              isCheck: false,
              name: "尾小",
              odds: 1.988,
              key_s: "ip_8_2014"
            }, {
              group: "第八球",
              isCheck: false,
              name: "合数单",
              odds: 1.988,
              key_s: "ip_8_2015"
            }, {
              group: "第八球",
              isCheck: false,
              name: "合数双",
              odds: 1.988,
              key_s: "ip_8_2016"
            }
          ]
        }
      ]
    },
    yds: {
      name: '一~四',
      body: [
        {
          _name: '第一球',
          list: [
            {
              group: "第一球",
              isCheck: false,
              name: "1",
              odds: 19.86,
              key_s: "ip_1_1"
            }, {
              group: "第一球",
              isCheck: false,
              name: "2",
              odds: 19.86,
              key_s: "ip_1_2"
            }, {
              group: "第一球",
              isCheck: false,
              name: "3",
              odds: 19.86,
              key_s: "ip_1_3"
            }, {
              group: "第一球",
              isCheck: false,
              name: "4",
              odds: 19.86,
              key_s: "ip_1_4"
            }, {
              group: "第一球",
              isCheck: false,
              name: "5",
              odds: 19.86,
              key_s: "ip_1_5"
            }, {
              group: "第一球",
              isCheck: false,
              name: "6",
              odds: 19.86,
              key_s: "ip_1_6"
            }, {
              group: "第一球",
              isCheck: false,
              name: "7",
              odds: 19.86,
              key_s: "ip_1_7"
            }, {
              group: "第一球",
              isCheck: false,
              name: "8",
              odds: 19.86,
              key_s: "ip_1_8"
            }, {
              group: "第一球",
              isCheck: false,
              name: "9",
              odds: 19.86,
              key_s: "ip_1_9"
            }, {
              group: "第一球",
              isCheck: false,
              name: "10",
              odds: 19.86,
              key_s: "ip_1_10"
            }, {
              group: "第一球",
              isCheck: false,
              name: "11",
              odds: 19.86,
              key_s: "ip_1_11"
            }, {
              group: "第一球",
              isCheck: false,
              name: "12",
              odds: 19.86,
              key_s: "ip_1_12"
            }, {
              group: "第一球",
              isCheck: false,
              name: "13",
              odds: 19.86,
              key_s: "ip_1_13"
            }, {
              group: "第一球",
              isCheck: false,
              name: "14",
              odds: 19.86,
              key_s: "ip_1_14"
            }, {
              group: "第一球",
              isCheck: false,
              name: "15",
              odds: 19.86,
              key_s: "ip_1_15"
            }, {
              group: "第一球",
              isCheck: false,
              name: "16",
              odds: 19.86,
              key_s: "ip_1_16"
            }, {
              group: "第一球",
              isCheck: false,
              name: "17",
              odds: 19.86,
              key_s: "ip_1_17"
            }, {
              group: "第一球",
              isCheck: false,
              name: "18",
              odds: 19.86,
              key_s: "ip_1_18"
            }, {
              group: "第一球",
              isCheck: false,
              name: "19",
              odds: 19.86,
              key_s: "ip_1_19"
            }, {
              group: "第一球",
              isCheck: false,
              name: "20",
              odds: 19.86,
              key_s: "ip_1_20"
            }

          ]
        }, {
          _name: '第二球',
          list: [
            {
              group: "第二球",
              isCheck: false,
              name: "1",
              odds: 19.86,
              key_s: "ip_2_1"
            }, {
              group: "第二球",
              isCheck: false,
              name: "2",
              odds: 19.86,
              key_s: "ip_2_2"
            }, {
              group: "第二球",
              isCheck: false,
              name: "3",
              odds: 19.86,
              key_s: "ip_2_3"
            }, {
              group: "第二球",
              isCheck: false,
              name: "4",
              odds: 19.86,
              key_s: "ip_2_4"
            }, {
              group: "第二球",
              isCheck: false,
              name: "5",
              odds: 19.86,
              key_s: "ip_2_5"
            }, {
              group: "第二球",
              isCheck: false,
              name: "6",
              odds: 19.86,
              key_s: "ip_2_6"
            }, {
              group: "第二球",
              isCheck: false,
              name: "7",
              odds: 19.86,
              key_s: "ip_2_7"
            }, {
              group: "第二球",
              isCheck: false,
              name: "8",
              odds: 19.86,
              key_s: "ip_2_8"
            }, {
              group: "第二球",
              isCheck: false,
              name: "9",
              odds: 19.86,
              key_s: "ip_2_9"
            }, {
              group: "第二球",
              isCheck: false,
              name: "10",
              odds: 19.86,
              key_s: "ip_2_10"
            }, {
              group: "第二球",
              isCheck: false,
              name: "11",
              odds: 19.86,
              key_s: "ip_2_11"
            }, {
              group: "第二球",
              isCheck: false,
              name: "12",
              odds: 19.86,
              key_s: "ip_2_12"
            }, {
              group: "第二球",
              isCheck: false,
              name: "13",
              odds: 19.86,
              key_s: "ip_2_13"
            }, {
              group: "第二球",
              isCheck: false,
              name: "14",
              odds: 19.86,
              key_s: "ip_2_14"
            }, {
              group: "第二球",
              isCheck: false,
              name: "15",
              odds: 19.86,
              key_s: "ip_2_15"
            }, {
              group: "第二球",
              isCheck: false,
              name: "16",
              odds: 19.86,
              key_s: "ip_2_16"
            }, {
              group: "第二球",
              isCheck: false,
              name: "17",
              odds: 19.86,
              key_s: "ip_2_17"
            }, {
              group: "第二球",
              isCheck: false,
              name: "18",
              odds: 19.86,
              key_s: "ip_2_18"
            }, {
              group: "第二球",
              isCheck: false,
              name: "19",
              odds: 19.86,
              key_s: "ip_2_19"
            }, {
              group: "第二球",
              isCheck: false,
              name: "20",
              odds: 19.86,
              key_s: "ip_2_20"
            }
          ]
        }, {
          _name: '第三球',
          list: [
            {
              group: "第三球",
              isCheck: false,
              name: "1",
              odds: 19.86,
              key_s: "ip_3_1"
            }, {
              group: "第三球",
              isCheck: false,
              name: "2",
              odds: 19.86,
              key_s: "ip_3_2"
            }, {
              group: "第三球",
              isCheck: false,
              name: "3",
              odds: 19.86,
              key_s: "ip_3_3"
            }, {
              group: "第三球",
              isCheck: false,
              name: "4",
              odds: 19.86,
              key_s: "ip_3_4"
            }, {
              group: "第三球",
              isCheck: false,
              name: "5",
              odds: 19.86,
              key_s: "ip_3_5"
            }, {
              group: "第三球",
              isCheck: false,
              name: "6",
              odds: 19.86,
              key_s: "ip_3_6"
            }, {
              group: "第三球",
              isCheck: false,
              name: "7",
              odds: 19.86,
              key_s: "ip_3_7"
            }, {
              group: "第三球",
              isCheck: false,
              name: "8",
              odds: 19.86,
              key_s: "ip_3_8"
            }, {
              group: "第三球",
              isCheck: false,
              name: "9",
              odds: 19.86,
              key_s: "ip_3_9"
            }, {
              group: "第三球",
              isCheck: false,
              name: "10",
              odds: 19.86,
              key_s: "ip_3_10"
            }, {
              group: "第三球",
              isCheck: false,
              name: "11",
              odds: 19.86,
              key_s: "ip_3_11"
            }, {
              group: "第三球",
              isCheck: false,
              name: "12",
              odds: 19.86,
              key_s: "ip_3_12"
            }, {
              group: "第三球",
              isCheck: false,
              name: "13",
              odds: 19.86,
              key_s: "ip_3_13"
            }, {
              group: "第三球",
              isCheck: false,
              name: "14",
              odds: 19.86,
              key_s: "ip_3_14"
            }, {
              group: "第三球",
              isCheck: false,
              name: "15",
              odds: 19.86,
              key_s: "ip_3_15"
            }, {
              group: "第三球",
              isCheck: false,
              name: "16",
              odds: 19.86,
              key_s: "ip_3_16"
            }, {
              group: "第三球",
              isCheck: false,
              name: "17",
              odds: 19.86,
              key_s: "ip_3_17"
            }, {
              group: "第三球",
              isCheck: false,
              name: "18",
              odds: 19.86,
              key_s: "ip_3_18"
            }, {
              group: "第三球",
              isCheck: false,
              name: "19",
              odds: 19.86,
              key_s: "ip_3_19"
            }, {
              group: "第三球",
              isCheck: false,
              name: "20",
              odds: 19.86,
              key_s: "ip_3_20"
            }
          ]
        }, {
          _name: '第四球',
          list: [
            {
              group: "第四球",
              isCheck: false,
              name: "1",
              odds: 19.86,
              key_s: "ip_4_1"
            }, {
              group: "第四球",
              isCheck: false,
              name: "2",
              odds: 19.86,
              key_s: "ip_4_2"
            }, {
              group: "第四球",
              isCheck: false,
              name: "3",
              odds: 19.86,
              key_s: "ip_4_3"
            }, {
              group: "第四球",
              isCheck: false,
              name: "4",
              odds: 19.86,
              key_s: "ip_4_4"
            }, {
              group: "第四球",
              isCheck: false,
              name: "5",
              odds: 19.86,
              key_s: "ip_4_5"
            }, {
              group: "第四球",
              isCheck: false,
              name: "6",
              odds: 19.86,
              key_s: "ip_4_6"
            }, {
              group: "第四球",
              isCheck: false,
              name: "7",
              odds: 19.86,
              key_s: "ip_4_7"
            }, {
              group: "第四球",
              isCheck: false,
              name: "8",
              odds: 19.86,
              key_s: "ip_4_8"
            }, {
              group: "第四球",
              isCheck: false,
              name: "9",
              odds: 19.86,
              key_s: "ip_4_9"
            }, {
              group: "第四球",
              isCheck: false,
              name: "10",
              odds: 19.86,
              key_s: "ip_4_10"
            }, {
              group: "第四球",
              isCheck: false,
              name: "11",
              odds: 19.86,
              key_s: "ip_4_11"
            }, {
              group: "第四球",
              isCheck: false,
              name: "12",
              odds: 19.86,
              key_s: "ip_4_12"
            }, {
              group: "第四球",
              isCheck: false,
              name: "13",
              odds: 19.86,
              key_s: "ip_4_13"
            }, {
              group: "第四球",
              isCheck: false,
              name: "14",
              odds: 19.86,
              key_s: "ip_4_14"
            }, {
              group: "第四球",
              isCheck: false,
              name: "15",
              odds: 19.86,
              key_s: "ip_4_15"
            }, {
              group: "第四球",
              isCheck: false,
              name: "16",
              odds: 19.86,
              key_s: "ip_4_16"
            }, {
              group: "第四球",
              isCheck: false,
              name: "17",
              odds: 19.86,
              key_s: "ip_4_17"
            }, {
              group: "第四球",
              isCheck: false,
              name: "18",
              odds: 19.86,
              key_s: "ip_4_18"
            }, {
              group: "第四球",
              isCheck: false,
              name: "19",
              odds: 19.86,
              key_s: "ip_4_19"
            }, {
              group: "第四球",
              isCheck: false,
              name: "20",
              odds: 19.86,
              key_s: "ip_4_20"
            }
          ]
        }
      ]
    },
    wdb: {
      name: '五~八',
      body: [
        {
          _name: '第五球',
          list: [
            {
              group: "第五球",
              isCheck: false,
              name: "1",
              odds: 19.86,
              key_s: "ip_5_1"
            }, {
              group: "第五球",
              isCheck: false,
              name: "2",
              odds: 19.86,
              key_s: "ip_5_2"
            }, {
              group: "第五球",
              isCheck: false,
              name: "3",
              odds: 19.86,
              key_s: "ip_5_3"
            }, {
              group: "第五球",
              isCheck: false,
              name: "4",
              odds: 19.86,
              key_s: "ip_5_4"
            }, {
              group: "第五球",
              isCheck: false,
              name: "5",
              odds: 19.86,
              key_s: "ip_5_5"
            }, {
              group: "第五球",
              isCheck: false,
              name: "6",
              odds: 19.86,
              key_s: "ip_5_6"
            }, {
              group: "第五球",
              isCheck: false,
              name: "7",
              odds: 19.86,
              key_s: "ip_5_7"
            }, {
              group: "第五球",
              isCheck: false,
              name: "8",
              odds: 19.86,
              key_s: "ip_5_8"
            }, {
              group: "第五球",
              isCheck: false,
              name: "9",
              odds: 19.86,
              key_s: "ip_5_9"
            }, {
              group: "第五球",
              isCheck: false,
              name: "10",
              odds: 19.86,
              key_s: "ip_5_10"
            }, {
              group: "第五球",
              isCheck: false,
              name: "11",
              odds: 19.86,
              key_s: "ip_5_11"
            }, {
              group: "第五球",
              isCheck: false,
              name: "12",
              odds: 19.86,
              key_s: "ip_5_12"
            }, {
              group: "第五球",
              isCheck: false,
              name: "13",
              odds: 19.86,
              key_s: "ip_5_13"
            }, {
              group: "第五球",
              isCheck: false,
              name: "14",
              odds: 19.86,
              key_s: "ip_5_14"
            }, {
              group: "第五球",
              isCheck: false,
              name: "15",
              odds: 19.86,
              key_s: "ip_5_15"
            }, {
              group: "第五球",
              isCheck: false,
              name: "16",
              odds: 19.86,
              key_s: "ip_5_16"
            }, {
              group: "第五球",
              isCheck: false,
              name: "17",
              odds: 19.86,
              key_s: "ip_5_17"
            }, {
              group: "第五球",
              isCheck: false,
              name: "18",
              odds: 19.86,
              key_s: "ip_5_18"
            }, {
              group: "第五球",
              isCheck: false,
              name: "19",
              odds: 19.86,
              key_s: "ip_5_19"
            }, {
              group: "第五球",
              isCheck: false,
              name: "20",
              odds: 19.86,
              key_s: "ip_5_20"
            }

          ]
        }, {
          _name: '第六球',
          list: [
            {
              group: "第六球",
              isCheck: false,
              name: "1",
              odds: 19.86,
              key_s: "ip_6_1"
            }, {
              group: "第六球",
              isCheck: false,
              name: "2",
              odds: 19.86,
              key_s: "ip_6_2"
            }, {
              group: "第六球",
              isCheck: false,
              name: "3",
              odds: 19.86,
              key_s: "ip_6_3"
            }, {
              group: "第六球",
              isCheck: false,
              name: "4",
              odds: 19.86,
              key_s: "ip_6_4"
            }, {
              group: "第六球",
              isCheck: false,
              name: "5",
              odds: 19.86,
              key_s: "ip_6_5"
            }, {
              group: "第六球",
              isCheck: false,
              name: "6",
              odds: 19.86,
              key_s: "ip_6_6"
            }, {
              group: "第六球",
              isCheck: false,
              name: "7",
              odds: 19.86,
              key_s: "ip_6_7"
            }, {
              group: "第六球",
              isCheck: false,
              name: "8",
              odds: 19.86,
              key_s: "ip_6_8"
            }, {
              group: "第六球",
              isCheck: false,
              name: "9",
              odds: 19.86,
              key_s: "ip_6_9"
            }, {
              group: "第六球",
              isCheck: false,
              name: "10",
              odds: 19.86,
              key_s: "ip_6_10"
            }, {
              group: "第六球",
              isCheck: false,
              name: "11",
              odds: 19.86,
              key_s: "ip_6_11"
            }, {
              group: "第六球",
              isCheck: false,
              name: "12",
              odds: 19.86,
              key_s: "ip_6_12"
            }, {
              group: "第六球",
              isCheck: false,
              name: "13",
              odds: 19.86,
              key_s: "ip_6_13"
            }, {
              group: "第六球",
              isCheck: false,
              name: "14",
              odds: 19.86,
              key_s: "ip_6_14"
            }, {
              group: "第六球",
              isCheck: false,
              name: "15",
              odds: 19.86,
              key_s: "ip_6_15"
            }, {
              group: "第六球",
              isCheck: false,
              name: "16",
              odds: 19.86,
              key_s: "ip_6_16"
            }, {
              group: "第六球",
              isCheck: false,
              name: "17",
              odds: 19.86,
              key_s: "ip_6_17"
            }, {
              group: "第六球",
              isCheck: false,
              name: "18",
              odds: 19.86,
              key_s: "ip_6_18"
            }, {
              group: "第六球",
              isCheck: false,
              name: "19",
              odds: 19.86,
              key_s: "ip_6_19"
            }, {
              group: "第六球",
              isCheck: false,
              name: "20",
              odds: 19.86,
              key_s: "ip_6_20"
            }
          ]
        }, {
          _name: '第七球',
          list: [
            {
              group: "第七球",
              isCheck: false,
              name: "1",
              odds: 19.86,
              key_s: "ip_7_1"
            }, {
              group: "第七球",
              isCheck: false,
              name: "2",
              odds: 19.86,
              key_s: "ip_7_2"
            }, {
              group: "第七球",
              isCheck: false,
              name: "3",
              odds: 19.86,
              key_s: "ip_7_3"
            }, {
              group: "第七球",
              isCheck: false,
              name: "4",
              odds: 19.86,
              key_s: "ip_7_4"
            }, {
              group: "第七球",
              isCheck: false,
              name: "5",
              odds: 19.86,
              key_s: "ip_7_5"
            }, {
              group: "第七球",
              isCheck: false,
              name: "6",
              odds: 19.86,
              key_s: "ip_7_6"
            }, {
              group: "第七球",
              isCheck: false,
              name: "7",
              odds: 19.86,
              key_s: "ip_7_7"
            }, {
              group: "第七球",
              isCheck: false,
              name: "8",
              odds: 19.86,
              key_s: "ip_7_8"
            }, {
              group: "第七球",
              isCheck: false,
              name: "9",
              odds: 19.86,
              key_s: "ip_7_9"
            }, {
              group: "第七球",
              isCheck: false,
              name: "10",
              odds: 19.86,
              key_s: "ip_7_10"
            }, {
              group: "第七球",
              isCheck: false,
              name: "11",
              odds: 19.86,
              key_s: "ip_7_11"
            }, {
              group: "第七球",
              isCheck: false,
              name: "12",
              odds: 19.86,
              key_s: "ip_7_12"
            }, {
              group: "第七球",
              isCheck: false,
              name: "13",
              odds: 19.86,
              key_s: "ip_7_13"
            }, {
              group: "第七球",
              isCheck: false,
              name: "14",
              odds: 19.86,
              key_s: "ip_7_14"
            }, {
              group: "第七球",
              isCheck: false,
              name: "15",
              odds: 19.86,
              key_s: "ip_7_15"
            }, {
              group: "第七球",
              isCheck: false,
              name: "16",
              odds: 19.86,
              key_s: "ip_7_16"
            }, {
              group: "第七球",
              isCheck: false,
              name: "17",
              odds: 19.86,
              key_s: "ip_7_17"
            }, {
              group: "第七球",
              isCheck: false,
              name: "18",
              odds: 19.86,
              key_s: "ip_7_18"
            }, {
              group: "第七球",
              isCheck: false,
              name: "19",
              odds: 19.86,
              key_s: "ip_7_19"
            }, {
              group: "第七球",
              isCheck: false,
              name: "20",
              odds: 19.86,
              key_s: "ip_7_20"
            }
          ]
        }, {
          _name: '第八球',
          list: [
            {
              group: "第八球",
              isCheck: false,
              name: "1",
              odds: 19.86,
              key_s: "ip_8_1"
            }, {
              group: "第八球",
              isCheck: false,
              name: "2",
              odds: 19.86,
              key_s: "ip_8_2"
            }, {
              group: "第八球",
              isCheck: false,
              name: "3",
              odds: 19.86,
              key_s: "ip_8_3"
            }, {
              group: "第八球",
              isCheck: false,
              name: "4",
              odds: 19.86,
              key_s: "ip_8_4"
            }, {
              group: "第八球",
              isCheck: false,
              name: "5",
              odds: 19.86,
              key_s: "ip_8_5"
            }, {
              group: "第八球",
              isCheck: false,
              name: "6",
              odds: 19.86,
              key_s: "ip_8_6"
            }, {
              group: "第八球",
              isCheck: false,
              name: "7",
              odds: 19.86,
              key_s: "ip_8_7"
            }, {
              group: "第八球",
              isCheck: false,
              name: "8",
              odds: 19.86,
              key_s: "ip_8_8"
            }, {
              group: "第八球",
              isCheck: false,
              name: "9",
              odds: 19.86,
              key_s: "ip_8_9"
            }, {
              group: "第八球",
              isCheck: false,
              name: "10",
              odds: 19.86,
              key_s: "ip_8_10"
            }, {
              group: "第八球",
              isCheck: false,
              name: "11",
              odds: 19.86,
              key_s: "ip_8_11"
            }, {
              group: "第八球",
              isCheck: false,
              name: "12",
              odds: 19.86,
              key_s: "ip_8_12"
            }, {
              group: "第八球",
              isCheck: false,
              name: "13",
              odds: 19.86,
              key_s: "ip_8_13"
            }, {
              group: "第八球",
              isCheck: false,
              name: "14",
              odds: 19.86,
              key_s: "ip_8_14"
            }, {
              group: "第八球",
              isCheck: false,
              name: "15",
              odds: 19.86,
              key_s: "ip_8_15"
            }, {
              group: "第八球",
              isCheck: false,
              name: "16",
              odds: 19.86,
              key_s: "ip_8_16"
            }, {
              group: "第八球",
              isCheck: false,
              name: "17",
              odds: 19.86,
              key_s: "ip_8_17"
            }, {
              group: "第八球",
              isCheck: false,
              name: "18",
              odds: 19.86,
              key_s: "ip_8_18"
            }, {
              group: "第八球",
              isCheck: false,
              name: "19",
              odds: 19.86,
              key_s: "ip_8_19"
            }, {
              group: "第八球",
              isCheck: false,
              name: "20",
              odds: 19.86,
              key_s: "ip_8_20"
            }
          ]
        }
      ]
    },
    lim: {
      name: '连码',
      body: [
        {
          _name: '连码',
          list: [
            {
              isCheck: false,
              name: "1",

            },
            {
              isCheck: false,
              name: "2",

            },
            {
              isCheck: false,
              name: "3",

            },
            {
              isCheck: false,
              name: "4",

            },
            {
              isCheck: false,
              name: "5",

            },
            {
              isCheck: false,
              name: "6",

            },
            {
              isCheck: false,
              name: "7",

            },
            {
              isCheck: false,
              name: "8",

            },
            {
              isCheck: false,
              name: "9",

            },
            {
              isCheck: false,
              name: "10",

            },
            {
              isCheck: false,
              name: "11",

            },
            {
              isCheck: false,
              name: "12",

            },
            {
              isCheck: false,
              name: "13",

            },
            {
              isCheck: false,
              name: "14",

            },
            {
              isCheck: false,
              name: "15",

            },
            {
              isCheck: false,
              name: "16",

            },
            {
              isCheck: false,
              name: "17",

            }, {
              isCheck: false,
              name: "18",

            },
            {
              isCheck: false,
              name: "19",

            },
            {
              isCheck: false,
              name: "20",

            }
          ]
        }
      ]
    }
  }
}

// 北京PK10
let getBjpk = () => {
  return {

    lmp: {
      name: '两面盘',
      body: [
        {
          _name: "冠军",
          list: [

            {
              group: "冠军",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3001_3011"
            }, {
              group: "冠军",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3001_3012"
            }, {
              group: "冠军",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3001_3013"
            }, {
              group: "冠军",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3001_3014"
            }, {
              group: "冠军",
              isCheck: false,
              name: "龙",
              odds: 1.990,
              key_s: "ip_3001_3015"
            }, {
              group: "冠军",
              isCheck: false,
              name: "虎",
              odds: 1.990,
              key_s: "ip_3001_3016"
            }
          ]
        }, {
          _name: "亚军",
          list: [
            {
              group: "亚军",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3002_3011"
            }, {
              group: "亚军",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3002_3012"
            }, {
              group: "亚军",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3002_3013"
            }, {
              group: "亚军",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3002_3014"
            }, {
              group: "亚军",
              isCheck: false,
              name: "龙",
              odds: 1.990,
              key_s: "ip_3002_3015"
            }, {
              group: "亚军",
              isCheck: false,
              name: "虎",
              odds: 1.990,
              key_s: "ip_3002_3016"
            }
          ]
        }, {
          _name: "第三名",
          list: [
            {
              group: "第三名",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3003_3011"
            }, {
              group: "第三名",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3003_3012"
            }, {
              group: "第三名",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3003_3013"
            }, {
              group: "第三名",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3003_3014"
            }, {
              group: "第三名",
              isCheck: false,
              name: "龙",
              odds: 1.990,
              key_s: "ip_3003_3015"
            }, {
              group: "第三名",
              isCheck: false,
              name: "虎",
              odds: 1.990,
              key_s: "ip_3003_3016"
            }
          ]
        }, {
          _name: "第四名",
          list: [
            {
              group: "第四名",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3004_3011"
            }, {
              group: "第四名",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3004_3012"
            }, {
              group: "第四名",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3004_3013"
            }, {
              group: "第四名",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3004_3014"
            }, {
              group: "第四名",
              isCheck: false,
              name: "龙",
              odds: 1.990,
              key_s: "ip_3004_3015"
            }, {
              group: "第四名",
              isCheck: false,
              name: "虎",
              odds: 1.990,
              key_s: "ip_3004_3016"
            }
          ]
        }, {
          _name: "第五名",
          list: [
            {
              group: "第五名",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3005_3011"
            }, {
              group: "第五名",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3005_3012"
            }, {
              group: "第五名",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3005_3013"
            }, {
              group: "第五名",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3005_3014"
            }, {
              group: "第五名",
              isCheck: false,
              name: "龙",
              odds: 1.990,
              key_s: "ip_3005_3015"
            }, {
              group: "第五名",
              isCheck: false,
              name: "虎",
              odds: 1.990,
              key_s: "ip_3005_3016"
            }
          ]
        }, {
          _name: "第六名",
          list: [
            {
              group: "第六名",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3006_3011"
            }, {
              group: "第六名",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3006_3012"
            }, {
              group: "第六名",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3006_3013"
            }, {
              group: "第六名",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3006_3014"
            }
          ]
        }, {
          _name: "第七名",
          list: [
            {
              group: "第七名",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3007_3011"
            }, {
              group: "第七名",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3007_3012"
            }, {
              group: "第七名",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3007_3013"
            }, {
              group: "第七名",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3007_3014"
            }
          ]
        }, {
          _name: "第八名",
          list: [
            {
              group: "第八名",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3008_3011"
            }, {
              group: "第八名",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3008_3012"
            }, {
              group: "第八名",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3008_3013"
            }, {
              group: "第八名",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3008_3014"
            }
          ]
        }, {
          _name: "第九名",
          list: [
            {
              group: "第九名",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3009_3011"
            }, {
              group: "第九名",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3009_3012"
            }, {
              group: "第九名",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3009_3013"
            }, {
              group: "第九名",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3009_3014"
            }
          ]
        }, {
          _name: "第十名",
          list: [
            {
              group: "第十名",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_3010_3011"
            }, {
              group: "第十名",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_3010_3012"
            }, {
              group: "第十名",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_3010_3013"
            }, {
              group: "第十名",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_3010_3014"
            }
          ]
        }
      ]
    },
    gyh: {

      name: '冠、亚军',
      body: [
        {
          _name: "冠亚军和",
          list: [

            {

              group: "冠亚军和",
              isCheck: false,
              name: "3",
              odds: 42.5,
              key_s: "ip_3021_3"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "4",
              odds: 42.5,
              key_s: "ip_3021_4"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "5",
              odds: 1.78,
              key_s: "ip_3021_5"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "6",
              odds: 2.19,
              key_s: "ip_3021_6"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "7",
              odds: 1.78,
              key_s: "ip_3021_7"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "8",
              odds: 1.78,
              key_s: "ip_3021_8"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "9",
              odds: 2.19,
              key_s: "ip_3021_9"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "10",
              odds: 1.78,
              key_s: "ip_3021_10"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "11",
              odds: 1.78,
              key_s: "ip_3021_11"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "12",
              odds: 2.19,
              key_s: "ip_3021_12"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "13",
              odds: 1.78,
              key_s: "ip_3021_13"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "14",
              odds: 1.78,
              key_s: "ip_3021_14"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "15",
              odds: 2.19,
              key_s: "ip_3021_15"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "16",
              odds: 1.78,
              key_s: "ip_3021_16"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "17",
              odds: 1.78,
              key_s: "ip_3021_17"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "18",
              odds: 2.19,
              key_s: "ip_3021_18"
            }, {

              group: "冠亚军和",
              isCheck: false,
              name: "19",
              odds: 1.78,
              key_s: "ip_3021_19"
            }

          ]
        }, {
          _name: "冠亚军和_两面",
          list: [
            {

              group: "冠亚和_两面",
              isCheck: false,
              name: "大",
              odds: 2.19,
              key_s: "ip_3017"
            }, {

              group: "冠亚和_两面",
              isCheck: false,
              name: "小",
              odds: 1.78,
              key_s: "ip_3018"
            }, {

              group: "冠亚和_两面",
              isCheck: false,
              name: "单",
              odds: 1.78,
              key_s: "ip_3019"
            }, {

              group: "冠亚和_两面",
              isCheck: false,
              name: "双",
              odds: 2.19,
              key_s: "ip_3020"
            }
          ]
        }
      ]
    },
    yzw: {
      code: 2,
      name: '一至五名',
      body: [
        {
          _name: "冠军",
          list: [
            {

              group: "冠军",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3001_1"
            }, {

              group: "冠军",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3001_2"
            }, {

              group: "冠军",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3001_3"
            }, {

              group: "冠军",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3001_4"
            }, {

              group: "冠军",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3001_5"
            }, {

              group: "冠军",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3001_6"
            }, {

              group: "冠军",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3001_7"
            }, {

              group: "冠军",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3001_8"
            }, {

              group: "冠军",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3001_9"
            }, {

              group: "冠军",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3001_10"
            }
          ]
        }, {
          _name: "亚军",
          list: [
            {

              group: "亚军",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3002_1"
            }, {

              group: "亚军",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3002_2"
            }, {

              group: "亚军",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3002_3"
            }, {

              group: "亚军",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3002_4"
            }, {

              group: "亚军",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3002_5"
            }, {

              group: "亚军",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3002_6"
            }, {

              group: "亚军",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3002_7"
            }, {

              group: "亚军",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3002_8"
            }, {

              group: "亚军",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3002_9"
            }, {

              group: "亚军",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3002_10"
            }
          ]
        }, {
          _name: "第三名",
          list: [
            {

              group: "第三名",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3003_1"
            }, {

              group: "第三名",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3003_2"
            }, {

              group: "第三名",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3003_3"
            }, {

              group: "第三名",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3003_4"
            }, {

              group: "第三名",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3003_5"
            }, {

              group: "第三名",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3003_6"
            }, {

              group: "第三名",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3003_7"
            }, {

              group: "第三名",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3003_8"
            }, {

              group: "第三名",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3003_9"
            }, {

              group: "第三名",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3003_10"
            }
          ]
        }, {
          _name: "第四名",
          list: [
            {

              group: "第四名",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3004_1"
            }, {

              group: "第四名",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3004_2"
            }, {

              group: "第四名",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3004_3"
            }, {

              group: "第四名",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3004_4"
            }, {

              group: "第四名",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3004_5"
            }, {

              group: "第四名",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3004_6"
            }, {

              group: "第四名",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3004_7"
            }, {

              group: "第四名",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3004_8"
            }, {

              group: "第四名",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3004_9"
            }, {

              group: "第四名",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3004_10"
            }
          ]
        }, {
          _name: "第五名",
          list: [
            {

              group: "第五名",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3005_1"
            }, {

              group: "第五名",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3005_2"
            }, {

              group: "第五名",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3005_3"
            }, {

              group: "第五名",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3005_4"
            }, {

              group: "第五名",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3005_5"
            }, {

              group: "第五名",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3005_6"
            }, {

              group: "第五名",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3005_7"
            }, {

              group: "第五名",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3005_8"
            }, {

              group: "第五名",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3005_9"
            }, {

              group: "第五名",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3005_10"
            }
          ]
        }
      ]

    },
    lzs: {
      code: 2,
      name: '六至十名',
      body: [
        {
          _name: "第六名",
          list: [
            {

              group: "第六名",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3006_1"
            }, {

              group: "第六名",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3006_2"
            }, {

              group: "第六名",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3006_3"
            }, {

              group: "第六名",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3006_4"
            }, {

              group: "第六名",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3006_5"
            }, {

              group: "第六名",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3006_6"
            }, {

              group: "第六名",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3006_7"
            }, {

              group: "第六名",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3006_8"
            }, {

              group: "第六名",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3006_9"
            }, {

              group: "第六名",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3006_10"
            }
          ]
        }, {
          _name: "第七名",
          list: [
            {

              group: "第七名",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3007_1"
            }, {

              group: "第七名",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3007_2"
            }, {

              group: "第七名",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3007_3"
            }, {

              group: "第七名",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3007_4"
            }, {

              group: "第七名",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3007_5"
            }, {

              group: "第七名",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3007_6"
            }, {

              group: "第七名",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3007_7"
            }, {

              group: "第七名",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3007_8"
            }, {

              group: "第七名",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3007_9"
            }, {

              group: "第七名",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3007_10"
            }
          ]
        }, {
          _name: "第八名",
          list: [
            {

              group: "第八名",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3008_1"
            }, {

              group: "第八名",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3008_2"
            }, {

              group: "第八名",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3008_3"
            }, {

              group: "第八名",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3008_4"
            }, {

              group: "第八名",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3008_5"
            }, {

              group: "第八名",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3008_6"
            }, {

              group: "第八名",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3008_7"
            }, {

              group: "第八名",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3008_8"
            }, {

              group: "第八名",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3008_9"
            }, {

              group: "第八名",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3008_10"
            }
          ]
        }, {
          _name: "第九名",
          list: [
            {

              group: "第九名",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3009_1"
            }, {

              group: "第九名",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3009_2"
            }, {

              group: "第九名",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3009_3"
            }, {

              group: "第九名",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3009_4"
            }, {

              group: "第九名",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3009_5"
            }, {

              group: "第九名",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3009_6"
            }, {

              group: "第九名",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3009_7"
            }, {

              group: "第九名",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3009_8"
            }, {

              group: "第九名",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3009_9"
            }, {

              group: "第九名",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3009_10"
            }
          ]
        }, {
          _name: "第十名",
          list: [
            {

              group: "第十名",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_3010_1"
            }, {

              group: "第十名",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_3010_2"
            }, {

              group: "第十名",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_3010_3"
            }, {

              group: "第十名",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_3010_4"
            }, {

              group: "第十名",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_3010_5"
            }, {

              group: "第十名",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_3010_6"
            }, {

              group: "第十名",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_3010_7"
            }, {

              group: "第十名",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_3010_8"
            }, {

              group: "第十名",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_3010_9"
            }, {

              group: "第十名",
              isCheck: false,
              name: "10",
              odds: 9.90,
              key_s: "ip_3010_10"
            }
          ]
        }
      ]
    }

  }
}

// PC蛋蛋
let getPcdd = () => {
  return {
    hh: {
      name: 'PC蛋蛋',
      body: [
        {
          _name: "混合",
          list: [
            {
              group: "混合",
              isCheck: false,
              name: "大",
              odds: 1.981,
              key_s: "ip_5017"
            }, {
              group: "混合",
              isCheck: false,
              name: "小",
              odds: 1.981,
              key_s: "ip_5018"
            }, {
              group: "混合",
              isCheck: false,
              name: "单",
              odds: 1.981,
              key_s: "ip_5019"
            }, {
              group: "混合",
              isCheck: false,
              name: "双",
              odds: 1.981,
              key_s: "ip_5020"
            }, {
              group: "混合",
              isCheck: false,
              name: "大单",
              odds: 3.561,
              key_s: "ip_5021"
            }, {
              group: "混合",
              isCheck: false,
              name: "大双",
              odds: 3.561,
              key_s: "ip_5022"
            }, {
              group: "混合",
              isCheck: false,
              name: "小单",
              odds: 3.561,
              key_s: "ip_5023"
            }, {
              group: "混合",
              isCheck: false,
              name: "小双",
              odds: 3.561,
              key_s: "ip_5024"
            }, {
              group: "混合",
              isCheck: false,
              name: "极大",
              odds: 10,
              key_s: "ip_5025"
            }, {
              group: "极小",
              isCheck: false,
              name: "小双",
              odds: 10,
              key_s: "ip_5026"
            }, {
              group: "豹子",
              isCheck: false,
              name: "小双",
              odds: 90,
              key_s: "ip_5027"
            }
          ]
        }, {
          _name: "波色",
          list: [
            {
              group: "波色",
              isCheck: false,
              name: "红波",
              odds: 2.96,
              key_s: "ip_5030"
            }, {
              group: "波色",
              isCheck: false,
              name: "绿波",
              odds: 2.96,
              key_s: "ip_5031"
            }, {
              group: "波色",
              isCheck: false,
              name: "蓝波",
              odds: 2.96,
              key_s: "ip_5032"
            }
          ]
        }
      ]
    },

    tm: {
      name: 'PC蛋蛋',
      body: [
        {
          _name: "特码",
          list: [
            {
              group: "特码",
              isCheck: false,
              name: "0",
              odds: 941,
              key_s: "ip_5040_0"
            }, {
              group: "特码",
              isCheck: false,
              name: "1",
              odds: 313,
              key_s: "ip_5040_1"
            }, {
              group: "特码",
              isCheck: false,
              name: "2",
              odds: 156,
              key_s: "ip_5040_2"
            }, {
              group: "特码",
              isCheck: false,
              name: "3",
              odds: 64,
              key_s: "ip_5040_3"
            }, {
              group: "特码",
              isCheck: false,
              name: "4",
              odds: 62,
              key_s: "ip_5040_4"
            }, {
              group: "特码",
              isCheck: false,
              name: "5",
              odds: 44,
              key_s: "ip_5040_5"
            }, {
              group: "特码",
              isCheck: false,
              name: "6",
              odds: 33,
              key_s: "ip_5040_6"
            }, {
              group: "特码",
              isCheck: false,
              name: "7",
              odds: 26,
              key_s: "ip_5040_7"
            }, {
              group: "特码",
              isCheck: false,
              name: "8",
              odds: 20.9,
              key_s: "ip_5040_8"
            }, {
              group: "特码",
              isCheck: false,
              name: "9",
              odds: 17.1,
              key_s: "ip_5040_9"
            }, {
              group: "特码",
              isCheck: false,
              name: "10",
              odds: 14.9,
              key_s: "ip_5040_10"
            }, {
              group: "特码",
              isCheck: false,
              name: "11",
              odds: 13.5,
              key_s: "ip_5040_11"
            }, {
              group: "特码",
              isCheck: false,
              name: "12",
              odds: 12.8,
              key_s: "ip_5040_12"
            }, {
              group: "特码",
              isCheck: false,
              name: "13",
              odds: 12.5,
              key_s: "ip_5040_13"
            }, {
              group: "特码",
              isCheck: false,
              name: "14",
              odds: 12.5,
              key_s: "ip_5040_14"
            }, {
              group: "特码",
              isCheck: false,
              name: "15",
              odds: 12.8,
              key_s: "ip_5040_15"
            }, {
              group: "特码",
              isCheck: false,
              name: "16",
              odds: 13.5,
              key_s: "ip_5040_16"
            }, {
              group: "特码",
              isCheck: false,
              name: "17",
              odds: 14.9,
              key_s: "ip_5040_17"
            }, {
              group: "特码",
              isCheck: false,
              name: "18",
              odds: 17.1,
              key_s: "ip_5040_18"
            }, {
              group: "特码",
              isCheck: false,
              name: "19",
              odds: 20.9,
              key_s: "ip_5040_19"
            }, {
              group: "特码",
              isCheck: false,
              name: "20",
              odds: 26,
              key_s: "ip_5040_20"
            }, {
              group: "特码",
              isCheck: false,
              name: "21",
              odds: 33,
              key_s: "ip_5040_21"
            }, {
              group: "特码",
              isCheck: false,
              name: "22",
              odds: 44,
              key_s: "ip_5040_22"
            }, {
              group: "特码",
              isCheck: false,
              name: "23",
              odds: 62,
              key_s: "ip_5040_23"
            }, {
              group: "特码",
              isCheck: false,
              name: "24",
              odds: 94,
              key_s: "ip_5040_24"
            }, {
              group: "特码",
              isCheck: false,
              name: "25",
              odds: 156,
              key_s: "ip_5040_25"
            }, {
              group: "特码",
              isCheck: false,
              name: "26",
              odds: 313,
              key_s: "ip_5040_26"
            }, {
              group: "特码",
              isCheck: false,
              name: "27",
              odds: 940,
              key_s: "ip_5040_27"
            }
          ]
        }
      ]
    }
  }
}

//重庆时时彩

let getCqssc = () => {
  return {

    lmp: {
      name: '两面盘',
      body: [
        {
          _name: "第一球",

          list: [
            {
              group: "第一球",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_1000_1005"
            }, {
              group: "第一球",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_1000_1006"
            }, {
              group: "第一球",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_1000_1007"
            }, {
              group: "第一球",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_1000_1008"
            }
          ]
        }, {
          _name: "第二球",
          list: [
            {
              group: "第二球",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_1001_1005"
            }, {
              group: "第二球",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_1001_1006"
            }, {
              group: "第二球",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_1001_1007"
            }, {
              group: "第二球",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_1001_1008"
            }
          ]

        }, {
          _name: "第三球",
          list: [
            {
              group: "第三球",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_1002_1005"
            }, {
              group: "第三球",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_1002_1006"
            }, {
              group: "第三球",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_1002_1007"
            }, {
              group: "第三球",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_1002_1008"
            }
          ]
        }, {
          _name: "第四球",
          list: [
            {
              group: "第四球",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_1003_1005"
            }, {
              group: "第四球",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_1003_1006"
            }, {
              group: "第四球",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_1003_1007"
            }, {
              group: "第四球",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_1003_1008"
            }
          ]
        }, {
          _name: "第五球",
          list: [
            {
              group: "第五球",
              isCheck: false,
              name: "大",
              odds: 1.990,
              key_s: "ip_5_1005"
            }, {
              group: "第五球",
              isCheck: false,
              name: "小",
              odds: 1.990,
              key_s: "ip_5_1006"
            }, {
              group: "第五球",
              isCheck: false,
              name: "单",
              odds: 1.990,
              key_s: "ip_5_1007"
            }, {
              group: "第五球",
              isCheck: false,
              name: "双",
              odds: 1.990,
              key_s: "ip_5_1008"
            }
          ]
        }, {
          _name: "总和两面",
          list: [
            {
              group: "总和两面",
              isCheck: false,
              name: "总和大",
              odds: 1.990,
              key_s: "ip_1009"
            }, {
              group: "总和两面",
              isCheck: false,
              name: "总和小",
              odds: 1.990,
              key_s: "ip_1010"
            }, {
              group: "总和两面",
              isCheck: false,
              name: "总和单",
              odds: 1.990,
              key_s: "ip_1011"
            }, {
              group: "总和两面",
              isCheck: false,
              name: "总和双",
              odds: 1.990,
              key_s: "ip_1012"
            }, {
              group: "总和两面",
              isCheck: false,
              name: "龙",
              odds: 1.990,
              key_s: "ip_1013"
            }, {
              group: "总和两面",
              isCheck: false,
              name: "虎",
              odds: 1.990,
              key_s: "ip_1014"
            }, {
              group: "总和两面",
              isCheck: false,
              name: "和",
              odds: 9,
              key_s: "ip_1015"
            }
          ]
        }
      ]
    },

    szp: {
      name: '数字盘',
      body: [
        {
          _name: "第一球",
          list: [
            {
              group: "第一球",
              isCheck: false,
              name: "0",
              odds: 9.90,
              key_s: "ip_1000_0"
            }, {
              group: "第一球",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_1000_1"
            }, {
              group: "第一球",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_1000_2"
            }, {
              group: "第一球",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_1000_3"
            }, {
              group: "第一球",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_1000_4"
            }, {
              group: "第一球",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_1000_5"
            }, {
              group: "第一球",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_1000_6"
            }, {
              group: "第一球",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_1000_7"
            }, {
              group: "第一球",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_1000_8"
            }, {
              group: "第一球",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_1000_9"
            }
          ]
        }, {
          _name: "第二球",
          list: [
            {
              group: "第二球",
              isCheck: false,
              name: "0",
              odds: 9.90,
              key_s: "ip_1001_0"
            }, {
              group: "第二球",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_1001_1"
            }, {
              group: "第二球",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_1001_2"
            }, {
              group: "第二球",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_1001_3"
            }, {
              group: "第二球",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_1001_4"
            }, {
              group: "第二球",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_1001_5"
            }, {
              group: "第二球",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_1001_6"
            }, {
              group: "第二球",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_1001_7"
            }, {
              group: "第二球",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_1001_8"
            }, {
              group: "第二球",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_1001_9"
            }
          ]

        }, {
          _name: "第三球",
          list: [
            {
              group: "第三球",
              isCheck: false,
              name: "0",
              odds: 9.90,
              key_s: "ip_1002_0"
            }, {
              group: "第三球",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_1002_1"
            }, {
              group: "第三球",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_1002_2"
            }, {
              group: "第三球",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_1002_3"
            }, {
              group: "第三球",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_1002_4"
            }, {
              group: "第三球",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_1002_5"
            }, {
              group: "第三球",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_1002_6"
            }, {
              group: "第三球",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_1002_7"
            }, {
              group: "第三球",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_1002_8"
            }, {
              group: "第三球",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_1002_9"
            }
          ]
        }, {
          _name: "第四球",
          list: [
            {
              group: "第四球",
              isCheck: false,
              name: "0",
              odds: 9.90,
              key_s: "ip_1003_0"
            }, {
              group: "第四球",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_1003_1"
            }, {
              group: "第四球",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_1003_2"
            }, {
              group: "第四球",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_1003_3"
            }, {
              group: "第四球",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_1003_4"
            }, {
              group: "第四球",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_1003_5"
            }, {
              group: "第四球",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_1003_6"
            }, {
              group: "第四球",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_1003_7"
            }, {
              group: "第四球",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_1003_8"
            }, {
              group: "第四球",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_1003_9"
            }
          ]
        }, {
          _name: "第五球",
          list: [
            {
              group: "第五球",
              isCheck: false,
              name: "0",
              odds: 9.90,
              key_s: "ip_1004_0"
            }, {
              group: "第五球",
              isCheck: false,
              name: "1",
              odds: 9.90,
              key_s: "ip_1004_1"
            }, {
              group: "第五球",
              isCheck: false,
              name: "2",
              odds: 9.90,
              key_s: "ip_1004_2"
            }, {
              group: "第五球",
              isCheck: false,
              name: "3",
              odds: 9.90,
              key_s: "ip_1004_3"
            }, {
              group: "第五球",
              isCheck: false,
              name: "4",
              odds: 9.90,
              key_s: "ip_1004_4"
            }, {
              group: "第五球",
              isCheck: false,
              name: "5",
              odds: 9.90,
              key_s: "ip_1004_5"
            }, {
              group: "第五球",
              isCheck: false,
              name: "6",
              odds: 9.90,
              key_s: "ip_1004_6"
            }, {
              group: "第五球",
              isCheck: false,
              name: "7",
              odds: 9.90,
              key_s: "ip_1004_7"
            }, {
              group: "第五球",
              isCheck: false,
              name: "8",
              odds: 9.90,
              key_s: "ip_1004_8"
            }, {
              group: "第五球",
              isCheck: false,
              name: "9",
              odds: 9.90,
              key_s: "ip_1004_9"
            }
          ]
        }
      ]
    },

    qzh: {
      name: '前、中、后',
      body: [
        {
          _name: "前三",
          list: [
            {
              group: "前三",
              isCheck: false,
              name: "豹子",
              odds: 75,
              key_s: "ip_1016"
            }, {
              group: "前三",
              isCheck: false,
              name: "顺子",
              odds: 14.5,
              key_s: "ip_1017"
            }, {
              group: "前三",
              isCheck: false,
              name: "对子",
              odds: 3.3,
              key_s: "ip_1018"
            }, {
              group: "前三",
              isCheck: false,
              name: "半顺",
              odds: 2.5,
              key_s: "ip_1019"
            }, {
              group: "前三",
              isCheck: false,
              name: "杂六",
              odds: 3,
              key_s: "ip_1020"
            }
          ]
        }, {
          _name: "中三",
          list: [
            {
              group: "中三",
              isCheck: false,
              name: "豹子",
              odds: 75,
              key_s: "ip_1021"
            }, {
              group: "中三",
              isCheck: false,
              name: "顺子",
              odds: 14.5,
              key_s: "ip_1022"
            }, {
              group: "中三",
              isCheck: false,
              name: "对子",
              odds: 3.3,
              key_s: "ip_1023"
            }, {
              group: "中三",
              isCheck: false,
              name: "半顺",
              odds: 2.5,
              key_s: "ip_1024"
            }, {
              group: "中三",
              isCheck: false,
              name: "杂六",
              odds: 3,
              key_s: "ip_1025"
            }
          ]
        }, {
          _name: "后三",
          list: [
            {
              group: "后三",
              isCheck: false,
              name: "豹子",
              odds: 75,
              key_s: "ip_1026"
            }, {
              group: "后三",
              isCheck: false,
              name: "顺子",
              odds: 14.5,
              key_s: "ip_1027"
            }, {
              group: "后三",
              isCheck: false,
              name: "对子",
              odds: 3.3,
              key_s: "ip_1028"
            }, {
              group: "后三",
              isCheck: false,
              name: "半顺",
              odds: 2.5,
              key_s: "ip_1029"
            }, {
              group: "后三",
              isCheck: false,
              name: "杂六",
              odds: 3,
              key_s: "ip_1030"
            }
          ]
        }
      ]
    }

  }
}

//广东快乐十分

let getLogin = () => {
  return 'http://xiaopeng.lebole5.com/user/signin'
}
// let getMone
// Url/getinfo/money
let getTime = () => {
  return 'http://xiaopeng.lebole5.com/getinfo/game'
}
let getOid = () => {
  let a = sessionStorage.getItem('im_token')
  if (a) {
    // console.log(a);
    let b = a.length - 2
    return a.substr(1, b)
  } else {
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
  getOid,
  // 获取赔率
  getTime,
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
  getPcdd,
  getCqssc,
  getKlsf,
  getXglhc
}
