<template>
<div class="">

  <div class="is-active-lm" @click="hideDailog" v-if="!isHao">

    <div class="modal-content-lm">
      <div class="title">投注明细</div>

      <div class="bet_name">

        {{xuanxiang}}


      </div>
      <div class="total">
        <div>
          <span>组数</span>
          <span style="color: #0a44e1;">{{lengthss}}组</span>
        </div>
        <div>
          <span>总计</span>
          <span style="color: #0a44e1;">{{zonghe}}元</span>
        </div>
      </div>
      <footer>
        <span @click.stop="xiazhu">确认</span>
        <span>取消</span>
      </footer>
    </div>
  </div>

  <div v-show="isHao">
    <div class="modal_box_feedback">
      <div>{{title}}</div>
    </div>
  </div>

</div>
</template>
<script>
import {

  getOid,

} from '../api'


export default {

  data() {
    return {
      xuanxiang:'',
      lengthss:1,
      lotteryS: [],
      lengths: 0,
      zonghe: 0,
      odd: {
        number: ''
      },
      title: "",
      isHao: false

    }
  },
  mounted() {


  },

  props: {

    lotteryM: {
      type: Array
    },
    money: {
      type: String
    },
    round: {
      type: String
    },
    game_code: {
      type: Number
    },
    type_code: {
      type: Number
    },
    indeT:{
      type:Number
    }
  },

  created() {

  console.log(this.indeT+"first");
    this.lotteryS = this.lotteryM;
    console.log(this.lotteryS);
    console.log("1");
    for (let i = 0; i < this.lotteryS.length; i++) {

      let s = `${this.lotteryS[i].name},`
      // console.log(111);
      let z = this.lotteryS[i].key_s;
      let q = z.substr(3)
      let w = `${q},`
      console.log(w);
      console.log(this.odd.number);
      this.xuanxiang = this.xuanxiang + s;
      this.odd.number = this.odd.number + w;
      console.log(this.odd.number);
      this.lengths++;
    }
    this.xuanxiang = this.xuanxiang.substr(0, this.xuanxiang.length - 1);
    this.odd.number =this.odd.number.substr(0, this.odd.number.length - 1);
    if (this.type_code>=27) {
      console.log(this.lotteryS.length);
      console.log(this.indeT);
      this.lengthss = this.kadun(this.lotteryS.length,this.indeT);
      this.zonghe = this.lengthss*this.money
      console.log(this.lengthss);
    }
    else {
      console.log("222");
      this.lengthss=1
      this.zonghe = this.money*1;
    }

// this.odd.number


  },
  beforeUpdate() {


  },
  methods: {
    sendParent(){
      this.$emit("listenToChildEvent",true);
    },
    kadun(m, s) {
      console.log("dad");

      function factorial(n) {
        return (n <= 1) ? 1 : n * factorial(n - 1);
      }
      console.log("dad");
      return factorial(m) / factorial(m - s) / factorial(s)

    },
    xiazhu() {

      let oidInfo = getOid();
      this.odd.oid = oidInfo;
      this.odd.game_code = this.game_code;
      this.odd.type_code = this.type_code;
      this.odd.round = this.round;
      this.odd.betmoney = this.money;
      console.log(this.odd);
      this.$http.post('http://xiaopeng.lebole5.com/inup', JSON.stringify(this.odd), {}).then(res => {

        if ((res.data) instanceof Array) {
          this.isHao = true;
          this.title = "恭喜下注成功"
          this.sendParent();
          setTimeout(this.hideDailog, 1200);


        } else if (res.data.msg == 4001) {
          console.log(typeof(res.data));
          this.isHao = true;
          this.title = "下注失败";
          setTimeout(this.kadun, 1200);
          this.$router.push({
            path: '/login'
          })
          setTimeout(this.hideDailog, 100);
        } else if (res.data.msg == 5003) {
          this.isHao = true;
          this.title = "下注期数错误"
          setTimeout(this.hideDailog, 1200);
        }
      })
    },
    hideDailog() {

      // console.log(this.lotteryS)
      this.$store.dispatch('hideDailogW')
    }

  },
  components: {



  }
}
</script>
<style lang='less' rel="stylesheet/less">
@import url(../icon/iconfont.css);

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}
/* .fade-leave-active in <2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.icon-ok {
    display: none;
}

.is-active-lm {

    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content-lm {
    font-family: '黑体';
    width: 530/45rem;

    border-radius: 20/45rem;

    background: #fff;

    text-align: center;
    font-size: 32/45rem;
    .title {
        height: 72/45rem;
        line-height: 72/45rem;
        font-size: 34/45rem;
        font-weight: bold;
        border-bottom: 1/20rem solid #f1f1f1;
    }
    ul {
        max-height: 50vh;
        overflow: auto;
    }
    ul li {
        padding-left: 20/45rem;
        padding-right: 20/45rem;
        text-align: left;
        width: 100%;
        display: flex;
        position: relative;
        height: 72/45rem;
        line-height: 72/45rem;
        border-top: 2px solid #f1f1f1;
        div {

            border-left: 2px solid #f1f1f1;
            display: flex;
            text-align: left;
            span {
                font-family: arial;
            }
            span:nth-child(2) {
                width: 65/45rem;
                float: right;
                margin-right: 20/45rem;
            }
            .monry {
                padding: 0;
                width: 100%;
                text-align: center;
            }
            span:nth-child(1) {
                float: left;
                letter-spacing: 1px;
                /*padding-left: 20/45rem;*/
            }
        }
        div:nth-of-type(1) {
            width: 70%;
        }
        div:nth-of-type(2) {
            width: 30%;
        }
        i {
            position: absolute;
            top: 19/45rem;
            right: 10/45rem;
            width: 30/45rem;
            height: 30/45rem;
            border-radius: 10/45rem;
            background: url("../../static/images/ll.png") no-repeat;
            background-size: 100% 100%;
        }
        div:nth-child(1) {
            border: none;
        }
    }
    .total {
        border-top: 2px solid #f1f1f1;
        height: 76/45rem;
        line-height: 76/45rem;
        display: flex;
        div {
            width: 50%;
            word-spacing: 7/45rem;
            span {
                width: 30%;
            }
            span:nth-child(2) {
                font-family: arial;
            }
        }
    }
    footer {
        height: 70/45rem;
        background: #1366dc;
        display: flex;
        border-radius: 0 0 10/45rem 20/45rem;
        span {
            line-height: 70/45rem;
            color: #fff;
            width: 265/45rem;
            box-sizing: border-box;
        }
        span:nth-child(1) {
            border-right: 1px solid #fff;

        }
        span:nth-child(2) {
            border-left: 1px solid #fff;

        }
    }

    .type_name {
        border-bottom: 1/20rem solid #f1f1f1;
        height: 31/20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16/20rem;
    }

    .bet_name {
        padding: 4/20rem;
        color: black;
        font-size: 16/20rem;
        word-wrap: break-word;
    }

}
</style>
