<template>
  <!--门店详情-->
  <div class="shop-list-det">
    <i-header :title="det.name"></i-header>
    <div class="shop-det">
      <!--门店图片-->
      <div class="i-shop-img">
        <router-link to="/"><img :src="det.default_pic" alt="det.name"> </router-link>
      </div>
      <!--项目 套餐-->
      <div class="stor_tab">
        <div :class="{stor_cur: changeProject === 'project'}" @click="changeProject= 'project'">
          项目
        </div>
        <div :class="{stor_cur: changeProject === 'meal'}" @click="changeMeal">
          套餐
        </div>
      </div>
      <!--<mu-circular-progress :size="40" v-show="changeProject==='meal'" />-->
      <!--排序-->
      <!--项目-->
      <ProjectItem v-show="changeProject==='project'" :msg='msg' path='/appointmentShop/projectItemDet/id=' key="project"></ProjectItem>
      <!--套餐 样式是一样 但是跳转的路径不同-->
      <ProjectItem v-show="changeProject==='meal'" :msg='mealmsg' path='/Mealdeta/id=' key="meal"></ProjectItem>
      <!--没内容弹出层-->
      <div>
        <mu-dialog :open="dialog" title="i美" @close="close">
          暂无内容~~
        </mu-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { shopListDet, getProjectItems, getMealList } from '../../api'
// 头部组件
import iHeader from '../../components/i-header'
// 项目列表
import ProjectItem from '../../components/projectItem.vue'
export default {
  data() {
    return {
      det: {},
      msg: {},
      mealmsg: {},
      changeProject: 'project',
      dialog: false
    }
  },
  methods: {
    // 获取门店信息
    shopListDet() {
      this.$http.get(shopListDet(this.$route.params.id)).then(res => {
        this.shopid = res.data.data.id
        this.det = res.data.data
      })
    },
    ProjectItem() {
      this.$http.get(getProjectItems(this.$route.params.id)).then(res => {
        this.msg = res.data.data.list
      })
    },
    // 获取套餐列表
    getMealList() {
      let id = this.shopid
      this.$http.get(getMealList(), {
        params: {
          shop_id: id
        }
      }).then(res => {
        var list = res.data.data.list;
        if (!list.length) {// 如果该门店没内容
          this.dialog = true;
          setTimeout(()=>{
            this.dialog = false;
          },1000)
          return
        }
        this.mealmsg = res.data.data.list
      })
    },
    close () {
      this.dialog = false
    },
    changeMeal() {
      this.getMealList()
      this.changeProject = 'meal'
    }

  },
  created() {
    this.shopListDet()
    this.ProjectItem()
  },
  components: {
    iHeader,
    ProjectItem
  }
}
</script>

<style lang='less' rel="stylesheet/less" scoped>
a {
  display: block;
}

.i-shop-img {
  position: relative;
  height: 220px;
  overflow: hidden;


  img {
    width: 100%;
    height: 100%;
  }
}

.stor_tab {
  background: #f3f3f3;
  display: flex;
  div {
    flex: 1;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
    color: #999999;
  }
  div.stor_cur {

    color: #fff;
    background: #d1506d;
  }
}
</style>