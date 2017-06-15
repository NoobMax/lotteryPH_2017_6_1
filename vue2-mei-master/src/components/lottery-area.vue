<template>
<section class="information">
  <div>
    <div>
      <div>
        622062期
      </div>
      <div>
        <span>余额:</span>
        <span class="balance">0.00</span>
        <span>开奖时间:</span>
        <span>14:57:00</span>
      </div>
    </div>
    <div>
      <div>距截止下注</div>
      <div>
        <div>
          <span>00</span>
          <i>:</i>
          <span>00</span>
          <i>:</i>
          <span>00</span>
        </div>

      </div>
    </div>
  </div>
  <div>
    <div>
      <span>622061</span>
      <span>期开奖</span>
    </div>

    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // console.log(this.titleDate);
  },
  props: ['titleDate'],
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
    myfilter(second_time) {

      let time = parseInt(second_time);
      let second = parseInt(second_time) % 60;
      let min = parseInt(second_time / 60);
      time = this.p(min) + ":" + this.p(second);
      return time;
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
    margin-top: 38/20rem;
    display: flex;
    flex-direction: column;
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
                    span {
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
            width: 27%;
            display: flex;
            justify-content: flex-end;
        }
        > div:nth-of-type(2) {
            width: 73%;
            ul {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                margin-left: 2/20rem;
                li {
                    width: 20/20rem;
                    height: 20/20rem;
                    background: @blue;
                    color: @font_title;
                    text-align: center;
                    border-radius: 20/20rem;
                    margin-right: 2/20rem;
                }
            }
        }
    }

}
</style>
