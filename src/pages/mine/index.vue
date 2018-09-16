<template>
  <div class="mine">
    <div class="setting fl">
      <h4>设置</h4>
      <ul class="setting-list" @click="linkMine">
        <li data-id="0">
          <router-link to="/page/mine/person" :class="{'active': current === 0}">个人资料</router-link>
        </li>
        <li data-id="1">
          <router-link to="/page/mine/notice" :class="{'active': current === 1}">消息通知</router-link>
        </li>
        <li data-id="2">
          <router-link to="/page/mine/collection" :class="{'active': current === 2}">我的收藏</router-link>
        </li>
        <li data-id="3">
          <router-link to="/page/mine/adoption" :class="{'active': current === 3}">关于领养</router-link>
        </li>
        <li data-id="4">
          <router-link to="/page/mine/aboutme" :class="{'active': current === 4}">关我和喵星人</router-link>
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
      current: 0
    }
  },
  components: {
  },
  methods: {
    linkMine (e) {
      if (e.target.nodeName.toLowerCase() === 'a') {
        this.current = Number(e.target.parentNode.dataset.id)
      }
    }
  }
  // beforeCreate () {
  //   console.log(111)
  //   if (this.$route.path.toString() === '/page/mine/person') {
  //     this.current = 0
  //   }
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // this.$router.push(to.path)
  //   // // console.log(from, to.path)
  //   // next()
  // }
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
  }
}
</style>
