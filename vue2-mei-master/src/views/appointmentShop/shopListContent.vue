<template>
  <!--内容列表-->
  
  <div class="container shop-list-content">
    <ul class="shoplist">
      <li v-for="(item,i) in shopList">
        <router-link :to="'/appointmentShop/id='+ item.id">
          <div class="to_imgbox">
            <img :src="item.default_pic" class="img-responsive center-block"></div>
          <div class="to_imgbox_right">
            <p class="clearfix"><span class='shop_name te' v-text="item.name"></span><span class='pull-right statr'>今日可约</span></p>
            <p class="clearfix"><i class='to_shop_dz te'>{{item.address}}</i></p>
            <p class="to_shop_xj"><img src="../../../static/images/pf06.png" class="center-block"><span style="padding:0 4px" v-text="item.degree"></span></p>
            <div class="to_shop_dd">订单数：{{item.sale}}单<i class='pull-right' v-if='item.distance'><a href=""></a><span>{{item.distance}}KM</span></i></div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {

  props: {
    shopList: [Array, Object]
  }

}
</script>

<style lang='less' rel="stylesheet/less" scoped>
// 门店列表
.shop-list-content {
  li {
    margin: 15px 0;
    height: 100px;
    border-bottom: 1px solid #ccc;
  } // 左边图片
  .to_imgbox {
    padding-left: 0;
    padding-right: 0;
    width: 110px;
    height: 96px;
    overflow: hidden;
    float: left;
    .img-responsive {
      display: block;
      height: 100%;
      width: 100%;
      max-width: 100%;
    }
  } // 右边信息
  .to_imgbox_right {
    overflow: hidden;
    padding-left: 15px;
    .shop_name {
      font-size: 18px;
      font-family: "Comic Sans MS", "幼圆", "黑体", sans-serif;
      color: #333;
      width: 64%;
      float: left;
    }
    .statr {
      border: 1px solid #a887bd;
      border-radius: 8px;
      padding: 0px 5px;
      font-size: 12px;
      color: #a887bd;
      margin-top: 3px;
    }
    .to_shop_xj {
      >img {
        width: 88px;
      }
      >span {
        color: #e66c49;
        margin-top: 3px;
        vertical-align: middle;
      }
    }
    .to_shop_dd {
      font-size: 12px;
      color: #ccc;
      margin-top: 10px;
      a {
        width: 15px;
        height: 15px;
        background: url(../../../static/images/addre.png) no-repeat;
        background-size: 80%;
        display: inline-block;
        visibility: middle;
      }
    }
    .pull-right {
      float: right!important;
    }
    .to_shop_dz {
      font-size: 12px;
      color: #ccc;
      width: 80%;
      float: left;
    }
  }
}
</style>
