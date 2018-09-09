<template>
  <div>
    <articleEdit></articleEdit>
    <commentNum></commentNum>
    <comment></comment>
  </div>
</template>

<script>
import articleEdit from '@/components/articleEdit'
import commentNum from '@/components/commentNum'
import comment from '@/components/comment'
export default {
  data () {
    return {
    }
  },
  components: {
    articleEdit,
    commentNum,
    comment
  }
}
</script>

<style lang='scss'>
</style>
