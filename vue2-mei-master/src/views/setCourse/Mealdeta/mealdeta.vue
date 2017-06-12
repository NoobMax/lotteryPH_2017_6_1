<template>
  <div>
    <i-header title='套餐详情'></i-header>
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
        <li v-for='n in 2' :class='1===n?yes[1]:no[1]' v-text='1===n?"套餐介绍":"套餐详情"' @click='mealtaoc(n)'>套餐介绍</li>
      </ul>
      <div id="menu_te">
        <pre class="tag" v-show="yes[0]" style=" border: none; background: #fff;padding:10px 5px;">{{description}}</pre>
        <div class="meal_pro" style="" v-show='no[0]'>
          <div class="res_pro_in" v-for="(item,i) in todes">
            <div style="overflow:hidden;">
              <div class="res_imgbox">
                <img :src="item.pic" alt='图片路径错误！' />
              </div>
              <div class="res_name">
                <h4>{{item.name}}</h4>
                <p><i>￥</i>{{item.project_price}}</p>
              </div>
              <div class="meal_num">
                <p class="text-right"> X {{item.project_num}}</p>
              </div>
            </div>
          </div>
          <mu-circular-progress id='active' style="margin:20px auto;display: block;" :size="40" />
        </div>
      </div>
    </div>
    <div class="container prorfun">
      <router-link to="/mealDescription">
        <p>使用方法<i class="prorfun_row"></i></p>
      </router-link>
    </div>
    <!--底部购买组件-->
    <bottom-pay :status='status' favoriteType='meal' :value='value' :id='id' @favoriteStatus='favoriteStatusChange'></bottom-pay>
  </div>
</template>
<script>
import api from '../../../api'
import iHeader from '../../../components/i-header'
import bottomPay from '../../../components/bottom_pay'
export default {
  data() {
    return {
      default_pic: '',
      name: '',
      price: '',
      orders: '',
      service_time: '',
      key_word_arr: '',
      description: '',
      todes: [],
      descruotr: '',
      status: '',             //收藏数据源
      yes: [true, 'xs'],       //套餐介绍与详情切换开关
      no: [false, ''],        //套餐介绍与详情切换开关
      value: '', //  项目 id
      id: '',
    }
  },
  methods: {
    favoriteStatusChange(status) { // 子组件促发父组件的状态
      this.status = status;
    },
    getMealListDet() {
      this.$http.get(api.getMealListDet(this.$route.params.id)).then(res => {
        var Data = res.data.data;
        var This = this;
        console.log(res.data);
        This.id = Data.id;
        this.value = '/mealPay?id=' + Data.id;
        This.default_pic = Data.default_pic;
        This.name = Data.name;
        This.price = Data.price;
        This.orders = Data.orders;
        This.service_time = Data.service_time;
        This.key_word_arr = Data.key_word_arr[0];
        This.description = Data.description;
        this.descruotr = Data.project_info;
        This.status = Data.status;
      })
      return this.descruotr;
    },
    mealtaoc(n) {
      if (n == 2) {
        this.no = [true, 'xs'];
        this.yes = [false, ''];
        setTimeout(() => {
          this.todes = this.descruotr;
          document.getElementById('active').style.display = 'none';
        }, 1000)
      } else {
        this.yes = [true, 'xs'];
        this.no = [false, ''];
      }
    }
  },
  created() {
    this.getMealListDet()
  },
  //   mounted() {
  //   // 拿到id后面的参数
  //   //console.log(api.getMealListDet());

  //   //console.log(this.$route.params.id);
  //   this.getMealListDet()
  // },
  components: {
    iHeader,
    bottomPay
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
/*//套餐详情*/

.container {
  padding-bottom: 10px;
  .mealde_img img {
    width: 100%;
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
    background: url(../../../../static/images/time.png) no-repeat;
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
    background: url(../../../../static/images/list.png) no-repeat;
    background-size: 100%;
  }
  .mealde_list>p>i {
    line-height: 20px;
    margin-left: 10px;
  }
}




/*套餐介绍*/

#menu {
  ul {
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
    .res_pro_in {
      margin: 10px;
    }
    .res_imgbox {
      padding-right: 15px;
      float: left;
      width: 41.66666666666667%;
      img {
        display: block;
        height: auto;
        max-width: 100%;
      }
    }
    .res_name {
      padding-left: 0;
      padding-right: 0;
      padding-top: 20px;
      float: left;
      width: 41.66666666666667%;
      h4 {
        font-size: 16px;
        font-family: "Comic Sans MS", "幼圆", "黑体", sans-serif;
      }
      p {
        font-size: 16px;
        color: #f67476;
      }
    }
    .meal_num {
      padding-right: 5px;
      float: right;
      padding-top: 30px;
      p {
        text-align: right;
      }
    }
  }
}

.prorfun {
  // margin-bottom: 90px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 12px 0;
  .prorfun_row {
    background: url(../../../../static/images/cou_r.png) no-repeat;
    width: 12px;
    height: 10px;
    display: inline-block;
    background-size: 50%;
    margin-left: 5px;
    margin-top: 5px;
    float: right;
  }
  p {
    padding: 0 10px;
    color: #999;
  }
}
</style>