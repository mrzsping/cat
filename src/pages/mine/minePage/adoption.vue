<template>
  <div class="adoption">
    <h4 class="fw4">
      <span>我领养的喵星人</span>
      <span>领养我发布的</span>
    </h4>
    <adoptionItem></adoptionItem>
  </div>
</template>

<script>
import adoptionItem from '@/pages/mine/minePage/adoptionItem'
export default {
  data () {
    return {
    }
  },
  components: {
    adoptionItem
  }
}
</script>

<style lang='scss'>
</style>
