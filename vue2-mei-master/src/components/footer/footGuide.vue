<template>
  <!--公共底部组件-->
  <div>
    <!--底部-->
    <div class="pf footr_box">
      <section @click='gotoAddress("/index")'>
        <span><img :src="$route.path.indexOf('index') !== -1 ? '../../../static/images/first.png':'../../../static/images/first.png'" ></span>
        <span :class="{activeCol:$route.path.indexOf('index') !== -1 ? true : false}">
          <img src="../../../static/images/main.png" style="width:16px" alt="">
        </span>
      </section>
      <section @click='gotoAddress("/game_55")'>
        <span><img :src="$route.path.indexOf('shop') !== -1 ? '../../../static/images/game.png': '../../../static/images/game.png'"></span>
        <span :class='{activeCol:$route.path.indexOf("shop") !== -1 ? true : false}'>
          <img src="../../../static/images/games.png" alt="" style="width:35px">
        </span>
      </section>
      <section @click='gotoAddress("/order")'>
        <span><img :src="$route.path.indexOf('order') !== -1 ? '../../../static/images/money.png': '../../../static/images/money.png'"></span>
        <span :class='{activeCol:$route.path.indexOf("order") !== -1 ? true : false}'>
         <img src="../../../static/images/mone.png" alt="" style="width:35px">
        </span>
      </section>
      <section @click='gotoAddress("/my")'>
        <span><img :src="$route.path.indexOf('my') !== -1 ? '../../../static/images/mine.png': '../../../static/images/mine.png'"></span>
        <span :class='{activeCol:$route.path.indexOf("my") !== -1 ? true : false}'>
          <img src="../../../static/images/my.png" alt="" style="width:16px;" >
        </span>
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
      height:40px;
      align-items: center;
      text-align: center;
      padding-top: 1px;
      >span:first-child {
        display: block;
        width: 21px;
        margin-top:1px;
      }
      img {
        width: 100%;
      }
    }
    section{
      > span:nth-child(2){
        >img{
          margin-top:-8px;
        }
      }
    }
  }
</style>



