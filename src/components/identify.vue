<template>
  <div class="input-box">
    <label for=''>{{name}}</label>
    <input type="text" placeholder='请输入验证码'>
    <button>{{get}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      get: '获取验证码',
      name: '验证码:'
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.input-box{
  position: relative;
  width: 350px;
  height: 40px;
  margin: 15px auto;
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
    width: 130px;
    height: 30px;
    font-size: 18px;
  }
  button{
    @include btn(95px,28px, 14px, 5px);
  }
}
</style>
