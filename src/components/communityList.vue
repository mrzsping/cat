<template>
  <div class="community-item">
    <div class="community-wrapper">
      <p><i class="iconfont icon-icon1"></i>标题:<span>喵星人的成长故事</span></p>
      <div class="content">
        <div class="fl">
          <p>
            123131313communitycommunitycommunitycommunitycommunitycommunitycommunity
          </p>
          <router-link tp="">查看全文></router-link>
        </div>
        <img src="@/assets/images/1.jpg" alt="" class="fr" width="180px" height="180px">
      </div>
      <ul class="comment">
        <li><i class="iconfont icon-unie60d"></i><span>12</span></li>
        <li><i class="iconfont icon-xinxi"></i><span>12</span></li>
        <li><i class="iconfont icon-aixin1"></i><span>12</span></li>
      </ul>
    </div>
    <comment></comment>
  </div>
</template>

<script>
import comment from '@/components/comment'
export default {
  data () {
    return {
    }
  },
  components: {
    comment
  }
}
</script>

<style lang='scss'>
.community-list{
  @include box(100px, 250px, 1);
  border: 1px solid #666;
}
</style>
