<template>
  <div class="diary">
    <div class="diary-cat">
      <div class="header">
        <div class="me-and-cat fl">
          <h4 @click="change">
              我和喵星人的故事
          </h4>
          <i class="iconfont icon-sanjiaoxing" v-show="icon"></i>
        </div>
        <div class="find-owner fr">
          <h4 @click="changeI">
              为喵星人寻找主主人
          </h4>
          <i class="iconfont icon-sanjiaoxing" v-show="!icon"></i>
        </div>
      </div>
      <div class="diary-img">
        <img src="@/assets/images/1.jpg" alt="" class="br" width="100px" height="100px">
        <h2><span>我爱喵星人</span>的日记</h2>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      icon: true
    }
  },
  components: {
  },
  methods: {
    change () {
      this.$router.push('/page/diary/diaryList')
      this.icon = true
    },
    changeI () {
      this.$router.push('/page/diary/diaryFindList')
      this.icon = false
    }
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
