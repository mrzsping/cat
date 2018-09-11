<template>
  <div class="index">
    <headTop></headTop>
    <router-view>
    </router-view>
    <FootBottom></FootBottom>
  </div>
</template>

<script type="text/ecmascript-6">
import search from '@/components/search'
import indexList from '@/components/indexList'
import headTop from '@/components/head'
import FootBottom from '@/components/foot'
export default {
  data () {
    return {
      indexData: [1, 2, 3, 4]
    }
  },
  components: {
    search,
    indexList,
    headTop,
    FootBottom
  }
}
</script>

<style scoped lang="scss">
.index{
  .index-head{
    @include box(100%, 150px, 1);
    background: url('/static/img/1.46ff16e.jpg') no-repeat 0/100%;
  }
  .content{
    @include box(1200px, auto, 1);
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    margin: auto;
    text-align: center;
    border-bottom: 1px solid $btnBg;
    .find{
      @include box(100%, 80px, 80px);
      border-bottom: 2px $btnBg;
    }
    .index-list{
      overflow: hidden;
    }
  }
}
</style>
