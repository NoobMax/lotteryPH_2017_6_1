nc_time// 主页
<template>
<div>


  <dailog-q :type_code="type_code" :game_code="game_code" :money="money_s" :round="round" :lotteryM="objects" v-if="showDailogQ" v-on:listenToChildEvent="showMsgFromChild"></dailog-q>
  <dailog-s :type_code="type_code" :game_code="game_code" :money="money_s" :round="round" :lotteryM="objects" :typecode=lianxu.keys v-if="showDailogS" v-on:listenToChildEvent="showMsgFromChild"></dailog-s>


  <lotteryHeader :title="title"></lotteryHeader>
  <!-- <drawer v-show="showDrawer"></drawer> -->

  <!-- <dailog-q v-if="showDailogQ" :titleDate="titleDate" v-on:listenToChildEvent="changeDate"></dailog-q> -->

  <lotteryArea :lotteryObj="body"  :endtime="endtime" :fentime="fentime" :zMoney="zMoney" v-if="isOk"></lotteryArea>

  <div class="lottery_nav_bar">
    <ul>
      <li class="trapezoid" v-for="(item,i) in shuju" :class="{active:item.isCheck}" @click="changeDate(item,i)">
        <span>{{item.name}}</span>
      </li>

    </ul>
  </div>
  <div style="padding-top:8rem" v-if="shuju.lim.isCheck">
    <h3>投注方式</h3>
    <ul class="cqList">
      <li v-for='(item,index) in datas'>
        <div v-bind:class="{active:item.isCheck}" @click='one(item,index)'>
          <strong>{{item._name}}</strong>
          <span>{{item.odds}}</span>
        </div>
      </li>
    </ul>
  </div>
  <section class='bet cqnc_lmp' ref="seller">
    <!--<button @click="submite()" type="button">tijiao</button>-->
    <ul>


      <li v-for="(item,j) in lotteryList.body">
        <span>{{item._name}}</span>
        <ul>
          <li v-for="(item,i) in item.list">

            <button :class="{active:item.isCheck}" @click="isCheck(j,i,item)" :disabled="fengpan">
              <span>{{item.name}}</span>
              <span>{{fengpan?"-":item.odds}}</span>

              </button>

          </li>
        </ul>
      </li>
    </ul>

  </section>

  <section class="bet_bar">
    <div><input type="number" v-model="money_s" placeholder="输入金额" @input="changes_m()" /></div>
    <div><button :class="{disable:isBlue}" type="button" :disabled="!isBlue" @click="subMit">确认下注</button></div>
    <div>
      <i class="icon-lajitong iconfont"></i>
      <span @click="qingkong">清空</span>
    </div>
  </section>
  <div v-if="isShowS">
    <div class="modal_box_feedback">
      <div>{{wenzi}}</div>
    </div>
  </div>
  <!-- <foot-guide></foot-guide> -->
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
import {
  mapGetters,
  mutations
} from 'vuex'
// import footGuide from '../../components/footer/footGuide'
import lotteryHeader from '../../components/header/lotteryHeader'
import lotteryArea from '../../components/lottery-area'
import dailogQ from '../../components/dailogQ.vue'
import dailogS from '../../components/dailogS.vue'
import BScroll from 'better-scroll'
// console.log(BScroll);
import {
  loginTrue,
  getOid,
  getKlsf,
  getTime
} from '../../api'
// import drawer from '../../components/drawer'

export default {
  data() {
    return {
zMoney:0,
      fentime: 60,
      wenzi: "",
      isShowS: false,
      lianxu: {
        keys: 2032,
        index: 2
      },
      zhanshi: false,
      datas: [{
          isCheck: true,
          _name: '任选二',
          odds: '6.5',
          key_s: 2032,
          inde: 2
        },
        {
          isCheck: false,
          _name: '任选三',
          odds: '19.6',
          key_s: 2035,
          inde: 3
        },
        {
          isCheck: false,
          _name: '任选四',
          odds: '60',
          key_s: 2038,
          inde: 4
        },
        {
          isCheck: false,
          _name: '任选五',
          odds: '250',
          key_s: 2039,
          inde: 5
        }
      ],
      game_code: 47,
      type_code: 0,
      title: "重庆幸运农场",
      shuju: {},
      isBlue: false,
      demo: 0,
      body: {},
      seen: false,
      de: false,
      loading: false,
      // hotmsgs: {},
      oid_info: 0,
      isOk: false,
      endtime: 0,
      isOpen: true,
      lotteryList: {},
      numberList: [],
      dialog: false,
      codeMessage: '',
      keyValue: null,
      setTime: null,
      fengpan: false,
      object: {},
      objects: [],
      money_s: null,
      round: 0,
      n_1: false,
      dadiao: "lmp",
      zMoney:0
      // pcznavc_a:1//二級選項卡，默認顯示兩面盤
    }
  },

  methods: {
    showMsgFromChild(data){
      if (data===true) {
        this.qingkong();
      let oidInfo = getOid();
      let prams = {
        oid : oidInfo
      }
        this.$http.post("http://xiaopeng.lebole5.com/getinfo/money",JSON.stringify(prams)).then(res => {
          // console.log(timeStamp);
          console.log(res.data.msg == "4001");
          if (res.data.msg == "4001") {
            // let timeStamp = res.data.next.timestap;
            console.log("das"); //  1未登陆
            this.$router.push({
              path: '/login'
            }) // 跳转到登陆
          } else {
          this.zMoney = res.data.money
          sessionStorage.setItem('im_money', JSON.stringify(res.data.money))
          }

        })
      }
    },
    one(item, j) {
      // item.isCheck=false
      this.datas.forEach(function(key) {
        key.isCheck = false
      })
      // console.log(this.lianxu);
      item.isCheck = true;
      this.lianxu.index = item.inde;
      this.lianxu.keys = item.key_s;


    },
    changes_m() {

      if (!this.isEmptyObject(this.object) && this.money_s > 0) {
        this.isBlue = true;
      } else {
        this.isBlue = false
      }
    },
    isEmptyObject(e) {

      for (let t in e)
        return !1;
      return !0
    },
    qingkong() {
      this.isBlue = false;
      // this.money_s = null;
      this.lotteryList = getKlsf()[this.dadiao];
      this.object = {}
      if (this.dadiao == "lmp") {
        this.$refs.seller.className = "cqnc_lmp bet";
        this.zhanshi = false;

      } else if (this.dadiao == 'yds' || this.dadiao == 'wdb') {

        this.zhanshi = false;
        this.$refs.seller.className = "cqnc_ys bet";

      } else {
        this.zhanshi = true;
        this.$refs.seller.className = "cqList1";
        console.log(this.zhanshi + "8");
        // this.$refs.seller.className
      }
      this.object = {}
    },
    subMit() {
      // this.seen=!this.seen
      this.objects = [];
      for (let i in this.object) {
        this.objects.push(this.object[i])

      }
      console.log(this.objects);
      if (this.shuju.lim.isCheck == true) {
        console.log(this.objects);
        console.log(this.objects.length + "beel");
        console.log(this.lianxu.index + "xiaosi");
        if (this.objects.length < this.lianxu.index || this.objects.length > 8) {
          this.objects.length > 8 ? this.wenzi = "最多投8个球" : this.wenzi = `不能少于${this.lianxu.index}`
          this.isShowS = true;
          this.objects = [];
          console.log(this.objects);
          setTimeout(this.isSHowff, 1200)
          return
        }
        console.log(this.objects);
        this.$store.dispatch('showDailogS')

        return
      }
      console.log(this.objects);
      this.$store.dispatch('showDailogQ')

    },
    isSHowff() {
      this.isShowS = false
    },
    isCheck(j, i, item) {
      let n = `l${j}${i}`;
      console.log(n);
      item.isCheck = !item.isCheck;
      if (item.isCheck === true) {
        this.object[n] = item;

      } else {
        delete this.object[n]
      }
      console.log(this.money_s);
      if (!this.isEmptyObject(this.object) && this.money_s > 0) {
        this.isBlue = true;
      } else {
        this.isBlue = false
      }

      console.log(!this.isEmptyObject(this.object))
      console.log("xiaosi");

    },

    changeDate(item, i) {
      this.shuju.lmp.isCheck = false;
      this.shuju.yds.isCheck = false;
      this.shuju.wdb.isCheck = false;
      this.shuju.lim.isCheck = false;
      item.isCheck = true;
      this.object = {};
      this.lotteryList = getKlsf()[i];
      this.dadiao = i;
      console.log(typeof(i));

      switch (i) {
        case "lmp":
          this.$refs.seller.className = "cqnc_lmp bet";
          this.zhanshi = false;
          this.type_code = 0;
          break;
        case "yds":
          this.zhanshi = false;
          this.$refs.seller.className = "cqnc_ys bet";
          this.type_code = 10
          break;
        case "wdb":
          this.$refs.seller.className = "cqnc_ys bet";
          this.type_code = 10
          this.type_code = 11
          break;
        default:
          this.zhanshi = true;
          this.$refs.seller.className = "cqList1";
          this.type_code = 9
      }
      // this.dailogIs = !this.dailogIs;
    },

    // subMit() {
    //   this.oid_info = getOid();
    //   let lottry_s = document.getElementsByClassName("input_a")
    //   let string = '';
    //   let money = 0;
    //   for (let i = 0; i < lottry_s.length; i++) {
    //     if (lottry_s[i].value > 0) {
    //       string = `${string}&${lottry_s[i].name}=${lottry_s[i].value}`;
    //       money = money + parseInt(lottry_s[i].value);
    //     }
    //   }
    //   this.type_code = this.lotteryList.code
    //   string = `game_code=${this.game_code}&type_code=${this.type_code}&round=${this.round}&oid=${this.oid_info}${string}`
    //   let headers = new Headers();
    //   console.log(this.oid_info, 11111111);
    //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //   this.$http.post('http://jmyl888.com/newapi/InOrder', encodeURI(string), {
    //     headers: headers
    //   }).then(res => {
    //     if (res.data.error_no == 505) {
    //       //未登陆
    //       console.log(res.data);
    //
    //       this.$router.push({
    //         path: '/login'
    //       }) //跳转到登陆
    //     } else {
    //       this.codeMessage = money
    //       this.dialog = true
    //       this.dialog = ''
    //     }
    //   })
    // },

  },
  computed: mapGetters([
    'showDailogQ',
    'showDailogS'
  ]),
  //初始化
  created() {
    this.de = true;
    let newTime = Date.parse(new Date()) / 1000;
    let oldTime = localStorage.getItem('nc_time');
    console.log(oldTime - newTime);
    if (oldTime && newTime <= oldTime) {
      console.log("ddsa");
      this.shuju = getKlsf();
      this.lotteryList = getKlsf().lmp;
      this.lotteryList.isCheck = true;
      let bodyS = localStorage.getItem('nc_body');
      let oldTime = localStorage.getItem('nc_time');
      let moneyX=   sessionStorage.getItem('im_money')
      this.zMoney = parseFloat(moneyX)
      this.isOk = true;
      this.endtime = oldTime - newTime;
      this.body = JSON.parse(bodyS)
      this.round = this.body.next.round;
      this.de = false;
      let moneyM= sessionStorage.getItem('im_money');
      this.zMoney = moneyM
    } else {
      console.log("debug1");
      this.shuju = getKlsf();
      this.shuju.lmp.isCheck = true;
      this.lotteryList = getKlsf().lmp;
      let oidInfo = getOid();
      this.oid_info = oidInfo;
      let params = {
        params: {
          game_code: 47, //  登录账号
          // type_code: 0, //  登录密码
          oid: oidInfo
        }
      } // 获取token配置
      this.$http.post(getTime(), JSON.stringify(params.params)).then(res => {
        console.log("222");
        this.de = false;
        this.isOk = true;

        // console.log(timeStamp);
        console.log(res.data.msg == "4001");
        if (res.data.msg == "4001") {
          // let timeStamp = res.data.next.timestap;
          console.log("das"); //  1未登陆
          this.$router.push({
            path: '/login'
          }) // 跳转到登陆
        } else {
          console.log("debug2");
          let moneyX=   sessionStorage.getItem('im_money')

          this.zMoney = parseFloat(moneyX)
          console.log(res.data);
          this.shuju = getKlsf();
          this.lotteryList = getKlsf().lmp;
          this.shuju.lmp.isCheck = true;
          let timeStamp = res.data.next.timestap;
          this.body = res.data;
          this.endtime = res.data.next.endtime - timeStamp;
          this.round = res.data.next.round;
          let loaclTime = this.endtime + newTime;
          console.log(loaclTime + "111");
          // localStorage.setItem('nc_time', res.data.next.endtime)
          localStorage.setItem('nc_time', loaclTime)
          localStorage.setItem('nc_body', JSON.stringify(res.data))
          this.lotteryList = getKlsf().lmp;
          this.numberList = res.data.last.number;
          this.round = res.data.next.round;
        }

      })
    }
    let moneyM= sessionStorage.getItem('im_money');
    this.zMoney = moneyM
  },
  reddy() {},
  mounted() {
    setInterval(() => {
      if (this.endtime <= 0) {
        this.isOpen = false;
        return
      } else {
        this.endtime--;
        let timeStamp = Date.parse(new Date()) / 1000;

      }
    }, 1000)
  },
  watch: {
    endtime: function() {
      if (this.endtime == 0) {
        let newTime = Date.parse(new Date()) / 1000;
        this.fengpan = false;
        let oidInfo = getOid();
        this.oid_info = oidInfo;
        console.log(oidInfo + "利好");
        let params = {
          params: {
            game_code: 47,
            // type_code: 0,
            oid: oidInfo
          }
        }
        this.$http.post(getTime(), JSON.stringify(params.params)).then(res => {
          this.de = false;
          this.isOk = true;
          let timeStamp = res.data.next.timestap;
          console.log(timeStamp);
          console.log(res.data);
          if (res.data.msg == 4001) { //  1未登陆
            this.$router.push({
              path: '/login'
            }) // 跳转到登陆
          } else {
            this.shuju = getKlsf();
            this.lotteryList = getKlsf().lmp;
            this.shuju.lmp.isCheck = true;
            let timeStamp = res.data.next.timestap;
            this.body = res.data;
            this.endtime = res.data.next.endtime - timeStamp;
            this.round = res.data.next.round;
            let loaclTime = this.endtime + newTime;
            console.log(loaclTime + "111");
            // localStorage.setItem('nc_time', res.data.next.endtime)
            localStorage.setItem('nc_time', loaclTime)
            localStorage.setItem('nc_body', JSON.stringify(res.data))
            this.lotteryList = getKlsf().lmp;
            this.numberList = res.data.last.number;
            this.round = res.data.next.round;
          }

        })
        let moneyM= sessionStorage.getItem('im_money');
        this.zMoney = moneyM

      } else if (this.endtime <= 60 && this.endtime > 0) {

        this.qingkong();
        this.fengpan = true;

      }
    },
    $route() {

    }
  },
  components: {

    lotteryArea,
    lotteryHeader,
    dailogQ,
    dailogS
    // 'ex-simple': model,

  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
/* .fade-leave-active in <2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
h3 {
    display: block;
    margin: 0;
    width: 100%;
    text-align: center;
    border-left: 1/20rem solid #8c8c8c;
    border-right: 1/20rem solid #d9d9d9;
    border-bottom: 1/20rem solid #595959;
    border-top: 1/20rem solid #636363;
    background: -webkit-radial-gradient(#838383, #6d6d6d);
    color: #fcfcfc;
    font-size: 12/20rem;
    font-weight: 100;
    /*margin-left: -4px;*/
}
.cqList {
    display: flex;
    flex-flow: row wrap;
    li {
        width: 180/45rem;
        div {
            text-align: center;
            width: 146/45rem;
            margin: 0 auto;
            height: 89/45rem;
            border: 1px solid #e5e5e5;
            margin: 18/45rem auto;
            background: #fff;
            line-height: 40/45rem;
            span {
                height: 38/45rem;
                width: 100%;
                display: block;
                color: #125dc9;
                font-size: 25/45rem;
                font-family: "arial";
            }
            strong {
                padding-top: 3px;
                font-size: 28/45rem;
                height: 43/45rem;
                display: block;
                width: 100%;
                font-weight: normal;
                font-family: "黑体";
            }
        }
        .active {
            border: 2px solid #1366dc;
            box-sizing: border-box;
            // background:#fff url(../../../static/images/sj.png) no-repeat;
            background-size: 16/45rem 16/45rem;
        }
        .isred {
            border: 2px solid #ff2312;
            box-sizing: border-box;
        }
    }
    li:nth-child(2n) {
        background: #ffffff;
    }
}
.cqList1 {
    display: flex;
    background: #f2f2f2;
    justify-content: space-around;
    flex-flow: row wrap;
    li {
        width: 100%;
        text-align: center;
        > span {
            display: block;
            margin: 0;
            width: 100%;
            text-align: center;
            border-left: 1/20rem solid #8c8c8c;
            border-right: 1/20rem solid #d9d9d9;
            border-bottom: 1/20rem solid #595959;
            border-top: 1/20rem solid #636363;
            background: -webkit-radial-gradient(#838383, #6d6d6d);
            color: #fcfcfc;
        }
        ul {
            display: flex;
            flex-flow: row wrap;
            li {

                width: 180/45rem;
                button {
                    position: relative;

                    outline: 0;
                    text-align: center;
                    width: 146/45rem;
                    margin: 0 auto;
                    height: 89/45rem;
                    border: 1px solid #e5e5e5;
                    margin: 18/45rem auto 0;
                    background: #fff;
                    line-height: 40/45rem;
                    > span:nth-child(2) {
                        height: 38/45rem;
                        width: 100%;
                        display: block;
                        color: #125dc9;
                        font-size: 25/45rem;
                        font-family: "arial";
                    }
                    > span:nth-child(1) {
                        padding-top: 3px;
                        font-size: 28/45rem;
                        height: 43/45rem;
                        display: block;
                        width: 100%;
                        font-weight: normal;
                        font-family: "黑体";
                    }
                }
                .active {
                    border: 2px solid #1366dc;
                    box-sizing: border-box;
                    // background:#fff url(../../../static/images/sj.png) no-repeat;
                    background-size: 16/45rem 16/45rem;
                }
                .active:after {
                    content: "";
                    width: 0;
                    height: 0;
                    border-top: 22/45rem solid #156bda;
                    border-right: 22/45rem solid transparent;
                    position: absolute;
                    left: -1px;
                    top: -1px;
                }
                .active {
                    border: 1/20rem solid #156bda;
                }
                .isred {
                    border: 2px solid #ff2312;
                    box-sizing: border-box;
                }
            }
            li:nth-child(2n) {
                background: #ffffff;
            }
        }
    }

}
.cqList {
    > li {
        .active {
            border: 1/20rem solid red;
            position: relative;
        }
        .active:after {
            content: "";
            width: 0;
            height: 0;
            border-top: 0.48888889rem solid red;
            border-right: 0.48888889rem solid transparent;
            position: absolute;
            left: -1px;
            top: -1px;
            z-index: 999;
        }
    }
}
.fp {
    width: 100%;
    height: 40/20rem;
    position: fixed;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    color: white;
    font-size: 30/20rem;
    text-shadow: -2px 1px 1px rgba(0,0,0,0.6);
    align-items: center;
    letter-spacing: 15/20rem;
    box-sizing: border-box;
    z-index: 1000;
}

.mu-appbar {
    position: fixed;
    top: 0;
    left: 0;
    background: #146cdc;
    color: #fff;
    height: 44px;
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
        background: rgba(0,0,0,0.5);
        margin-right: 7/20rem;
    }
    button:nth-of-type(2) {
        color: white;
        background: #78c401;
    }
    .disable {
        background: #36aafb!important;
    }
}
.header_bar {
    z-index: 990;
    background: #146cdc;
    color: #fff;
    font-size: 16/20rem;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5/20rem;
    height: 38/20rem;
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

.bet {
    margin-bottom: 39/20rem;
    margin-top: 160/20rem;
    height: 368/20rem;
    overflow-y: auto;
    > ul {
        display: flex;
        flex-wrap: wrap;

        > li {
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: white;
            > span {
                display: block;
                background: red;
                width: 100%;
                text-align: center;
                border-left: 2/20rem solid #8c8c8c;
                border-right: 2/20rem solid #d9d9d9;
                border-bottom: 2/20rem solid #595959;
                border-top: 2/20rem solid #636363;
                background: -webkit-radial-gradient(#838383, #6d6d6d);
                color: #fcfcfc;
            }
            > ul {
                button {
                    outline: 0;
                    border: 1/20rem solid #eaeaea;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    width: 53/20rem;
                    height: 41/20rem;
                    align-items: center;
                    margin-top: 9/20rem;
                    position: relative;
                    background: #fff;
                    > span:nth-of-type(2) {
                        color: #5084e2;
                    }
                }
                > li:nth-last-of-type(1) {
                    margin-bottom: 9/20rem;
                }
                .active:after {
                    content: "";
                    width: 0;
                    height: 0;
                    border-top: 11/20rem solid #156bda;
                    border-right: 11/20rem solid transparent;
                    position: absolute;
                    left: -1px;
                    top: -1px;
                }
                .active {
                    border: 1/20rem solid #156bda;
                }
            }
        }
        > li:nth-of-type(1) {
            background: #f2f2f4;
        }
        > li:nth-of-type(2) {}
        > li:nth-of-type(3) {
            background: #f2f2f4;
        }
        > li:nth-of-type(4) {}
        > li:nth-of-type(5) {
            background: #f2f2f4;
        }
        > li:nth-of-type(6) {
            background: #f2f2f4;
        }
        > li:nth-of-type(7) {}
        > li:nth-of-type(8) {
            background: #f2f2f4;
        }
        > li:nth-of-type(9) {}
        > li:nth-of-type(10) {
            background: #f2f2f4;
        }
    }
}

.bet_bar {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    height: 39/20rem;
    background: white;
    align-items: center;
    box-shadow: 2/20rem -2/20rem 2/20rem rgba(0,0,0,0.3);
    > div {
        width: 33.33%;
        text-align: center;
    }
    input {
        width: 86/20rem;
        height: 25/20rem;
        border-radius: 3/20rem;
        border: 1/20rem solid #f0f0f0;
        box-shadow: 0 0 5/20rem #eeeeee inset;
        text-align: center;
    }
    button {
        display: block;
        width: 100%;
        height: 39/20rem;
        border: 0;
        background: #177bdd;
        color: white;
    }

}
.lottery_nav_bar {
    position: fixed;
    width: 320/20rem;
    top: 128/20rem;
    z-index: 1;
    ul {
        display: flex;
        height: 30/20rem;
        background: blue;
        color: white;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 84/20rem;
            position: relative;
            z-index: 0;
            background: #1366dc;

            > span {
                transform: skew(30deg);
            }

        }

        .active {
            background: #1f97f6!important;
        }
        .active:before {
            background: #1f97f6!important;
        }
        > li:nth-of-type(1):before {
            content: "";
            position: absolute;
            width: 20/20rem;
            height: 30/20rem;
            left: -10/20rem;
            transform: skew(-0deg);
            z-index: 90;
            box-shadow: -9px 0 6px #0f52a6;
            background: #1366dc;
        }
        > li:nth-last-of-type(1):before {
            content: "";
            position: absolute;
            width: 20/20rem;
            height: 30/20rem;
            right: -10/20rem;
            transform: skew(-0deg);
            z-index: 90;
            background: #1366dc;
        }

        .trapezoid {
            transform: skew(-30deg);
            background: #1366dc;
            box-shadow: 9px 0 6px #0f52a6;
            position: relative;
            margin-right: 3px;
        }
    }
}

.gyh {
    > ul {
        flex-direction: column;
        > li {
            width: 100%;
            > ul {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                padding: 0 10/20rem;
                justify-content: space-between;
                > li {
                    width: 63/20rem;
                    height: 50/20rem;
                    margin: 5/20rem;
                }
                 > li:nth-last-of-type(2),
                 > li:nth-last-of-type(3),
                 > li:nth-last-of-type(4),
                 > li:nth-last-of-type(5),
                > li:nth-last-of-type(1) {
                    width: 50/20rem;
                    height: 50/20rem;
                }
            }
        }
        > li:nth-of-type(2) {
            > ul {
                > li {
                    width: 63/20rem;
                    height: 50/20rem;
                    margin: 5/20rem;
                }
            }
        }
    }
}

.icon-lajitong {
    font-size: 25/20rem;
}

.lajiton-active {
    color: #36aafb;
}

.cqnc_lmp {
    > ul {
        > li {
            background: white!important;
            width: 25%;
            > ul {

                > li {
                    > button {
                        width: 65/20rem;
                    }
                }
            }
        }
        > li:nth-of-type(1) {
            width: 100%;
            ul {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                padding: 0 7/20rem;
                justify-content: space-between;
                > li {
                    button {
                        width: 70/20rem;
                        height: 45/20rem;
                    }
                }
            }
        }
    }
}
.cqnc_ys {
    > ul {
        > li {
            width: 25%;
            button {
                width: 65/20rem!important;
            }
        }
    }
}
</style>
