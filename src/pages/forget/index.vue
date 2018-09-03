<template>
 <div class="forget">
    <titleTemplate titleName = '欢迎加入公益猫' pageName = '修改密码'></titleTemplate>
    <inputTemplate first="昵称:" placeholderName="请输入你的昵称" type="text"></inputTemplate>
    <inputTemplate first="新密码:" placeholderName="请输入你的密码" type="password"></inputTemplate>
    <inputTemplate first="重复密码:" placeholderName="请输入你的密码" type="text"></inputTemplate>
    <identify>
    </identify>
    <button class="submit mt30">注册帐号</button>
    <p class="mt25">改变主意，直接
      <router-link to="/login">登录</router-link>
    </p>
 </div>
</template>

<script>
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

<style lang='scss'>
.forget{
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
