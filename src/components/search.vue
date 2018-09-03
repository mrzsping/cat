<template>
  <div class="search">
    <div class="search-box">
      <div class="top">
        <label for="">城市</label>
        <input type="text">
      </div>
      <div class="bottom">
        <label for="">性别</label>
        <span>
          <input type="radio">
          <label for="">公猫</label>
        </span>
        <span>
          <input type="radio">
          <label for="">母猫</label>
        </span>
        <span>
          <input type="radio">
          <label for="">不明</label>
        </span>
      </div>
    </div>
    <div class="search-box">
      <div class="top">
        <label for="">年龄段</label>
        <input type="text">
      </div>
      <div class="bottom">
        <label for="">健康状况</label>
        <span>
          <input type="radio">
          <label for="">健康</label>
        </span>
        <span>
          <input type="radio">
          <label for="">一般</label>
        </span>
        <span>
          <input type="radio">
          <label for="">较弱</label>
        </span>
        <span>
          <input type="radio">
          <label for="">小残</label>
        </span>
        <span>
          <input type="radio">
          <label for="">残疾</label>
        </span>
      </div>
    </div>
    <div class="search-btn">
      <button>重置</button>
      <button>搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang='scss'>
</style>
