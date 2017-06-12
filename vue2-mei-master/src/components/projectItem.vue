<template>
  <div class="container">
    <div class="clearfix">
      </router-linl>
      <div class="item" v-for='(item,i) in msg' :key="i">
        <router-link :to="path + item.id">
          <div><img :src="item.default_pic" :alt="item.name"></div>
          <div>
            <p v-if="item">{{item.name}}</p>
            <p class="price">¥{{item.price}}</p>
            <p style="color: #ccc">
              <mu-icon value="alarm" :size="18" style='vertical-align: middle;line-height: 16px;' /> {{item.service_time}}分钟 <span class="fr">{{item.sale}}人付款</span></p>
          </div>
        </router-link>
      </div>
  
      <!--<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>-->
    </div>
  
  </div>
</template>
<script>
export default {
  props: {
    'msg': [Array, Object],
    'path': [String] // 接收路径
  },
  data() {
    return {
      loading: false,
      scroller: null
    }
  },
  created() {
    this.loadMore()
  },
  mounted() {
    this.scroller = this.$el
  },
  methods: {
    loadMore() {
      this.loading = true
    }
  },

  components: {}
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.container {
  .item {
    float: left;
    width: 50%;
    margin-bottom: .4rem;
    padding: 0 .2rem;
    div:first-child {
      box-sizing: content-box;
      height: 6rem;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .price {
      color: #f67476;
      font-size: 16px;
      font-weight: bold;
    }
  }
  /*下拉加载更多*/
  .demo-infinite-container {
    width: 256px;
    height: 300px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
}
</style>
