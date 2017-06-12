<template>
  <div>
    <div class="screen  container" id="screen">
      <!--待添加图标-->
      <!--muse下拉组件-->
      <!--<div>-->
      <!--<mu-dropDown-menu :value="value" @change="handleChange">-->
      <!--<mu-menu-item value="1" title="综合排序"/>-->
      <!--<mu-menu-item value="2" title="最受欢迎"/>-->
      <!--<mu-menu-item value="3" title="最新上架"/>-->
      <!--</mu-dropDown-menu>-->
      <!--</div>-->
      <!--<div>销售优先</div>-->
      <!--<div>价格<i class="wdj"></i></div>-->
      <!--<div>-->
      <!--<mu-raised-button class="" label="筛选" @click="toggle(true)"/>-->
      <!--&lt;!&ndash;<i></i><i class="sx"></i>&ndash;&gt;-->
      <!--</div>-->
      <!--</div>-->

      <!--<project-item :msg="msg"></project-item>-->


      <!--弹出层-->
      <!--<div>-->
      <!--<mu-drawer :open="open" :docked="docked" @close="toggle()">-->
      <!--<mu-list @itemClick="docked ? '' : toggle()">-->
      <!--<mu-list-item title="综合排序"/>-->
      <!--<mu-list-item title="最受欢迎"/>-->
      <!--<mu-list-item title="最新上价"/>-->
      <!--<mu-list-item v-if="docked" @click.native="open = false" title="Close"/>-->
      <!--</mu-list>-->
      <!--</mu-drawer>-->
      <div><span>综合排序</span></div>
      <div><span>销量领先</span></div>
      <div><span>价格</span></div>
      <div><span>筛选</span></div>


    </div>
  </div>
</template>

<script>
  //  导入项目列表
  //  import projectItem from './projectItem.vue'
  //  导入 api
//  import api from '../api/index'
  export default {
    data() {
      return {
        open: false,
        docked: true,
        value: '1',
//        msg: {}
      }
    },
//    created(){
//      this.getitem()
//    },
    methods: {
//      tabActive(e) {
//        //	console.log(e.target)
//        var dom = e.target; // 得到点击的dom
//        var box = document.getElementById('screen')
//        var divs = box.getElementsByTagName('div')  // 要遍历的元素
//        for (var i = 0; i < divs.length; i++) {
//          divs[i].className = ''
//        }
//        dom.className = 'active';
//        console.log(this.$refs.div1)
//      }
//      ,
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      handleChange (value) {
        this.value = value
      },
      // 获得列表数据  默认综合排序
//      getitem(){
//        var url = api.getItems()
//        this.$http.jsonp(url, null, function (err, data) {
//          this.msg = data.data
//        }.bind(this))
//      }
    },
    components: {
//      projectItem
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .screen {
    display: flex;
    margin: 10px 0;
    background-color: #fff;

    > div.active {
      color: #d1506d;
    }
    > div {
      height: 46px;
      text-align: center;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #999;
    }
    .address {
      margin-left: .1rem;
    }
    .wdj {
      margin-left: .2rem;
    }
  }
</style>
