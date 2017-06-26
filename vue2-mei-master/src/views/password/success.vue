<template>
	<div>
		<div>
        	<i-header title="我的密码"></i-header>
    	</div>
		<div class="header1">
			<div class="return2" style="position:relative;display:block">
				<span style="color:#151515;">修改登录密码</span>
			</div>
		</div>
		<div class="yz">
			<img src="../../../static/images/yz.png" alt="" />
			<p>修改成功</p>
			<div>自动跳转到
				<!--<Meta http-equiv="Refresh" Content="5; Url=http://sc.jb51.net">-->
				<a v-link="{path:'/my'}" href="" style="color:#80A4EC">"我的"</a>
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
	.return2{
		font-size:0.65rem;
		text-align:center;
	}
	.yz img{
		margin:100px auto 50px auto;
		display:block;
		width:4.5rem;
		height:5.2rem;
	}
	.yz p{
		text-align:center;
		font-size:23px;
	}
	.yz div{
		text-align:center;
		font-size:17px;
		margin-top:30px;
	}
	.yz div a{
		color:#A2A3A5;
	}
</style>