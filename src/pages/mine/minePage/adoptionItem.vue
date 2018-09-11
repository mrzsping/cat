<template>
  <div class="adoption-item">
    <img src="@/assets/images/1.jpg" alt="" width="180px" height="180px" class="fl">
    <table>
      <tr>
        <td>猫猫</td>
        <td>12313</td>
        <td><a href="">修改</a></td>
      </tr>
      <tr>
        <td>主人</td>
        <td>12313</td>
        <td><a href="">修改</a></td>
      </tr>
      <tr>
        <td>领养日</td>
        <td>1231312</td>
        <td><a href="">修改</a></td>
      </tr>
      <tr>
        <td>健康状况</td>
        <td>1212</td>
        <td><a href="">修改</a></td>
      </tr>
      <tr>
        <td>领养地点</td>
        <td>12313131</td>
        <td><a href="">修改</a></td>
      </tr>
    </table>
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
.adoption-item{
  height: 200px;
  margin-top: 30px;
  border-bottom: 1px solid $c6;
  table{
    width: 600px;
    tr:first-child{
      td:first-child{
        width: 100px;
      }
    }
    tr{
      height: 32px;
      line-height: 32px;
      td:first-child{
        font-weight: 600;
      }
      td:last-child{
        a{
          color: $c6;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
