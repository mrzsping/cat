<template>
  <div class="community-edit">
    <div class="community-edit_wrapper">
      <p><i class="iconfont icon-icon1"></i>标题:<span>喵星人的成长故事</span>
      <span class="fr">2018年8月11日 10:12</span></p>
      <div class="content">
        <p>122222222222222222222222222222222222222222</p>
        <img src="@/assets/images/1.jpg" alt="" width="400px" height="320px">
        <ul>
          <li class="active"> <img src="@/assets/images/1.jpg" alt="" width="80px" height="80px"></li>
          <li> <img src="@/assets/images/1.jpg" alt="" width="80px" height="80px"></li>
          <li> <img src="@/assets/images/1.jpg" alt="" width="80px" height="80px"></li>
          <li> <img src="@/assets/images/1.jpg" alt="" width="80px" height="80px"></li>
          <li> <img src="@/assets/images/1.jpg" alt="" width="80px" height="80px"></li>
          <li> <img src="@/assets/images/1.jpg" alt="" width="80px" height="80px"></li>
        </ul>
        <slot name="apply"></slot>
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
.community-edit{
  @include box(1000px, auto, 1);
  text-align: left;
  margin: 20px 0;
  .community-edit_wrapper{
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
      padding: 0 20px 0 30px;
      box-sizing: border-box;
      text-align: center;
      p{
        min-height: 160px;
        text-align: left;
      }
      >ul{
        height: 80px;
        margin: 15px 0;
        display: flex;
        justify-content: center;
        text-align: center;
        li{
          margin-right: 10px;
          padding: 1px;
          border: 1px solid transparent;
          width: 79px;
          height: 79px;
        }
        .active{
          border-color: #f00;
        }
      }
    }
  }
}
</style>
