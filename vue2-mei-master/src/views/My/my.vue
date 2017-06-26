<template>
  <!--个人中心-->
  <div class="myCenter" style="height:100%;background:#fff;">
    <!--头部-->
    <header class="tohop_head container">
      <div class="text-center">
      	<span  @click="goback" >
      		<img src="../../../static/images/backing_out.png" alt="" />
      	</span>
        <span>我的</span>
      </div>
    </header>

    <!--登陆注册-->
    <div class="person_img">

      <!--头像-->
      <div class="clearfix login-msg">
        <a href="#" class="head">
          <!-- <img :src="im_tokenMsg?im_tokenMsg.data.avatar:'../../../static/images/deful-act.png'" class="center-block" width="100%" height="100%"> -->
        </a>
        <div class="clickLogin fl">
            <p style="position:relative;top:-6px;font-size:22px;">ahhhhhh</p>
            <p style="font-size:18px;">余额：123,000.00</p>
        </div>
        <!-- <div v-if='im_tokenMsg' class="account fr">
          <router-link to="/account" class=""><span>账户管理</span><em class='arrow'></em></router-link>
        </div> -->
      </div>

      <!--优惠劵-->
      <div class="person_in">
        <div style=" border-right: 1px solid #EBEBEB;">
          <div>
            <router-link to="/todayBuyColor">
              <p>未结明细</p>
            	<span>
            		<span>10</span>
            		<img src="../../../static/images/cil.png" alt="" />
            	</span>
            </router-link>
          </div>
        </div>
        <div>
          <div>
            <router-link to="/todayWinning">
              <p>今日已结</p>
              <span>
              	<span>10</span>
            		<img src="../../../static/images/cil.png" alt="" />
            	</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container person_my" style="border-bottom:1px solid #EEEEEE;box-shadow:0 115px 60px -5px #E9ECEC">
      <ul>
        <li @click='gotoAddress("/myInfo")' class="extension">
            <router-link  to="/myInfo">
                <img src="../../../static/images/info.png">
                <i>个人资料</i>
                <span class="fr arrow"></span>
            </router-link>
        </li>
        <li @click='gotoAddress("/myHistroy")' class="collection">
            <router-link to="myHistroy">
                <img src="../../../static/images/account.png">
                <i>下注历史</i>
                <span class="fr arrow"></span>
            </router-link>
        </li>
        <li @click='gotoAddress("/myPassword")' class="address-ma" style="border-bottom:none;">
            <router-link to="myPassword" >
                <img src="../../../static/images/password.png">
                <i>我的密码</i>
                <span class="fr arrow"></span>
            </router-link>
        </li>
      </ul>
    </div>
    <div class="container person_my">
        <ul>
          <li @click='gotoAddress("/myCenter")'>
            <router-link to="myCenter">
                <img src="../../../static/images/center.png">
                <i>消息中心</i>
                <span class="fr arrow"></span>
            </router-link>
        </li>
        <li @click='gotoAddress("/myService")' style="border-bottom:none;">
            <router-link to="myService" >
                <img src="../../../static/images/service.png">
                <i>在线客服</i>
                <span class="fr arrow"></span>
            </router-link>
        </li>
      </ul>
    </div>
    <div class="container person_my" style="border-bottom:1px solid #EEEEEE ">
        <ul>
          <li @click='gotoAddress("/myCenter")' style="border-bottom:none;">
            <router-link to="myCenter">
                <img src="../../../static/images/dc.png">
                <i>登出</i>
                <span class="fr arrow"></span>
            </router-link>
          </li>
      </ul>
    </div>
    <!--弹出框-->
    <div class="zzc" style="display:none;">
    	<div class="white2">
    			<p>确认退出？</p>
    			<div>
    				<button>确认</button>
    				<button>取消</button>
    			</div>
    	</div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {

    }
  },

  methods: {

    gotoAddress(path) {
      this.$router.push(path)
    },
    goback() {
      this.$store.dispatch('goBack') // 发送后退的状态
      // 后退
      this.$router.go(-1)
    }
  },
  mounted() {

  }

}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.myCenter {
  /*头部*/
  >header {
    background:url(../../../static/images/blue.png)no-repeat;
    background-size:100% 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: .9rem;
    >div {
      height: 100%;
      color: #FFFFFF;
    }
  }
  .text-center span:first-child{
      	position: absolute;
      	left:15px;
      	>img{
      		width:13px;
      		height:20px;
      		margin-top:-5px;
      		margin-left:9px;
      	}
      }
  /*登陆注册*/
  .person_img {

    .login-msg {
        background:url(../../../static/images/blue1.png)no-repeat;
        background-size:100% 100%;
      padding: .8rem 1.4em;
      border-bottom: 1px solid #ccc;
      a {
        display: block;
        /*color: #333;*/
      }
      // 头像
      .head {
        width: 2.8rem;
        height: 2.8rem;
        background-color: #eeeeee;
        float: left;
        border-radius:10px;
        >img {
          width: 100%;
          border-radius:10px;
        }
      } // 点击登陆
      .clickLogin {
       position:relative;
       top:0.5rem;
       left:0.8rem;
       color:#9AB4ED;
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
      background:#fff;
      border-bottom:1px solid #EEEEEE;
      box-shadow: 0 50px 150px 10px #CBCECD;
      >div {
        flex: 1;
        >div {

          text-align: center;
            margin:5px auto;
          >a {
            display: inline-block;
            position: relative;
            /*width: 100%;*/
            width: 80px;
            img {
              width: 40%;
            }
            p {
              color: #585858;
              position: absolute;
              left: 0;
              right: 0;
              margin: auto;
              font-size:0.7rem;
              font-weight:600;
            }
            >span{
            	position:relative;
            	left:2rem;
            	top:-0.5rem;
            	>span{
            		position:absolute;
            		left:0.2rem;
            		color:#fff;
            	}
            	>img{
            		width:1rem;
            		height:0.7rem;
            	}
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
  margin-top: 0.8rem;
  border-top:1px solid #EEEEEE;
}

.person_my>ul>li {
  border-bottom: 1px solid #EEEEEE;
  padding: 10px 0;
  height: 45px;
}

.person_my>ul>li i {
  font-size: 0.58rem;
  color: #999;
  margin-left: 0.2rem;
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
.zzc{
	background:rgba(0,0,0,0.5);
	top:0;
	height:100%;
	position:absolute;
	width:100%;
}
.white2{
	margin:10rem auto;
	width:11rem;
	background:#fff;
	border-radius:5px;
	padding:0.5rem;
}
.white2 p{
	text-align:center;
	color:#7F7F7F;
	font-size:0.8rem;
	margin:0.5rem auto;
}
.white2 div{
	border-top:1px solid #EEEEEE;
	text-align: center;
	margin:0 -0.5rem;
}
.white2 div button{
	border-radius:5px;
	width:4.5rem;
	height:1.5rem;
	border:none;
	margin:0.5rem auto;;
}
.white2 div button:first-child{
	background:#707070;
	color:#DFDFDF;
}
.white2 div button:nth-child(2){
	background:#0857D8;
	color:#D7E4F8;
}
</style>
