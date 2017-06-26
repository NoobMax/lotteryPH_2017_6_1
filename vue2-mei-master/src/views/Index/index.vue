// 主页
<template>
  <div>
    <!--位置-->
      <mu-appbar >
        <p>XX彩票</p>
        <img src="../../../static/images/three.png" alt="">
      </mu-appbar>

    <div class="login">
      <a @click='gotoAddress("/login")' href="JaveScript:;">
      	<button>登录</button>
      </a>
      <a @click='gotoAddress("/regist")'>
      	<button>注册</button>
      </a>
    </div>


  <div class="recommend">
    <div style="height:160px" class="swiper-box">
      <swiper :options="swiperOption">
        <swiper-slide v-for='(item,i) in msgs.data' :key='i'>
          <a :href="item.href">
            <img :src="item.pic" class="banner-item" :alt="item.name">
          </a>
        </swiper-slide>
        <div v-if='msgs' class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!--</swiper>-->
    </div>
  </div>


<div class="announcement" style="padding-right:10px;">
  <div class="im">
    <img src="../../../static/images/laba.png" alt="">
  </div>
  <div><marquee scrollamount="2">尊敬的会员:您好,由于近期部分QQ及QQ群被停用，给您带来不便，敬请谅解。为方便更好的为您提供服务，请添加客服QQ:734889999或QQ群:173735098，方便您随时咨询。若有变动会及时更新公告，敬请关注。　　尊敬的会员：为防止玩家恶意刷水平台禁止同一IP同期同种玩法累计投注超过总注单70%，两面盘不可同时投注大小/单双/龙虎。冠亚和最高只能够下注12个和值. 若发现违规且警告无效游戏平台将给予封号，并没收账户资金。感谢您的理解与配合。如有疑问请咨询客服！　　尊敬的会员：您好，对于我司近期域名被劫持给您造成的困扰，我们深感抱歉。此问题现已解决，如发现打开平台网址后，跳转到非阿莉彩票官网页面，请使用alcp88.com或alcp99.com等防劫持线进行游戏。给您带来不便，敬请谅解。　　尊贵的会员！您好，微信，支付宝收款账号（个体户黄日扬0830）已停用，请入款前登录会员账号点击【在线存款】查询最新入款账户，如入款已停账户，无法查收，本公司概不负责，请各位会员相互转告。感谢您的支持理解！　　尊贵的会员！您好，工商收款账号（卢金旺）已停用，请入款前登录会员账号点击【在线存款】查询最新入款账户，如入款已停账户，无法查收，本公司概不负责，请各位会员相互转告。感谢您的支持理解！</marquee>
  </div>
</div>


<div class="gameClass">
  <a @click='gotoAddress("/game_55")' >
    <img src="../../../static/images/1.png" alt="">
    <div class="gametitle">北京PK10</div>
  </a>
  <a @click='gotoAddress("/game_40")' >
    <img src="../../../static/images/2.png" alt="">
    <div class="gametitle">重庆时时彩</div>
  </a>
  <a @click='gotoAddress("/game_20")'>
    <img src="../../../static/images/3.png" alt="">
    <div class="gametitle">香港六合彩</div>
  </a>
  <a @click='gotoAddress("/game_35")' >
    <img src="../../../static/images/4.png" alt="">
    <div class="gametitle">幸运飞艇</div>
  </a>
  <a @click='gotoAddress("/game_55")' >
    <img src="../../../static/images/5.png" alt="">
    <div class="gametitle">广州快乐十分</div>
  </a>
  <a @click='gotoAddress("/game_25")' >
    <img src="../../../static/images/6.png" alt="">
    <div class="gametitle">重庆幸运农场</div>
  </a>
  <a @click='gotoAddress("/game_15")' >
    <img src="../../../static/images/c7.png" alt="">
    <div class="gametitle">幸运28</div>
  </a>
  <a href="">
    <img src="../../../static/images/huodong.png" alt="">
    <div class="gametitle">最新活动</div>
  </a>
  <a href="">
    <img src="../../../static/images/more.png" alt="">
    <div class="gametitle">更多</div>
  </a>
</div>
    <foot-guide></foot-guide>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import footGuide from '../../components/footer/footGuide'
import { setStore } from '../../utils/mUtils.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
   data() {
    return {
      // 轮播图
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        loop: true
      },
      msgs: {
        data:[{name:'ban1',
        pic:'../../../static/images/m1.jpg',
        href:'#'},
        {name:'ban2',
        pic:'../../../static/images/m2.jpg',
        href:'#'},
        {name:'ban3',
        pic:'../../../static/images/m3.jpg',
        href:'#'},
        {name:'ban4',
        pic:'../../../static/images/m4.jpg',
        href:'#'},
        {name:'ban5',
        pic:'../../../static/images/m5.jpg',
        href:'#'},
        ]
      },
      hotmsgs: {},
      dialog: false
    }
  },
  methods: {
    gotoAddress(path) {
      this.$router.push(path)
    }
  },
  components: {
    footGuide,
     swiper,
    swiperSlide
  },
}
</script>
<style lang="less" rel="stylesheet/less" scoped>

  @import "../../icon/iconfont.css";

.swiper-box {
  a {
    display: block;
    height: 160px;
    img {
      height: 100%
    }
  }
}

.login{
  height:1.6rem;
  text-align:right;
  padding:0.3rem 0.2rem;
  background:#fff;
  position:relative;
  z-index: 10;
  box-shadow:0 12px 43px -15px #aaa;
  >a{
  	text-decoration:none;
  	>button{
    padding:0.2rem;
    border-radius:0.6rem;
    background:none;
    text-align:center;
    width:3rem;
    border:1px solid #fff;
    height:1.1rem;
    box-shadow:0 6px 23px -4px #aaa;
    outline:none;
    /*behavior: url(../../../static/images/ie-css3.htc);*/
  }
  }
}
.recommend {
  width: 100%;
  .banner-item {
    width: 100%;
  }
  }
@color: #d1506d;
.mu-appbar {
  background:url(../../../static/images/blue.png);
  color: #fff;
  height: 2rem;
  text-align:center;
  >p{
    display:inline-block;
    text-align:center;
    font-weight:100;

  }
}
.mu-appbar img{
  float:right;
  width:1rem;
  height: 0.8rem;
  margin-top:-1.4rem;
}


.view-tabs {
  background-color: rgb(247, 247, 247); // background-color: #fff;
  color: rgba(0, 0, 0, .87);
  height: 46px;
  display: flex;
  >.mu-tab-link {
    color: rgba(102, 102, 102, 1);
    flex: 1;
    width: 20%;
  }
  >.mu-tab-active {
    color: @color;
  }
}
.im {
  width:32px;
  height:42px;
  >img{
    width:90%;
    margin-top:-0.8rem;
    margin-left:5px;
  }
}
.announcement{
  display: flex;
  box-shadow:0 0.1rem 32px 0px #aaa;
  div:nth-of-type(1){
    padding: 3/20rem 3/20rem;
    color: @color;
    border-radius: 2/20rem;
    width: 10%;
    flex-grow: 9;
    font-size: 25/20rem;
  }

  >div:nth-of-type(2){
    padding-left: 2/20rem;
    width: 90%;
    overflow: hidden;
    display: flex;
    align-items: center;
    p{
      white-space: nowrap;
    }
  }
}
.gameClass{
  margin-bottom:54px;
  margin-top:0.7rem;
  padding-left:0.18rem;
  >a{
    width: 4.8rem;
    height:4rem;
    border-radius:16px;
    display:inline-block;
    padding-top:5px;
    box-shadow:0 3px 6px 0 rgba(2,2,2,0.3);
    margin-bottom:0.35rem;
    text-align: center;
    margin-left:0.17rem;
    >div{
      text-align:center;
      color:#272727;
      font-size:12px;
      margin-top:0.45rem;
    }
  }
  >a{
    >img{
      width:2.2rem;
      height: 2.2rem;
      position:relative;
      top:0.2rem;

    }
  }
}

</style>
