import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // 兼容
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      // 重定向首页
      path: '/',
      redirect: '/login'
    },
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component(resolve) {
        require(['../views//login/index.vue'], resolve);
      }
    },
    {
      // 歌单页
      path: '/play/index',
      name: 'Play',
      component(resolve) {
        require(['../views/play/index.vue'], resolve);
      }
    },
    {
      // 播放器页面
      path: '/playlist/index',
      name: 'Playlist',
      component(resolve) {
        require(['../views/playlist/index.vue'], resolve);
      }
    }
  ]
})
