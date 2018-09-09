<template>
  <div class="error" v-show="error.length" ref="error">
    <div class="error-info">
      <p>您输入的密码不正确</p>
      <button class="error-btn" @click="close">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: this.$root.$data.store
    }
  },
  components: {
  },
  props: {
  },
  methods: {
    close () {
      this.$refs.error.style.display = 'none'
    }
  }
}
</script>

<style lang='scss'>
.error{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  .error-info{
    width: 359px;
    height: 200px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    >p{
      min-height: 110px;
      line-height: 20px;
      padding: 10px 30px;
      margin-bottom: 12px;
      font-size: 16px;
    }
    .error-btn{
      @include btn(80px, 40px, 14px, 5px)
    }
  }
}
</style>
