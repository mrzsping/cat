<template>
  <div class="publish">
      <div class="header">
        <div class="me-and-cat fl">
          <h4 @click="change">
            我和喵星人的故事
          </h4>
          <i class="iconfont icon-sanjiaoxing" v-show="icon"></i>
        </div>
        <div class="find-owner fr">
          <h4 @click="changeI">
            为喵星人寻找主主人
          </h4>
          <i class="iconfont icon-sanjiaoxing" v-show="!icon"></i>
        </div>
      </div>
      <div class="publish-content">
        <form action="">
          <input type="text" placeholder="标题"  class="title" v-model="title">
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
              <input class="position" v-model="position" type="text" placeholder="所在位置">
            </div>
            <img :src="urlShow" alt="" width="400px" height="400px" class="fr">
          </div>
        </form>
        <button class="publish-btn" @click="pushArticle">发布</button>
      </div>
    <router-view>
    </router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import { getStore } from '@/methods'
export default {
  data () {
    return {
      list: [1, 2, 1, 2, 2, 1, 2],
      wordEdit: '',
      urlShow: '',
      icon: true,
      title: '',
      type: 'cat'
    }
  },
  components: {
  },
  methods: {
    changeUrl (i) {
      this.urlShow = `/static/img/${i}.jpg`
    },
    change () {
      this.$router.push('/page/publish/me-and-cat')
      this.icon = true
      this.type = 'cat'
    },
    changeI () {
      this.$router.push('/page/publish/find-owner')
      this.icon = false
      this.type = 'find'
    },
    pushArticle () {
      let content = this.wordEdit
      let title = this.title
      let name = getStore('user')
      let type = this.type
      let time = (new Date()).getTime()
      this.$axios.get('/api/list/publish', {
        params: {
          content: content,
          title: title,
          name: name,
          love: false,
          type: type,
          time: time
        }
      }).then((data) => {
        if (data.data.state_type === 'success') {
          console.log(data.data.state_type)
          this.$router.push('/page/index')
        }
      })
    }
  },
  mounted () {
    this.urlShow = '/static/img/1.jpg'
  },
  watch: {
    '$route': function () {
      this.title = ''
      this.wordEdit = ''
      this.position = ''
      this.list = ''
    }
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
    .title{
      width: 600px;
      height: 32px;
      float: left;
      margin: 10px 0;
      border: 1px solid #a9a9a9;
      border-radius: 5px;
      text-indent: 10px;
      font-size: 16px;
    }
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
