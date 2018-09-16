<template>
  <div class="login">
    <titleTemplate titleName = '欢迎加入公益猫' pageName = '登陆'></titleTemplate>
    <!-- <inputTemplate first="昵称:" placeholderName="请输入你的昵称" type="text"></inputTemplate>
    <inputTemplate first="密码:" placeholderName="请输入你的密码" type="password"></inputTemplate> -->
    <div class="input">
      <div class="input-box">
        <label for=''>昵称</label>
        <input type='text' placeholder='请输入你的昵称' v-model="username">
      </div>
      <span class="error-msg" v-show="passwordError">{{passwordError}}</span>
    </div>
    <div class="input">
      <div class="input-box">
        <label for=''>密码</label>
        <input type='password' placeholder='请输入你的密码' v-model="password">
      </div>
      <span class="error-msg" v-show="passwordError">{{passwordError}}</span>
    </div>
    <button class="submit mt30" @click="login">登陆</button>
    <p class="mt25">
      <router-link to="/forget">忘记密码?</router-link>&nbsp;<router-link to="/signup">注册账号</router-link></p>
  </div>
</template>

<script type="text/ecmascript-6">
import titleTemplate from '@/components/title'
import { getStore, md5, setStore } from '@/methods'

export default {
  data () {
    return {
      username: '', // 用户名
      password: '', // 密码
      nameError: '', // 用户名错误
      passwordError: '' // 密码错误,
    }
  },
  components: {
    titleTemplate
  },
  mounted () {
    if (getStore('user')) {
      this.username = getStore('user')
    }
  },
  methods: {
    login () {
      this.$axios.post('/api/login', {
        name: this.username,
        password: md5(this.password)
      }).then((data) => {
        if (data.data.state_type === 'success') {
          setStore(data.data.name)
          this.$router.push('/page/index')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login{
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
  p{
    @include fs(14px, 0, font_HY, 400, $c6);
    a{
      color: $bg;
      &:hover{
        color: $btnBg;
        text-decoration: underline;
      }
    }
  }
  .submit{
    @include btn(200px, 48px, 24px, 5px);
  }
}
</style>
