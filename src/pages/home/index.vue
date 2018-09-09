<template>
  <div class="home">
    <div class="container">
      <img src="@/assets/images/1.jpg" alt="">
      <h2 class="mt30">关于猫的公益</h2>
      <p class="mt30">{{msg}}</p>
      <div class="btn-container mt25">
        <router-link to="/signup">
          <button class="btn">加入我们</button>
        </router-link>
       <router-link to="/page">
          <button class="btn">逛逛社区</button>
       </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      msg: '每一只喵都应该被爱，请为它寻找一个家'
    }
  },
  components: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
  .home{
    @include full($bg);
    .container{
      width: 800px;
      margin: 100px auto;
      text-align: center;
      img{
        width: 100%;
        height: 140px;
      }
      h2{
        @include fs(40px, 10px, catStyle, 400, #000000);
      }
      p{

      }
      .btn-container{
        .btn{
          @include btn(200px, 48px, 24px, 5px);
        }
      }
    }
  }
</style>
