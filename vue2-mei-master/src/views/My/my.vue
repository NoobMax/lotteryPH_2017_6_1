<template>
  <!--个人中心-->
  <div class="myCenter">
    <!--头部-->
    <header class="tohop_head container">
      <div class="text-center">
        <span>我的</span>
      </div>
    </header>
  
    <!--登陆注册-->
    <div class="person_img">
  
      <!--头像-->
      <div class="clearfix login-msg">
        <a href="#" class="head">
          <img :src="im_tokenMsg?im_tokenMsg.data.avatar:'../../../static/images/deful-act.png'" class="center-block" width="100%" height="100%" style="border-radius:50%;">
        </a>
        <div class="clickLogin fl">
          <router-link v-show="!im_tokenMsg" class="username" to='login'>登陆/注册</router-link>
          <div v-if="im_tokenMsg" class="loging">
            <p class="name">{{im_tokenMsg.data.name}}</p>
            <p>
              <input type="button" class="sign" value="签到" />
            </p>
          </div>
  
        </div>
        <div v-if='im_tokenMsg' class="account fr">
          <router-link to="/account" class=""><span>账户管理</span><em class='arrow'></em></router-link>
        </div>
      </div>
  
      <!--优惠劵-->
      <div class="person_in">
        <div>
          <div>
            <router-link to="/discountCoupon"><img src="../../../static/images/coup02.png" class=' center-block'>
              <p>优惠券</p>
            </router-link>
          </div>
        </div>
        <div>
          <div>
            <router-link to="/myMeal"><img src="../../../static/images/taocan.png" style="width: 20%" class=' center-block'>
              <p>套餐</p>
            </router-link>
          </div>
        </div>
        <div>
          <div>
            <router-link to="/myWallet"><img src="../../../static/images/qianbao.png" class=' center-block'>
              <p>{{im_tokenMsg?im_tokenMsg.data.money:'0.00'}}</p>
            </router-link>
          </div>
        </div>
        <div>
  
          <div>
            <router-link to="/myPoints"><img src="../../../static/images/jifen.png" class=' center-block'>
              <p>{{im_tokenMsg?im_tokenMsg.data.integral:0}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  
    <div class="person_order">
      <div class="person_ordin"><span>我的订单</span><i class="fr">查看全部订单 <span class="arrow"></span></i></div>
      <div class="person_order_in">
        <div>
          <div>
            <a href="already-appointment.html"><img src="../../../static/images/cenimg01.png" class=' center-block'>
              <p>待付款</p>
            </a>
          </div>
        </div>
        <div>
          <div>
            <a href="already-appointment.html"><img src="../../../static/images/cenimg03.png" class=' center-block'>
              <p>已支付</p>
            </a>
          </div>
        </div>
        <div>
          <div>
            <a href="already-appointment.html"><img src="../../../static/images/cenimg02.png" class=' center-block'>
              <p>进行中</p>
            </a>
          </div>
        </div>
        <div>
          <div>
            <a href="already-appointment.html"><img src="../../../static/images/cenimg04.png" class=' center-block'>
              <p>待评价</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="container person_my">
      <ul>
        <li class="extension"><img src="../../../static/images/my01.png"> <i>我的邀请码</i> <span class="fr arrow"></span></li>
        <li class="collection"><img src="../../../static/images/my02.png"> <i>我的收藏</i> <span class="fr arrow"></span></li>
        <li class="address-ma"><img src="../../../static/images/my03.png"> <i>常用地址</i> <span class="fr arrow"></span></li>
        <li>
          <a href="tel:4008097233"><img src="../../../static/images/my04.png"> <i>联系我们</i> <span class="fr arrow"></span> </a>
        </li>
        <li style="border:0;"><img src="../../../static/images/my05.png"> <i>设置</i> <span class="fr arrow"></span></li>
      </ul>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
    getToken() {
      this.im_tokenMsg = JSON.parse(sessionStorage.getItem('im_token'))
    }
  },
  mounted() {
    this.getToken()
  },
  components:{
    footGuide
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.myCenter {
  /*头部*/
  >header {
    background-color: #fff;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: .8rem;
    >div {
      height: 100%;
      color: #d2516d;
    }
  }
  /*登陆注册*/
  .person_img {
    margin-top: 10px;
    background: #fff;
    .login-msg {
      padding: .8rem .6rem 0.6rem;
      border-bottom: 1px solid #ccc;
      a {
        display: block;
        /*color: #333;*/
      } // 头像
      .head {
        width: 2.8rem;
        height: 2.8rem;
        background-color: #eeeeee;
        border-radius: 50%;
        float: left;
        >image {
          width: 100%;
        }
      } // 点击登陆
      .clickLogin {
        height: 2.8rem;

        .username {
          line-height: 2.8rem;
        }
        >a {
          display: inline;
          padding: .4rem;
        }
        .loging {
          margin-left: .4rem;
          >p:first-child {
            margin: .4rem 0rem;
          }
        }
        .sign {
          border: 0;
          background: #fff;
          border: 1px solid #e97194;
          border-radius: 3px;
          color: #333;
          padding-left: 5px;
          padding-right: 5px;
          font-size: 12px;
        }
      } // 账号管理
      .account {
        line-height: 2.8rem;
        a {
          display: inline;
        }
        >span {
          padding: 0 .3rem;
        }
      }
    }
    /*优惠*/
    .person_in {
      display: flex;
      padding: 10px 0;
      >div {
        flex: 1;
        >div {
          border-right: 1px solid #f7f7f7;
          text-align: center;

          >a {
            display: inline-block;
            position: relative;
            /*width: 100%;*/
            width: 80px;
            height: 50px;
            img {
              width: 40%;
            }
            p {
              color: #000;
              position: absolute;
              left: 0;
              right: 0;
              bottom: -5px;
              margin: auto;
            }
          }
        }
      }
    }
  }
  /*订单*/
  .person_order {
    margin-top: 10px;
    background: #fff; //全部订单
    .person_ordin {
      padding: 15px;
    }
    .person_order_in {
      display: flex;
      >div {
        flex: 1;
        text-align: center;
        p {
          margin-top: 5px;
        }
        img {
          width: 40%;
        }
      }
    }
  } // 箭头
  .arrow {
    background: url(../../../static/images/cou_r.png) no-repeat;
    width: 12px;
    height: 10px;
    display: inline-block;
    background-size: 50%;
    margin-left: 5px;
    margin-top: 5px;
  }
}

.person_ordin>span {
  font-size: 16px;
  color: #000;
}

.person_ordin>i {
  color: #999;
}

.person_order_in {
  background: #fff;
  padding-top: 10px;
  padding-bottom: 5px;
  border-top: 1px solid #ccc;
}

.person_order_in ul li {
  width: 24%;
}

.person_order_in ul li img {
  width: 40%;
  margin-bottom: 5px;
}

.person_my {
  background: #fff;
  margin-top: 10px;
  margin-bottom: 80px;
}

.person_my>ul>li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  height: 45px;
}

.person_my>ul>li i {
  font-size: 14px;
  color: #000;
  margin-left: 10px;
}

.person_my>ul>li img {
  width: 6%;
}

.person_order_in>ul>li {
  position: relative;
}

.order-num {
  width: 20px;
  height: 20px;
  position: absolute;
  top: -5px;
  right: 20px;
  border: 1px solid red;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  background: red;
}

.sign-yes {
  border: 0;
  background: #fff;
  border: 1px solid #e97194;
  border-radius: 3px;
  color: #333;
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  left: 90px;
  top: 35px;
  font-size: 12px;
}
</style>
