<template>
  <div>

    <div class="container">

      <div>
        <div class="logo"></div>
      </div>
      <ul class="login-ul">
        <li>
          <label>账号:</label>
          <!--<input type="text" v-model="userNumber" class="tel" placeholder='请输入手机号码'/>-->
          <!--<mu-text-field type="number" v-model="userNumber" class="tel" hintText="请输入手机号码"/>-->
          <mu-text-field type="text" @blur='verifyPhone(userNumber)' v-model="userNumber" :maxLength="16" label="请输入账号" :errorText="errormsg" hintText="请输入登录账号" class="tel" labelFloat/>
          <br/>
        </li>
        <li class='yzm'>
          <label>密码:</label>
          <mu-text-field type="password" @blur='verifyVrifyCode(passWord)'  v-model="passWord" label="请输入密码" :errorText="passWordE" class="messagenum" hintText="请输入登录密码" labelFloat/>
          <!--<input type="text" v-model="passWord" class="messagenum" placeholder='请输入验证码'/>-->

        </li>

        <!--信息提示-->
        <!--<li class="hint" v-if="errormsg">
          <p>{{errormsg}}</p>
        </li>-->
      </ul>
      <p class="ty">
        <i class='checked checkedBg' @click="disagree($event,$refs.login)"></i><span>我已阅读并同意彩票</span><a>
                《用户使用协议》</a></p>
      <!--<input type="button" value="登 录" class="login-ok" ref="login" @click="login"/>-->
      <mu-raised-button label="登 录" class="demo-raised-button login-ok" ref="login" @click="login" />

    </div>
    <!--弹出层-->
    <div>
      <mu-dialog :open="dialog" title="i美" @close="close">
        {{codeMessage}}
        <mu-flat-button slot="actions" primary @click="close" label="确定" />
      </mu-dialog>
    </div>

  </div>
</template>


<script>
// base 64

import base64 from 'js-base64'
//  md5
import md5 from 'blueimp-md5'
import { getLogin, getmember} from '../../api'
export default {
  data() {
    return {
      // 手机号码
      userNumber: '',
      // 验证码
      passWord: '',
      passWordE:'',// 验证码错误信息
      // 邀请码
      inviteCode: '',
      //        错误信息
      errormsg: '',
      dialog: false,
      codeMessage: '',//  返回的验证码信息
    }
  },
  methods: {
    // 组件方法
    close() {
      this.dialog = false;
    },

    //        验证账号
    verifyPhone(phone) {
      if (!(/^(?![0-9]+$)\w{4,16}$/.test(phone))) {
        this.errormsg = '账号有误，请检查！';
        return false;
      } else {
        this.errormsg = '';
        return true;
      }
    },
    //      验证密码
    verifyVrifyCode(code) {
      //  以字母开头，长度在6~18之间
      if (!(/^[a-zA-Z]\w{5,17}$/.test(code))) {
        this.passWordE = '验证码有误，请检查！'; // 规则不正确验证
        return false;
      } else {
        this.passWordE = '';
        return true;
      }
    },
    // 不同意用户协议
    disagree(e, login) {
      var i = e.target;
      //  检查是否有这个类名 没有就添加 一开始没有
      if (!i.classList.contains('checkedBr')) {  // 为假
        i.classList.remove('checkedBg')
        i.classList.add('checkedBr')
        console.log(login)
          login.backgroundColor = 'rgb(204, 204, 204)'
          login.setAttribute('disabled', 'disabled')
      } else {
        i.classList.add('checkedBg')
        i.classList.remove('checkedBr')
         login.backgroundColor = '#d1506d'
          login.removeAttribute('disabled')
      }
    },

    // 点击登陆   //  需要的参数 1 *手机号码  2  *验证码  3 可选参数 邀请码
    login() {

      //验证手机 及 验证码 规则
      if (this.verifyPhone(this.userNumber) && this.verifyVrifyCode(this.passWord)) {
        //          手机号码加密
        let userNumber = this.userNumber;
        //          验证码md5加密
        let passWord = this.passWord;
        //          邀请码
        //发送请求
        var params = {   // 获取token配置
          params:{

            username: userNumber,   //  登录账号

            password:passWord,  //  登录密码

          }
        }
        this.$http.get(getLogin(),params).then( res=>{
          // let
          // let  im_token,is_new,is_send,error
              console.log(res.data)
         if (res.data.error_no == 32) { // 0 代表成功获取token
            this.errormsg = '';
            this.passWordE = ''
            console.log('登陆成功')
            // console.log(d) // token

              // 将数据存在sessionStorage 中
              sessionStorage.setItem('im_token', JSON.stringify(res.data.uid))
              console.log( sessionStorage.getItem('im_token'))
              this.$store.dispatch('loginYes')
              window.history.go(-1)  // 返回个人中心




          }else{ // 错误验证码
            this.passWordE = '登陆失败，请检查密码格式！';
          }

        })

      } else {
        this.passWordE = '请检查密码格式是否正确！';
      }


    }
  },
  mounted() {

  }

}
</script>
<style lang="less" rel="stylesheet/less" scoped>
/*登录页*/

.container {

  .logo {
    width: 6rem;
    height: 6rem;
    background: url(../../../static/images/login-logo.png) no-repeat;
    background-size: 100%;
    margin: 3rem auto 0;
  }
  .login-ul {

    >li {
      margin-bottom: .44rem;
      position: relative;
    } // 错误提示
    .hint {
      color: #ff4081;
    }
  }
}

.tel {
  border: 0;
  padding-left: 10px;
  font-size: 16px;
}

.messagenum {
  border: 0;
  padding-left: 10px;
  font-size: 16px;
  /*width: 50%;*/
}

.getnum {
  border: 0;
  border: 1px solid #e66280;
  background: #fff;
  padding: 3px;
  color: #e66280;
  border-radius: 5px;
  position: absolute;
  right: 0px;
}

.login-ok {
  width: 100%;
  background: #d1506d;
  border: 0;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  border-radius: 7px;
  color: #fff;
}

.inv {
  margin-top: 10px;
  color: #e66280;
  text-decoration: underline;
}

.ty {
  margin-bottom: 10px;
  line-height: 28px;
}

.ty>a {
  color: #e66280;
}

.inv-con {
  display: none;
}

.return>i {
  width: 20px;
  height: 30px;
  display: inline-block;
  /*background: url(../../../static/return.png) no-repeat;*/
  background-size: 70%;
  position: absolute;
  left: 0;
  top: 10px;
}

.ty .checked {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-size: 100%;
  margin: 5px 5px 0px;
}

.checkedBr {
  border-radius: 50%;
  border: 1px solid #ff4081;
}

.checkedBg {
  background: url(../../../static/images/Currently-selected.png) no-repeat;
}
</style>
