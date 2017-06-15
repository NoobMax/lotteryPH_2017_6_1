<template>
  <!-- <div class="s-header">
      <a class="left" @click="showSideBar" href="javascript:;">导航</a>
      <a class="right" @click="goBack" href="javascript:;">后退</a>
      <h4 class="center">{{headerTitle}}</h4>
  </div> -->


  <header>
      <div>
        <i class="icon iconfont icon-zuo"></i>
      </div>
      <div class="title">
        <span>北京PK10</span>
        <i class="icon iconfont icon-xiangxiajiantou"></i>
      </div>
      <div>
        <i class="icon iconfont icon-hanbaobao"></i>
      </div>
    </header>








</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>


@blue:#146cdc;
@font_title:#ffffff;
@font_round:rgb(0,0,0);
@font_balance:#6993d5;


  header{
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    align-items: center;
    padding: 0 10/20rem;
    height: 38/20rem;
    background: @blue;
    color: @font_title;
    z-index: 9;

    .icon-zuo{
      font-size: 18/20rem;
    }
    .icon-hanbaobao{
      font-size: 18/20rem;
    }
    .title{
      font-size: 17/20rem;
      i{
        font-size: 12/20rem;
      }
    }
  }



</style>
