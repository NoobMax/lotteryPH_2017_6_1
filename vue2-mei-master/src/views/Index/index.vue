// 主页
<template>
  <div>
    <!--位置-->

      <mu-appbar >
        <mu-icon-button icon='menu' slot="right" />
        <!--<mu-icon-button icon='expand_more' slot="right" />-->
      </mu-appbar>



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


<div class="announcement">
  <div class="icon iconfont icon-laba"></div>
  <div><marquee scrollamount="4">尊敬的会员:您好,由于近期部分QQ及QQ群被停用，给您带来不便，敬请谅解。为方便更好的为您提供服务，请添加客服QQ:734889999或QQ群:173735098，方便您随时咨询。若有变动会及时更新公告，敬请关注。　　尊敬的会员：为防止玩家恶意刷水平台禁止同一IP同期同种玩法累计投注超过总注单70%，两面盘不可同时投注大小/单双/龙虎。冠亚和最高只能够下注12个和值. 若发现违规且警告无效游戏平台将给予封号，并没收账户资金。感谢您的理解与配合。如有疑问请咨询客服！　　尊敬的会员：您好，对于我司近期域名被劫持给您造成的困扰，我们深感抱歉。此问题现已解决，如发现打开平台网址后，跳转到非阿莉彩票官网页面，请使用alcp88.com或alcp99.com等防劫持线进行游戏。给您带来不便，敬请谅解。　　尊贵的会员！您好，微信，支付宝收款账号（个体户黄日扬0830）已停用，请入款前登录会员账号点击【在线存款】查询最新入款账户，如入款已停账户，无法查收，本公司概不负责，请各位会员相互转告。感谢您的支持理解！　　尊贵的会员！您好，工商收款账号（卢金旺）已停用，请入款前登录会员账号点击【在线存款】查询最新入款账户，如入款已停账户，无法查收，本公司概不负责，请各位会员相互转告。感谢您的支持理解！</marquee>
  </div>
</div>

<div class="gameClass">
  <div>
    <div></div>
    <div class="gametitle">
      <span>北京PK10</span>
    </div>
  </div>

  <div>
    <div></div>
    <div class="gametitle">
      <span>重庆时时彩</span>
    </div>
  </div>

  <div>
    <div></div>
    <div class="gametitle">
      <span>幸运飞艇</span>
    </div>
  </div>

  <div>
    <div></div>
    <div class="gametitle">
      <span>广东快乐十分</span>
    </div>
  </div>

  <div>
    <div></div>
    <div class="gametitle">
      <span>重庆幸运农场</span>
    </div>
  </div>

  <div>
    <div></div>
    <div class="gametitle">
      <span>香港六合彩</span>
    </div>
  </div>

  <div>
    <div></div>
    <div class="gametitle">
      <span>幸运28</span>
    </div>
  </div>

  <!--小四结束-->

</div>





    <foot-guide></foot-guide>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import footGuide from '../../components/footer/footGuide'
import lotteryHeader from'../../components/header/lotteryHeader'
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
  components: {
    footGuide,
     swiper,
    swiperSlide,
    lotteryHeader
  }
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

.recommend {
  width: 100%;
  margin-top: 44px;
  .banner-item {
    width: 100%;
  }
  }
@color: #d1506d;
.mu-appbar {
  background: #fff;
  color: @color;
  height: 44px;
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

.announcement{
  display: flex;
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

  margin-bottom: 54px;
  display: flex;
  flex-wrap: wrap;

  >div{
    display: flex;
    width: 50%;
    height: 70/20rem;
    flex-direction: row;
    margin: 2/20rem 0;

    >div{
      width: 40%;
      height: 70/20rem;
    }

  }

  >div:nth-of-type(1){
    >div:nth-of-type(1){
      background: url(../../../static/images/c1.png) no-repeat;
      background-position: center;
      background-size: 90%;
    }
  }

  >div:nth-of-type(2){
    >div:nth-of-type(1){
      background: url(../../../static/images/c2.png) no-repeat;
      background-position: center;
      background-size: 90%;
    }
  }

  >div:nth-of-type(3){
    >div:nth-of-type(1){
      background: url(../../../static/images/c3.png) no-repeat;
      background-position: center;
      background-size: 90%;
    }
  }

  >div:nth-of-type(4){
    >div:nth-of-type(1){
      background: url(../../../static/images/c4.png) no-repeat;
      background-position: center;
      background-size: 90%;
    }
  }

  >div:nth-of-type(5){
    >div:nth-of-type(1){
      background: url(../../../static/images/c5.png) no-repeat;
      background-position: center;
      background-size: 90%;
    }
  }

  >div:nth-of-type(6){
    >div:nth-of-type(1){
      background: url(../../../static/images/c6.png) no-repeat;
      background-position: center;
      background-size: 90%;
    }
  }
  >div:nth-of-type(7){
    >div:nth-of-type(1){
      background: url(../../../static/images/c7.png) no-repeat;
      background-position: center;
      background-size: 90%;
    }
  }

  >div:nth-of-type(odd){

  }

  .gametitle{
    width: 55%;
    display: flex;
    align-items: center;
    span{
      font-size: 17/20rem;
    }
  }
}
.mu-appbar{
  position: fixed;
  top: 0;
  box-shadow: 1px 0.06rem 0.6rem rgba(0, 0, 0, 0.5);
}

</style>
