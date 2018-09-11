<template>
  <div class="person">
    <h4 class="fw4">个人资料</h4>
    <form action="">
      <ul>
        <li>
          <img src="@/assets/images/1.jpg" alt="" width="150px" height="150px">
          <input type="file">
        </li>
        <li>
          <label for="">昵称</label>
          <input type="text" placeholder="请输入昵称">
        </li>
        <li>
          <label for="">性别</label>
          <input type="radio" name="gender"><span>男</span>
          <input type="radio" name="gender"><span>女</span>
        </li>
        <li>
          <label for="">生日</label>
          <input type="text" placeholder="请输入生日">
        </li>
        <li>
          <label for="">手机</label>
          <input type="text" placeholder="请输入手机号">
        </li>
        <li>
          <label for="">现居地</label>
          <input type="text" placeholder="请输入现居地">
        </li>
      </ul>
      <input type="submit" value="提交">
    </form>
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
.person{
  input[type='submit']{
    @include btn(80px, 30px, 14px);
  }
  li{
    height: 40px;
    line-height: 40px;
    margin: 20px 0;
    label{
      display: inline-block;
      width: 60px;
    }
    input[type='text']{
      width: 300px;
      height: 24px;
      border: 1px solid $c6;
      border-radius: 5px;
    }
  }
  li:first-child{
    height: 150px;
    line-height: 150px;
  }
}
</style>
