<template>
  <!--公共头部-->
  <div class="i-header">
    <header class="tohop_head container">
      <div class="text-center">
        <!--<a onclick="window.history.go(-1)" href="javascript:;" class="fl arrows"></a><span v-text="title"></span>-->
        <a @click="goback" href="javascript:;" >
          <!--<img src="../../static/images/backing_out.png"/>-->
          <img src="../../static/images/backing_out.png"/>
        </a>
        <span v-text="title"></span>

      </div>
    </header>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    props: [
      'title' //接收一个标题
    ],
    methods: {
      goback() {
        this.$store.dispatch('goBack') // 发送后退的状态
        // 后退
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang='less' rel="stylesheet/less">
  header {
    background-color: #196fde;
    height: 2rem;
    text-align: center;
    font-size: 18px;
    .text-center {
      height: 100%;
      color: #fff;
      span:last-child {
        line-height: 50px;
      }
      .arrows {
        margin-top: 14px;
        vertical-align: middle;
      }
    }
    .text-center a img{
      width:0.5rem;
      height:0.8rem;
      position:absolute;
      top:12px;
      left:20px;
    }
  }
</style>
