<template>
<section class="information" v-if= "lotteryObj.next.round">
  <div>
    <div>
      <div>
        {{lotteryObj.next.round}}期
      </div>
      <div>
        <span>余额:</span>
        <span class="balance">{{zMoney}}</span>
        <span>开奖时间:</span>
        <span>{{myfilter(endtime,endtime-fentime)}}</span>
      </div>
    </div>
    <div>
      <div>距截止下注</div>
      <div>
        <div>
          <span v-show="h>0"><span>{{h}}</span><i>:</i></span>

          <span>{{m}}</span>
          <i>:</i>
          <span>{{s}}</span>
        </div>

      </div>
    </div>
  </div>
  <div>
    <div>
      <span>{{lastRound}}</span>
      <span>期开奖</span>
    </div>

    <div class="lotteryOpen">
      <ul >
        <li v-for="(v,i) in lotteryObj.last.number">
          <i>{{v}}</i>

        </li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      h:0,
      m:0,
      s:0,
      lastRound:0,
      yMoney:0,
    // round:0,
    // entime:0
    }
  },
  mounted() {
    // console.log(this.titleDate);
  },
  props: {

     lotteryObj: {
      type: Object
    },
    endtime:{
      type:Number
    },
    fentime:{
      type:Number
    },
    zMoney:{
      type:Number
    },


  },
  created(){
    console.log();
    this.lastRound = (this.lotteryObj.last.round);
  // this.endtime = this.lotteryObj.endtime;

  },
  methods: {
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
    myfilter(second_time,second_endtime) {
      let time = parseInt(second_time);
      let timeE = parseInt(second_endtime);
      let second = second_time % 60;
      let secondE = second_endtime %60;
      this.s = this.p(secondE);

      let min = Math.floor(second_time/60) % 60;
      let minE = Math.floor(second_endtime/60) % 60;
      this.m = this.p(minE);
      let hour = Math.floor(second_time/3600);
      let hourE = Math.floor(second_endtime/3600);
      this.h = this.p(hourE);
      if (hour) {
        time = this.p(hour) + ":"+this.p(min) + ":" + this.p(second);
        return time;
      }else {
        time = this.p(min) + ":" + this.p(second);
        return time;
      }

    }
  },
  watch:{
    endtime:function(){

    }
  }

}
</script>


<style lang="less" rel="stylesheet/less" scoped>
  @blue: #146cdc;
  @font_title: #ffffff;
  @font_round: rgb(0,0,0);
  @font_balance: #6993d5;
  .information {
    position: fixed;
    top: 38/20rem;
    z-index: 9;
    background: white;
    width: 100%;
    .balance {
      color: @font_balance;
      width: 50/20rem;
      display: inline-block;
    }
    > div:nth-of-type(1) {
      display: flex;
      height: 50/20rem;
      border-bottom: 1px solid #f3f3f3;
      > div:nth-of-type(1) {
        width: 65.3%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-right: 1px solid #f3f3f3;
        padding-left: 10/20rem;
        font-size: 12/20rem;
        > div:nth-of-type(1) {
          font-size: 18/20rem;
          color: @font_round;
        }
      }
      > div:nth-of-type(2) {
        width: 34.7%;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        flex-direction: column;
        > div:nth-of-type(1) {
          font-size: 12/20rem;

        }
        > div:nth-of-type(2) {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          > div {
            display: flex;
            justify-content: center;
            font-size: 14/20rem;
            i {
              display: inline-block;
              margin: 0 1/20rem;
            }
            span{
              >span{
                background: #404040;
                color: @font_title;
                display: inline-block;
                width: 21/20rem;
                height: 21/20rem;
                border-radius: 3/20rem;
              }
            }
            >span:nth-of-type(2){
              background: #404040;
              color: @font_title;
              display: inline-block;
              width: 21/20rem;
              height: 21/20rem;
              border-radius: 3/20rem;
            }

            >span:nth-of-type(3){
              background: #404040;
              color: @font_title;
              display: inline-block;
              width: 21/20rem;
              height: 21/20rem;
              border-radius: 3/20rem;
            }
          }
        }
      }
    }
    > div:nth-of-type(2) {
      height: 40/20rem;
      display: flex;
      align-items: center;
      font-size: 12/20rem;
      z-index: 3;
      > div:nth-of-type(1) {
        width: 41%;
        display: flex;
        justify-content: flex-start;
        padding-left: 10/20rem;
      }
      > div:nth-of-type(2) {
        width: 59%;
        >ul {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-left: 1/20rem;
          li {
            color: @font_title;
            margin-left: 1.5/20rem;
            width: 17/20rem;
            height: 17/20rem;
            text-align: center;
            background: @blue;
            border-radius: 20/20rem;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            >i{
              display: block;
            }
          }
        }
      }
    }
    .lotteryOpen{
      display: flex;
      ul{
        margin-left: -2/20rem
      }
    }
  }
</style>
