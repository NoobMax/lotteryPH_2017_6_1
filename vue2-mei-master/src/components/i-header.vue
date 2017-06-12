<template>
<!--公共头部-->
<div class="i-header">
  <header class="tohop_head container">
    <div class="text-center">
      <!--<a onclick="window.history.go(-1)" href="javascript:;" class="fl arrows"></a><span v-text="title"></span>-->
      <a @click="goback" href="javascript:;" class="fl arrows"></a><span v-text="title"></span>

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
    background-color: #fff;
    height: 46px;
    text-align: center;
    font-size: 18px;

    .text-center {
        height: 100%;
        color: #d2516d;
        span:last-child {
            line-height: 46px;
        }
        .arrows {
            margin-top: 14px;
            vertical-align: middle;
        }
    }
}
</style>
