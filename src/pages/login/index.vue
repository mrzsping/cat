<template>
  <div class="login">
    <titleTemplate titleName = '欢迎加入公益猫' pageName = '登陆'></titleTemplate>
    <inputTemplate first="昵称:" placeholderName="请输入你的昵称" type="text"></inputTemplate>
    <inputTemplate first="密码:" placeholderName="请输入你的密码" type="password"></inputTemplate>
    <button class="submit mt30">登陆</button>
    <p class="mt25">
      <router-link to="/forget">忘记密码?</router-link>&nbsp;<router-link to="/signup">注册账号</router-link></p>
  </div>
</template>

<script type="text/ecmascript-6">
import titleTemplate from '@/components/title'
import inputTemplate from '@/components/input'
export default {
  data () {
    return {

    }
  },
  components: {
    titleTemplate,
    inputTemplate
  }
}
</script>

<style scoped lang="scss">
.login{
  @include inputbox(600px, 80px);
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
