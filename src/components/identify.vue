<template>
  <div class="input-box">
    <label for=''>{{first}}</label>
    <input :type='inputType' :placeholder='placeholderName'>
    <button>{{get}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      get: '获取验证码'
    }
  },
  components: {

  },
  props: ['first', 'placeholderName', 'inputType']
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
    width: 80px;
    text-align: left;
    font-size: 22px;
  }
  input{
    width: 160px;
    height: 30px;
    font-size: 18px;
  }
  button{
    @include btn(95px,28px, 14px, 5px);
  }
}
</style>
