<template>
  <div class="mine">
    <div class="setting fl">
      <h4>设置</h4>
      <ul class="setting-list">
        <li>
          <router-link to="/page/mine/person" class="active">个人资料</router-link>
        </li>
        <li>
          <router-link to="/page/mine/notice">消息通知</router-link>
        </li>
        <li>
          <router-link to="/page/mine/collection">我的收藏</router-link>
        </li>
        <li>
          <router-link to="/page/mine/adoption">关于领养</router-link>
        </li>
        <li>
          <router-link to="/page/mine/aboutme">关我和喵星人</router-link>
        </li>
      </ul>
    </div>
    <div class="fr setting-view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
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
.mine{
  width: 1100px;
  height: 850px;
  margin: 60px auto;
  overflow-y: auto;
  overflow-x: hidden;
  .setting{
    .setting-list{
      li{
        margin: 20px;
        a{
          color: $c6;
          font-size: 14px;
          &:hover{
            color: $btnBg;
            cursor: pointer;
          }
        }
        >.active{
          color: $btnBg;
        }
      }
    }
  }
  .setting-view{
    width: 900px;
    border: 1px solid #f00;
  }
}
</style>
