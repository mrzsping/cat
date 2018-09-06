<template>
  <div class="search">
    <div class="search-box">
      <div class="top">
        <label for="">城市</label>
        <input type="text">
      </div>
      <div class="top">
        <label for="">性别</label>
        <span>
          <input type="radio" name="sex">
          <label for="">公猫</label>
        </span>
        <span>
          <input type="radio" name="sex">
          <label for="">母猫</label>
        </span>
        <span>
          <input type="radio" name="sex">
          <label for="">不明</label>
        </span>
      </div>
    </div>
    <div class="search-box">
      <div class="top">
        <label for="">年龄段</label>
        <input type="text">
      </div>
      <div class="top">
        <label for="">健康状况</label>
        <span>
          <input type="radio" name="health">
          <label for="">健康</label>
        </span>
        <span>
          <input type="radio" name="health">
          <label for="">一般</label>
        </span>
        <span>
          <input type="radio" name="health">
          <label for="">较弱</label>
        </span>
        <span>
          <input type="radio" name="health">
          <label for="">小残</label>
        </span>
        <span>
          <input type="radio" name="health">
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
  },
  methods: {
  }
}
</script>
<style lang='scss'>
.search{
  height: auto;
  overflow: hidden;
  .search-box{
    float: left;
    margin-right: 50px;
    height: 100%;
    line-height: 50px;
    .top{
      text-align: left;
      >label{
        @include fs(16px, 0, $font_HY, 400, #666);
      }
      >input{
        @include box(150px, 30px, 30px);
        margin-left: 20px;
        border: 1px solid $bc;
        font-size: 16px;
        border-radius: 10px;
        text-indent: 10px;
      }
      span{
          margin-left: 20px;
        label{

        }
        input{

        }
      }
    }
  }
  .search-btn{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100px;
    float: right;
    button{
      @include btn_s(50px, 30px, 16px, 5px);
    }
  }
}
</style>