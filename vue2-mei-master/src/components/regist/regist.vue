<template>
  <div class="all1">
      <div class="cent1">
      	<a @click="goback" href="javascript:;">
  			<img src="../../../static/images/backing_out.png" alt="" />
  		</a>
		<h3>请填写您的注册信息</h3>
		<div class="form">
			<div>
				<span>用户账号:</span>
				<input type="text" v-model="userNumber" placeholder="6~15位字符"/>
			</div>
			<div>
				<span>登录密码:</span>
				<input type="text" placeholder="6~15位字符" v-model="passWord"/>
			</div>
			<div>
				<span>确认密码:</span>
				<input type="text" placeholder="请重复输入密码" v-model="passWordAgain"/>
			</div>
			<div>
				<span>您的姓名:</span>
				<input type="text" placeholder="请输入您的真实中文姓名" v-model="realName"/>
			</div>
			<div class="select_a">
				<span>取款密码:</span>
				<div class="input3">
          <select v-model="selected1">
            <option v-for="option in options" v-bind:value="option">
            {{option}}
              </option>
          </select>
          <select v-model="selected2">
            <option v-for="option in options" v-bind:value="option">
            {{option}}
              </option>
          </select>
          <select v-model="selected3">
            <option v-for="option in options" v-bind:value="option">
              {{option}}
              </option>
          </select>
          <select v-model="selected4">
            <option v-for="option in options" v-bind:value="option">
            {{option}}
              </option>
          </select>
          <select v-model="selected5">
            <option v-for="option in options" v-bind:value="option">
            {{option}}
              </option>
          </select>
          <select v-model="selected6">
            <option v-for="option in options" v-bind:value="option">
              {{option}}
              </option>
          </select>

					<!--<input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />-->
					<!--<input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />-->
					<!--<input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />-->
					<!--<input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />-->
					<!--<input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />-->
					<!--<input type="text" name="number" maxlength="1" size="1" pattern="^[0-9]$" />-->
				</div>
			</div>
			<div class="w">提款认证时需要，请勿遗忘</div>
			<div>
				<span>电子邮件:</span>
				<input type="text" placeholder="便于日后找回密码" v-model="email"/>
			</div>
			<div class="btn5">
				<button @click="subMit">确认提交</button>
			</div>
		</div>
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
      paypasswd:'',
      realName:"",
      passWordAgain:'',
      email:'',
      options:[0,1,2,3,4,5,6,7,8,9],
      selected1:0,
      selected2:0,
      selected3:0,
      selected4:0,
      selected5:0,
      selected6:0,
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
  created(){


  },
  methods: {
    // verifyPhone(phone) {
    //   if (!(/^(?![0-9]+$)\w{5,14}$/.test(phone))) {
    //     // this.errormsg = '账号有误，请检查！';
    //     return false;
    //   } else {
    //     // this.errormsg = '';
    //     return true;
    //   }
    // },
    subMit(){
      for (let i = 1; i < 7; i++) {
        let j = `selected${i}`
        let w = this[j]
        this.paypasswd =`${this.paypasswd}${this[j]}`
      }
      let params = {};
      params.username = this.userNumber;
      params.password = this.passWord;
      params.realname = this.realName;
      params.paypasswd = this.paypasswd;
      params.qqskype = this.email;
      this.$http.post("http://xiaopeng.lebole5.com/user/signup",JSON.stringify(params)).then(res => {
  console.log(res.msg);


      })

    },
    // 组件方法
    close() {
      this.dialog = false;
    },
    goback() {
      this.$store.dispatch('goBack') // 发送后退的状态
      // 后退
      this.$router.go(-1)

    },

    //        验证账号
   }
 }

</script>
<style lang="less" rel="stylesheet/less" scoped>
/*登录页*/

.container {
}
.all1{
	width:100%;
	height:100%;
	background-image:url(../../../static/images/back.png);
	background-size:100% 100%;
}

.cent1 > a{
	text-decoration:none;
	margin:0.5rem auto;
	display:inline-block;
	img{
		width:0.5rem;
		height:0.8rem;
	}
}


::-webkit-input-placeholder{
	color:#265DB8;
}
.cent1{
		padding:0.5rem 1.5rem;

	}
	.cent1 h3{
		padding:0;
		margin:0;
		color:#fff;
	}

.form input{
		width:9.7rem;
		height:2rem;
		line-height:2rem;
		border:1px solid #A9ACBC;
		border-radius:10px;
		background:rgba(156,159,176,0.3);
		padding-left:10px;
		margin-top:0.4rem;
	}
.form span{
		color:#E0E2E7;
		font-size:0.6rem;
	}
	.input3{
		display:flex;
    justify-content: space-between;
    width: 194/20rem;
    margin-left: 4/20rem;
	}

  .select_a{
    display: flex;
    align-items: center;
    height: 48/20rem;
    >span:nth-of-type(1){
      width: 51/20rem;
    }
  }

	.input3 select{
		width:1.5rem;
		height:2rem;
		text-align:center;
		outline:none;
		font-size:20px;
		appearance: none;
		-webkit-appearance: none;
		margin-left:1px;
		border-radius:5px;
    background: rgba(156, 159, 176, 0.3);
    padding-left: 8/20rem;
	}
	.w{
		color:#fff;
		margin:0.5rem 0 0.5rem 3rem;
	}
	.btn5{
		margin:1rem auto;
	}
	.btn5 button{
		width:96%;
		height:2rem;
		line-height:2rem;
		border-radius:10px;
		background:#3F79CB;
		color:#C6CEDF;
		font-size:0.7rem;
		border:none;
	}
</style>
