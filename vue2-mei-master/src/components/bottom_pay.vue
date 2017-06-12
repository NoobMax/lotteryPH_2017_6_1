<template>
  <!--底部购买组件-->
  <div class="bottom-pay">
    <transition>
      <div class="addbox" v-show="addbox.show">{{addbox.boxmsg}}</div>
    </transition>
    <div class="footer_box">
      <!--点击收藏-->
      <div class="footer_l" @click='collection()'>
        <!--为空-->
  
        <a href="javascript:;" :class="status=='1'?'ok_sc':'no_sc'"><i class="coll"></i><p class="xs">{{status == '1' ? '已收藏': '收藏'}}</p></a>
      </div>
      <div class="footer_c">
        <a>
          <i class="foot-store"></i>
          <p>店铺</p>
        </a>
      </div>
      <div class="footer_box_button" @click='pay'>
        <!--<router-link :to="value">立刻购买</router-link>-->
        <a href="javascript:;">立刻购买</a>
      </div>
    </div>
  
  </div>
</template>

<script>
import { loginTrue, favorite } from '../api'
export default {
  data() {
    return {
      // 未登录
      isLoginStatus: 1,
      addbox: {
        show: false,
        boxmsg: ''
      }
    }
  },
  props: [
    'status',// 接收是否收藏
    'favoriteType', // 接收类型
    'value', // id
    'id'
  ],
  computed: {

  },
  methods: {
    // 判断是否登陆
    isLogin() {
      this.$http.get(loginTrue()).then(res => {
        this.isLoginStatus = res.data.error
      })
    },
    // 收藏取消收藏
    isFavorite() {
      var edit;
      this.status == '1' ? edit = 'del' : edit = 'add'  // 首次点击
      console.log(this.status);
      var params = { // 配置
        params: {
          favorite_type: this.favoriteType,   // meal(套餐)project项目shop门店（商家）beautician美容师
          value: this.id,
          edit: edit
        }
      }
      console.log(this.id);
      this.$http.get(favorite(), params).then(res => {
        var data = res.data.status
        if (data) {
          this.addbox.show = true;
          this.addbox.boxmsg = '收藏成功'
          setTimeout(() => {
            this.addbox.show = false;
          }, 500)
        } else {
          this.addbox.show = true;
          this.addbox.boxmsg = '取消收藏'
          setTimeout(() => {
            this.addbox.show = false;
          }, 500)

        }
        // 判断status值 0 未收藏 1 收藏
        this.$emit('favoriteStatus', data)

      })
    },
    collection() {
      // 验证是否登陆
      if (this.isLoginStatus) {// 等于1 未登陆
        console.log('还未登陆');
        this.$router.push({ path: '/login' }) // 跳转到登陆
      } else {
        console.log('已经登陆 ');
        this.isFavorite()
      }
    },
    pay() {
      // 验证是否登陆
      if (this.isLoginStatus) {// 等于1 未登陆
        console.log('还未登陆');
        this.$router.push({ path: '/login' }) // 跳转到登陆
      } else {
        console.log('已经登陆 ');
        this.$router.push({ path: this.value }) // 跳转
      }
    }
  },
  mounted() {
    // 判断是否登陆
    // console.log(this.status); 

    // this.collectionStatus = this.status ;

    this.isLogin()
    // console.log(this.value);
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
/*底部购买*/

.footer_box {
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 999;
  .footer_l {
    text-align: center;
    background: #fff;
    height: 49px;
    line-height: 14px;
    border-right: 1px solid #ccc;
    width: 16.66%;
    float: left;
  }
  .no_sc .coll {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url(../../static/images/coll-no.png) no-repeat;
    background-size: 100%;
    margin-top: 8px;
  }
  .no_sc p {
    color: #b2b2b2;
  }
  .ok_sc .coll {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url(../../static/images/coll-yes.png) no-repeat;
    background-size: 100%;
    margin-top: 8px;
  }
  .ok_sc p {
    color: #e66280;
  }
  .footer_l>a>p {
    font-size: 10px;
  }
  .footer_c {
    text-align: center;
    background: #fff;
    height: 49px;
    padding-right: 15px;
    padding-left: 15px;
    border-right: 1px solid #ccc;
    float: left;
    line-height: 16px;
    p {
      color: #b2b2b2;
    }
  }
  .foot-store {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url(../../static/images/foot-store.png) no-repeat;
    background-size: 100%;
    margin-top: 7px;
  }
  .footer_box_button {
    float: left;
    background: #d1506d;

    font-size: 18px;
    line-height: 49px;
    width: 66.66666666666666%;
    text-align: center;
    >a {
      color: #fff;
    }
  }
}





















/*收藏成功，取消收藏*/

.addbox,
.delbox {
  position: fixed;
  background: #000;
  opacity: 0.5;
  top: 30%;
  left: 50%;
  padding: 5px;
  width: 80px;
  margin-left: -40px;
  z-index: 333;
  color: #fff;
  text-align: center;
  border-radius: 3px;
}
</style>