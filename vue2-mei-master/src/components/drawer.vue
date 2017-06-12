<template>
  <div class="s-drawerBar"  @click="hideDrawer">
    <transition name="drawerBar1" mode="">
      <div class="overlay" v-show="show">
        <transition name="drawerBar" mode="">
          <ul class="ul-nav" v-show="show">
            <li><router-link to="/index"><span>首页</span><i>></i></router-link></li>
            <li><router-link to="/cate"><span>分类</span><i>></i></router-link></li>
            <li><router-link to="/center"><span>我的</span><i>></i></router-link></li>
            <li><router-link to="/cart"><span>购物车</span><i>></i></router-link></li>
            <!-- <li><a href="javascript:;"><span>首页</span><i>></i></a></li>
            <li><a href="javascript:;"><span>首页</span><i>></i></a></li>
            <li><a href="javascript:;"><span>首页</span><i>></i></a></li>
            <li><a href="javascript:;"><span>首页</span><i>></i></a></li>
            <li><a href="javascript:;"><span>首页</span><i>></i></a></li> -->
          </ul>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      show () {

      return this.$store.getters.showDrawer
      }
    },
    methods: {
      hideDrawer () {
      this.$store.dispatch('hideDrawer')
      }
    }
  }
</script>

<style lang="less" scope>
  .s-drawerBar{
    // display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    max-width: 640px;
    width: 100%;
    color: #9a9a9a;
    z-index: 501;
    transition: all ease 0.4s;
    .overlay{
      position: absolute;
      top: 50px;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0,0,0,0.5);
      transition: all ease 0.4s;
    }
    .ul-nav{
      position: absolute;
      display: block;
      top: 0;
      right: 140px;
      bottom: 0;
      left: 0;
      border-top: 1px solid #222;
      box-shadow: 0 1px 1px #363636 inset;
      background: #282828;
      // transition: all ease 0.4s;
      a{
        display: block;
        padding: 0 16px;
        line-height: 50px;
        font-size: 14px;
        color: #9a9a9a;
        border-bottom: 1px dotted #333;
        span{
          font-size: 14px;
          color: #9a9a9a;
        }
        i{
          float: right;
        }
      }
    }
  }
  .s-drawerBar .drawerBar-enter-active, .s-drawerBar .drawerBar-leave-active{
    // transition: opacity 2.8s;
    transition: all ease 0.4s;
  }
  .s-drawerBar .drawerBar-enter{
    right: 180px;
    // transition: opacity 2s;
  }
  .s-drawerBar .drawerBar-leave-active{
    right: 140px;
  }

  .s-drawerBar .drawerBar1-enter-active, .s-drawerBar .drawerBar1-leave-active{
    // transition: opacity 2.8s;
    transition: all ease 0.4s;
  }
  .s-drawerBar .drawerBar1-enter{
    // right: 180px;
    // transition: opacity 2s;
    opacity: 0
  }
  .s-drawerBar .drawerBar1-leave-active{
    // right: 140px;
    opacity: 0
  }
</style>
