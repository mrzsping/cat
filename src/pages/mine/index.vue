<template>
  <div class="mine">
    <headTop></headTop>
    <div class="mine-wrapper">
      <div class="setting fl">
        <h1>设置</h1>
        <ul>
          <li>
            <router-link >个人资料</router-link>
          </li>
          <li>
            <router-link >消息通知</router-link>
          </li>
          <li>
            <router-link >我的收藏</router-link>
          </li>
          <li>
            <router-link >关于领养</router-link>
          </li>
          <li>
            <router-link >关我和喵星人</router-link>
          </li>
        </ul>
      </div>
      <div class="fr">
        <router-view></router-view>
      </div>
    </div>
    <FootBottom></FootBottom>
  </div>
</template>

<script>
import headTop from '@/components/head'
import FootBottom from '@/components/foot'
export default {
  data () {
    return {
    }
  },
  components: {
    headTop,
    FootBottom
  }
}
</script>

<style lang='scss'>
</style>
