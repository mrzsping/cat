<template>
  <div>
    <articleEdit>
      <button slot="apply" class="look">查看喵星人主人</button>
      <commentNum slot="num"></commentNum>
      <comment slot="comment"></comment>
    </articleEdit>
  </div>
</template>

<script type="text/ecmascript-6">
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

<style scoped lang="scss">
.look{
  @include btn_s(200px, 40px, 20px, 5px);
}
</style>
