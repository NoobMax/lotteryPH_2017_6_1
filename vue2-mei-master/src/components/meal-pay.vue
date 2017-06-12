<template>
  <!--套餐支付页-->
  <div class="meal-pay">
    <i-header title="订单支付"></i-header>
    <!--标题-->
    <div class="container meal-paybox pr">
      <div class="meal-pay-name">
        <div class="meal-name">{{msg.name}}</div>
      </div>
      <div class="ord_numb pa">
        <span class='min' style='line-height:22px;'>-</span>
        <span class="ord_num" />1</span>
        <span class='add' style='line-height:22px;'>+</span>
      </div>
    </div>
    <!--套餐内容-->
    <div class="container res_pro">
      <h5>套餐内容</h5>
      <div class="row res_pro_in" v-for="(item,i) in msg.project_info" :key='i' :data-id='item.id'>
        <div class="">
          <div class="res_imgbox"><img :src="item.pic" class="img-responsive center-block"></div>
  
          <div class="res_name">
            <!--项目名称-->
            <h4>{{item.name}}</h4>
            <!--服务时间-->
            <p class="res_time"><i></i>{{item.service_time}}min</p>
          </div>
          <div class="res_numb">
            <!--项目数量-->
            <p class="tr"> X {{item.project_num}}</p>
          </div>
        </div>
      </div>
  
    </div>
  
    <!--支付方式-->
    <div class="container res_pay" style="margin-bottom:50px;">
      <div>
        <!--剩余的金额-->
        <h5>支付方式 <span class='pull-right meal_pri'>￥<i>{{msg.price}}</i></span></h5>
        <ul>
          <li><img src="images/ye.png" class="center-block">&nbsp;&nbsp;&nbsp;余额 (￥ <span class='ye-e'>{{price.money}}</span>) <i class='pull-right cur' data-value='0'></i></li>
          <li id="payalba"><img src="images/zfb.png" class="center-block">&nbsp;&nbsp;&nbsp;支付宝 <i class='pull-right' data-value='1'></i></li>
          <li id="wxpay"><img src="images/wx.png" class="center-block">&nbsp;&nbsp;&nbsp;微信支付 <i class='pull-right' data-value='2'></i></li>
        </ul>
      </div>
    </div>
  
    <div class="pay-footer pf">
      <div>价格{{msg.price}}</div>
      <div @click='placeOrderMeal()' class="buy tc">支付</div>
    </div>
  </div>
</template>
<script>
import iHeader from './i-header'
import { getMealListDet, getBalance, placeOrderMeal, mealPay } from '../api'
export default {
  data() {
    return {
      msg: '',
      price: ''
    }
  },
  methods: {

    getMealListDet() {
      var params = 'id=' + this.$route.query.id
      this.$http.get(getMealListDet(params)).then(res => {
        console.log(res.data.data);
        this.msg = res.data.data
      })
    },
    getBalance() {
      this.$http.get(getBalance()).then(res => {
        console.log(res.data.data);
        this.price = res.data.data
      })
    },
    // 下单
    placeOrderMeal() {
      var params = {
        params: {
          meal_id: this.msg.id,// 项目id
          num: 1, //  购买数量
          total_price: 568 // 总价格
        }

      }

      this.$http.get(placeOrderMeal(), params).then(res => {
        console.log(res.data);
        var order_sn = res.data.data.order_sn;
        console.log(order_sn);
        // this.order_sn = res.data.order_sn; //生成订单号 
        this.mealPay(order_sn)
      })
      // 判断选择的支付方式
      // 支付宝 余额 微信

    },
    mealPay(order_sn) {
      this.$http.get(mealPay(order_sn)).then(res => {
        console.log(res.data);
        if (res.data.error) {
          console.log('订单有误');
          return;
        } else {
          console.log('购买成功');
          this.$router.push('/myMeal') // 跳转到我的套餐 
        }
      })
    }


  },
  created() {
    this.getMealListDet()
    this.getBalance()
  },
  components: {
    iHeader
  }
}
</script>

<style lang='less' rel="stylesheet/less" scoped>
// 支付标题
.meal-paybox {
  line-height: 40px;
  height: 55px;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  .ord_numb {
    right: .3rem;
    bottom: 5px;
    .min {
      color: #e66280;
      font-size: 16px;
      font-weight: bold;
      border: 1px solid #ccc;
      padding: 3px 5px;
      border-radius: 3px;
      background: #f1f1f1;
    }
    >input {
      width: 27px;
      height: 30px;
      border: 0;
      text-align: center;
      background: #f1f1f1;
      font-size: 14px;
      margin-top: 3px;
    }
    .add {
      color: #e66280;
      font-size: 16px;
      font-weight: bold;
      border: 1px solid #ccc;
      padding: 3px 5px;
      border-radius: 3px;
      background: #f1f1f1;
    }
  }
}

// 套餐内容
.res_pro {
  background: #fff;
  padding-bottom: 5px;
  h5 {
    margin: 15px 0;
    font-size: 15px;
    font-family: "Comic Sans MS", "幼圆", "黑体", sans-serif;
  }
  .res_pro_in {
    margin-bottom: 10px;
    .res_imgbox {
      float: left;
      width: 130px;
      height: 92px;
      .img-responsive {
        display: block;
        height: auto;
        max-width: 100%;
      }
    }
    .res_name {
      overflow: hidden
    }
  }
}


// 支付底部
.pay-footer {
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  >div {
    flex: 1
  }
  .buy {
    background: #d1506d;
    color: #fff;
    font-size: 18px;
    line-height: 50px;
  }
}
</style>