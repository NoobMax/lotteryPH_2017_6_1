<template>

  <div>
    <div>
      <i-header title="我的密码"></i-header>
    </div>
    <div  class="header1">
      <div class="return1">
				<!--<span>-->
					<!--<img src="../../../static/images/return3.png" alt="" />-->
				<!--</span>-->
        <!--<span>返回</span>-->
        <!--<span>-->
					<!--<router-link to="" >关闭</router-link>-->
				<!--</span>-->
        <span>重置支付密码</span>
      </div>

    </div>
    <div class="middle1">
      <p>请输入旧的6位支付密码</p>
    </div>
    <div class="input1">
      <input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />
      <input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />
      <input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />
      <input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />
      <input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />
      <input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />
    </div>


    <p class="service">如果您忘记了密码，请联系<router-link to="myService">客服</router-link>找回</p>
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


<style lang="less" rel="stylesheet/less" scoped>
  .header1{
    height:46px;
    line-height:46px;
    border-bottom:1px solid #ECECEC;
  }
  .return1{
    position:absolute;
    display:inline-block;
    font-size:16px;
    color:#269FDE;
    left:15px;
  }
  .return1 span img{
    width:20px;
    height:15px;
    margin-top:-5px;
  }
  .return1 span:nth-child(2){
    margin-left:-5px;
  }
  .return1 span a{
    color:#269FDE;
    font-size:16px;
  }
  .middle1{
    height:109px;
    background:#fff;
  }
  .middle1 p{
    padding-top:2.4rem;
    font-size:0.7rem;
    font-weight: 600;
    text-align:center;
    color:#777777;
  }
  .input1{
    margin-top:33px;
    overflow:hidden;
    text-align:center;
    margin:33px auto;
    display:table;
    border-radius:5px;
    padding:10px;
  }
  .input1 input{
    width:2.2rem;
    height:2rem;
    margin-left:0.3rem;
    text-align:center;
    line-height:1.8rem;
    outline:none;
    font-size:20px;
    appearance: none;
    -webkit-appearance: none;
    display:inherit;
    float:left;
    border:none;
    border-radius:5px;
    box-shadow:0 0 10px 0 #aaa;
  }
  .input1 input:first-child{
    border-left:none;
  }
  .service{
    text-align:center;
    color:#b7b7ba;
    font-size:14px;
  }
  .service a{
    color:#a4d0fd;
    text-decoration: none;
    font-size:14px;
  }
</style>
