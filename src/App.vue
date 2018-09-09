<template>
  <div id="app">
    <router-view/>
    <error></error>
  </div>
</template>

<script>
import error from '@/components/error'
export default {
  name: 'App',
  components: {
    error
  },
  created () {
    this.$root.$data.store = []
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
@font-face {
  font-family: catStyle;
  src: url('./assets/fonts/HYLeMiaoTiJRegular.ttf');
}
</style>
