<template>
<div class="">

  <div class="is-active" @click="hideDailog" v-if="!isHao">

    <div class="modal-content">
      <div class="title">投注明细</div>
      <ul>
        <li v-for="(item,j) in lotteryS">
          <div>
            <span>{{item.group}}</span>
            <span>({{item.name}})</span>
          </div>
          <div>
            <span class="monry">{{item.money}}</span>
          </div>
          <i @click.stop="delt(j)"></i>
        </li>

      </ul>
      <div class="total">
        <div>
          <span>组数</span>
          <span style="color: #0a44e1;">{{lengths}}</span>
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
      lotteryS: [],
      lengths: 0,
      zonghe: 0,
      odd: {},
      title: "",
      isHao: false

    }
  },
  mounted() {

    // console.log(this.lotteryS);
    console.log("sdasd");
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
    game_code:{
      type: Number
    },
    type_code:{
      type: Number
    }
  },

  created() {

    this.lotteryS = this.lotteryM;
    console.log(this.lotteryS);
    console.log("1");
    for (let i = 0; i < this.lotteryS.length; i++) {
      this.lotteryS[i].money = this.money;
      let s = this.lotteryS[i].key_s;
      this.odd[s] = this.money;
      this.lengths++;
      this.zonghe = this.lengths * this.money
    }

    // for (let key in this.lotteryS) {
    //
    //   // key.money = 2;
    //   this.lotteryS[key].money = this.money;
    //   let s = this.lotteryS[key].key_s;
    //   this.odd[s] = this.money;
    //   console.log(key + "xiaosi");
    //   this.lengths++;
    //   this.zonghe = this.lengths * this.money
    // }

  },
  beforeUpdate() {


  },
  methods: {
    sendParent(){
      this.$emit("listenToChildEvent",true);
    },
    delt(j) {
      console.log(this.lotteryS);
      console.log(j);
      this.lotteryS.splice(j, 1)
      this.lengths--;
      this.zonghe = this.lengths * this.money;
      if (this.lengths === 0) {
        this.$store.dispatch('hideDailogQ')
      }

    },
    kadun(){
      console.log("xiaosi");
    },
    xiazhu() {

      let oidInfo = getOid();
      this.odd.oid = oidInfo;
      this.odd.game_code = this.game_code;
      this.odd.type_code = this.type_code;
      this.odd.round = this.round;
      console.log(this.odd);
      this.$http.post('http://xiaopeng.lebole5.com/inup', JSON.stringify(this.odd), {}).then(res => {

        if ((res.data) instanceof Array) {
          this.isHao = true;
          this.title = "恭喜下注成功"
          this.sendParent();
          setTimeout(this.hideDailog,1200);

        } else if(res.data.msg == 4001) {
          console.log(typeof(res.data));
          this.isHao = true;
          this.title = "下注失败";
          setTimeout(this.kadun,1200);
          this.$router.push({
            path: '/login'
          })
          setTimeout(this.hideDailog,100);
        }
        else if (res.data.msg == 5003) {
          this.isHao = true;
          this.title = "下注期数错误"
          this.sendParent();
          setTimeout(this.hideDailog,1200);
        }
      })
    },
    hideDailog() {

      // console.log(this.lotteryS)
      this.$store.dispatch('hideDailogQ')
    }

  },
  components: {



  }
}
</script>

<style lang='less' rel="stylesheet/less">
@import url(../icon/iconfont.css);
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.icon-ok {
    display: none;
}

.is-active {

    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
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
                width: 4rem;
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
        div:nth-of-type(1){
          width: 70%;
        }
        div:nth-of-type(2){
          width: 30%;
        }
        i {
            position: absolute;
            top: 14/34rem;
            right: 20/45rem;
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
}
.modal_box_feedback {
    z-index: 99999;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        background: rgba(0,0,0,0.5);
        color: white;
        padding: 10px 40px;
        border-radius: 4px;
    }
}
</style>
