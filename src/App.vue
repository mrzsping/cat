<template>
  <div id="app">
    <headTop></headTop>
    <div class="view">
      <router-view/>
    </div>
    <FootBottom></FootBottom>
  </div>
</template>

<script>
import headTop from '@/components/head'
import FootBottom from '@/components/foot'
export default {
  name: 'App',
  components: {
    headTop,
    FootBottom
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  .view{
    width: 1200px;
    margin: auto;
  }
}
@font-face {
  font-family: catStyle;
  src: url('./assets/fonts/HYLeMiaoTiJRegular.ttf');
}
</style>
