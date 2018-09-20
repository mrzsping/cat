<template>
 <div class="head-top">
    <img src="@/assets/images/1.jpg" class="" alt="" width="40px" height="40px">
    <div class="title ">
      <h4>公益猫</h4>
      <p>每一只猫咪都值得被爱</p>
    </div>
    <ul class="link">
      <li v-for="(item, index) in linkData" :key="index" :class="{active: currentIndex === index}" @click="changePage(index)" v-if="item.show > showNum">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
    <div class="fr" v-if="!user">
      <router-link to="/login" class="mr15">
        <button>登陆</button>
      </router-link>
      <router-link to="/signup">
        <button>注册</button>
      </router-link>
    </div>
    <div class="fr user" v-else>
      <span class="user_set">
        <img src="@/assets/images/1.jpg" width="40px" height="40px" class="br" alt="">
        <span class="name">{{user}}</span>
        <ul>
          <li><router-link to="/page/mine/person">个人中心</router-link></li>
          <li><span @click="exit">退出</span></li>
        </ul>
      </span>
      <router-link to="/page/mine/notice" class="envelop">
        <span class="num">{{msgNum}}</span><i class="iconfont icon-XinFeng"></i>
      </router-link>
    </div>
 </div>
</template>

<script>
import { getStore, setStore } from '@/methods'
export default {
  data () {
    return {
      linkData: [
        {link: '/page/index', name: '首页', show: 2},
        {link: '/page/community/list', name: '社区', show: 2},
        {link: '/page/diary/diaryList', name: '日记', show: 1},
        {link: '/page/publish/me-and-cat', name: '发布', show: 1},
        {link: '/page/mine/person', name: '我的', show: 1}
      ],
      currentIndex: 0,
      hasUser: false,
      user: '',
      msgNum: 12,
      showNum: 0
    }
  },
  components: {
  },
  methods: {
    changePage (index) {
      this.currentIndex = index
    },
    exit () {
      setStore('')
      this.$router.push('/login')
    }
  },
  mounted () {
    this.linkData.forEach((i, n) => {
      if (i.link === this.$route.path) {
        this.currentIndex = n
      }
    })
    this.user = getStore('user')
    if (!this.user) {
      this.showNum = 1
    }
  },
  computed: {
    // person: function (index) {
    //   return this.linkData.map((item, index) => {
    //     if (index > 2) {
    //       item.link = item.link + this.user
    //     }
    //   })
    // }
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
  .user{
    .user_set{
      position: relative;
      float: left;
      margin-right: 20px;
      cursor: pointer;
      .name{
        color: #fc8d59
      }
      &:hover{
        ul{
          display: block;
        }
      }
      >ul{
        display: none;
        position: absolute;
        background: #f6f6f6;
        li{
          padding: 0 10px;
          cursor: pointer;
          &:hover{
            a,span{
                color: #fc8d59;
            }
          }
        }
      }
    }
    .envelop{
      position: relative;
      color: #666;
      .num{
        position: absolute;
        top: -10px;
        left: -12px;
        width: 20px;
        height: 16px;
        line-height: 16px;
        background: #f00;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>
