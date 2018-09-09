<template>
  <div class="community">
    <div class="community-remenber">
      <div class="community-left fl">
        <p><i class="iconfont icon-icon1"></i>发现喵星人</p>
        <div class="ml30 title">
          <img src="@/assets/images/1.jpg" alt="" width="60px" height="60px" class="br">
          <button>记录喵星人</button>
        </div>
      </div>
      <img class="fr" src="@/assets/images/1.jpg" alt="" width="50px" height="200px">
    </div>
    <p><i class="iconfont icon-icon1"></i>寻找喵星人</p>
    <search></search>
    <router-view></router-view>
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
  width: 1000px;
  margin: 100px auto;
  .community-remenber{
    @include box(100%, 200px, 1);
    .community-left {
      >p{
        @include box(100%, 40px, 40px);
        @include fs(24px, 0, $font_HY, 600, #000);
        .iconfont{
          @include fs(24px, 0, $font_HY, 600, $btnBg);
        }
      }
      .title{
        img{
          vertical-align: middle;
        }
        button{
          @include btn(150px, 40px, 16px)
        }
      }
    }
  }
  >p{
    @include box(100%, 40px, 40px);
    @include fs(24px, 0, $font_HY, 600, #000);
    .iconfont{
      @include fs(24px, 0, $font_HY, 600, $btnBg);
    }
  }
}
</style>
