<template>

<div class="header">
  <header>
    <div @click="goHome">
      <i class="icon iconfont icon-zuo"></i>
    </div>
    <div class="title" @click="hideDailog">
      <span>{{title}}</span>
      <i class="icon iconfont icon-xiangxiajiantou"></i>
    </div>
    <div>
      <i class="icon iconfont icon-hanbaobao" @click='open'></i>
      <ul v-show="showha">
        <li>规则</li>
        <li>历史</li>
        <li>走势</li>
      </ul>
    </div>
  </header>
<transition name="fade">

  <div v-show="isShow" class="header-is-active" @click="hideDailog">

    <div class="header-modal-content">

      <ul v-for="(v,k) in lotteryGame">
        <li @click='gotoAddress(k)'>{{v}}</li>
      </ul>

      <i class="up"></i>
    </div>
  </div>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      showha:false,
      isShow: false,
      lotteryGame:{game_55:"北京PK10",game_40:"重庆时时彩",game_35:"幸运飞艇",game_30:"广东快乐十分",game_25:"重庆幸运农场",game_20:"香港六合彩",game_15:"幸运28"}
    }
  },
  props: {
    title: {
type:String
  }},
  computed: {

  },
  methods: {
    open(){
      this.showha=!this.showha
    },
    hideDailog(i) {
      console.log(i);
      this.isShow = !this.isShow;
    },
    gotoAddress(k) {
      let u = `/${k}`
      this.$router.push(k)
    },
    goHome(){
      this.$router.push({
        path: '/index'
      })
    }

  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@blue: #146cdc;
@font_title: #ffffff;
@font_round: rgb(0,0,0);
@font_balance: #6993d5;
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    align-items: center;
    padding: 0 10/20rem;
    height: 38/20rem;
    background: @blue;
    color: @font_title;
    z-index: 10;
    .icon-zuo {
        font-size: 18/20rem;
    }
    .icon-hanbaobao {
        font-size: 18/20rem;
    }
    .title {
        font-size: 17/20rem;
        i {
            font-size: 12/20rem;
        }
    }
    .showha{
      display: none;
    }
    ul{
      position: absolute;
      right: 5/20rem;
      top: 50/20rem;
      padding:5/20rem 5/20rem;
      background: rgba(0,0,0,0.9);
      border-radius: 0.2rem;
      /*display: none;*/
      /*z-index:10;*/
      li{
        width: 50/20rem;
        height: 25/20rem;
        line-height: 25/20rem;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        color: #fff;
        font-size: 12/20rem;
      }
      li:nth-child(1){
        padding-left:25/20rem;
        background: url(../../../static/images/gz.png) no-repeat 1/20rem  5/20rem;
        background-size: 17/20rem 17/20rem;
      }
      li:nth-child(2){
        padding-left:25/20rem;
        background: url(../../../static/images/history.png) no-repeat 1/20rem  5/20rem;
        background-size: 17/20rem 17/20rem;
      }
      li:nth-child(3){
        padding-left:25/20rem;
        background: url(../../../static/images/qs.png) no-repeat 1/20rem  5/20rem;
        background-size: 17/20rem 17/20rem;
        border: none;
      }
    }
    ul:before{
       content: "";
         width: 0;
        height: 0;
        border-bottom: 11/20rem solid rgba(0,0,0,0.9);
        border-right: 11/20rem solid  transparent;
        border-left: 11/20rem solid  transparent;
        border-top: 11/20rem solid  transparent;
        position: absolute;
        right: 10/20rem;
        top: -22/20rem;
    }
}

.header-is-active {

    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 9999;

}

.header-modal-content {

    background: rgba(65, 65, 65,.9);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    position: relative;
    width: 113/20rem;
    margin: 35/20rem auto;
    border-radius: 3/20rem;
    color: white;
    > ul{
      border-bottom: 1px solid #bbbbbb;
      width: 100%;
      text-align: center;
      margin: 0 6/20rem;
      height: 24/20rem;
    }
    >ul:nth-last-of-type(1){
      border: 0;
    }

}
</style>
