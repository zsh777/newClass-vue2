<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="top-title">
          <img class="top-img" :src="require('@/assets/image/logo.png')" /><span>百家课堂</span>
        </div>
        <div class="top-nav">
          <nav>
            <ul>
              <li>
                <a>课程统计</a>
                <ul>
                  <li>
                    <router-link to="/all">全部</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a>课程查询</a>
                <ul>
                  <li>
                    <router-link to="/search">按学科查询</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a>视频详情</a>
                <ul>
                  <li>
                    <router-link to="/classDetail">各学科详情</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div class="mySpace">
            <el-button @click="goMySpace()" type="info" icon="el-icon-s-custom" circle>me</el-button>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  mounted() {
    $(function () {
      var $li = $('nav>ul>li')
      // console.log("$li", $li)
      $li.mouseenter(function () {
        $(this).parent().children('li').children('ul').css('display', 'none')
        $(this).children('ul').css('display', 'block')
      })
      $li.mouseleave(function () {
        $(this).children('ul').css('display', 'none')
      })
      var $li2 = $('nav>ul>li>ul')
      $li2.mouseleave(function () {
        $(this).css('display', 'none')
      })
    })
  },
  methods: {
    // goNotice() {
    //   this.$router.push('/notice1')
    // },
    goMySpace() {
      this.$router.push('/myspace')
    }
  }
}
</script>
<style lang="less">
.el-header {
  background-color: #b3c0d1;
  text-align: center;
}
.el-main {
  background-color: #e9eef3;
  // text-align: center;
}
.top-img {
  margin-top: 10px;
  width: 36px;
  height: 34px;
  float: left;
}
.top-title span {
  text-align: center;
  float: left;
  margin-left: 10px;
  margin-top: 20px;
}
.top-nav{
  padding-left: 40%;
  align-items: center;
  justify-content: space-around;
}
nav{
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  position: relative;
  ul li {
    float: left;
    a{
      display: block;
      width: 100%;
      color: #ffffff;
      text-align: center;
      cursor: pointer;
    }
  }
}
nav > ul > li {
  width: 100px;
}
nav > ul > li:hover > a {
  color: #fff53b;
}

nav ul li ul {
  padding: 0;
  display: none;
  width: 120px;
  position: relative;
  top: -2px;
  left: -18px;
  overflow: hidden;
  z-index: 9999999;
  background-color: RGB(123, 104, 238);
  border: 1px solid #66a7ff;
  li{
    float: left;
    border-bottom: 1px solid #66a7ff;
    width: 134px;
    height: 36px;
    line-height: 36px;
    margin-top: 1px;
  }
}
nav ul li ul li:last-child {
  border: none;
}

nav > ul > li > ul > li:hover a {
  background-color: #66a7ff;
  width: 134px;
  color: #ffffff;
}
.notice{
  position: absolute;
  right: 120px;
  top: 12px;
  z-index: 0;
  color: #fff;
}
.mySpace{
  position: absolute;
  right: 20px;
  top: 12px;
  z-index: 0;
}

</style>
