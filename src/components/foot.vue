<template>
  <div class="foot">
   <div class="foot-container">
      <img src="@/assets/images/1.jpg" alt="" class="logo" width="150px" height="150px">
      <ul class="contact">
        <li>联系我们</li>
        <li>email:11111111111111</li>
        <li>qq:qqqqqqqqqqqqq</li>
        <li>tel:12313131</li>
      </ul>
        <div class="wechat">
          <h4>微信公众号</h4>
          <img src="@/assets/images/1.jpg" alt="" width="130px" height="130px">
          <p>扫一扫，我们一起来养猫</p>
      </div>
    </div>
    <p>Copyruight &copy; 2018-2019 公益猫</p>
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
.foot{
  @include box(100%, 220px, 1);
  background: #cb6640;
  .foot-container{
    @include box(1200px, 200px, 1);
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
    box-sizing: border-box;
    .contact{
      width: 400px;
      padding: 0 20px;
      box-sizing: border-box;
      color: #ffffff;
      line-height: 20px;
      border-style: solid;
      border-color: #666;
      border-width: 0 2px;
    }
    .wechat{
      color: #ffffff;
      text-align: center;
    }
  }
  p{
    text-align: center;
    @include fs(12px, 0, font_HY, 400, #ffffff);
  }
}
</style>
