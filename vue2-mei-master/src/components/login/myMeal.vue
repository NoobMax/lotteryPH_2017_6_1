<template>
  <div>
    <i-header title="我的套餐"></i-header>
    <div class="my-meal-list">
      <div v-if='!mealLenhth' class="tc" style="margin-top:30px;font-size:16px;color:#ccc">暂无套餐，快去逛逛吧!</div>
      <ul class="meal-list" v-if="mealLenhth">
        <!--标题-->
        <router-link v-for="(item,i) in mealList" :key='i' tag='li' :to="'/myMealdetails?id='+item.order_sn">
          <div class="order-in-title">
            <img src="../../../static/images/icon-shop.png" class="center-block" width="5%"> 适用平台：<span v-text="item.range"></span>
          </div>
  
          <div class="order-in">
            <!--左边图片-->
            <div class="to_imgbox">
              <img :src="item.list_pic" class="img-responsive center-block">
            </div>
  
            <div class="to_imgbox_bottom">
              <p><span class='shop_name' v-text="item.name"></span></p>
              <p class="ordertime"><i class=''>剩余次数 ：X </i><i v-text="item.pro_num"></i><span class='arrow pull-right'></span></p>
              <p class="order-address"><span>{{item.end_time}}</span></p>
            </div>
          </div>
        </router-link>
      </ul>
  
    </div>
  
  </div>
</template>

<script>
import { getMembermealList } from '../../api'
import iHeader from '../i-header'
export default {
  data() {
    return {
      mealList: '',
      mealLenhth: true,
     
    }
  },
  methods: {
    getMembermealList() {
      this.$http.get(getMembermealList()).then(res => {
        var Data = res.data.data
        console.log(res.data.data);
        if (!Data.length) {
          this.mealLenhth = false
          return
        }
        this.mealList = Data // 数据
        // this.order_sn = Data.order_sn // 订单号
      })
    }
  },
  created() {
    this.getMembermealList()
  },
  components: {
    iHeader
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoprd>
.my-meal-list {
  >ul>li {
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
    position: relative;
  }
}

.order-in {
  // 左边图片
  height: 100px;
  .to_imgbox {
    float: left;
    width: 100px;
    img {
      width: 100%;
    }
  }
  .to_imgbox_bottom {
    overflow: hidden;
  }
}
</style>