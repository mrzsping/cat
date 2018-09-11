<template>
  <div class="diary">
    <div class="diary-cat">
      <div class="header">
        <div class="me-and-cat fl">
          <h4>我和喵星人的故事</h4>
          <i class="iconfont icon-sanjiaoxing"></i>
        </div>
        <div class="find-owner fr">
          <h4>为喵星人寻找主主人</h4>
          <i class="iconfont icon-sanjiaoxing"></i>
        </div>
      </div>
      <div class="diary-img">
        <img src="@/assets/images/1.jpg" alt="" class="br" width="100px" height="100px">
        <h2><span>我爱喵星人</span>的日记</h2>
      </div>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
.diary{
  width: 1000px;
  margin: 80px auto;
  text-align: center;
  .diary-cat{
    >.header{
      width: 800px;
      margin: auto;
      overflow: hidden;
      .me-and-cat, .find-owner{
        h4{
          cursor: pointer;
        }
        i{
          color: $btnBg;
        }
      }
    }
    .diary-img{
      span{
        color: $btnBg;
      }
    }
  }
}
</style>
