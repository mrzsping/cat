<template>
  <div class="mine">
    <div class="setting fl">
      <h4>设置</h4>
      <ul class="setting-list">
        <li>
          <router-link to="/page/mine/person" class="active">个人资料</router-link>
        </li>
        <li>
          <router-link to="/page/mine/person">消息通知</router-link>
        </li>
        <li>
          <router-link to="/page/mine/person">我的收藏</router-link>
        </li>
        <li>
          <router-link to="/page/mine/person">关于领养</router-link>
        </li>
        <li>
          <router-link to="/page/mine/person">关我和喵星人</router-link>
        </li>
      </ul>
    </div>
    <div class="fr setting-view">
      <router-view></router-view>
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
  width: 1000px;
  height: 600px;
  margin: 60px auto;
  .setting{
    .setting-list{
      li{
        margin: 20px;
        a{
          color: $c6;
          font-size: 14px;
        }
        >.active{
          color: $btnBg;
        }
      }
    }
  }
  .setting-view{
    @include con(800px, 400px);
    border: 1px solid #f00;
  }
}
</style>
