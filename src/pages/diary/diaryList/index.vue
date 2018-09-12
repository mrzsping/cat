<template>
  <div class="diary-list">
    <diaryItem v-for="item in diaryData" :key="item.id" :linkTo="'/page/diary/'+urlName+'/edit/'+item"></diaryItem>
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
  },
  computed: {
    urlName: function () {
      return this.$route.path.split('/').reverse()[0]
    }
  }

}
</script>

<style scoped lang="scss">
</style>
