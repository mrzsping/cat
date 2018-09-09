<template>
    <div class="comment">
      <ul class="comment-wrapper">
        <li><i class="iconfont icon-unie60d"></i><span>12</span></li>
        <li><i class="iconfont icon-xinxi"></i><span>12</span></li>
        <li><i class="iconfont icon-aixin1"></i><span>12</span></li>
      </ul>
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
.comment{
  height: 24px;
  line-height: 24px;
 .comment-wrapper{
    float: right;
    >li{
    float: left;
    margin-right: 40px;
    color: #666666;
  }
 }
}
</style>
