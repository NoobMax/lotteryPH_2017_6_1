<template>
  <!--订单确认页面-->
  <div class="confirmOrder">
    <i-header title="订单确认"></i-header>
    <!-- 预约人 -->
    <div class='container order_ok'>
		<div class="res_yuyue">
			<label>预约人</label>： 
			<input type="text" class="res_num" :value="time.user">
			<span class="pull-right">(可修改)</span>
		</div>
		<div class="res_tel">
			<label>电话</label>： 
			<input type="text" class="res_num" :value="time.mobile" disabled="true">
			<span class="pull-right"></span>
		</div>
	</div>
	<!-- 服务项目 -->
	<div class="container res_pro">
		<h5>服务项目：</h5>
		<div class="res_pro_in">
			<div class="col-xs-12">
				<input type="hidden" value="18" id="project_id">
				<div class="res_imgbox">
					<img :src="time.default_pic" class="img-responsive">
				</div>
				<div class="res_name">
					<h4>{{time.name}}</h4>
					<p class="res_time"><i></i><span class="order_time">{{time.service_time}}</span>min</p>
					<p class="ord_pri"><span class="">￥</span><i class="ord_price">{{time.price}}</i></p>
				</div>
				<div class="col-xs-3 ord_numb">
					<span class="min" @click='reduce(this)'>-</span> 
					<input type="text" :value="end" class="ord_num" id="server_num" disabled=""> 
					<span class="add" @click='add()'>+</span>
				</div>
			</div>
		</div>
	</div>
	<!-- 店长推荐 -->
	<div class="container ord_recom">
		<h5 @click="show()">店长推荐：<a class="pull-down" :date="showll?'sh':''"></a></h5>
		<ul :class="showll?'':'hidden'">	
			<li v-for="(item,i) in msg">
				<div class="container res_pro">
					<div class="res_pro_in">
						<div class="col-xs-12">
							<div class="res_imgbox">
								<img :src="item.default_pic" class="img-responsive">
							</div>
							<div class="res_name">
								<h4>{{item.name}}</h4>
								<p class="res_time"><i></i><span class="order_time">{{item.service_time}}</span>min</p>
								<p class="ord_pri"><span class="">￥</span><i class="ord_price">{{item.price}}</i></p>
							</div>
							<div class="col-xs-3 ord_numb">
								<span class="min">-</span> 
								<input type="text" value="1" class="ord_num" disabled=""> 
								<span class="add">+</span>
							</div>
						</div>				
					</div>	
				</div>
			</li>
		</ul>	
	</div>
	<mu-circular-progress id="pjiajg" style="margin:10px auto;display: none;" :size="40" />
	<!-- 选择门店和时间 -->
	<div class="container store-time">
		<p class="store-time-title">选择门店和时间</p>
		<ul class="">
			<li>
				<div class="store">
					<p>{{mend.name}}</p>
					<a></a>
					<div class="store-text">{{mend.address}}</div>
				</div>
			</li>
			<li>
				<div class="store time">
					<p>预约时间</p>
					<a></a>
					<div class="store-text">广州天河区珠江新城华穗路180号嘉裕•珺玥公馆A座三楼</div>
				</div>
			</li>
		</ul>
	</div>
	<!-- 底部 -->
	<div class="ord_footer_box">
		<div class="col-xs-5 ord_footer_l">
			<p class="server_time">服务时长：<span class="server_min">90</span>min</p>
			<p class="order_number">数量：<span>1</span>个</p>
		</div>
		<div class="col-xs-4 ord_footer_c">
			<span class="">￥</span><i>90</i>
		</div>
		<div class="col-xs-3 text-center buy">确定</div>
	</div>
  </div>
</template>
<script>
  // 项目详情
  import { getProjectMsg,getCartTime,getShop } from '../api'
  // 头部
  import iHeader from './i-header'
  import bottomPay from './bottom_pay'
  export default {
  	data(){
  		return{
  			time:[],
  			end:1,
  			showll:false,
  			msg:[],
  			mend:[]
  		}
  	},
  	methods:{
  		getProjectMsg(){
  			this.$http.get(getProjectMsg(this.$route.query.id)).then(res=>{
  				console.log(res.data.data);
  				this.time=res.data.data.project;
  				this.msg=res.data.data.project.pro_push;
  			})
  		},
  		add(){
  			this.end++;
  		},
  		reduce(TH){
  			this.end--;
  			if(this.end<1){
  				alert('最少选一次');
  				this.end=1;
  			}
  		},
  		show(){
  			var THIS=this;
  			if(THIS.showll==false){
  				THIS.showll=true;
	  		}else{
	  			THIS.showll=false;
	  		}
  		},
  		getCartTime(){
  			// console.log(document.referrer)
  			// this.$http.get(getCartTime(2,830)).then(res=>{
  			// 	console.log(res)
  			// });
  		},
  		getShop(){
  			this.$http.get(getShop()).then(res=>{
  				if(res.data.data==undefined){
  					this.mend.name='请选择门店：'
  				}else{
  					this.mend=res.data.data;
  				}
  				// console.log(res.data);
  				// this.mend=res.data.data;
  			});
  		}
  	},
  	components: {
	    iHeader,
	    bottomPay
  	},
  	created(){
  		this.getProjectMsg();
  		this.getCartTime();
  		this.getShop();
  	}
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
	.child-view{
	    position:inherit;
		background:#fff !important;
	}
	/*预约人信息*/
	.order_ok {
	    background: #fff;
	    margin-top: 10px;
	    margin-bottom: 10px;
	    .res_yuyue {
		    border-bottom: 1px solid #ccc;
   			font-size: 15px;
		}
		label {
		    font-weight: bold;
		}
		input {
		    border: none;
		    outline:none;
		}
		span {
		    color: #999;
		    float: right!important;
		}
		>div {
		    height: 49px;
		    line-height: 45px;
		}
		.res_tel>input {
		    border: 0;
		    background: #fff;
		}
	}
	/*服务项目*/
	.res_pro {
	    padding-bottom: 5px;
	    overflow:hidden;
	    .res_pro h5 {
		    margin: 15px 0;
		    font-size: 15px;
		    font-family: "Comic Sans MS","幼圆","黑体",sans-serif;
		}
		.res_pro_in {
		    margin-bottom: 10px;
		    margin-right: -15px;
    		margin-left: -15px;
		}
		.col-xs-12{
			padding:0 15px;
		}
		.res_imgbox {
		    padding-left: 0;
		    float:left;
		    width: 41.66666666666667%;
		    margin-right:15px;
		}
		.img-responsive {
		    display: block;
		    height: auto;
		    max-width: 100%;
		}
		.res_name {
		    padding: 0;
		    float:left;
		    width: 33.33333333333333%;
		}
		.res_name>h4 {
		    font-family: "Comic Sans MS","幼圆","黑体",sans-serif;
		    margin-bottom: 5px;
		    font-size: 15px;
		}
		.res_time>i {
		    width: 17px;
		    height: 17px;
		    display: inline-block;
		    background: url(../../static/images/time.png) no-repeat;
		    background-size: 80%;
		    vertical-align: middle;
		}
		.ord_pri {
		    color: #f67476;
		    margin-top: 15px;
		    font-size: 16px;
		}
		.ord_numb{
			position:relative;
			float: left;
			top:37px;
		}
		.ord_numb>span.min {
		    color: #e66280;
		    font-size: 16px;
		    font-weight: bold;
		    border: 1px solid #ccc;
		    padding: 3px 7px;
		    border-radius: 3px;
		    background: #f1f1f1;
		    position: absolute;
		    top: 10px;
		    left: 5px;
		    z-index: 2;
		}
		.ord_numb>input {
		    width: 24px;
		    height: 32px;
		    border: 0;
		    text-align: center;
		    background: #f1f1f1;
		    position: absolute;
		    top: 10px;
		    left: 28px;
		    font-size: 14px;
		}
		.ord_numb>span.add {
		    color: #e66280;
		    font-size: 16px;
		    font-weight: bold;
		    border: 1px solid #ccc;
		    padding: 3px 5px;
		    border-radius: 3px;
		    background: #f1f1f1;
		    position: absolute;
		    top: 10px;
		    left: 52px;
		    z-index: 2;
		}
	}
	/*店长推荐*/
	.ord_recom {
	    border-top: 1px solid #ccc;
	    background: #f5f5f5;
	    padding-bottom: 5px;
	    margin-top: 5px;
	    h5{
		    margin: 15px 0;
		    font-size: 15px;
		    color: #000;
		    font-family: "Comic Sans MS","幼圆","黑体",sans-serif;
		}
		h5>.pull-down {
			transform:rotate(180deg);
			-ms-transform:rotate(180deg); 	
			-moz-transform:rotate(180deg); 	
			-webkit-transform:rotate(180deg);
			-o-transform:rotate(180deg); 
		    width: 15px;
		    height: 15px;
		    background: url(../../static/images/extension.png) no-repeat;
		    display: inline-block;
		    float: right;
		}
		h5>.pull-down:hover{
			 transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transition: All 0.1s ease-in-out;
            -webkit-transition: All 0.1s ease-in-out;
            -moz-transition: All 0.1s ease-in-out;
            -o-transition: All 0.1s ease-in-out;
		}
		h5>.pull-down[date="sh"]{
			transform:rotate(0deg) scale(1.2);
			-ms-transform:rotate(0deg) scale(1.2); 	
			-moz-transform:rotate(0deg) scale(1.2); 	
			-webkit-transform:rotate(0deg) scale(1.2);
			-o-transform:rotate(0deg) scale(1.2); 
			 transition: All 0.1s ease-in-out;
            -webkit-transition: All 0.1s ease-in-out;
            -moz-transition: All 0.1s ease-in-out;
            -o-transition: All 0.1s ease-in-out;
		}
		.hidden {
		    display: none;
		}
	}
	/*选择门店和时间*/
	.store-time-title{
		margin: 15px 0;
	    font-size: 15px;
	    color: #333;
	    padding-bottom: 10px;
	    border-bottom:1px solid #ccc;
	}
	.store{
		padding-bottom:10px;
		overflow: hidden;
		border-bottom:1px solid #ccc;
	}
	.store p{
		float: left;
	}
	.store a{
		width: 8px;
	    height: 14px;
	    float: right;
	    background: url(../../static/images/cou_r.png) no-repeat;
	    background-size: 100%;
	}
	.store-text{
		float: left;
		width: 100%;
		display: none;
	}
	.time{
		margin-top: 15px;
	}
	/*底部*/
	.ord_footer_box {
	    width: 100%;
	    height: 49px;
	    position: fixed;
	    bottom: 0px;
	    left: 0;
	    z-index: 999;
	    background: #fff;
	}
	.ord_footer_l{
		float: left;
		width: 41.66666666666667%;
		padding-right: 15px;
    	padding-left: 15px;
        padding-top: 5px;
	}
	.ord_footer_c{
		float: left;
		padding-right: 15px;
	    padding-left: 15px;
	    width: 33.33333333333333%;
	    color: #f67476;
    	font-size: 16px;
    	margin-top:12px;
	}
	.buy {
		float: left;
	    background: #d1506d;
	    color: #fff;
	    font-size: 18px;
	    line-height: 49px;
    	width: 25%;
    	text-align:center;
	}
</style>