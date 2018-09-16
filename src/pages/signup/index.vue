<template>
  <div class="signup">
    <titleTemplate titleName = '欢迎加入公益猫' pageName = '注册'></titleTemplate>
    <div class="input">
      <div class="input-box">
        <label for=''>昵称</label>
        <input type='text' maxlength="10" placeholder='6-10位字母、数字、字符' v-model="username">
      </div>
      <span class="error-msg" v-show="nameError">{{nameError}}</span>
    </div>
    <div class="input">
      <div class="input-box">
        <label for=''>密码</label>
        <input type='password' placeholder='请输入你的密码' v-model="password">
      </div>
      <span class="error-msg" v-show="passwordError">{{passwordError}}</span>
    </div>
    <div class="input">
      <div class="input-box identify">
        <label for=''>验证码</label>
        <input type="text" placeholder='请输入验证码'>
        <button @click="getCode">{{count}}</button>
      </div>
      <span class="error-msg" v-show="passwordError">{{passwordError}}</span>
    </div>
    <p class="self mt25">点击注册帐号，表示同意 <a href="">服务条款</a> 和 <a href="">隐私条款</a> </p>
    <button class="submit mt30" @click="signup">注册帐号</button>
    <p class="already mt25">已有账号，直接
      <router-link to="/login">登录</router-link>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
// import { toSignup } from '@/service/getData'
import titleTemplate from '@/components/title'
import { md5, setStore } from '@/methods'

export default {
  data () {
    return {
      username: '', // 用户名
      password: '', // 密码
      nameError: '', // 用户名错误
      passwordError: '', // 密码错误
      identifyNumber: '获取验证码',
      show: true,
      count: 60,
      timer: null
    }
  },
  components: {
    titleTemplate
  },
  methods: {
    signup () {
      if (this.username.replace(/\s/g, '').length === 0) {
        this.nameError = '用户名不能为空'
        return false
      } else if (this.username.replace(/\s/g, '').length <= 3) {
        this.nameError = '用户名不能小于4位'
        return false
      }
      if (this.password.replace(/\s/g, '').length === 0) {
        this.passwordError = '密码不能为空'
        return false
      } else if (this.password.replace(/\s/g, '').length <= 5) {
        this.passwordError = '密码不能小于6位'
        return false
      }
      this.$axios.get('/api/signup', {
        params: {
          name: this.username,
          password: md5(this.password)
        }
      }).then((data) => {
        this.nameError = data.data.message
        if (data.data.state_type === 'success') {
          setStore(data.data.name)
          this.$router.push('login')
        }
      })
    },
    // getIdentify () {
    //   // if (this.time === 0) {
    //   //   this.identifyNumber = '重新获取验证码'
    //   // } else {
    //   //   setTimeout(function () {
    //   //     // this.identifyNumber = this.time--
    //   //     this.identifyNumber = '重新获取验证码'
    //   //   }, 1000)
    //   // }
    //   let time = 60
    //   setInterval(function () {
    //     if (time <= 60) {
    //       this.identifyNumber = '重新获取'
    //     } else {
    //       this.identifyNumber = '重新获取'
    //     }
    //   }, 1000)
    // }
    getCode () {
      const TIME_COUNT = 60
      if (!this.timer) {
        // this.count = TIME_COUNT
        setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            // clearInterval(this.timer)
            // this.timer = null
          }
        }, 1000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.signup{
  @include inputbox(600px, 80px);
  .input{
    position: relative;
    .input-box{
      position: relative;
      width: 350px;
      height: 40px;
      margin: 15px auto 10px;
      line-height: 40px;
      text-align: left;
      border-bottom: 2px solid #666;
      label{
        float: left;
        width: 105px;
        text-align: left;
        font-size: 22px;
      }
      input{
        width: 210px;
        height: 30px;
        font-size: 18px;
      }
    }
    .identify{
      label{
        float: left;
        width: 105px;
        text-align: left;
        font-size: 22px;
      }
      input{
        width: 120px;
        height: 30px;
        font-size: 18px;
      }
      button{
        @include btn(95px,28px, 14px, 5px);
      }
    }
    .error-msg{
      position: absolute;
      top: 12px;
      right: 0;
      width: 100px;
      margin: auto;
      text-align: left;
      color: #f00;
      font-size: 14px;
    }
  }
  .self{
    @include fs(14px, 0, font_HY, 400, $c6);
    a{
      color: $bg;
      &:hover{
        color: $btnBg;
      }
    }
  }
  .already{
    @include fs(16px, 0, font_HY, 400, $c6);
    a{
      color: $bg;
      &:hover{
        color: $btnBg;
      }
    }
  }
  .submit{
    @include btn(200px, 48px, 24px, 5px);
  }
}
</style>
