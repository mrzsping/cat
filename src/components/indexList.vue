<template>
  <div class="index-item">
    <img src="@/assets/images/1.jpg" alt="" width="275px" height="320px">
    <div class="index-con">
      <div class="fl">
        <img src="@/assets/images/1.jpg" alt="" width="32px" height="32px">
        <span>123</span>
      </div>
      <div class="fr">
        <i class="iconfont icon-aixin"></i>
        <i class="iconfont icon-xinxi"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  },
  props: ['list']
}
</script>

<style scoped lang="scss">
.index-item{
  @include box(275px, 360px, 1);
  float: left;
  margin: 10px;
  >img{
    border-radius: 10px;
  }
  .index-con{
    @include box(100%, 40px, 40px);
    img{
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}
</style>
