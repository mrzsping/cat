<template>
  <div class="diary-list">
    <diaryItem v-for="item in diaryData" :key="item.id" :linkTo="'/page/diary/edit/'+item"></diaryItem>
  </div>
</template>

<script type="text/ecmascript-6">
import diaryItem from '@/components/communityList'
export default {
  data () {
    return {
      diaryData: [1, 2, 3]
    }
  },
  components: {
    diaryItem
  }
}
</script>

<style scoped lang="scss">
</style>
