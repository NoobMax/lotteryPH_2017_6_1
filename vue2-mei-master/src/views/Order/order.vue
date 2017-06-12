<template>
  <div>
    <header class="order-header">
      <div class="order-box">
        <div class="order-l active">到店订单</div>
        <div class="order-r">上门订单</div>
      </div>
    </header>
  
    <!--订单状态  组件-->
    <div class="order-list">
      <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="/all" title="全部" />
          <mu-tab value="/obligation" title="待付款" class="nowrap" />
          <mu-tab value="/paid" title="已支付" class="nowrap" />
          <mu-tab value="/underway" title="进行中" class="nowrap" />
          <mu-tab value="/done" title="已完成" class="nowrap" />
          <mu-tab value="/evaluate" title="待评价" class="nowrap" />
          <mu-tab value="/cancel" title="已取消" class="nowrap" />
        </mu-tabs>
      </div>
    </div>
    <router-view></router-view>
    <foot-guide></foot-guide>
  
  </div>
</template>

<script>

import footGuide from '../../components/footer/footGuide'
import { loginTrue } from '../../api'

export default {
  data() {
    return {
      activeTab: '/all'
    }
  },
  methods: {

    handleTabChange(val) {
      // var r = this.$route.path
      // console.log(val);
      // console.log(r);
      this.activeTab = val
      // this.$router.push({ path: '/order/shopOrder' + val })
    },

  },
  created() {
    this.$http.get(loginTrue()).then(res => {
      if (res.data.error) { //  1未登陆
        this.$router.push({ path: '/login' }) // 跳转到登陆
      }
    })

    
  },
  watch: {
    $route() {

    }
  },
  components: {
    footGuide
  }
}
</script>

<style lang='less' ref="stylesheet/less" scoped>
.order-header {
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  .order-box {
    display: flex;
    height: 28px;
    line-height: 28px;
    border-radius: 20px;
    border: 1px solid #d1506d;
    overflow: hidden;
    font-size: 14px;
    >div {
      text-align: center;
      width: 100px;
    }
    >div.active {
      background: #d1506d;
      color: #fff;
    }
  }
}

.order-box div {
  text-align: center;
}

ul {
  display: flex
}

li {
  flex: 1
}

.order-list {
  width: 100%;
  overflow: auto;
  >div {
    width: 130%;
  }
}

.mu-tabs {
  background: #f3f3f3;
}

.mu-tab-text {
  color: #b2b2b2;
}

.mu-tab-link {
  color: #b2b2b2;
}

.mu-tab-active {
  color: #d1506d;
}
</style>
