<template>
  <div id="app">
    <!-- 导航头部 -->
    <div class="nav_header">
      <ul>
        <li>
          <a href="#"><span class="iconfont icon-xiazai44"></span>首页</a>
        </li>
        <li>
          <a href="#"
            ><span class="iconfont icon-wodegongzuotai"></span>实验室</a
          >
        </li>
        <li>
          <a href="#"><span class="iconfont icon-shoucang2"></span>收录</a>
          <div>
            <a href="#">API</a>
            <a href="#">不知道</a>
          </div>
        </li>
        <li>
          <a href="#"><span class="iconfont icon-xiangmu2"></span>个人创作</a>
        </li>

        <li>
          <a href="#"
            ><span class="iconfont icon-yinlechangpian"></span>音乐盒</a
          >
        </li>
        <li>
          <a href="#"><span class="iconfont icon-guanyu"></span>关于</a>
        </li>
      </ul>
    </div>

    <!-- 根据点击跳转 -->
    <router-view></router-view>
  </div>
</template>

<script>
import "../src/assets/font/iconfont.css";
export default {};
</script>

<style scoped>
.nav_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(66, 66, 66, 0.3);
}

.nav_header ul {
  display: flex;
  justify-content: center;
}

/* 导航列表 */
.nav_header ul li {
  margin: 0 5px;
  font-size: 20px;
  line-height: 50px;
  cursor: pointer;
}

.nav_header ul li a:first-child {
  padding: 0 20px;
  height: 50px;
  display: block;
  box-sizing: border-box;
}

.nav_header ul li a {
  transition: all linear 0.2s;
}

/* 导航列表触发样式 */
.nav_header ul li a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: #17d3c2;
}

.nav_header ul li:hover div {
  display: block;
}

/* 导航图标字体 */
.nav_header ul li span {
  font-size: 20px;
  margin-right: 10px;
}

/* nav_list */
.nav_header ul li div {
  display: none;
  width: 125%;
  background-color: rgba(66, 66, 66, 0.3);
}
.nav_header ul li div a {
  padding-left: 20px;
  display: block;
}
</style>
