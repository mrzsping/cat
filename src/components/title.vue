<template>
  <div class="cat-title">
    <router-link to="/">
      <h1>{{titleName}}</h1></router-link>
    <p>{{pageName}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      name: '',
      pageNae: ''
    }
  },
  components: {

  },
  props: ['titleName', 'pageName']
}
</script>

<style scoped lang="scss">
.cat-title{
  width: 100%;
  h1{
    @include fs(48px, 0, catStyle, 400, #000000);
    }
  p{
    margin: 15px 0 30px;
    @include fs(28px, 0, font_HY, 400, $btnBg);
  }
}

</style>
