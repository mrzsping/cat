<template>
  <div class="commet-wrapper">
    <div class="comment-person">
      <img src="@/assets/images/1.jpg" class="br" alt="" width="30px" height="30px">
      <input type="text">
      <button>评论</button>
    </div>
    <div class="comment-list">
      <img src="@/assets/images/1.jpg" class="br" alt="" width="30px" height="30px">
      <div class="comment-article">
        <p><label for="">author</label><span>12111111111111111131</span></p>
        <p><span>12:20</span>
        <span class="fr">回复</span></p>
      </div>
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
.commet-wrapper{
  margin-top: 20px;
  .comment-person{
    display: flex;
    height: 70px;
    padding: 0 20px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    >input{
      width: 895px;
      height: 30px;
      margin-left: 10px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    >button{
      margin-left: 20px;
      @include btn(50px, 24px, 14px, 5px);
    }
  }
  .comment-list{
    width: 960px;
    height: auto;
    padding: 10px 0;
    margin: 10px auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .comment-article{
      width: 960px;
      margin-left: 10px;
      >p{
        color: #666;
        label{
          color: $btnBg;
        }
      }
      p:first-child{
        margin-bottom: 10px;
        span{
          margin-left: 10px;
          word-wrap: break-word;
          word-break: break-all;
        }
      }
    }
  }
}
</style>
