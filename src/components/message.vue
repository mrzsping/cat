<template>
  <div class="message">
    <img src="@/assets/images/1.jpg" alt="" width="32px" height="32px" class="fl br mt5">
    <div>
      <p><span>13213</span><span class="fr">2018年12月21日 12:12</span></p>
      <p>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</p>
      <a href="" class="fr">
        <i class="iconfont icon-xinxi"></i>回复
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang='scss'>
.message{
  padding: 10px;
  margin-top: 30px;
  border: 1px solid #666;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  >div{
    margin-left: 32px;
    p:first-child{
      height: 24px;
      line-height: 24px;
    }
    a{
      font-size: 14px;
      color: $btnBg;
    }
  }
}
</style>
