//mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性：
import {
  SHOW_FOOTER, // 显示底部
  HIDDE_FOOTER,
  SHOW_HEADER, // 显示头部定位
  HIDDE_HEADER,
  GO_BACK, // 后退状态
  NO_BACK,
  LOGIN_YES,
  LOGIN_NO, // 登陆 状态
  SHOW_DRAWER,
  HIDDE_DRAWER,
  SHOW_DAILOGQ,
  HIDDE_DAILOGQ,
  SHOW_DAILOGS,
  HIDDE_DAILOGS,
  SHOW_DAILOGW,
  HIDDE_DAILOGW
} from './mutation_types.js'

// 1 : 定义默认的 监测状态
const state = {
  showBottom: true, // 底部导航
  showHeader: true, // 头部定位
  goBack: false, //　是否是后退状态　默认不是
  login:false, // 登陆状态
  showDrawer:false,
  showDailogQ:false,
  showDailogS:false,
  showDailogW:false
}

const mutations = {
  /*footer*/
  [SHOW_FOOTER](state) {
    state.showBottom = true;
  },
  [HIDDE_FOOTER](state) {
    state.showBottom = false;
  },
  [SHOW_HEADER](state) {
    state.showHeader = true;
  },
  [HIDDE_HEADER](state) {
    state.showHeader = false;
  },
  [GO_BACK](state) {
    state.goBack = true;
  },
  [NO_BACK](state) {
    state.goBack = false;
  },
  [LOGIN_YES](state) { // 登陆状态
    state.login = true;
  },
  [LOGIN_NO](state) {
    state.login = false;
  },
  [SHOW_DRAWER](state){
    state.showDrawer=true;
  },
  [HIDDE_DRAWER](state){
    state.showDrawer=false;
  },
  [SHOW_DAILOGQ](state){
    state.showDailogQ=true;
  },
  [HIDDE_DAILOGQ](state){
    state.showDailogQ=false;
  },
  [SHOW_DAILOGS](state){
    state.showDailogS=true;
  },
  [HIDDE_DAILOGS](state){
    state.showDailogS=false;
  },
  [SHOW_DAILOGW](state){
    state.showDailogW=true;
  },
  [HIDDE_DAILOGW](state){
    state.showDailogW=false;
  }

};

// 2 : 返回 状态
const getters = {
  // ...
  showBottom(state) {
    return state.showBottom
  },
  showHeader(state) {
    return state.showHeader
  },
  goBack(state) {
    return state.goBack
  },
  login(state) {
    return state.login
  },
  showDrawer(state){
    return state.showDrawer
  },
  showDailogQ(state){
    return state.showDailogQ
  },
  showDailogS(state){
    return state.showDailogS
  },
  showDailogW(state){
    return state.showDailogW
  }

}


export default {
  state,
  mutations,
  getters
}
