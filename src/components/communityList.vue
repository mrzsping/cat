<template>
  <div class="community-item">
    <div class="community-wrapper">
      <p><i class="iconfont icon-icon1"></i>标题:<span>喵星人的成长故事</span>
      <span class="fr">2018年8月11日 10:12</span></p>
      <div class="content">
        <div class="fl">
          <p>
            123131313communitycommunitycommunitycommunitycommunitycommunitycommunity
          </p>
          <router-link to="/page/community/article" class="fr">查看全文</router-link>
        </div>
        <img src="@/assets/images/1.jpg" alt="" class="fr" width="180px" height="180px">
      </div>
      <slot name="num"></slot>
    </div>
    <slot name="comment"></slot>
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
.community-item{
  @include box(1000px, auto, 1);
  margin: 20px 0;
  .community-wrapper{
    height: 250px;
    border: 1px solid #ccc;
    >p{
      padding: 0 10px;
      box-sizing: border-box;
      @include box(100%, 40px, 40px);
      @include fs(24px, 0, $font_HY, 600, #000);
      .iconfont{
        @include fs(24px, 0, $font_HY, 600, $btnBg);
      }
      span:last-child{
        font-size: 12px;
        color: #ccc;
      }
    }
    .content{
      @include box(1000px, 180px, 1);
      padding: 0 20px 0 30px;
      box-sizing: border-box;
      >.fl{
        @include con(720px, 180px);
        margin-right: 50px;
        p{
          height: 160px;
        }
        a{
          color: $btnBg;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
