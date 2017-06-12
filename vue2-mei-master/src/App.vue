<template>
  <div id="app">
  
    <div class='view'>
      <!--<transition name='fade'>-->
      <transition :name="transitionName">
        <!--<keep-alive>-->
          <router-view class="child-view"></router-view>
        <!--</keep-alive>-->
      </transition>
    </div>
  
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import setWechatTitle from './utils/setWechatTitle.js' // 微信标题
export default {
  data() {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies',
      transitionName: 'slide-left' // 动画
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val
    },
    // 切换动画
    tooge() {
      if (this.goBack) { // 如果状态是false 那么是后退
        this.transitionName = 'slide-right'
        this.$store.dispatch('noBack')
      } else {
        this.transitionName = 'fade'
      }
    },
    // 底部状态
    // footerChange(path) {
    //   // if (path == 'login' || path === 'index/facialBeauty' || path === 'index/plastic' || path === 'index/health' || path === 'index/medicine' || path === 'account') {
    //   //   this.$store.dispatch('hideFooter')
    //   // } else {
    //   //   this.$store.dispatch('showFooter')
    //   // }

    //   if (path == 'index/recommend' || path === 'my' || path === 'shop' || path === 'order') {
    //     this.$store.dispatch('showFooter')
    //   } else {
    //     this.$store.dispatch('hideFooter')
    //   }
    // },

  },
  created() {
    // 当created函数时监测路由信息,防止页面刷新tab高亮错误
    // var tmpArr = this.$route.path.split('/')
    // this.handleChange(tmpArr[1])
    // 防止在index页刷新时底部显示
    // var path = this.$route.path.substring(1)
    // this.footerChange(path)
  },
  watch: {
    $route(to) {
      this.tooge()
      // 去掉  '/'

      var path = to.path.substring(1)
      // this.footerChange(path)
      setTimeout(() => {
        document.body.scrollTop = 0
      }, 250)
    }
  },


}
</script>

<style lang="less" rel="stylesheet/less">
// 动画
.child-view {
  position: absolute;
  width: 100%; // transition: all .3s cubic-bezier(.55, 0, .1, 1);
  transition: all .3s ease-in-out;
}


/*动画*/

.fade-enter-active {
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(300px, 0);
  transform: translate(300px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}

#app {
  height: 100%;
}





@color: #d1506d;
.mu-appbar {
  background: #fff;
  color: @color;
  height: 46px;
}

.view-tabs {
  background-color: #fff;
  color: rgba(0, 0, 0, .87);
  >.mu-tab-link {
    color: rgba(102, 102, 102, 1);
  }
  >.mu-tab-active {
    color: @color;
  }
}
</style>
