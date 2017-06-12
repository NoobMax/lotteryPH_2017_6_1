<template>
  <!--预约到店-->
  <div :scroller="scroller">
    <i-header title='门店列表'></i-header>
  
    <!--地区列表-->
    <div class="shop_list">
      <div class="shop_ulbox">
        <mu-tabs :value="activeTab" class="view-tabs" @change="handleTabChange">
          <mu-tab value="nearby" title="附近" class="nowrap" @click='loadingMsg()' />
          <mu-tab v-for="(item,i) in area" :value="item.district_id" :key='i' :title="item.district_name" class="nowrap" @click='loadingMsg(item.district_id)' />
        </mu-tabs>
      </div>
    </div>
    <!--<transition name='fade'>
               <router-view></router-view>
               </transition>-->
    <!--内容列表组件-->
    <shop-list-content :shopList='shopList'></shop-list-content>
    <mu-infinite-scroll :loading="loading" @load="loadMore" loadingText="正在加载中..." />
    <!--没有数据弹出层-->
    <div>
      <mu-dialog :open="dialog" title="i美" @close="close">
        该地区暂时没有数据哦~
        <mu-flat-button slot="actions" primary @click="close" label="确定" />
      </mu-dialog>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
import { getShopList } from '../../api'
// 头部组件
import iHeader from '../../components/i-header'
// 内容列表组件
import shopListContent from './shopListContent'
import { getStore } from '../../utils/mUtils.js'
export default {
  data() {
    return {
      activeTab: 'nearby',
      area: [], // 地区
      shopList: [],
      lat: '',
      lng: '',
      district_id: '',// 地区id  
      loading: false,
      scroller: null,
      total: 0,
      pageNumber: 1,
      flag: true,
      dialog: false //是否有数据
    }
  },
  methods: {
    // tab切换
    handleTabChange(val) {
      this.activeTab = val
    },
    open() {
      this.dialog = true
    },
    close() {
      this.dialog = false
    },
    // 切换加载数据
    loadingMsg(v) {
      if (v === this.district_id) return //  如果点击了相同的tab 不执行加载数据
      this.district_id = v
      // 如果原本的函数还没执行完
      // 清空原本的数据 
      this.shopList = []
      this.pageNumber = 0
      setTimeout(function () {
        this.getShopList(v)
      }.bind(this), 150)

    },
    // 定位   待改
    getLocation() {
      // if (navigator.geolocation) { // 支持定位
      //   navigator.geolocation.getCurrentPosition(positions => {
      //     this.lat = positions.coords.latitude;  //   纬度
      //     this.lng = positions.coords.longitude; //   经度
      //   })
      // } else {  // 不支持定位
      //   alert('定位出错')
      // }
      this.lat = getStore('lon',1) 
      this.lng = getStore('lat',1)
  
    },
    // 地址列表
    getArea() {
      this.$http.get(api.getArea()).then(res => {
        console.log(res.data.data);
        this.area = res.data.data.district;
      })
    },
    // 门店列表
    getShopList(v) {
      this.loading = true;
      var params = {};
      v ? params = {  // 判断v id是否有效
        params: {
          district_id: v
        }
      } : params
      this.district_id = v 
      this.$http.get(getShopList(this.lat, this.lng, this.pageNumber), params).then(res => {
        this.total = res.data.data.total_count; // 总条数
        var list = res.data.data.list           // 数据 
        if (!list) {      // 如果没数据
          setTimeout(() => {
            this.dialog = true
            this.loading = false
          }, 2000)
          return;
        }
        for (let i = 0; i < list.length; i++) {// 将数据添加进数组里面
          this.shopList.push(list[i])
        }
        this.pageNumber++;
        this.loading = false

      })

    },

    // 下拉
    loadMore() {
      // 如果条数大于总条数 
      if (this.shopList.length < this.total) {
        this.getShopList(this.district_id)
      }

    }

  },
  created() {
    // 定位
    this.getLocation()
    // 地址
    this.getArea()
    // 门店列表 
    this.getShopList()

  },
  mounted() {
    this.scroller = this.$el
  },
  watch: {
    // 根据路由地址请求数据
    $route(to) {
      // this.district_id = to
      // console.log(this.district_id);
      // this.getShopList()
    }

  },
  components: {
    iHeader,
    shopListContent
  }
}
</script>

<style lang='less' rel="stylesheet/less" scoped>
// 地址列表
span {
  display: block
}

.shop_list {
  width: 100%;
  overflow: auto;
  >.shop_ulbox {
    width: 250%;
  }
}

.mu-tabs {
  background-color: #f3f3f3;
}

.mu-tab-link {
  text-align: center
}
</style>