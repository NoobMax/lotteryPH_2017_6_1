<template>
  <div class="account">
    <i-header title='账号设置'></i-header>
    <!--头像-->
    <div class="head_portrait">
      <a class="clearfix" href="#">
        <div class=""><span>头像</span></div>
        <div class="picture-box">
          <div class="picture"><img :src="im_tokenMsg?im_tokenMsg.data.avatar:'../../../static/images/deful-act.png'">
          </div>
          <img src="../../static/images/skip.png"></div>
        <!---->
        <!-- <form id="uploadForm" enctype="multipart/form-data" method="post" action="">
             <input type="file" name="imageFile" id="imageFile" onchange="fileSelected()" />
        </form> -->
      </a>
    </div>
    <!--信息-->
    <div class="msg container">
      <ul>
        <li><span>手机号</span><span v-if="im_tokenMsg">{{im_tokenMsg.data.mobile}}</span></li>
        <li><span>呢称</span><span v-if="im_tokenMsg">{{im_tokenMsg.data.name}}</span></li>
        <li><span>性别</span><span v-if="im_tokenMsg">{{im_tokenMsg.data.sex}}</span></li>
        <li><span>生日</span><span v-if="im_tokenMsg">{{im_tokenMsg.data.birthday}}</span></li>
        <li><span>地址管理</span><span></span></li>
      </ul>
    </div>


  </div>
</template>
<script>
  // 头部
  import iHeader from './i-header.vue'
  export default {
    data(){
      return {
        im_tokenMsg: '',
      }
    },
    methods: {
      getToken(){
        var im_token = JSON.parse(sessionStorage.getItem('im_token'))
        this.im_tokenMsg = im_token;
      }
    },
    mounted(){
      this.getToken()
    },
    components : {
      iHeader
    }

  }
</script>
<style lang="less" rel="stylesheet/less">
  .account {
    /*头部*/
    > header {
      background-color: #fff;
      height: 2rem;

      text-align: center;
      font-size: .8rem;
      .text-center {
        height: 100%;
        color: #d2516d;
        span:last-child {
          line-height: 2rem;
        }
        .arrows {
          margin-top: 14px;
          vertical-align: middle;
        }
      }
    }
    /*头像*/
    .head_portrait {
      padding: 0 15px;
      margin-top: 10px;
      background: #fff;
      width: 100%;
      height: auto;
      height: 100px;
      border-bottom: 1px solid #E7E7E7;
      a {
        display: flex;
        height: 100%;
        justify-content: space-between;

        > div {
          display: flex;
          flex: 1;
          align-items: center;
          span {
            color: #000;
          }

        }
        .picture-box {
          justify-content: flex-end;
          .picture {
            width: 70px;
            height: 70px;
            margin-right: 20px;
            background-color: #eeeeee;
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;

            }
          }
        }
      }

    }
    /*列表*/
    .msg {
      background: #fff;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid #ccc;
        font-size: 15px;
      }
    }
  }
</style>

