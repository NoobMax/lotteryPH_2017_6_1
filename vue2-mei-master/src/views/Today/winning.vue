<template>
  <!--当新用户或者没选择门店用户进来时  会让选择默认门店-->
  <div>
  	<div>
    	<i-header title="已结明细"></i-header>
  	</div>
  	<div class="midd">

      <div class="cen1" v-for="groups in finished">
        <p>注单号：{{groups.no}}
          <span>{{groups.time}}</span>
        </p>
        <div>
          <p>{{groups.game_name}} 第<span>{{groups.round}}</span>期</p>
          <p>玩法：{{groups.detail}}</p>
          <p>开奖号码：{{groups.count}}</p>
          <p>下注金额：{{groups.money}}</p>
          <p>可赢金额：{{groups.rate}}</p>
        </div>
      </div>
  	</div>
  </div>
</template>

<script>
  import iHeader from '../../components/i-header'
    import {getOid} from '../../api'
  // console.log(iHeader)
  export default {

    data() {
      return {
        finished:{}
      }
    },
    methods: {
      initData(){
        let prams = {};

        let oidinfo = getOid();
        prams.oid = oidinfo;
        this.$http.post("http://xiaopeng.lebole5.com/getinfo/het",JSON.stringify(prams)).then(res => {
          this.finished=res.data[0].res
       console.log(res.data[0].res,2222);


        })
      }
    },
    created() {
      this.initData();
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
		padding:0.5rem;
	}
	.cen1{
		background:#fff;
		border-radius:5px;
		margin-bottom:10px;
	}
	.cen1 > p{
		background:url(../../../static/images/blue.png);
		color:#fff;
		height:1.8rem;
		border-radius:5px 5px 0 0;
		padding:10px;
		overflow:hidden;
		font-size:0.7rem;
	}
	.cen1 > p span{
		float:right;
		font-size:14px;
	}
	.cen1 > div{
		margin-left:20px;
		padding-bottom:3px;
	}
	.cen1 > div p{
		margin:3px;
		font-size:15px;
		color:#7B838F;
	}
	.cen1 > div p > span{
		font-size:15px;
	}
	.cen1 > div p:last-child span{
		color:#115FDD;
	}
</style>
