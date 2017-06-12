// 推荐页
<template>
  <div class="recommend">
    <div style="height:160px" class="swiper-box">
      <swiper :options="swiperOption">
        <swiper-slide v-for='(item,i) in msgs.data' :key='i'>
          <a :href="item.href">
            <img :src="item.pic" class="banner-item" :alt="item.name">
          </a>
        </swiper-slide>
        <div v-if='msgs' class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!--</swiper>-->
    </div>
    <!--美容  预约 -->
    <div class="im_door container">
      <mu-flexbox>
        <mu-flexbox-item class="flex-demo">
          <router-link class="serve first-a" to='#' @click.native="open">
            <span></span><i>美容师上门</i>
          </router-link>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <router-link class="serve" to='/appointmentShop'>
            <span class="last-store"></span><i>预约到店</i>
          </router-link>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
    <!--美容  预约 -->
  
    <!--套餐流程-->
    <div class="container im_package clearfix">
      <div class="im_padd fl">
        <router-link to="/setCourse">
          <img class="img-responsive center-block" src="../../../../static/images/package011.png" />
        </router-link>
      </div>
      <div class="right-img">
        <div class="img-top">
          <router-link to="/index/facialBeauty">
            <img class="img-responsive center-block" src="../../../../static/images/package02.png" />
          </router-link>
        </div>
        <div class="img-bottom">
          <router-link to="/index/plastic">
            <img class="img-responsive center-block" src="../../../../static/images/package03.png" />
          </router-link>
        </div>
      </div>
    </div>
    <!--套餐流程end-->
  
    <!--热门项目 接收一个对象-->
    <hot-project :hotmsgs='hotmsgs'></hot-project>
    <!--美容师上门弹出层-->
    <div>
      <mu-dialog :open="dialog">
        还没上线,敬请期待
        <mu-flat-button label="确定" slot="actions" primary @click="close" />
      </mu-dialog>
    </div>
  
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import hotProject from './hotProject.vue'
import { getBanner, getHotProject } from '../../../api'
export default {
  data() {
    return {
      // 轮播图
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        loop: true
      },
      msgs: {
        data:[{name:'ban1',
        pic:'../../../../static/images/m1.jpg',
        href:'#'},
        {name:'ban2',
        pic:'../../../../static/images/m2.jpg',
        href:'#'},
        {name:'ban3',
        pic:'../../../../static/images/m3.jpg',
        href:'#'},
        {name:'ban4',
        pic:'../../../../static/images/m4.jpg',
        href:'#'},
        {name:'ban5',
        pic:'../../../../static/images/m5.jpg',
        href:'#'},
        ]


      },
      hotmsgs: {},
      dialog: false
    }
  },
  created() {
    // this.getBanner()
    this.getHotProject()
  },
  methods: {
    // 轮播图请求
    // getBanner() {
    //   this.$http.get(getBanner()).then(res => {
    //     this.msgs = res.data
    //   })
    // },
    // 热门项目请求
    getHotProject() {
      this.$http.get(getHotProject()).then(res => {
        this.hotmsgs = res.data
      })

    },
    // 显示隐藏弹出层
    open() {
      this.dialog = true
    },
    close() {
      this.dialog = false
    }
  },
  components: {
    swiper,
    swiperSlide,
    hotProject
  }

}
</script>
<style lang="less" ref="stylesheet/less" scoped>
.swiper-box {
  div {}
  a {
    display: block;
    height: 160px;
    img {
      height: 100%
    }
  }
}

.recommend {
  width: 100%;
  margin-bottom: 60px;
  .banner-item {
    width: 100%;
  }

  .im_door {
    margin-top: 10px;
    background: #fff;
    height: 76px;
    margin-bottom: 10px;
  }

  .mu-flexbox {
    height: 100%;

    .flex-demo {
      height: 100%;
      padding: 10px 0px;
    }
  }
  .first-a {
    border-right: 1px solid #ccc;
  }

  .serve {
    color: #333;
    display: block;
    line-height: 55px;
    height: 55px;

    >i {
      font-style: normal;
      overflow: hidden;
      margin-left: 5px;
    }

    >span {
      padding-top: 10px;
      float: left;
      width: 50px;
      height: 50px;
      background: url('../../../../static/images/door.png') no-repeat;
      background-size: 80%;
      margin-left: 20px;
      background-origin: content-box;
    }

    .last-store {
      background: url('../../../../static/images/store.png') no-repeat;
      background-size: 80%;
    }
  }

  /*套餐流程*/
  .im_package {
    background: #fff;
    padding-top: 15px;
    margin-bottom: 10px;

    .im_padd {
      padding-left: 0px;
      padding-right: 0px;
      width: 33.33333333333333%;
      border-right: 1px solid #CCCCCC;
    }

    .img-responsive {
      display: block;
      height: auto;
      max-width: 100%;
    }

    .right-img {
      overflow: hidden;

      .img-top {
        height: 3.2rem;
        border-bottom: 1px solid #CCCCCC;
      }

      .img-responsive {
        height: 100%;
      }

      .img-bottom {
        height: 3.2rem;
      }
    }
  }
}
</style>
