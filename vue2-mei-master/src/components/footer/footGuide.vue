<template>
  <!--公共底部组件-->
  <div>
    <!--底部-->
    <div class="pf footr_box">
      <section @click='gotoAddress("/index")'>
        <span><img :src="$route.path.indexOf('index') !== -1 ? '../../../static/images/footer01.png':'../../../static/images/foot01.png'" ></span>
        <span :class="{activeCol:$route.path.indexOf('index') !== -1 ? true : false}">首页</span>
      </section>
      <section @click='gotoAddress("/shop")'>
        <span><img :src="$route.path.indexOf('shop') !== -1 ? '../../../static/images/footer02.png': '../../../static/images/foot02.png'"></span>
        <span :class='{activeCol:$route.path.indexOf("shop") !== -1 ? true : false}'>投注</span>
      </section>
      <section @click='gotoAddress("/order")'>
        <span><img :src="$route.path.indexOf('order') !== -1 ? '../../../static/images/footer03.png': '../../../static/images/foot03.png'"></span>
        <span :class='{activeCol:$route.path.indexOf("order") !== -1 ? true : false}'>我的</span>
      </section>
      <section @click='gotoAddress("/my")'>
        <span><img :src="$route.path.indexOf('my') !== -1 ? '../../../static/images/footer04.png': '../../../static/images/foot04.png'"></span>
        <span :class='{activeCol:$route.path.indexOf("my") !== -1 ? true : false}'>客服</span>
      </section>
    </div>
  
  </div>
</template>

<script>
export default {
  methods: {
    gotoAddress(path) {
      this.$router.push(path)
    }
  }
}

</script>

<style lang='less' rel='stylesheet/less' scoped>
/*底部样式*/

.footr_box {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  background: #fff;
  z-index: 100;
  display: flex;
  box-shadow: 0 0.06rem 0.6rem rgba(0, 0, 0, .5);
  section {
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 6px;
    >span:first-child {
      display: block;
      width: 24px;
    }
    img {
      width: 100%;
    }
  }
}

.activeCol {
  color: #d1506d;
}
</style>



