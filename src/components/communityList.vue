<template>
  <div class="community-item">
    <div class="community-wrapper">
      <p><i class="iconfont icon-icon1"></i>标题:<span>{{item.title}}</span>
      <span class="fr">{{item.time | getDate}}</span></p>
      <div class="content">
        <div class="fl">
          <p>{{item.content}}</p>
          <router-link :to="linkTo" class="fr">查看全文</router-link>
        </div>
        <img src="@/assets/images/1.jpg" alt="" class="fr" width="180px" height="180px">
      </div>
      <slot name="num"></slot>
    </div>
    <slot name="comment"></slot>
  </div>
</template>

<script>
import { getDate } from '@/methods'
export default {
  data () {
    return {
    }
  },
  components: {
  },
  props: ['linkTo', 'item'],
  computed: {
<<<<<<< HEAD
=======
    // date () {
    //   return getDate(item.time)
    // }
>>>>>>> f7a0bd6dfc3f74129327918817591171af7a4906
  },
  filters: {
    getDate: getDate
  }
}
</script>

<style lang='scss'>
.community-item{
  @include box(100%, auto, 1);
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
      @include box(100%, 180px, 1);
      padding: 0 20px 0 30px;
      box-sizing: border-box;
      >.fl{
        @include con(72%, 180px);
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
