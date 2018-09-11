<template>
  <div class="aboutme">
    <h4 class="fw4">关于我和喵星人</h4>
    <aboutMe  v-for="x in list" :key="x.id" linkTo="page"></aboutMe>
  </div>
</template>

<script>
import aboutMe from '@/components/communityList'
export default {
  data () {
    return {
      list: [1, 2]
    }
  },
  components: {
    aboutMe
  }
}
</script>

<style lang='scss'>
</style>
