<template>
  <!--项目详情-->
  <div>
    <i-header title="项目详情"></i-header>
    <div class="container">
      <div class="mealde_img">
        <img :src="default_pic" />
      </div>
      <div class="mealde_top container">
        <div class="mealde_in">
          <h4>{{name}}</h4>
          <p><i class="price">￥</i><i class="price">{{price}}</i> <span>订单数：{{orders}}</span></p>
        </div>
        <div class="mealde_time">
          <i></i> <span> {{service_time}}分钟</span>
        </div>
      </div>
      <div class="mealde_list">
        <p>
          <a href="javascript:;"></a><i class="pj-list">{{key_word_arr}}</i></p>
      </div>
    </div>
    <div id='menu'>
      <ul id="nav">
        <li v-for='n in 2' :class='1===n?yes[1]:no[1]' v-text='1===n?"服务介绍":"评价"' @click='mealtaoc(n)'></li>
      </ul>
      <div id="menu_te">
        <pre class="tag" v-show="yes[0]" style=" border: none; background: #fff;padding:10px 5px;">{{description}}</pre>
        <div class="meal_pro" style="" v-show='no[0]'>
          <ul>
            <li v-for='(time,i) in point'>
              <!-- v-for='(time,i) in point' -->
              <p class="project-comment-user">
                <img class="img-circle" :src="time.avatar" width="50" height="50">&nbsp;&nbsp;
                <span>{{time.name}}</span>
              </p>
              <p>{{time.comment}}</p>
              <p class="project-comment-time">{{time.add_time}}</p>
            </li>
          </ul>
          <mu-circular-progress id="pjiajg" style="margin:10px auto;display: block;" :size="40" />
        </div>
      </div>
    </div>
    <div class="container process_box">
      <h3>服务流程：</h3>
      <div class="process_top">
        <ul class="list-inline peocess_ul" :style='ULwidth[0]'>
          <li v-for="(time,i) in pront">
            <img :src="time.step_pic">
            <span>{{time.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container process_box">
      <h3>与项目相关的套餐</h3>
      <div class="process_top">
        <ul class="list-inline peocess_ul" :style='ULwidth[1]'>
          <li v-for="(time,i) in pro_push" @click='getProjectDet(time.id);'>
            <img :src="time.default_pic">
            <p><i class="process_sym">￥</i><i class="pro_price">{{time.price}}</i></p>
            <p>{{time.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  
    <div :style='de?"display:block":"display:none"' style="position: fixed;top:0;left:0;background:#000;opacity:.8;width:100%;height:100%;">
      <div style='position: fixed;top:50%;left:50%;width:40px;height:40px;margin:-20px 0 0 -20px;'>
        <mu-circular-progress style="" :size="40" />
      </div>
    </div>
    <bottom-pay :status='status' favoriteType='project' :value='value' @favoriteStatus='favoriteStatusChange'></bottom-pay>
  </div>
</template>

<script>
// 项目详情
import { getProjectDet, getComment } from '../api'
// 头部
import iHeader from './i-header'
import bottomPay from './bottom_pay'
export default {
  data() {
    return {
      // 项目详情开始
      default_pic: '',
      name: '',
      price: '',
      orders: '',
      service_time: '',
      key_word_arr: '',
      // 项目详情结束
      description: '',       //项目介绍
      yes: [true, 'xs'],       //项目介绍与评价切换开关
      no: [false, ''],         //项目介绍与评价切换开关
      ULwidth: [],           //服务流程的走势大小控制
      pront: [],             //服务流程
      pro_push: [],           //相关的套餐
      point: [],              //项目详情之评价管理
      se: this.$route.params.id,
      de: true,              //项目详情页面刷新，前面半透黑的效果开关
      pjiaID: '',      //评价ID
      value: '',
      status: ''
    }
  },
  components: {
    iHeader,
    bottomPay
  },
  methods: {
    // 获取项目详情
    getProjectDet(ell) {
      this.de = true;
      this.pjiaID = ell || this.$route.params.id.split('=')[1];
      if (ell == undefined) { ell = false }
      ell = ell ? 'id=' + ell : false;
      this.yes = [true, 'xs'];
      this.no = [false, ''];
      this.$http.get(getProjectDet(ell || this.se)).then(res => {
        var Data = res.data.data;
        var This = this;
        This.status = Data.status
        this.value = '/confirmOrder?id=' + Data.id
        This.pront = Data.pro_step;
        This.pro_push = Data.pro_push;
        This.ULwidth[0] = 'width:' + (150 * Data.pro_step.length) + 'px';
        This.ULwidth[1] = 'width:' + (150 * Data.pro_push.length) + 'px';
        This.default_pic = Data.default_pic;
        This.name = Data.name;
        This.price = Data.price;
        This.orders = Data.orders;
        This.service_time = Data.service_time;
        This.key_word_arr = Data.key_function;
        This.description = Data.description;
        This.descruotr = Data.project_info;
        This.CLASS = Data.status;
        This.se = false;
        This.de = false;
        document.body.scrollTop = 0;
      });
      return this.descruotr;
    },
    //服务介绍评价切换
    mealtaoc(n) {
      if (n == 2) {
        document.getElementById('pjiajg').style.display = 'block';
        this.getComment();
        this.no = [true, 'xs'];
        this.yes = [false, ''];
      } else {
        this.yes = [true, 'xs'];
        this.no = [false, ''];
      }
    },
    favoriteStatusChange(status) { // 子组件促发父组件的状态
      this.status = status;
    },
    //评价内容展示
    getComment() {
      this.$http.get(getComment(), { params: { project_id: this.pjiaID } }).then(res => {
        var Data = res.data.data;
        this.point = Data.list;
        if (Data.list == undefined) {
          document.getElementById('pjiajg').innerHTML = '没有哦';
        } else {
          document.getElementById('pjiajg').style.display = 'none';
        }
      });
    }
  },
  created() {
    this.getProjectDet()
    this.getComment()
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
/*//项目详情*/

.container {
  padding-bottom: 10px;
  .mealde_img img {
    max-width: 100%;
    margin: 0 auto;
    display: inherit;
  }
  .mealde_top {
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .mealde_in {
    float: left;
  }
  .mealde_in h4 {
    font-family: "Comic Sans MS", "幼圆", "黑体", sans-serif;
    font-size: 18px;
  }
  .mealde_time {
    float: right;
    margin-top: 10px;
  }
  .mealde_time>i {
    width: 17px;
    height: 21px;
    display: inline-block;
    background: url(../../static/images/time.png) no-repeat;
    background-size: 100%;
    vertical-align: middle;
  }
  .mealde_list p {
    overflow: hidden;
  }
  .mealde_list>p>a {
    width: 20px;
    height: 20px;
    float: left;
    background: url(../../static/images/list.png) no-repeat;
    background-size: 100%;
  }
  .mealde_list>p>i {
    line-height: 20px;
    margin-left: 10px;
  }
}


/*项目介绍*/

#menu {
  >ul {
    overflow: hidden;
    width: 100%;
    li {
      float: left;
      width: 50%;
      height: 37px;
      line-height: 37px;
      text-align: center;
      background: #F3F3F3;
      color: #999;
    }
    li.xs {
      background: #E66280;
      color: #fff;
    }
  }
  .meal_pro {
    font-size: 12px;
    li {
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e5e5e5;
      padding-left: 15px;
    }
    .project-comment-user {
      margin-bottom: 10px;
    }
    .img-circle {
      border-radius: 50%;
    }
  }
}


/*服务流程*/

.process_box {
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 0;
  padding-right: 0;
  /*padding-top: 10px;*/
  padding-bottom: 5px;
  background: #fff;
  margin-bottom: 40px;
  h3 {
    font-family: "Comic Sans MS", "幼圆", "黑体", sans-serif;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .process_top {
    padding-left: 0;
    padding-right: 0;
    overflow: auto;
  }
  .peocess_ul {
    overflow: hidden;
    padding-bottom: 15px;
    min-width: 100%;
  }
  li {
    float: left;
    padding-right: 5px;
    padding-left: 5px;
    width: 150px;
  }
  li img {
    width: 100%;
    max-height: 140px;
  }
  li span {
    font-size: 12px;
  }
  li p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>