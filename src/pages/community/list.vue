<template>
  <div>
    <communityList>
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
