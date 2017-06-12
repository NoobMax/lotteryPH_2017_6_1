<template>
	<div class="hot-project container">
	
		<p class="hot-title">-&nbsp;热门项目&nbsp;-</p>
		<div class="hot-container">
			<!--每一项-->
			<div class="hot-item" v-for='(item,i) in this.hotmsgs.data' :key="i">
				<router-link :to="'/appointmentShop/projectItemDet/id='+ item.id">
					<img :src="item.default_pic" :alt="item.name" />
					<!--底部的文字-->
					<div class="item-bottom">
						<div class="bottom-l fl">
							<div style="margin-top:.4rem;color:#000;font-size:15px;line-height:15px">{{item.name}}</div>
							<div>
								<span class="price">￥{{item.price}}</span>
								<span style="color: #b2b2b2; font-size: 12px; text-decoration:line-through;margin-left:8px ;">原价￥{{item.market_price}}</span>
								<span class="pro_ification">店铺项目</span></div>
						</div>
						<div class="bootom-r fr" style="color: #b2b2b2; padding:.7rem .7rem 0;">
							<!--时长-->
							<mu-icon value="alarm" :size="18" style='vertical-align: middle;line-height: 16px;' />{{item.service_time}}分钟
						</div>
	
					</div>
	
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'hotmsgs'
	],
	data() {
		return {

		}
	}
}
</script>

<style lang="less" scoped>
.hot-project {
	padding-top: 10px;
	background: #fff;
	.hot-title {
		text-align: center;
		font-size: 18px;
		font-family: "arial";
	}
	.hot-item:first-child {
		margin-top: 10px;
	}
	.hot-item {
		height: 156px;
		margin-bottom: 10px;
		>a {
			position: relative;
			display: block;
			>img {
				width: 100%;
			}
			.item-bottom {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 32%;
				background-color: rgba(255, 255, 255, 0.8);
			}

			.pro_ification {
				background: #b89dc7;
				width: 40px;
				height: 10px;
				color: #fff;
				border-radius: 7px;
				font-size: 12px;
				padding: 0px 5px;
			}
		}
	}
}

.item-bottom {}

.bottom-l {
	height: 100%
}
</style>
