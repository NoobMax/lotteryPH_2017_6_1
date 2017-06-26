<template>
<!--当新用户或者没选择门店用户进来时  会让选择默认门店-->
<div>
  <div>
    <i-header title="未结明细"></i-header>
  </div>
  <mu-list>
    <template v-for="item in list">
    <mu-list-item :title="item"/>
    <mu-divider/>
  </template>
  </mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />

</div>
</template>

<script>
import iHeader from '../../components/i-header'
// import getOid from '../../api'

import {
  getOid
} from '../../api'

export default {

  data() {
    return {
      unfinished: {}
    }
  },
  methods: {
    initData() {
      let prams = {};

      let oidinfo = getOid();
      prams.oid = oidinfo;
      this.$http.post("http://xiaopeng.lebole5.com/getinfo/bet", JSON.stringify(prams)).then(res => {
        this.unfinished = res.data[0].res
        console.log(res.data[0].res, 2222);


      })
    }
  },

  created() {
    this.initData();
    // 先判断是否选择了门店 没有就跳转到appointmentShop
    // if()
  },
  components: {
    iHeader
  }
}
</script>
<style>
.midd {
  padding: 0.5rem;
}

.cen {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
}

.cen>p {
  background: #929292;
  color: #fff;
  height: 1.8rem;
  border-radius: 5px 5px 0 0;
  padding: 10px;
  overflow: hidden;
  font-size: 0.7rem;
}

.cen>p span {
  float: right;
  font-size: 14px;
}

.cen>div {
  margin-left: 20px;
  padding-bottom: 3px;
}

.cen>div p {
  margin: 3px;
  font-size: 15px;
  color: #7B838F;
}

.cen>div p:first-child span {
  color: #115FDD;
}
</style>
