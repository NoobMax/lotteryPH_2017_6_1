<template>
  <div style="height:100%">
   	<div>
       <i-header title="资金管理"></i-header>
    </div>
    <div class="bank">
    	<img src="../../../static/images/bank.png" style="width:1rem;height:1rem" alt="" />
    	<p>银行卡管理</p>
    </div>
    <div class="js">
    	<p style="margin-left:0">中国建设银行</p>
    	<p style="margin-left:0;color:#999999" >6225 **** **** **** 110</p>
    	<a href="">
    		<img src="../../../static/images/28.png" alt="" />
    	</a>
    </div>
    <div class="ban" style="text-align:center;">
    	<a v-link="{ path: '/Order/addBank'}">
    		<img src="../../../static/images/ch.png" alt="" />
    	</a>
    	<span>添加/删除银行账户</span>
    </div>
    <!--订单状态  组件-->
    <div>
		  <mu-tabs :value="activeTab" @change="handleTabChange">
		    <mu-tab value="all" title="存款 "/>
		    <mu-tab value="obligation" title="取款"/>
		    <mu-tab value="paid" title="存取款记录"/>
		  </mu-tabs>
      <div v-if="activeTab ==='all'">
        <div class="ban">
        	<img src="../../../static/images/livepay.png" alt="" />
    			<p>在线支付</p>
		    </div>
	    	<div class="ban">
	    		<img src="../../../static/images/bao.png" alt="" />
					<p>支付宝支付</p>
	    	</div>
	    	<div class="ban">
	    		<img src="../../../static/images/weixin.png" alt="" />
					<p>微信支付</p>
	    	</div>
	    	<div class="ban">
	    		<img src="../../../static/images/hands.png" alt="" />
					<p>手动入款</p>
	    	</div>
		    </div>
		    <div v-if="activeTab ==='obligation'">
		    	<div class="js">
		    		<img src="../../../static/images/jsyh.png" style="width:1.5rem;float:left;position:relative;top:0.2rem;" alt="" />
			    	<p>中国建设银行</p>
			    	<p>6225**** **** **** 110</p>
			    	<a href="">
			    		<img src="../../../static/images/28.png" alt="" />
			    	</a>
			    </div>
			    <div class="js1" >
			    	<p>提现金额<span>(账户余额12300.00)</span></p>
			    	<p style="font-size:0.9rem">
			    		<img src="../../../static/images/money1.png" style="width:0.9rem;position:relative;top:-0.1rem" alt="" />
			    		<span style="font-size:0.8rem;margin-top:-0.1rem;margin-left:-0.4rem">10,000.00</span>
			    	</p>
			    </div>
			    <div class="js1">
			    	<p>提款密码</p>
			    	<p>
			    		<input type="text" placeholder="请正确填写6位取款密码" />
			    	</p>
			    </div>
			    <div class="btn2">
			    	<button>重置</button>
			    	<button>确认</button>
			    </div>
		    </div>
		    <div v-if="activeTab ==='paid'">
		    	<div class="js2">
			    	<p style="font-size:0.65rem;">2017-06-18 11:24:36</p>
			    	<p style="color:#999999">存入：545847562.00</p>
			    	<a href="">
			    		<img src="../../../static/images/28.png" alt="" />
			    	</a>
			    	<span>等待审核</span>
			    </div>
			    <div class="js2">
			    	<p style="font-size:0.65rem;">2017-06-18 11:24:36</p>
			    	<p style="color:#999999">取出：545847562.00</p>
			    	<a href="">
			    		<img src="../../../static/images/28.png" alt="" />
			    	</a>
			    	<span style="color:rgb(180,180,180)">成功</span>
			    </div>
			    <div class="js2">
			    	<p style="font-size:0.65rem;">2017-06-18 11:24:36</p>
			    	<p style="color:#999999">取出：545847562.00</p>
			    	<a href="">
			    		<img src="../../../static/images/28.png" alt="" />
			    	</a>
			    	<span style="color:rgb(180,180,180)">成功</span>
			    </div>
		    </div>
      </div>  
      <!--遮罩层开始-->
      <div class="zzc" style="display:none;">
      	<div class="white">
      		<div>交易记录详情
      			<span id="x">
      				<img src="../../../static/images/guanb.png" alt="" />
      			</span>
      		</div>
      		<p>交易单号：<span>ME_1524795210</span></p>
      		<p>交易时间：<span>2017-04-06 11:25:36</span></p>
      		<p>交易方式：<span>入款</span></p>
      		<p>交易状态：<span>等到审核</span></p>
      		<p>交易金额：<span>1524201.00</span></p>
      	</div>
      </div>
      <!--遮罩层结束-->
  </div>
</template>

<script>
	import iHeader from '../../components/i-header'
export default {
    data() {
        return {}
    },
    components: {
      iHeader
    },
    data () {
	    return {
	      activeTab: 'all'
	    }
	  },
	  methods: {
	    handleTabChange (val) {
	      this.activeTab = val
	    }
	  }
}
/*$("#x").click(function(){
	$(".zzc").css("display","none;");
})*/
</script>

<style lang='less' ref="stylesheet/less" scoped>
.mu-tabs{
	background:#fff;
	button{
		color:#000;
		font-size:0.65rem;
		border-right:1px solid #F4F4F4;
		margin-right:-1px;
		padding:10px;
		height:2.2rem;
		line-height:1.8rem;
		min-height:1rem;
	}
}
.bank{
	height:2.5rem;
	background:#fff;
	box-shadow:0 1px 5px 0 #E4E4E4;
	position:relative;
	z-index:10;
	line-height:2.5rem;
	padding-left:1rem;
}
.ban{
	height:2.5rem;
	background:#fff;
	position:relative;
	z-index:10;
	line-height:2.5rem;
	padding-left:1rem;
	border-bottom:1px solid #E4E4E4;
}
.js,.js1,.js2{
	height:3rem;
	background:#fff;
	line-height:2rem;
	border-bottom:1px solid #E4E4E4;
	padding:0.5rem 1rem;
}
.js1{
	margin-top:0.5rem;
}
.js1 p{
	line-height: 1rem;
	font-size:0.7rem;
	color:#C0C0C0;
	height:1.3rem;
}
.js1 p:first-child{
	color:#545454;
}
.js1 p:first-child span{
	color:#ACACAC;
}
.js1 p:nth-child(2) input{
	width:100%;
	border:none;
	outline:none;
	font-size:0.64rem;
	position: relative;
	top:-0.2rem;
}
::-webkit-input-placeholder{
	color:#DADADA;
}
.js p,.js2 p{
	line-height: 1rem;
	font-size:0.7rem;
	color:#B8B8B8;
	width:80%;
	height:1.3rem;
	margin-left:2rem;
	
}
.js2 p{
	margin-left:0;
}
.js2 span{
	   float: right;
    position: relative;
    top: -2.5rem;
    left: -1rem;
    color: #6C96E6;
    font-size: 0.6rem;
}
.js a,.js2 a{
	text-decoration:none;
	img{
		float:right;
		margin-top:-2rem;
		width:0.5rem;
	}
}
.bank p{
		display:inline-block;
		color:#777777;
		font-size:0.7rem;
}
.bank img{
	width:1rem;
	height:1rem;
	position:relative;
	top:-0.2rem;
}
.ban p{
		display:inline-block;
		color:#ACACAC;
		font-size:0.6rem;
}
.ban a{
	text-decoration:none;
	display:inline-block;
	width:1rem;
	height:1rem;
	line-height:1rem;
	text-align:center;
	font-size:1.5rem;
	font-weight:100;
	border-radius:50%;
	color:#2A92CB;
	position:relative;
	top:0.1rem;
}
.ban span{
	color:#CDCDCD;
	font-size:0.6rem;
}
.mu-tabs{
	box-shadow:0 1px 20px -2px #aaa;
	position:relative;
	z-index:100;
	border-bottom:1px solid #DDDEE2;
}
.ban img{
	width:0.8rem;
}
.order-list{
	margin-top:-0.6rem;
}
.tab1 > div{
	margin-top:0.6rem;
	border-top:1px solid #E4E4E4;
}
.mu-tab-active{
	background:#166ADE;
	color:#fff;
}
.btn2{
	margin:1.5rem auto;
	text-align:center;
}
.btn2 button{
	height:2rem;
	line-height:2rem;
	border-radius:5px;
	outline:none;
	width:7rem;
	border:none;
	font-size:0.7rem;
}
.btn2 button:first-child{
	background:#B5B5B5;
	color:#E5E5E5;
}
.btn2 button:nth-child(2){
	background:#0857D8;
	color:#F3FAFE;
}
span.mu-tab-link-highlight{
	display:none;
}
.zzc{
	position:absolute;
	z-index:100;
	top:0;
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.5);
}
.white{
	background:#fff;
	width:14rem;
	border-radius:5px;
	margin:5rem auto;
	div{
		padding:0.5rem 0.8rem;
		font-size:0.6rem;
		color:#DADADA;
		border-bottom:1px solid #DADADA;
		span{
			float:right;
			width:1rem;
			margin-top:-0.2rem;
		}
	}
	p{
		height:1.8rem;
		line-height:1.8rem;
		margin:auto 0.8rem;
			font-size:0.6rem;
			color:#DADADA;
			border-bottom:1px solid #DADADA;
			span{
				float:right;
			}
		}
}
</style>