<template>
 <div class="forget">
    <titleTemplate titleName = '欢迎加入公益猫' pageName = '修改密码'></titleTemplate>
    <div class="input">
      <div class="input-box">
        <label for=''>昵称</label>
        <input type='text' placeholder='请输入你的昵称' v-model="username">
      </div>
      <span class="error-msg" v-show="passwordError">{{passwordError}}</span>
    </div>
    <div class="input">
      <div class="input-box identify">
        <label for=''>验证码</label>
        <input type="text" placeholder='请输入验证码'>
        <button>获取验证码</button>
      </div>
      <span class="error-msg" v-show="passwordError">{{passwordError}}</span>
    </div>
    <button class="submit mt30">确认修改</button>
    <p class="mt25">改变主意，直接
      <router-link to="/login">登录</router-link>
    </p>
 </div>
</template>

<script>
import titleTemplate from '@/components/title'
export default {
  data () {
    return {
      passwordError: '',
      username: ''
    }
  },
  components: {
    titleTemplate
  }
}
</script>

<style lang='scss'>
.forget{
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
