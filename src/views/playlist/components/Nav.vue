<!--
 * @Author: rsl
 * @Date: 2019-08-01
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-08
 * @Description: 歌单页音乐列表导航
 -->
<template>
  <div class="nav-wrap">
    <div class="iconfont nav-pre">
      &#xe7ec;
    </div>
    <div class="nav-title">
      歌单
    </div>
    <div class="nav-bar">
      <div class="nav-line"></div>
      <div class="nav-line"></div>
      <div class="nav-line"></div>
      <div class="nav-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistNav',
  components: {},
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.nav {
  &-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .1rem .4rem;
    height: .7rem;
  }
  &-pre {
    display: flex;
    align-items: center;
    color: #fff;
  }
  &-title {
    flex: 1;
    color: #fff;
    text-align: center;
  }
  &-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: .5rem;
    height: .3rem;

  }

  &-line {
    height: .15rem;
    width: .02rem;
    background-color: #fff;
    transition: all .5s ease;
    &:nth-of-type(2n+0) {
      height: .3rem;
    }
  }
}
.active .nav-line {
  animation: line .5s infinite .3s;
  &:nth-of-type(3) {
    animation: line .5s infinite .4s;
  }
  &:nth-of-type(2) {
    animation: line .5s infinite;
  }
  &:nth-of-type(1) {
    animation: none;
  }
}
@keyframes line
{
  0% {
    height: .3rem;
  }
  50% {
    height: .1rem;
  }
  100% {
    height: .27rem;
  }
}
</style>

