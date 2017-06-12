<template>
<div class="is-active" @click="hideDailog">

  <div class="modal-content">
    <div v-for="(k,v) in titleDate" v-on:click="sendMsgToParent(v)">
      {{k}}
      <!-- {{v}} -->
    </div>
    <i class="up"></i>
  </div>
</div>
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
    hideDailog(){
      this.$store.dispatch('hideDailogQ')
    },
    sendMsgToParent(v) {

      this.$emit("listenToChildEvent", v);
    }
  }
}
</script>

<style lang='less' rel="stylesheet/less">
@import url(../icon/iconfont.css);
.icon-ok {
    display: none;
}

.is-active {
    padding-top: 48px;
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.modal-content {

    margin-top: 10/20rem;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 6px;
    position: relative;
    .up {
        position: absolute;
        top: -10/20rem;
        right: 34%;
        border-right: 10/20rem solid transparent;
        border-left: 10/20rem solid transparent;
        border-bottom: 10/20rem solid white;
    }

    > div {

        width: 45%;
        text-align: center;
        border: 1px solid #d1506d;
        border-radius: 2/20rem;
        margin-top: 6px;
        position: relative;
        .active {
            .right_down {
                display: block;
                border-right: 19/20rem solid #d1506d;
                border-top: 19/20rem solid transparent;
                position: absolute;
                right: 0;
                bottom: 0;
            }
            .icon-ok {
                position: absolute;
                right: 0;
                bottom: -6px;
                /*color: white;*/
                font-size: 7/20rem;
                color: white;
            }
            .icon-ok {
                display: block;
            }

        }

    }

}
</style>
