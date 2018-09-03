<template>
  <div class="index">
    <div class="index-head">
      <HeadTop></HeadTop>
    </div>
    <div class="content">
      <div class="find">
        <h2>寻找喵星人</h2>
      </div>
      <search></search>
    </div>
    <FootBottom></FootBottom>
  </div>
</template>

<script type="text/ecmascript-6">
import HeadTop from '@/components/head'
import FootBottom from '@/components/foot'
import search from '@/components/search'
export default {
  data () {
    return {

    }
  },
  components: {
    HeadTop,
    FootBottom,
    search
  }
}
</script>

<style scoped lang="scss">
.index{
  .index-head{
    @include box(100%, 150px, 1);
    background: url(/static/img/1.46ff16e.jpg) no-repeat 0/100%;
  }
  .content{
    @include box(1200px, 80px, 80px);
    margin: auto;
    text-align: center;
    border-bottom: 1px solid $btnBg;
    .find{
    }
  }
}
</style>
