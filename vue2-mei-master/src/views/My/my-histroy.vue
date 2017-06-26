<template>
  <!--当新用户或者没选择门店用户进来时  会让选择默认门店-->
  <div>
  	<div>
    	<i-header title="下注历史"></i-header>
  	</div>
  	<div class="midd">
  		<div class="cen3">
  			<p>2017-06-08</p>
  			<div>
  				<div>
  					<p>注单数：<span>7</span></p>
  					<p>下注金额：<span>210.00</span></p>
  				</div>
  				<div>
  					<p>输赢：<span>9500.00</span></p>
  					<p>退水：<span>0.00</span></p>
  				</div>
  				<div style="border-bottom:1px solid #EBEBEB;"></div>
  				<div>
  					<p>总计：<span>9500.00</span></p>
  				</div>
  			</div>
  		</div>
  		<div class="cen3">
  			<p>2017-06-08</p>
  			<div>
  				<div>
  					<p>注单数：<span>7</span></p>
  					<p>下注金额：<span>210.00</span></p>
  				</div>
  				<div>
  					<p>输赢：<span>9500.00</span></p>
  					<p>退水：<span>0.00</span></p>
  				</div>
  				<div style="border-bottom:1px solid #EBEBEB;"></div>
  				<div>
  					<p>总计：<span>9500.00</span></p>
  				</div>
  			</div>
  		</div>
  		<div class="cen3">
  			<p>2017-06-08</p>
  			<div>
  				<div>
  					<p>注单数：<span>7</span></p>
  					<p>下注金额：<span>210.00</span></p>
  				</div>
  				<div>
  					<p>输赢：<span>9500.00</span></p>
  					<p>退水：<span>0.00</span></p>
  				</div>
  				<div style="border-bottom:1px solid #EBEBEB;"></div>
  				<div>
  					<p>总计：<span>9500.00</span></p>
  				</div>
  			</div>
  		</div>
  		<div class="cen3">
  			<p>2017-06-08</p>
  			<div>
  				<div>
  					<p>注单数：<span>7</span></p>
  					<p>下注金额：<span>210.00</span></p>
  				</div>
  				<div>
  					<p>输赢：<span>9500.00</span></p>
  					<p>退水：<span>0.00</span></p>
  				</div>
  				<div style="border-bottom:1px solid #EBEBEB;"></div>
  				<div>
  					<p>总计：<span>9500.00</span></p>
  				</div>
  			</div>
  		</div>
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
	.midd{
		padding:15px;
	}
	.cen3{
		background:#fff;
		border-radius:5px;
		margin-bottom:10px;
	}
	.cen3 > p{
		background:url(../../../static/images/blue.png);
		color:#fff;
		height:40px;
		border-radius:5px 5px 0 0;
		padding:10px;
		overflow:hidden;
	}

	.cen3 > div{
		margin-left:20px;
		margin-right:20px;
	}
	.cen3 > div > div > p{
		display:inline-block;
		font-size:15px;
		color:#7B838F;
		margin:3px;
		width:47%;
	}
	.cen3 > div > div:nth-child(2)> p:first-child > span{
		color:#115FDD
	}
</style>
