<template>
  <!--当新用户或者没选择门店用户进来时  会让选择默认门店-->
  <div>
    <header>
      <i-header title="我的密码"></i-header>
    </header>
    <div class="contain">
      <ul>
        <li @click="gotoAddress('/passwordZ')">
          <router-link to="passwordZ">
            <i>修改支付密码</i>
            <span class="fr arrow"></span>
          </router-link>
        </li>
        <li @click="gotoAddress('/passwordD')" style="border-bottom:none">
          <router-link to="passwordD">
            <i>修改登录密码 </i>
            <span class="fr arrow"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import iHeader from '../../components/i-header'
  // console.log(iHeader)
  export default {

    data() {
      return {

      }
    },
    methods: {
      gotoAddress(path) {
        this.$router.push(path)
      }
    },
    created() {
      // 先判断是否选择了门店 没有就跳转到appointmentShop

      // if()
    },
    components: {
      iHeader
    }
  }

</script>
<style lang="less" rel="stylesheet/less" scoped>
  header{
    background:url(../../../static/images/blue.png)no-repeat;
    color:#fff;
    >header .text-cente{
     color:#fff;
   }
  }
  .contain{
    background:#fff;
    margin-top:10px;
    border-bottom:1px solid #EEEEEE;
  }
  .contain ul{
    margin-left:18px;
  }
  .contain ul li{
    height:58px;
    line-height:58px;
    border-bottom:1px solid #EEEEEE;
    font-size:0.75rem;
  }
  .contain ul li a{
    color:#101010;
  }
  .contain ul li a span{
    background: url(../../../static/images/cou_r.png) no-repeat;
    width: 15px;
    height: 15px;
    display: inline-block;
    background-size: 50%;
    margin-right: 10px;
    margin-top: 22px;
  }
</style>
