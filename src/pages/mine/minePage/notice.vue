<template>
  <div class="notice">
    <h4 class="fw4">
      <span>收到的评论</span>
      <span>收到的赞</span>
    </h4>
    <message v-for="item in list" :key="item.id"></message>
  </div>
</template>

<script>
import message from '@/components/message'
export default {
  data () {
    return {
      list: [1, 2, 3, 4]
    }
  },
  components: {
    message
  }
}
</script>

<style lang='scss'>
</style>
