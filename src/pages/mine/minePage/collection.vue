<template>
  <div class="collection">
    <h4 class="fw4">我的收藏</h4>
    <div class="mt30">
      <indexList :list="indexData" v-for="i in indexData" :key="i.id"></indexList>
    </div>
  </div>
</template>

<script>
import indexList from '@/components/indexList'
export default {
  data () {
    return {
      indexData: [1, 2, 3, 4]
    }
  },
  components: {
    indexList
  }
}
</script>

<style lang='scss'>
</style>
