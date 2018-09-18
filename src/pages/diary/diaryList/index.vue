<template>
  <div class="diary-list">
    <diaryItem v-for="item in diaryData" :item="item" :key="item.id" :linkTo="'/page/diary/'+urlName+'/edit/'+item"></diaryItem>
  </div>
</template>

<script type="text/ecmascript-6">
import diaryItem from '@/components/communityList'
export default {
  data () {
    return {
      diaryData: []
    }
  },
  components: {
    diaryItem
  },
  computed: {
    urlName: function () {
      return this.$route.path.split('/').reverse()[0]
    }
  },
  methods: {
    meAndCat () {
      this.$axios.get('/api/article', {
        params: {
          type: 'cat'
        }
      }).then((res) => {
        this.diaryData = res.data.result
      })
    }
  },
  mounted () {
    this.meAndCat()
  }

}
</script>

<style scoped lang="scss">
</style>
