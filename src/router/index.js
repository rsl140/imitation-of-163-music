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
      redirect: '/example/index'
    },
    {
      // 测试页
      path: '/example/index',
      component(resolve) {
        require(['../views/example/index.vue'], resolve);
      }
    },
  ]
})
