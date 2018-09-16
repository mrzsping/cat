<template>
  <div class="publish">
      <div class="header">
        <div class="me-and-cat fl">
          <h4>
            <router-link to="/page/publish/me-and-cat">
              我和喵星人的故事
            </router-link>
          </h4>
          <i class="iconfont icon-sanjiaoxing"></i>
        </div>
        <div class="find-owner fr">
          <h4>
            <router-link to="/page/publish/find-owner">
              为喵星人寻找主主人
            </router-link>
          </h4>
          <i class="iconfont icon-sanjiaoxing"></i>
        </div>
      </div>
      <div class="publish-content">
        <form action="">
          <textarea name="" id="" resize="none" v-model="wordEdit">
          </textarea>
          <div class="pic">
            <div class="pic-fl">
              <button>点击添加图片</button>
              <ul class="pic-list">
                <li v-for="i in list" :key="i.id" @click="changeUrl(i)">
                  <img :src="'/static/img/'+i+'.jpg'" alt="" width="80px" height="80px">
                </li>
              </ul>
              <input class="position" type="text" placeholder="所在位置">
            </div>
            <img :src="urlShow" alt="" width="400px" height="400px" class="fr">
          </div>
        </form>
        <button class="publish-btn">发布</button>
      </div>
    <router-view>
    </router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      list: [1, 2, 1, 2, 2, 1, 2],
      wordEdit: '',
      urlShow: ''
    }
  },
  components: {
  },
  methods: {
    changeUrl (i) {
      this.urlShow = `/static/img/${i}.jpg`
    }
  },
  mounted () {
    this.urlShow = '/static/img/1.jpg'
  }
}
</script>

<style scoped lang="scss">
.publish{
  width: 1000px;
  margin: 80px auto;
  >.header{
    width: 800px;
    margin: auto;
    overflow: hidden;
    text-align: center;
    .me-and-cat, .find-owner{
      h4{
        cursor: pointer;
      }
      i{
        color: $btnBg;
      }
    }
  }
  .publish-content{
    margin-top: 30px;
    text-align: center;
    textarea{
      width: 100%;
      height: 180px;
      resize: none;
    }
    .pic{
      height: auto;
      overflow: hidden;
      margin: 30px 0;
      .pic-fl{
        float: left;
        width: 500px;
        height: auto;
        text-align: left;
        button{
          @include btn(120px, 30px, 14px, 5px);
        }
        .pic-list{
          padding: 20px;
          width: 300px;
          height: 300px;
          margin: 45px auto;
          border: 1px solid #ccc;
          li{
            float: left;
            margin-right: 30px;
            margin-bottom: 30px;
            font-size: 0;
            cursor: pointer;
          }
          li:nth-of-type(3n){
            margin: 0;
          }
          li:nth-of-type(7), li:nth-of-type(8), li:nth-of-type(9){
            margin-bottom: 0;
          }
        }
        .position{
          width: 500px;
          height: 50px;
          border-radius: 5px;
          border: 1px solid #666;
        }
      }
    }
    .publish-btn{
      @include btn(500px, 60px, 30px, 5px);
    }
  }
}
</style>
