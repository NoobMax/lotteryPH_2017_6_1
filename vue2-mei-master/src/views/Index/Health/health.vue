<template>
  <!--面部美容-->
  <div class="facial" >
    <Screen></Screen>
    <project-item :scroller="scroller" :msg="msg" path='/appointmentShop/projectItemDet/id='></project-item>
    <mu-infinite-scroll  :loading="loading" @load="loadMore" loadingText="正在加载中..." />
  </div>
</template>

<script>
// 排序组件
import Screen from '../../../components/Screen.vue'
// 内容组件
import ProjectItem from '../../../components/projectItem.vue'
// api
import { getProjectItems } from '../../../api'
export default {
  data() {
    return {
      msg: [],
      pageNo: 1,  // 页码
      loading: false,
      scroller: null,
      total: 0    // 总条数
    }
  },
  methods: {
    // 获取数据
    getProjectItems() {
      this.loading = true
      this.$http.get(getProjectItems('', this.pageNo), {
        params: {
          type_id: 18
        }
      }).then(res => {
        this.total = res.data.data.total_count// 总条数
        var list = res.data.data.list; // 数据
        for (let i = 0; i < list.length; i++) {
          this.msg.push(list[i])
        }
        this.pageNo++
        this.loading = false
      })

    },
    handleScroll() {

    },
    // 下拉
    loadMore() {
      // 如果条数大于总条数 
      if (this.msg.length < this.total) {
        this.getProjectItems()
      }

    }
  },
  created() {
    this.getProjectItems()
  },
  components: {
    Screen,
    ProjectItem
  },
  mounted() {
    this.scroller = this.$el
  }

}
</script>
