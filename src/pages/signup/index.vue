<template>
  <div class="signup">
    <titleTemplate titleName = '欢迎加入公益猫' pageName = '注册'></titleTemplate>
    <inputTemplate first="昵称:" placeholderName="请输入你的昵称" type="text"></inputTemplate>
    <inputTemplate first="密码:" placeholderName="请输入你的密码" type="password"></inputTemplate>
    <inputTemplate first="邮箱:" placeholderName="请输入你的邮箱" type="text"></inputTemplate>
    <identify first="验证码:" placeholderName="请输入你的验证码" type="text">
    </identify>
    <p class="self mt25">点击注册帐号，表示同意 <a href="">服务条款</a> 和 <a href="">隐私条款</a> </p>
    <button class="submit mt30">注册帐号</button>
    <p class="already mt25">已有账号，直接<a href="">登录</a></p>
  </div>
</template>

<script type="text/ecmascript-6">
import titleTemplate from '@/components/title'
import inputTemplate from '@/components/input'
import identify from '@/components/identify'
export default {
  data () {
    return {

    }
  },
  components: {
    titleTemplate,
    inputTemplate,
    identify
  }
}
</script>

<style scoped lang="scss">
.signup{
  @include box(600px, 80px);
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
