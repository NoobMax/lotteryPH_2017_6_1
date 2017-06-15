// 主页
<template>
<div>

  <div class="header_bar">
    <mu-icon-button icon='menu' @click="showDrawerM" />
    <div class="header_title">
      <div><span>北京PK10</span></div>
      <mu-icon-button icon='expand_more' @click="dailogClick" />
    </div>
    <div class="back" @click="dailogClick">后退</div>
  </div>

  <!-- <lotteryHeader></lotteryHeader> -->



  <drawer v-show="showDrawer"></drawer>

  <dailog-q v-if="showDailogQ" :titleDate="titleDate" v-on:listenToChildEvent="changeDate"></dailog-q>

<lotteryArea></lotteryArea>

  <div class="jtcaizg">
    <div class="indexkjdt">
      <div class="jtc_titl">
        <div>
          <img src="../../../static/images/c1.png">
        </div>
        <div>
          <div>
            <h3 class="title"><span>北京PK拾-</span><b class="title_b">{{round-1}}</b><span>期</span></h3>
          </div>
          <div>
            <p><span><b class="font_a">{{round}}</b></span>期：<span>两面盘</span>&nbsp;&nbsp;封盘：<span class="font_b">{{myfilter(endtime-30)}}</span>开奖：<span class="font_b">{{myfilter(endtime)}}</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="indexkjdc">

      <div v-bind:class="`No_${item_n}`" style v-for="item_n in numberList">
        {{item_n}}
      </div>
    </div>
  </div>



  <form class='form'>
    <!--<button @click="submite()" type="button">tijiao</button>-->
    <ul>
      <template v-for="item in lotteryList.body">
            <h3 class='pptitle'>{{item._name}}</h3>
            <li v-for="item_s in item.list">
            <span>{{item_s.name}}</span>
            <span class="odds_class">{{item_s.odds}}</span>
            <input v-on:focus="focus($event)" class='input_a'type="number"  v-bind:name="item_s.key_s" />
            <!-- <span v-if="!isOpen" v-bind:name="item_s.key_s">封盤</span> -->
            </li>
            </template>
    </ul>
    <div class="bet_bar"> <input v-model="keyValue" placeholder="快速下注" /> <button type="reset">重置</button> <button type="reset" @click="subMit()">下注</button></div>
  </form>
  <div>
    <mu-dialog :open="dialog" title="阿里彩票" @close="close" :scollable="true">
      <span>你投注了{{codeMessage}}块钱</span>

      <mu-flat-button slot="actions" primary @click="close" label="确定" />
    </mu-dialog>
  </div>
  <foot-guide></foot-guide>
  <div :style='de?"display:block":"display:none"' style="position: fixed;top:0;left:0;background:#000;opacity:.8;width:100%;height:100%;z-index:6">
    <div style='position: fixed;top:50%;left:50%;width:40px;height:40px;margin:-20px 0 0 -20px;'>
      <mu-circular-progress style="" :size="40" />
    </div>
  </div>
  <div class="fp" v-if="fengpan">
    <span>封盘</span>
  </div>
</div>
</template>
<script>
// import { mapGetters } from 'vuex'
import footGuide from '../../components/footer/footGuide'
// import lotteryHeader from '../../components/header/lotteryHeader'
import lotteryArea from '../../components/lottery-area'
import {
  loginTrue,
  getUid,
  getBjpk,
  getPeilv
} from '../../api'
import dailogQ from '../../components/dailogQ'
import drawer from '../../components/drawer'
import {
  mapGetters,
  mutations
} from 'vuex'
export default {
  data() {
    return {
      dailogIs: false,
      titleDate: {
        lmp: '两面盘',
        gyh: '冠亚合',
        yzw: '一至五',
        lzs: '六至十'
      },
      body: {},
      de: false,
      loading: false,
      hotmsgs: {},
      uid_info: 0,
      game_code: 51,
      type_code: 0,
      round: 0,
      endtime: 0,
      isOpen: true,
      lotteryList: {},
      numberList: [],
      dialog: false,
      codeMessage: '',
      keyValue: null,
      setTime: null,
      fengpan: false
      // pcznavc_a:1//二級選項卡，默認顯示兩面盤
    }
  },

  methods: {
    showDrawerM() {
      console.log(this.$store);

      this.$store.dispatch('showDrawer')
    },
    changeDate(data) {
      this.lotteryList = getBjpk()[data];
      this.dailogIs = !this.dailogIs;
    },
    dailogClick() {
      this.$store.dispatch('showDailogQ')

    },
    focus(e) {
      e.target.value = this.keyValue;
    },

    // toggle(pcznavc) {
    //   this.pcznavc_a = pcznavc;
    //   switch (this.pcznavc_a) {
    //     case 1:
    //     this.lotteryList = getBjpk().lmp
    //       break;
    //       case 2:
    //         this.lotteryList = getBjpk().gyh
    //         break;
    //         case 3:
    //         this.lotteryList = getBjpk().yzw
    //
    //           break;
    //           case 4:
    //           this.lotteryList = getBjpk().lzs
    //
    //             break;
    //     default:
    //
    //   }
    //
    //   console.log(this.lotteryList);
    //
    // },



    close() {
      this.dialog = false;
    },
    subMit() {
      this.uid_info = getUid();
      let lottry_s = document.getElementsByClassName("input_a")
      let string = '';
      let money = 0;
      for (let i = 0; i < lottry_s.length; i++) {
        if (lottry_s[i].value > 0) {
          string = `${string}&${lottry_s[i].name}=${lottry_s[i].value}`;
          money = money + parseInt(lottry_s[i].value);
        }
      }
      this.type_code = this.lotteryList.code
      string = `game_code=${this.game_code}&type_code=${this.type_code}&round=${this.round}&uid=${this.uid_info}${string}`
      let headers = new Headers();
      console.log(this.uid_info, 11111111);
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.$http.post('http://jmyl888.com/newapi/InOrder', encodeURI(string), {
        headers: headers
      }).then(res => {
        if (res.data.error_no == 505) {
          //未登陆
          console.log(res.data);

          this.$router.push({
            path: '/login'
          }) //跳转到登陆
        } else {
          this.codeMessage = money
          this.dialog = true
          this.dialog = ''
        }
      })
    },

    //定时器

    //小于10补0
    p(s) {
      if (s <= 0) {
        return `00`
      } else if (s > 0 && s < 10) {
        return `0${s}`
      } else {
        return s
      }
    },
    //过滤分秒
    myfilter(second_time) {

      let time = parseInt(second_time);
      let second = parseInt(second_time) % 60;
      let min = parseInt(second_time / 60);
      time = this.p(min) + ":" + this.p(second);
      return time;
    }
  },
  // 网络服务


  computed: mapGetters([
    // 监测头部
    'showDrawer',
    'showDailogQ'
  ]),
  //初始化
  created() {
    //
    this.de = true;
    let newTime = Date.parse(new Date());
    let oldTime = localStorage.getItem('im_time');
    let bodyS = localStorage.getItem('im_body');
    console.log(oldTime + 'fsdfsdfsdfsd');
    console.log(oldTime - newTime);
    let timeC = oldTime - newTime
    if (newTime < oldTime) {
      this.endtime = (oldTime - newTime) / 1000;
      console.log(bodyS, 111111);
      this.lotteryList = getBjpk().lmp;
      this.round = this.body.round;
      // console.log(JSON.parse(bodyS),444444);
      this.body = JSON.parse(bodyS)
      console.log(this.body, 444444);
      this.round = this.body.round;
      // this.endtime = this.body.endtime;
      this.isOpen = this.body.isopen;
      this.numberList = this.body.number;
      console.log(this.numberList, 11111);
      this.lottry_s = (document.getElementsByClassName("input_a"));
      this.de = false;
    } else {

      this.lotteryList = getBjpk().lmp
      let uidInfo = getUid();
      this.uid_info = uidInfo;
      let params = {
        params: {
          game_code: 51, //  登录账号
          type_code: 0, //  登录密码
          uid: uidInfo
        }
      } // 获取token配置
      this.$http.get(getPeilv(), params).then(res => {
        this.de = false;
        if (res.data.error_no == 505) { //  1未登陆
          this.$router.push({
            path: '/login'
          }) // 跳转到登陆
        } else if (res.data.error_no == 41) {
          console.log('游戏未开盘')
        } else if (res.data.error_no == 38) {


          let timestamp = Date.parse(new Date()) + res.data.body.endtime * 1000;
          localStorage.setItem('im_time', JSON.stringify(timestamp))
          localStorage.setItem('im_body', JSON.stringify(res.data.body))
          console.log(localStorage.getItem('im_time'));
          this.lotteryList = getBjpk().lmp;
          this.round = res.data.body.round;
          this.endtime = res.data.body.endtime;
          this.isOpen = res.data.body.isopen;
          this.numberList = res.data.body.number;
          this.lottry_s = (document.getElementsByClassName("input_a"));
          //  console.log(res.data,111111)


        }

      })
    }

  },
  mounted() {
    setInterval(() => {
      if (this.endtime <= 0) {
        this.isOpen = false;
        return
      } else {
        this.endtime--
      }
    }, 1000)
  },
  watch: {
    endtime: function() {
      if (this.endtime == 0) {
        this.fengpan = false;
        this.lotteryList = getBjpk().lmp
        let uidInfo = getUid();
        this.uid_info = uidInfo;
        console.log(uidInfo);
        let params = {
          params: {
            game_code: 51,
            type_code: 0,
            uid: uidInfo
          }
        }
        this.loading = true;
        this.$http.get(getPeilv(), params).then(res => {
          if (res.data.error_no == 505) { //  1未登陆
            this.$router.push({
              path: '/login'
            }) // 跳转到登陆
          } else if (res.data.error_no == 41) {
            console.log('游戏未开盘')
          } else if (res.data.error_no == 38) {
            this.loading = false;
            let timestamp = Date.parse(new Date()) + res.data.body.endtime * 1000;
            localStorage.setItem('im_time', JSON.stringify(timestamp))
            localStorage.setItem('im_body', JSON.stringify(res.data.body))
            this.round = res.data.body.round;
            this.endtime = res.data.body.endtime;
            this.isOpen = res.data.body.isopen;
            this.numberList = res.data.body.number;
            this.lottry_s = (document.getElementsByClassName("input_a"));

            if (res.data.body.endtime = 1) {

            }
            console.log(new Date())
            console.log(res.data, 111111);
          } else {
            console.log('根本没有41的状态吗');
          }
        })


      } else if (this.endtime == 30) {
        this.fengpan = true;

      }
    },
    $route() {

    }
  },
  components: {
    footGuide,
    dailogQ,
    drawer,
    lotteryArea
    // lotteryHeader
    // 'ex-simple': model,

  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.fp {
    width: 100%;
    height: 55/20rem;
    position: fixed;
    bottom: 52px;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    color: white;
    font-size: 30/20rem;
    text-shadow: -2px 1px 1px rgba(0,0,0,0.6);
    align-items: center;
    letter-spacing: 15/20rem;
}
@color: #d1506d;
.mu-appbar {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    color: @color;
    height: 44px;
}
.No_1,
.No_10,
.No_2,
.No_3,
.No_4,
.No_5,
.No_6,
.No_7,
.No_8,
.No_9 {
    font-family: "Arial Black";
    margin-top: 1/20rem;
    display: inline-block;
    width: 20/20rem;
    height: 20/20rem;
    line-height: 20/20rem;
    text-align: center;
    border-radius: 2px;
    font-weight: 900;
    color: #f0fbfb;
    text-shadow: -1px 2px 4px #000000;
    box-shadow: -1.5px 2px 3px rgba(0,0,0,0.4);
    border: 0;
    margin-right: 3/20rem;
}

.No_1 {
    background-color: rgb(221, 221, 221);
}
.No_2 {
    background-color: rgb(0, 117, 220);
}
.No_3 {
    background-color: rgb(118, 0, 0);
}
.No_4 {
    background-color: rgb(77, 77, 77);
}
.No_5 {
    background-color: rgb(74, 0, 220);
}
.No_6 {
    background-color: rgb(220, 0, 0);
}
.No_7 {
    background-color: rgb(220, 220, 0);
}
.No_8 {
    background-color: rgb(220, 110, 0);
}
.No_9 {
    background-color: rgb(114, 220, 220);
}
.No_10 {
    background-color: rgb(40, 194, 0);
}
.jtcaizg {
    background: #fff;
    clear: both;
    height: auto;
    overflow: hidden;
    padding: 10px;
    margin-top: 44px;
}
.indexkjdt {
    height: auto;
    clear: both;
}
.indexkjdt h3 {
    font-size: 14px;
    height: 29px;
    line-height: 25px;
    margin: 0;
}
.indexkjdt img {
    width: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.spaninri a {
    float: right;
    color: #fff;
    padding: 0 10px;
    margin-right: 10px;
    font-size: 12px;
    height: 21px;
    line-height: 21px;
    font-weight: 500;
    background: #f00;
    -webkit-border-radius: 18px;
    -moz-border-radius: 18px;
    border-radius: 18px;
}
.indexkjdt p span {
    color: #f00;
}
.indexkjdc {
    display: flex;
    height: 27/20rem;
}
.font_s {
    width: 42/20rem;
}
.indexkjdc .title {
    height: 29/20rem;
}
.indexkjdc i {
    float: right;
}
.indexkjdc i a {
    padding: 2px 6px;
    color: #fff;
    background: #36aafb;
    font-size: 12px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.pcznavc {
    clear: both;
    background: white;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e67074;
    padding: 5/20rem;
}
.pcznavc a {
    padding: 0 11px;
    font-size: 12px;
    background: #fff;
    color: #333;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    border: 1px solid #36aafb;
}
.pcznavc .a {
    background: #36aafb;
    color: #fff;
}
.pcznavc i {
    border-right: 1px solid #e67074;
}
.form {
    display: block;
    margin-top: 0;
}
.font_b {
    width: 52/20rem;
    display: inline-block;
}
.pptitle {
    clear: both;
    font-size: 16px;
    font-weight: 600;
}
.title_b {
    width: 51/20rem;
    display: inline-block;
    color: rgb(54, 170, 251);
}

.form {
    > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 100%;
        background: #fff;
        padding-bottom: 110/20rem;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.4);

        > h3 {
            width: 100%;
            padding: 5/20rem;
            margin-top: 5/20rem;
            margin-bottom: 5/20rem;
            color: #d1506d;
            background: -webkit-linear-gradient(right, rgba(255,255,255,1) 0%,#FFE8E8 100%);
            /* Chrome10-25,Safari5.1-6 */
        }
        > li {
            width: 50%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 3/20rem;
            input {
                width: 40%;
            }
            > span:nth-of-type(1) {
                width: 22/20rem;
            }
        }
        span {
            font-size: 16/20rem;
            display: inline-block;
        }

    }

}
.odds_class {
    color: #c35f62;
}
.bet_bar {
    width: 100%;
    z-index: 999;
    position: fixed;
    bottom: 52px;
    display: flex;
    justify-content: space-around;
    height: 55/20rem;
    padding: 9/20rem;
    background: -webkit-linear-gradient(top, #e67074 0%,#e67074 24%,#e67074 44%,#e67074 100%);
    /* Chrome10-25,Safari5.1-6 */
    font-size: 16/20rem;
    input {
        outline: 0;
        background: rgba(255,255,255,0.9);
        border: 0;
        margin-right: 10/20rem;
    }
    button {
        border: 0;
        border-radius: 2px;
    }
    button:nth-of-type(1) {
        color: white;
        background: #36aafb;
        margin-right: 7/20rem;
    }
    button:nth-of-type(2) {
        color: white;
        background: #78c401;
    }
}
.header_bar {
    z-index: 990;
    background: white;
    color: @color;
    font-size: 16/20rem;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5/20rem;
    box-shadow: 0 0.06rem 0.6rem rgba(0, 0, 0, 0.3);
    .header_title {
        display: flex;
        align-items: center;
    }
    .back {
        padding: 4/20rem;
    }
}

.jtc_titl {
    display: flex;
    flex-direction: row;
    align-items: center;
    > div:nth-of-type(1) {
        width: 15%;
    }
    > div:nth-of-type(2) {
        > div:nth-of-type(2) {
            font-size: 12/20rem;
        }
    }
    .font_b {
        width: 30/20rem;
    }
    .font_a {
        display: inline-block;
        width: 55/20rem;
    }
}
.indexkjdc {
    margin-top: 5/20rem;
}
</style>
