<template>
  <div>
    <communityList v-for="x in list" :key="x.id" :linkTo="'/page/community/article/'+x">
      <commentNum slot="num"></commentNum>
      <comment slot="comment"></comment>
    </communityList>
  </div>
</template>

<script>
import communityList from '@/components/communityList'
import commentNum from '@/components/commentNum'
import comment from '@/components/comment'
export default {
  data () {
    return {
      list: [1, 2, 3]
    }
  },
  components: {
    communityList,
    commentNum,
    comment
  }
}
</script>

<style lang='scss'>
</style>
