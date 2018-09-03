<template>
  <div class="index">
    <div class="index-head">
      <HeadTop></HeadTop>
    </div>
    <FootBottom></FootBottom>
  </div>
</template>

<script type="text/ecmascript-6">
import HeadTop from '@/components/head'
import FootBottom from '@/components/foot'
export default {
  data () {
    return {

    }
  },
  components: {
    HeadTop,
    FootBottom
  }
}
</script>

<style scoped lang="scss">
.index{
  .index-head{
    @include box(100%, 150px, 1);
    background: url(/static/img/1.46ff16e.jpg) no-repeat 0/100%;
  }
}
</style>
