<template>
  <!--套餐使用介绍-->
  <div>
    <i-header title="套餐购买及使用须知"></i-header>
    <div class="container take-box">
      <p>购买注意事项：</p>
      <ul>
         <!--a标签我的套餐连接待改-->
        <li>1.购买成功后，您可于【<a href="my-meal.html">我的-套餐</a>】查看并使用。</li>
        <li>2.购买套餐不等同于预约项目，购买完之后您需要单独预约套餐内的项目和服务门店。</li>
        <li>3.购买套餐不可使用优惠券。</li>
        <li>4.购买套餐不可退换。</li>
      </ul>
      <p>预约注意事项：</p>
      <ul>
        <li>1.预约套餐内项目时，直接抵扣套餐次数不需另外支付费用。</li>
        <li>2.当您每预约一次项目时套餐次数会自动-1，可同时预约多个项目。</li>
        <li>3.当您取消预约套餐项目时，预约项目将退还到套餐内。</li>
        <li>4.购买套餐不可退换。</li>
      </ul>
  
      <img src="../../static/images/user-fun.png" class="img-responsive center-block">
  
    </div>
  
  </div>
</template>

<script>
import iHeader from './i-header'
export default {
  components: {
    iHeader
  }
}

</script>

<style scoped>
.take-box>p {
  margin: 10px 0;
  font-size: 16px;
  color: #e66280;
}
.img-responsive {
    display: block;
    height: auto;
    max-width: 100%;
}
.child-view {
  margin: 0;
}
</style>