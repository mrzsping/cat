<template>
 <div class="head-top">
   <img src="@/assets/images/1.jpg" class="" alt="" width="40px" height="40px">
   <div class="title ">
     <h4>公益猫</h4>
     <p>每一只猫咪都值得被爱</p>
   </div>
   <ul class="link">
     <li v-for="(item, index) in linkData" :key="index" :class="{active: currentIndex === index}" @click="changePage(index)">
       <router-link :to="item.link">{{item.name}}</router-link>
     </li>
   </ul>
   <div class="fr">
     <router-link to="/login" class="mr15">
        <button>登陆</button>
     </router-link>
     <router-link to="/signup">
        <button>注册</button>
      </router-link>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      linkData: [
        { link: '/page/index', name: '首页' },
        { link: '/page/community/list', name: '社区' },
        { link: '/page/diary/diaryList', name: '日记' },
        { link: '/page/publish/me-and-cat', name: '发布' },
        { link: '/page/mine/person', name: '我的' }
      ],
      currentIndex: 0
    }
  },
  components: {
  },
  methods: {
    changePage (index) {
      this.currentIndex = index
    }
  },
  mounted () {
    console.log(this.$route.path.split('/').reverse()[0])
    this.linkData.forEach((i, n) => {
      if (i.link === this.$route.path) {
        this.currentIndex = n
      }
    })
  }
}
</script>

<style lang='scss'>
.head-top{
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -600px;
  @include box(1200px, 40px, 40px);
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  img{
    border-radius: 50%;
    vertical-align: middle;
  }
  .title{
    display: inline-block;
    vertical-align: middle;
    h4{
      line-height: 1;
       @include fs(18px, 0, font_HY, 400, $btnBg);
    }
    p{
      line-height: 1;
      @include fs(12px, 0, font_HY, 400, $btnBg);
    }
  }
  .link{
    display: inline-block;
    vertical-align: middle;
    margin-left: 100px;
    li{
      float: left;
      a{
        padding: 11px;
        color: $c3;
      }
    }
    .active{
      background: $btnBg;
      a{
        color: #ffffff;
      }
    }
  }
  .fr{
    button{
      @include btn(60px, 30px, 14px, 10px);
    }
  }
}
</style>
