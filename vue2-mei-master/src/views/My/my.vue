<template>
<!--个人中心-->
<div class="myCenter">
  <!--头部-->
  <header class="tohop_head container">
    <div class="text-center">
      <span>我的</span>
    </div>
  </header>
  <div class="recommend">
    <div class="swiper-box">
      <div class='left'></div>
      <div class="right">
        <div class="hello">
          <span>下午好</span>
          <span>游客</span>
        </div>
        <div class="use">
          用户余额：
          <span>10000.00</span> RMB
          <i></i>
        </div>
      </div>
    </div>
  </div>

  <div class="gameClass">
    <router-link to="/myInfo">
      <div>
        <div class="gametitle gametitle1">
        </div>
        <span>个人资料</span>
      </div>
    </router-link>

    <router-link to="/myPassword">
      <div>
        <div class="gametitle gametitle2">

        </div>
        <span>登陆密码</span>
      </div>
    </router-link>
    <router-link to="/myCenter">
      <div>
        <div class="gametitle gametitle3">

        </div>
        <span>信息中心</span>
      </div>
    </router-link>
  </router-link>
  <router-link to="/myMoney">
    <div>
      <div class="gametitle gametitle4">

      </div>
      <span>资金管理</span>
    </div>
  </router-link>

  <router-link to="/myPasswordQ">
    <div>
      <div class="gametitle gametitle5">

      </div>
      <span>取款密码</span>
    </div>
  </router-link>
  <router-link to="/myInfo">
    <div>
      <div class="gametitle gametitle6">

      </div>
      <span>银行账号</span>
    </div>
  </router-link>

  <router-link to="/myInfo">
    <div>
      <div class="gametitle gametitle7">

      </div>
      <span>今日已结</span>
    </div>
  </router-link>
  <router-link to="/myInfo">
    <div>
      <div class="gametitle gametitle8">

      </div>
      <span>下注记录</span>
    </div>
  </router-link>
  <router-link to="/myPassword">
    <div>
      <div class="gametitle gametitle9">

      </div>
      <span>客服</span>
    </div>
  </router-link>



    <!--小四结束-->

  </div>

  <foot-guide></foot-guide>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
import footGuide from '../../components/footer/footGuide'
export default {
  data() {
    return {
      im_tokenMsg: ''
    }
  },
  computed: mapGetters([
    // 登陆状态
    'login'
  ]),
  methods: {


  },
  mounted() {

  },
  components: {
footGuide
  },
  created() {
    console.log("aaa");
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.recommend {
    background: -webkit-linear-gradient(left, #90abb4, #679fca);
    /*background: rgba(19,106,221,1);*/
    padding: 40/47rem 47/47rem;
}
.swiper-box {
    display: block;
    height: 150/47rem;
    display: flex;

}
.hello {
    line-height: 58/47rem;
    font-weight: bold;
    font-size: 30/47rem;
    padding-top: 5/47rem;
}
.use {
    line-height: 55/47rem;
    font-size: 26/47rem;
    display: flex;
}
.use span {
    color: #f15e22;
    margin-right: 5px;
}
.use i {
    width: 40/47rem;
    height: 40/47rem;
    display: inline-block;
    // background: url(../../../static/images/shuaxin.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 4/47rem;
    margin-left: 10/47rem;
}
.left {
    width: 150/47rem;
    height: 150/47rem;
    background: red;
}
.right {
    height: 100%;
    width: 450/47rem;
    margin-left: 47/47rem;
    color: #fff;
    /*background: yellow;*/
}
.titl {
    margin-top: 44px;
    background: #6699bd;
    color: #fff;
    display: flex;
    line-height: 89/47rem;
    justify-content: space-between;
}
.titl div:nth-child(1) {
    width: 61/47rem;
    height: 54/47rem;
    // 	background: url(../../../static/images/fangzi.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 19/47rem;
    margin-left: 25/47rem;
}
.titl div:nth-child(3) {
    width: 90/47rem;
    height: 60/47rem;
    text-align: center;
    line-height: 60/47rem;
    margin-top: 19/47rem;
    border-radius: 5px;
    border: 2px solid #5289b2;
    margin-right: 10/47rem;
    box-shadow: inset 1px 1px #7faed1;
}
h3 {
    margin: 0;
    font-weight: normal;
}
.recommend {
    width: 100%;

    .banner-item {
        width: 100%;
    }
}
.gameClass {
    text-align: center;
    // background: #b0ae97;
    display: flex;
    flex-wrap: wrap;
    font-size: 26/47rem;
    padding-bottom: 50px;

    > a {
        border: 1px solid #edf1f2;
        color: #333;
        /*display: flex;*/
        width: 33.3333%;
        height: 262/47rem;
        background: #c7d3d6;
        /*flex-direction: row;*/
        /*margin: 2/20rem 0;*/

        > div {
            /*width: 40%;
        height: 70/20rem;*/
        }

    }

}
.gametitle {
    margin: 50/47rem auto 10/47rem;
}
.gametitle1 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/zhanghu1.png) no-repeat;
    background-size: 100% 100%;
    /*background-position: center;*/
}

.gametitle2 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/mima1.png) no-repeat;
    background-size: 100% 100%;
}

.gametitle3 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/msn1.png) no-repeat;
    background-size: 100% 100%;
}

.gametitle4 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/zijin1.png) no-repeat;
    background-size: 100% 100%;
}

.gametitle5 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/jiaoyi1.png) no-repeat;
    background-size: 100% 100%;
}

.gametitle6 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/yinhang1.png) no-repeat;
    background-size: 100% 100%;
}
.gametitle7 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/dui1.png) no-repeat;
    background-size: 100% 100%;
}
.gametitle8 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/dui1.png) no-repeat;
    background-size: 100% 100%;
}
.gametitle9 {
    height: 107/47rem;
    width: 118/47rem;
    // background:#c9d3d5 url(../../../static/images/kefu1.png) no-repeat;
    background-size: 100% 100%;
}
</style>
