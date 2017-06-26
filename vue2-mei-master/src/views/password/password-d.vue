<template>
  <div>
    <div>
      <i-header title="我的密码"></i-header>
    </div>
    <div class="header1">
      <div class="return1">
				<!--<span>-->
					<!--<img src="../../../static/images/return3.png" alt="" />-->
				<!--</span>-->
        <!--<span>返回</span>-->
        <span>设置登录密码</span>
      </div>

    </div>
    <div class="middle2">
      <p>请为您的账号设置一个新的密码</p>
    </div>
    <div class="middle2" style="margin-top:0.8rem">
      <input type="text" placeholder="请输入旧密码"/>
    </div>
    <div class="middle2" style="margin-top:0.8rem">
      <input type="text" placeholder="请输入新密码" />
    </div>
    <div class="middle2" >
      <input style="border-top:none" type="text" placeholder="请再次确认新密码" />
    </div>
    <div class="btn1">
      <button>确认修改</button>
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
    methods: {},
    created() {
      // 先判断是否选择了门店 没有就跳转到appointmentShop

      // if()
    },
    components: {
      iHeader
    }
  }
</script>
<style>
  .header1{
    height:46px;
    line-height:46px;
    border-bottom:1px solid #ECECEC;
  }
  .header1 > span{
    font-size:18px;
    text-align:center;
    display:block;
  }
  .middle2{
    height:45px;
    background:#fff;
  }
  .middle2 input{
    height:45px;
    width:100%;
    border-left:none;
    border-right:none;
    border-top:1px solid #E9E9EB;
    border-bottom:1px solid #E9E9EB;
    outline:none;
    padding-left:15px;
    font-size:16px;
    color:#8B8B8B;
  }
  .middle2 p{
    padding-top:12px;
    font-size:16px;
    font-weight: 500;
    text-align:left;
    padding-left:17px;
    color:#777777;
  }
  .btn{
    margin:40px auto;
    width:90%;
  }
  .btn button{
    text-align:center;
    border:1px solid #DDDDDD;
    background:#dddddd;
    height:1.8rem;
    border-radius:5px;
    line-height:1.8rem;
    width:100%;
    color:#BEBEBE;
    font-size:0.7rem;
    outline: none;;
  }
</style>
