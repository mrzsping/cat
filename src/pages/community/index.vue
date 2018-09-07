<template>
  <div class="community">
    <div class="community-remenber">
      <div class="fl">
        <p><i class="iconfont icon-icon1"></i>发现喵星人</p>
        <div class="ml30 title">
          <img src="@/assets/images/1.jpg" alt="" width="40px" height="40px" class="br">
          <button>记录喵星人</button>
        </div>
      </div>
      <img class="fr" src="@/assets/images/1.jpg" alt="" width="50px" height="200px">
    </div>
    <p><i class="iconfont icon-icon1"></i>寻找喵星人</p>
    <search></search>
  </div>
</template>

<script>
import search from '@/components/search'
export default {
  data () {
    return {
    }
  },
  components: {
    search
  }
}
</script>

<style lang='scss'>
.community{
  .community-remenber{
    @include box(100%, 200px, 1);
    .title{
      button{
        @include btn(150px, 40px, 16px)
      }
    }
  }
}
</style>
